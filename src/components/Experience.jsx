import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI Engineer",
    company: "Heya Voice AI",
    period: "Aug 2025 - Present",
    location: "Melbourne, VIC",
    highlights: [
      "Implemented AI voice agents enabling 24/7 automated customer interactions, reducing manual handling by 80%.",
      "Built internal tools, dashboards, and onboarding flows to streamline operations and improve team productivity.",
      "Developed and maintained complex n8n workflows, enabling end-to-end automation.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Digital Asset Custody Solutions Pty Ltd.",
    period: "Jul 2025 - Oct 2025",
    location: "Melbourne, VIC",
    highlights: [
      "Designed and built the end-to-end architecture for a crypto pricing engine on AWS, supporting real-time pricing for 20+ digital assets.",
      "Integrated 5+ external market data providers to deliver reliable, low-latency pricing data with 99.9% availability.",
      "Developed serverless pipelines using API Gateway, AWS Lambda, and RDS, reducing infrastructure overhead by 45%.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Film Never Die",
    period: "Aug 2024 - Feb 2025",
    location: "Melbourne, VIC",
    highlights: [
      "Worked on a groundbreaking SaaS product helping clients save up to $30,000 annually.",
      "Developed a Mobile app using Flutter for fast, user-friendly image access, replacing Dropbox.",
      "Hosted images ranging from 5MB to 50MB on CloudFront CDN for faster access and efficient delivery.",
    ],
  },
  {
    title: "Software Developer",
    company: "Fresh Prints",
    period: "Jun 2023 – Aug 2023",
    location: "Remote",
    highlights: [
      "Developed Customer Portal features enabling direct client ordering.",
      "Built a PDF image extraction API and migrated it to a serverless AWS Lambda architecture, reducing costs by 96%.",
      "Containerized services using Docker to improve scalability and reduce OS dependencies.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      name="Experience"
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
            <span className="text-accent font-mono text-sm">03.</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
              Experience
            </h2>
            <div className="hidden sm:block flex-1 h-[1px] bg-white/5 ml-6" />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 h-full w-[2px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex flex-col md:flex-row mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full glow-dot z-10 mt-1" />

              {/* Card */}
              <div
                className={`ml-8 md:ml-0 md:w-[calc(50%-32px)] ${
                  index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
                }`}
              >
                <div className="glass-card rounded-2xl p-6">
                  {/* Period badge */}
                  <span className="inline-block text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                    {exp.period}
                  </span>

                  <h3 className="text-xl text-white font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-accent-light font-medium text-sm mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 text-xs mb-4">{exp.location}</p>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start text-sm text-gray-400 leading-relaxed"
                      >
                        <span className="text-accent mr-3 mt-1.5 flex-shrink-0">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                            <rect width="6" height="6" rx="1" />
                          </svg>
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
