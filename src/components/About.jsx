import React from "react";
import { motion } from "framer-motion";
import { aboutPageDescription } from "../data/data";

const stats = [];

const About = () => {
  return (
    <div
      name="About"
      className="w-full min-h-screen bg-surface flex flex-col justify-center py-24 relative"
    >
      <div className="max-w-[1100px] mx-auto w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent font-mono text-sm">01.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
              About Me
            </h2>
            <div className="hidden sm:block flex-1 h-[1px] bg-white/5 ml-6" />
          </div>

          <div className="max-w-3xl mt-12 space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              {aboutPageDescription}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              I thrive at the intersection of{" "}
              <span className="text-accent-light font-medium">AI</span> and{" "}
              <span className="text-cyan font-medium">full-stack engineering</span>
              , building products that are not just functional but genuinely
              intelligent and delightful to use.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
