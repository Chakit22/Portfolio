export const config = {
  developer: {
    name: "Chakit",
    fullName: "Chakit Bhandari",
    initials: "CB",
    title: "AI Engineer and Full-Stack Engineer",
    description:
      "AI Engineer and Full-Stack Engineer building production AI systems across voice agents, automation, fintech pricing infrastructure, and serverless platforms.",
  },
  social: {
    github: "Chakit22",
    email: "chakitbhandari22@gmail.com",
    location: "Melbourne, Australia",
  },
  about: {
    title: "About Me",
    description:
      "I am an AI Engineer and Full-Stack Engineer based in Melbourne, working across TypeScript, Python, AWS, React, Next.js, Node.js, Flutter, LangGraph, vector databases, SIP/telephony workflows, and automation tooling. Recent work includes AI voice-agent deployment systems, automated agent provisioning, fintech crypto pricing infrastructure across 20+ digital assets, and PDF/image-processing workloads optimized by 96%. I completed a Master of Information Technology at RMIT University and hold a Bachelor of Engineering from KLE Technological University.",
  },
  experiences: [
    {
      position: "AI Engineer",
      company: "heya AI",
      period: "September 2025 - April 2026",
      location: "Melbourne, VIC",
      description:
        "Built AI voice agents and deployment tooling, including agent configuration workflows, internal dashboards, and operational systems, improving team productivity and reducing manual handling by 80%.",
      responsibilities: [
        "Configured SIP trunking and telephony setup for AI voice-agent deployments, including phone number provisioning, call-routing workflows, and voice infrastructure coordination",
        "Automated end-to-end agent provisioning by scraping client websites, preparing agent knowledge and configuration, and connecting deployment workflows",
        "Reduced manual setup time by 70% through provisioning pipelines and internal tooling",
      ],
      technologies: ["AI Agents", "Voice AI", "SIP", "Telephony", "Automation"],
    },
    {
      position: "Software Engineer",
      company: "Digital Asset Custody Solutions Pty Ltd.",
      period: "July 2025 - October 2025",
      location: "Melbourne, VIC",
      description:
        "Designed a fintech crypto pricing engine on AWS for 20+ digital assets.",
      responsibilities: [
        "Integrated 5+ market data providers via API calls for reliable, low-latency pricing",
        "Built serverless pipelines with AWS Lambda and RDS",
        "Cut infrastructure costs by 45%",
      ],
      technologies: ["AWS", "Lambda", "RDS", "SQL", "Market Data APIs"],
    },
    {
      position: "Full Stack AI Engineer",
      company: "FilmNeverDie",
      period: "March 2024 - August 2025",
      location: "Melbourne, VIC",
      description:
        "Developed a Flutter mobile app and AWS-backed media platform that replaced Dropbox workflows and gave customers faster access to digital images.",
      responsibilities: [
        "Built customer image features for downloads, favorites, prints, and collections",
        "Designed AWS infrastructure with DynamoDB, S3, EC2 image processing, and CloudFront delivery for 5MB-50MB image files",
        "Replaced Synology CloudSync with rsync-based transfers to EC2, automated S3 syncing after processing, and updated DynamoDB records by customer order",
        "Built customer gallery websites in Next.js and integrated Shopify OAuth for seamless redirection on the same domain",
      ],
      technologies: ["Flutter", "Next.js", "AWS", "DynamoDB", "S3", "CloudFront"],
    },
    {
      position: "Software Developer",
      company: "Fresh Prints",
      period: "January 2023 - February 2024",
      location: "Remote",
      description:
        "Built Customer Portal features and PDF image parsing services for internal processing workflows.",
      responsibilities: [
        "Designed and implemented an Express API in TypeScript to parse required images from PDF files, reducing processing costs by 96%",
        "Containerized image parsing services with Docker, removing OS-level dependency issues across development environments",
        "Developed Customer Portal features that enabled clients to place direct orders and improved the ordering workflow",
        "Implemented product feedback features, worked across Agile sprints in Jira, practiced TDD, and participated in regular pull request reviews",
      ],
      technologies: ["TypeScript", "Express", "Docker", "PDF Processing", "Customer Portal"],
    },
    {
      position: "Open Source Developer Intern",
      company: "TUBLIAN",
      period: "December 2023 - January 2024",
      location: "Remote",
      description:
        "Contributed to open-source projects, including timezone support for global contest timing views.",
      responsibilities: [
        "Participated in weekly check-in calls and contributed to open-source project delivery",
        "Built timezone support in JavaScript so users could view contest timings in their local timezone",
        "Linked contest timing views to timeanddate.com and resolved project bugs",
      ],
      technologies: ["JavaScript", "Open Source", "Bug Fixes"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "Atlas",
      category: "AI Assistant",
      technologies: "LiveKit, TypeScript, Python, Node.js, React, Realtime AI",
      image: "/assets/atlas.png",
      github: "https://github.com/Chakit22/personal-assistant",
      description:
        "A personal assistant built on top of LiveKit, designed for realtime voice interaction, tool use, and practical day-to-day automation.",
    },
    {
      id: 2,
      title: "Medico-Legal RAG System",
      category: "AI / RAG",
      technologies: "LangGraph, LangChain, FastAPI, Python, RAG",
      image: "/assets/medico-legal-rag.png",
      github: "https://github.com/Chakit22/medico-legal-rag",
      description:
        "RAG pipeline for medico-legal reports using LangGraph and FastAPI, with a query router selecting between retrieval strategies to reduce irrelevant data retrieval.",
    },
    {
      id: 3,
      title: "StaffIQ",
      category: "Full Stack / AI",
      technologies: "Next.js, GraphQL, Express, Gemini AI, TypeORM, MySQL",
      image: "/assets/staffiq.png",
      demo: "https://teach-team.vercel.app",
      github: "https://github.com/Chakit22/StaffIQ",
      description:
        "Tutor assignment platform for RMIT with role-based auth, JWT, Gemini AI candidate ranking, candidate insights, and GraphQL admin reporting dashboards.",
    },
  ],
  currentlyBuilding: {
    title: "Atlas",
    eyebrow: "Currently building",
    description:
      "A personal AI assistant on top of LiveKit for realtime voice conversations, contextual tool calling, and everyday workflow automation.",
    technologies: ["LiveKit", "Realtime Voice", "TypeScript", "Python", "Node.js", "AI Agents"],
  },
  contact: {
    email: "chakitbhandari22@gmail.com",
    github: "https://github.com/Chakit22",
    linkedin: "https://www.linkedin.com/in/chakit-bhandari",
    leetcode: "https://leetcode.com/Chakit_Bhandari",
    twitter: "https://x.com/Chakit22",
  },
  skills: {
    develop: {
      title: "LANGUAGES",
      description: "Core programming languages I use",
      details:
        "Working across backend, AI, automation, and frontend code with a focused production language set.",
      tools: ["TypeScript", "Python", "JavaScript", "C", "C++"],
    },
    design: {
      title: "AI + CLOUD STACK",
      description: "Tools and platforms I build production systems with",
      details:
        "Building voice agents, RAG systems, serverless backends, data pipelines, and full-stack products.",
      tools: ["React", "Next.js", "Node.js", "AWS", "Lambda", "RDS", "DynamoDB", "S3", "CloudFront", "LangGraph", "RAG", "Vector DBs", "SIP", "Docker"],
    },
  },
};
