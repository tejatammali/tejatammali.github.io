"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    name: "SkyWatcher",
    subtitle: "Observability Engine",
    aim: "Production-style observability platform monitoring a live flight data ingestion service end-to-end, from metric collection to SLO-driven alerting and incident runbooks.",
    year: null,
    description:
      "Configured a Python service with Prometheus exposing p95 latency, error rate, and throughput via /metrics; built a 12-panel Grafana dashboard covering three of the four Golden Signals. Defined SLIs/SLOs (99% success rate, p95 < 2s, 7-day window) and implemented fast and slow burn Alertmanager rules tied to error budget consumption. Migrated the 4-service docker-compose stack to Kubernetes — Deployments, Services, ConfigMaps, PVCs, and Secrets in a dedicated namespace with liveness/readiness probes.",
    tags: ["Python", "Docker", "Kubernetes", "Prometheus", "Alertmanager", "Grafana"],
    github: "https://github.com/tejatammali/skywatch",
    demo: null,
    gradient: "linear-gradient(135deg, #f5d3cb 0%, #f0a898 100%)",
  },
  {
    name: "HouseHaggle",
    subtitle: "LLM-Integrated Decision Engine",
    aim: "Helping homebuyers make confident, data-driven offers.",
    year: null,
    description:
      "Architected a cross-platform tool that synthesizes 10 distinct market and property data vectors to generate data-driven negotiation strategies for homebuyers. Minimized end-to-end inference latency to under 2 seconds by engineering a custom prompt framework integrating the Google Gemini API. Ensured operational stability during peak concurrent loads by conducting system stress testing and optimizing Firebase infrastructure for reliability.",
    tags: ["React Native", "TypeScript", "Google Gemini API", "Firebase"],
    github: "https://github.com/tejatammali/houseHaggle",
    demo: null,
    gradient: "linear-gradient(135deg, #a8d4f5 0%, #8ab8f0 100%)",
  },
  {
    name: "EvaluAI",
    subtitle: "AI-Powered University Education Platform",
    aim: "Master's capstone applying SDLC, Agile, team collaboration, and management-level reporting.",
    year: "2024",
    description:
      "Modernized legacy Moodle LMS workflows by connecting them with a scalable PHP middleware layer, integrating multiple LLM APIs to deliver AI capabilities. Maintained data sovereignty and academic integrity by implementing a rubric-based automated grading module, including a secure code-submission pipeline and audit logs.",
    tags: ["Dart", "Flutter", "Moodle LMS"],
    github: "https://github.com/umgc/fall2024",
    demo: null,
    gradient: "linear-gradient(135deg, #d3cbf5 0%, #b8a8f0 100%)",
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
        className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-6 [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:max-w-[calc(50%-12px)] [&>*:last-child:nth-child(odd)]:md:mx-auto"
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
              <p className="text-muted text-[13px] italic mb-2 m-0">{project.subtitle}</p>
              {project.aim && (
                <p className="text-body text-[13px] leading-relaxed mb-3 m-0 border-l-2 border-accent pl-3 italic opacity-80">{project.aim}</p>
              )}
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
