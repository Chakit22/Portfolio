export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages = [] } = req.body ?? {};
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const model = process.env.ANTHROPIC_MODEL || "claude-3-5-haiku-latest";

  if (!apiKey) {
    return res.status(500).json({
      error: "Server configuration error: Missing Anthropic API key",
    });
  }

  const systemMessage = messages.find((message) => message.role === "system");
  const conversationMessages = messages
    .filter((message) => message.role === "user" || message.role === "assistant")
    .map((message) => ({
      role: message.role,
      content: message.content,
    }));

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model,
        max_tokens: 600,
        system: systemMessage?.content,
        messages: conversationMessages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to fetch from Anthropic");
    }

    const text = data.content
      ?.filter((part) => part.type === "text")
      .map((part) => part.text)
      .join("\n")
      .trim();

    return res.status(200).json({
      choices: [
        {
          message: {
            content: text || "I could not generate a response.",
          },
        },
      ],
    });
  } catch (error) {
    console.error("Anthropic API Error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
}
