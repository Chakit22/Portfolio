import React from "react";
import { motion } from "framer-motion";
import { achievements, education } from "../data/data";
import { FaTrophy, FaGraduationCap, FaMedal, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const achievementMeta = [
  { icon: FaTrophy, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: FaMedal, color: "text-orange-400", bg: "bg-orange-400/10" },
  { icon: FaCode, color: "text-cyan", bg: "bg-cyan/10" },
  { icon: SiLeetcode, color: "text-[#FFA116]", bg: "bg-[#FFA116]/10" },
];

const Achievements = () => {
  return (
    <div
      name="Achievements"
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
            <span className="text-accent font-mono text-sm">04.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
              Education & Achievements
            </h2>
            <div className="hidden sm:block flex-1 h-[1px] bg-white/5 ml-6" />
          </div>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:row-span-2 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent/10 p-3 rounded-xl">
                <FaGraduationCap className="text-accent text-2xl" />
              </div>
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                Education
              </span>
            </div>

            <h3 className="text-2xl text-white font-bold mb-2">
              {education.degree}
            </h3>
            <p className="text-accent-light font-medium mb-1">
              {education.institution}
            </p>
            <span className="text-sm font-mono text-gray-500">
              {education.period}
            </span>
          </motion.div>

          {/* Achievement Cards */}
          {achievements.map((achievement, index) => {
            const meta = achievementMeta[index] || achievementMeta[0];
            const Icon = meta.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 flex items-start gap-4 group"
              >
                <div className={`${meta.bg} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`${meta.color} text-lg`} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
