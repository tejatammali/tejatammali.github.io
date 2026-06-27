"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    title: "Pricing Reference Data Associate \u2013 Operations Team",
    company: "Morgan Stanley",
    location: "Baltimore, MD",
    date: "October 2022 \u2013 Present",
    bullets: [
      "Eliminated 8 hours of daily toil by engineering a self-healing Alteryx/Python automation pipeline for 50k+ products; reducing manual intervention by 99.9% and driving team-wide adoption.",
      "Built a data normalization engine for 500k products achieving a 23% accuracy gain, reducing downstream data errors; leveraged impact analysis to drive senior leadership toward modernized backend architecture.",
      "Served as incident commander for a global operations team, owning triage and cross-team coordination for 12+ high-priority production incidents monthly; bridged engineering and external vendors to reduce escalation lag.",
      "Established incident response procedures for mission-critical pricing failures; authored a runbook library adopted across technical and non-technical teams, standardizing response and reducing MTTR.",
    ],
  },
  {
    title: "Web Analyst Volunteer",
    company: "U.S. Department of Veterans Affairs",
    location: "Remote",
    date: "May 2022 \u2013 January 2023",
    bullets: [
      "Surfaced project health data for cross-functional leadership by building Python and SQL reporting pipelines, delivering high-fidelity visibility into operational metrics.",
      "Conducted web analytics audits to map user journeys, identifying and resolving friction points to streamline data discovery for internal teams.",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-white flex flex-col items-center py-20 px-8"
    >
      <div className="flex flex-col items-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[175%] font-light tracking-[2px] text-heading"
        >
          EXPERIENCE
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="mt-3 h-[3px] w-16 bg-accent origin-left"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="w-full max-w-[860px]"
      >
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.title}
            variants={itemVariants}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
            className={`mb-10 pb-10 pl-6 border-l-[3px] border-l-[#e5e5e5] hover:border-l-[#d3cbf5] transition-colors duration-300 ${
              i < EXPERIENCES.length - 1 ? "border-b border-b-[#e5e5e5]" : ""
            }`}
          >
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <div>
                <h2
                  className="font-bold text-heading m-0 mb-1"
                  style={{ fontSize: 18 }}
                >
                  {exp.title}
                </h2>
                <h3
                  className="font-normal text-body m-0"
                  style={{ fontSize: 14 }}
                >
                  {exp.company}
                  {exp.location && (
                    <span className="text-muted ml-2" style={{ fontSize: 13 }}>· {exp.location}</span>
                  )}
                </h3>
              </div>
              <span className="text-muted italic whitespace-nowrap mt-1" style={{ fontSize: 13 }}>
                {exp.date}
              </span>
            </div>
            <ul
              className="mt-3 pl-5 list-disc"
              style={{ fontSize: "95%", lineHeight: 1.75 }}
            >
              {exp.bullets.map((bullet) => (
                <li key={bullet} className="text-body my-2">
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
