import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../data/data";

const additionalSkills = [
  "TypeScript",
  "Python",
  "AWS",
  "Docker",
  "n8n",
  "LLMs",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "REST APIs",
  "GraphQL",
  "CI/CD",
];

const Skills = () => {
  return (
    <div
      name="Skills"
      className="w-full bg-surface py-24 relative"
    >
      <div className="max-w-[1100px] mx-auto p-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent font-mono text-sm">02.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
              Tech Stack
            </h2>
            <div className="hidden sm:block flex-1 h-[1px] bg-white/5 ml-6" />
          </div>

          <p className="text-gray-500 mt-8 mb-12 font-mono text-sm">
            Technologies I work with daily
          </p>

          {/* Primary skills with icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-5 flex items-center gap-4 group"
              >
                <img
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  src={tech.image}
                  alt={`${tech.name} icon`}
                />
                <span className="text-gray-300 font-medium text-sm">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Additional skills as pills */}
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.01 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 border border-white/5 hover:border-accent/30 hover:text-accent-light hover:bg-accent/5 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
