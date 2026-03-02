"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    title: "End of Day Pricing Associate \u2013 ISG Operations",
    company: "Morgan Stanley",
    date: "October 2022 \u2013 Present",
    bullets: [
      "Engineered an automated data processing pipeline using Python and Alteryx, reducing a daily 8-hour manual workflow to 30 seconds for over 30,000 financial products.",
      'Developed a \u201cwhat-if\u201d simulation tool to validate and compare candidate prices from multiple data sources, providing real-time feedback to governance teams and accelerating deployment of new pricing logic.',
      "Architected a data integrity monitoring system to reconcile internal records against real-time Bloomberg and Reuters feeds, proactively mitigating pricing risks and improving overall data accuracy.",
    ],
  },
  {
    title: "Web Analyst Volunteer",
    company: "U.S. Department of Veterans Affairs",
    date: "May 2022 \u2013 January 2023",
    bullets: [
      "Drove a 13% increase in blog post traffic by conducting comprehensive web analytics audits and implementing data-driven SEO strategies for veteran-facing content.",
      "Automated data extraction pipelines using Python scripts and SQL queries to feed Tableau dashboards, saving over 10 hours of manual data preparation per week.",
      "Investigated and resolved anomalies in user engagement metrics by analyzing Google Analytics data in collaboration with development teams, improving accuracy of bounce rate reporting for key pages.",
    ],
  },
  {
    title: "Business Analyst Apprentice",
    company: "Kinetic Potential Workforce Development",
    date: "January 2022 \u2013 May 2022",
    bullets: [
      "Built a student retention dashboard in Tableau leveraging retention modeling techniques, contributing to a 10% reduction in student attrition by identifying at-risk engagement patterns.",
      "Designed and deployed 5 interactive Tableau dashboards to track student performance and persistence patterns, enabling data-driven interventions that improved student outcomes by 8%.",
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
