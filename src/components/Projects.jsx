import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../utils/projects";

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div
      name="Projects"
      className="w-full bg-surface py-24 relative"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent font-mono text-sm">05.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
              Projects
            </h2>
            <div className="hidden sm:block flex-1 h-[1px] bg-white/5 ml-6" />
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featured.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 glass-card rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface/80 to-transparent md:hidden" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <span className="text-accent font-mono text-xs uppercase tracking-widest mb-3">
                  Featured Project
                </span>
                <h3 className="text-2xl sm:text-3xl text-white font-bold mb-4">
                  {project.name}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors duration-300"
                  >
                    <FiGithub size={18} />
                    <span>Source</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan transition-colors duration-300"
                    >
                      <FiExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects Grid */}
        <div className="mt-16">
          <h3 className="text-xl text-gray-400 font-medium mb-8">
            Other Projects
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {others.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                {/* Project image */}
                {project.image && (
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-light to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-semibold group-hover:text-accent-light transition-colors duration-300">
                      {project.name}
                    </h4>
                    <div className="flex items-center gap-3 flex-shrink-0 ml-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-white transition-colors duration-300"
                      >
                        <FiGithub size={16} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-500 hover:text-cyan transition-colors duration-300"
                        >
                          <FiExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  {project.description && (
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
