import React from "react";
import { motion } from "framer-motion";

const CurrentlyBuilding = () => {
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
            <span className="text-accent font-mono text-sm">06.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
              What I'm Building Now
            </h2>
            <div className="hidden sm:block flex-1 h-[1px] bg-white/5 ml-6" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Status badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>
              <span className="text-green-400 text-xs font-mono uppercase tracking-widest">
                Currently in progress
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl text-white font-bold mb-3">
              Atlas — AI Travel Companion
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-6">
              A multi-agent AI travel companion powered by LangGraph and Gemini 2.5 Flash.
              Not just a planner — Atlas understands your preferences, adapts in real-time, and
              makes every trip feel personal. Integrates live data from SerpApi, OpenWeatherMap,
              and AviationStack, with session persistence and guardrails.
            </p>

            {/* Tech being used */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["LangGraph", "Gemini 2.5 Flash", "TypeScript", "SerpApi", "OpenWeatherMap", "AviationStack"].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-mono text-accent bg-accent/10 border border-accent/20"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Learning focus */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-cyan text-lg mt-0.5">→</span>
              <div>
                <p className="text-gray-300 text-sm font-medium mb-1">
                  Currently deep-diving into
                </p>
                <p className="text-gray-500 text-sm">
                  Retrieval-Augmented Generation (RAG) pipelines and multi-agent orchestration
                  with LangGraph to build intelligent, context-aware AI systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CurrentlyBuilding;
