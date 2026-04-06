import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { LINKEDIN_URL, GITHUB_URL } from "../data/data";

const NAVBAR_ITEMS = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Achievements",
  "Projects",
];

const NavBar = () => {
  const [ham, setHam] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleHam = () => setHam(!ham);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full h-[72px] flex justify-between items-center px-6 md:px-12 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="Home" smooth={true} duration={500} className="cursor-pointer">
        <span className="text-xl font-bold gradient-text tracking-tight">
          CB
        </span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-1">
        {NAVBAR_ITEMS.map((item, index) => (
          <Link key={index} to={item} smooth={true} duration={200} offset={-72}>
            <li className="text-sm text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 font-medium tracking-wide">
              {item}
            </li>
          </Link>
        ))}
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="ml-4 text-sm px-4 py-2 rounded-lg border border-accent/30 text-accent-light hover:bg-accent/10 hover:border-accent transition-all duration-300 font-medium"
        >
          GitHub
        </a>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleHam}
        className="z-50 md:hidden text-gray-300 hover:text-white cursor-pointer transition-colors"
      >
        {!ham ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-surface/95 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
          ham ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-2">
          {NAVBAR_ITEMS.map((item, index) => (
            <Link
              key={index}
              to={item}
              smooth={true}
              duration={500}
              offset={-72}
              onClick={handleHam}
            >
              <li className="text-2xl font-light text-gray-300 hover:text-white py-3 px-8 rounded-xl hover:bg-white/5 transition-all duration-300">
                {item}
              </li>
            </Link>
          ))}
          <div className="flex gap-4 mt-8">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-6 py-3 rounded-lg border border-accent/30 text-accent-light hover:bg-accent/10 transition-all"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-6 py-3 rounded-lg bg-accent text-white hover:bg-accent-light transition-all"
            >
              LinkedIn
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
