import React from "react";
import { EMAIL_ID } from "../data/data";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-start items-center p-4 pt-[80px] flex justify-center"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
          Contact
        </p>
        <p className="text-gray-300 py-4">
          // Shoot me an email at{" "}
          <a href={`mailto:${EMAIL_ID}`} className="text-pink-600 underline">
            {EMAIL_ID}
          </a>{" "}
          and let's collaborate
        </p>
      </div>
    </div>
  );
};

export default Contact;
