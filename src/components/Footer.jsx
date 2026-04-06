import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { LINKEDIN_URL, GITHUB_URL, LEETCODE_URL, EMAIL_ID } from "../data/data";

const Footer = () => {
  return (
    <footer className="w-full bg-surface border-t border-white/5 py-16">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* CTA */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Let's build something{" "}
            <span className="gradient-text">amazing</span> together
          </h3>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <p className="text-accent-light text-lg font-mono">
            chakitbhandari22@gmail.com
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-[#0077b5] transition-colors duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={LEETCODE_URL}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-[#FFA116] transition-colors duration-300"
            >
              <SiLeetcode size={16} />
            </a>
          </div>
          <p className="text-gray-700 text-xs font-mono">
            Built by Chakit Bhandari
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
