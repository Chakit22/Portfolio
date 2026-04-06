import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  homePageName,
  homePageDescription,
  LINKEDIN_URL,
  GITHUB_URL,
  LEETCODE_URL,
} from "../data/data";

const roles = [
  "AI Full Stack Developer",
  "Voice AI Engineer",
  "Cloud Architect",
  "Problem Solver",
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div
      name="Home"
      className="w-full min-h-screen bg-surface flex flex-col justify-center relative overflow-hidden"
    >
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto h-full flex flex-col justify-center px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Tag line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-accent" />
            <span className="text-accent font-mono text-sm tracking-wider">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1]">
            {homePageName.split(" ")[0]}
            <br />
            <span className="gradient-text">{homePageName.split(" ")[1]}</span>
          </h1>

          {/* Typing role */}
          <div className="mt-4 mb-6 h-12 flex items-center">
            <span className="text-xl sm:text-2xl text-gray-400 font-light">
              {displayText}
            </span>
            <span className="text-accent ml-1 animate-pulse text-2xl">|</span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-[600px] leading-relaxed font-light">
            {homePageDescription}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link to="Projects" smooth={true} duration={200}>
              <button
                type="button"
                className="group flex items-center gap-3 bg-accent hover:bg-accent-light text-white px-7 py-3.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                View Projects
                <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-12">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-[#0077b5] transition-colors duration-300"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={LEETCODE_URL}
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-[#FFA116] transition-colors duration-300"
            >
              <SiLeetcode size={20} />
            </a>
            <div className="w-12 h-[1px] bg-gray-700 ml-2" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link to="About" smooth={true} duration={200}>
          <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <span className="text-xs text-gray-600 tracking-widest uppercase group-hover:text-gray-400 transition-colors">
              Scroll
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-gray-600 to-transparent group-hover:from-accent transition-colors" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
