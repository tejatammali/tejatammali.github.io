"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    node: "prod",
    title: "Pricing Reference Data Associate, Automation Engineering",
    company: "Morgan Stanley",
    location: "Baltimore, MD",
    date: "October 2022 – Present",
    summary: [
      "Own automation delivery end to end for a global pricing reference data platform — gathering requirements, building Python and Alteryx pipelines, and driving them through UAT, rollout, and user enablement. The work is fundamentally toil reduction: replacing recurring manual processing with self-healing workflows that validate, normalize, and reconcile data across hundreds of thousands of products, and recover from bad inputs on their own instead of paging a human.",
      "Partner with development teams to define what “good” looks like before code ships — translating service expectations into SLI/SLO language, business requirements, user stories, acceptance criteria, and Signavio process flows tracked in Jira, then leading backlog refinement and UAT cycles through production deployment. Supported the platform’s on-prem to cloud migration, leading price validation between the legacy and cloud systems and reporting data quality and cutover readiness to stakeholders.",
      "Lead the operations side of the global incident response rotation, partnering with reliability engineering to establish blast radius, drive resolution, and close the loop afterward — authoring runbooks adopted by both technical and non-technical teams so the next occurrence is a known, documented path rather than a fresh investigation.",
    ],
    tags: ["Python", "Alteryx", "SQL", "Jira", "SLI/SLO", "Incident Response", "Runbooks", "Cloud Migration"],
  },
  {
    node: "volunteer",
    title: "Web Analytics Volunteer",
    company: "U.S. Department of Veterans Affairs",
    location: "Remote",
    date: "May 2022 – January 2023",
    summary: [
      "Conducted web analytics audits to map user journeys and resolve friction points, documenting remediation strategies for non-technical stakeholders into reusable reference materials.",
    ],
    tags: ["Web Analytics", "User Journey Mapping", "Documentation"],
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
      className="min-h-screen bg-white dark:bg-[#0f1117] flex flex-col items-center py-20 px-8 transition-colors duration-300"
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
            className={`relative mb-10 pb-10 pl-6 border-l-[3px] border-l-[#e5e5e5] dark:border-l-[#2a2d3a] hover:border-l-[#d3cbf5] transition-colors duration-300 ${
              i < EXPERIENCES.length - 1 ? "border-b border-b-[#e5e5e5] dark:border-b-[#2a2d3a]" : ""
            }`}
          >
            {/* Pipeline node on the rail */}
            <span className="absolute -left-[7px] top-1.5 h-[11px] w-[11px] rounded-full bg-accent ring-4 ring-white dark:ring-[#0f1117]" />

            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[2px] text-muted">
                  {exp.node}
                </span>
                <h2
                  className="font-bold text-heading m-0 mb-1 mt-1"
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

            <div className="mt-4 flex flex-col gap-3">
              {exp.summary.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-body m-0"
                  style={{ fontSize: "94%", lineHeight: 1.75 }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-[#F0F0F0] dark:bg-[#252d42] text-body text-[12px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
