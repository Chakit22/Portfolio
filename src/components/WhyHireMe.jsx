import React from "react";
import { motion } from "framer-motion";
import { FiZap, FiLayers, FiTrendingUp, FiCpu } from "react-icons/fi";

const reasons = [
  {
    icon: FiCpu,
    title: "AI + Engineering",
    description:
      "I don't just use AI — I build with it. From voice agents to RAG pipelines, I bring hands-on AI experience that most full-stack developers simply don't have.",
  },
  {
    icon: FiZap,
    title: "Ship Fast, Ship Right",
    description:
      "I've cut costs by 96%, reduced errors by 60%, and built products saving clients $30K/year. I care about real outcomes, not just writing code.",
  },
  {
    icon: FiLayers,
    title: "Full Stack, Full Ownership",
    description:
      "Frontend to backend, Flutter to AWS Lambda, CLI tools to CDN pipelines — I take ownership of the entire stack and deliver end to end.",
  },
  {
    icon: FiTrendingUp,
    title: "Relentless Problem Solver",
    description:
      "1000+ coding problems solved and Knight on LeetCode. I don't stop until it's solved.",
  },
];

const WhyHireMe = () => {
  return (
    <div className="w-full bg-surface py-24 relative">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent font-mono text-sm">07.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
              Why Hire Me
            </h2>
            <div className="hidden sm:block flex-1 h-[1px] bg-white/5 ml-6" />
          </div>

          <p className="text-gray-500 mt-8 mb-12 max-w-xl text-lg font-light">
            Here's what I bring to the table that makes me different.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-7 group"
              >
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-accent text-xl" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
