"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    name: "EvaluAI",
    subtitle: "AI-Powered University Education Platform",
    year: "2024",
    description:
      "AI-powered university education platform integrating multiple LLM APIs with Moodle LMS. Built a rubric-based automated grading module and secure code submission workflow, deployed on AWS with 99.9% uptime via a GitHub Actions + Docker CI/CD pipeline.",
    tags: ["Dart", "Flutter", "PHP", "Moodle LMS", "AWS", "Docker", "GitHub Actions"],
    github: "https://github.com/umgc/fall2024",
    demo: null,
    gradient: "linear-gradient(135deg, #d3cbf5 0%, #b8a8f0 100%)",
  },
  {
    name: "HouseHaggle",
    subtitle: "AI-Powered Real Estate Negotiation Assistant",
    year: null,
    description:
      "Cross-platform mobile app that gives homebuyers tailored negotiation strategies based on 10 scored property and market factors. Powered by GPT-4 via a custom prompt framework delivering real-time advice with sub-2-second latency, deployed on Firebase for 100+ concurrent users.",
    tags: ["React Native", "TypeScript", "OpenAI API", "Firebase"],
    github: "#",
    demo: null,
    gradient: "linear-gradient(135deg, #a8d4f5 0%, #8ab8f0 100%)",
  },
  {
    name: "PortfolioIQ",
    subtitle: "AI-Powered Investment Portfolio Tracker",
    year: null,
    description:
      "Personal portfolio analytics tool that aggregates holdings data and applies time series forecasting to model risk-adjusted returns. Generates automated weekly summaries with interactive performance charts and sector allocation breakdowns.",
    tags: ["Python", "Pandas", "AWS Lambda", "React", "PostgreSQL"],
    github: "#",
    demo: null,
    gradient: "linear-gradient(135deg, #a8f5d4 0%, #8adfc0 100%)",
  },
  {
    name: "DataPulse",
    subtitle: "ETL Pipeline Monitoring Dashboard",
    year: null,
    description:
      "Full-stack dashboard for monitoring ETL pipeline health, tracking ingestion rates, error rates, and SLA compliance. Features real-time alerting and interactive visualizations to surface data pipeline issues at a glance.",
    tags: ["Python", "FastAPI", "Docker", "PostgreSQL", "React"],
    github: "#",
    demo: null,
    gradient: "linear-gradient(135deg, #f5d4a8 0%, #f0c48e 100%)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#F0F0F0] flex flex-col items-center py-20 px-8"
    >
      <div className="flex flex-col items-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[175%] font-light tracking-[2px] text-heading"
        >
          PROJECTS
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
        className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.name}
            variants={itemVariants}
            whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(0,0,0,0.10)" }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="bg-white rounded-lg overflow-hidden flex flex-col"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
          >
            {/* Gradient header bar */}
            <div className="h-[56px]" style={{ background: project.gradient }} />

            {/* Card body */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-heading text-lg m-0">{project.name}</h3>
                {project.year && (
                  <span className="text-muted text-xs mt-1">{project.year}</span>
                )}
              </div>
              <p className="text-muted text-[13px] italic mb-3 m-0">{project.subtitle}</p>
              <p className="text-body text-[13.5px] leading-relaxed mb-4 flex-1 m-0">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-[#F0F0F0] text-body text-[12px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 text-sm">
                <a
                  href={project.github}
                  target={project.github !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-medium text-heading hover:text-muted transition-colors duration-200"
                >
                  GitHub ↗
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-heading hover:text-muted transition-colors duration-200"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
