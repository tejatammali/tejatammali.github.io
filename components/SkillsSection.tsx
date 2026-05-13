"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    label: "Languages",
    gradient: "linear-gradient(135deg, #d3cbf5 0%, #b8a8f0 100%)",
    items: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "SQL", icon: null },
      { name: "Bash", icon: null },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    ],
  },
  {
    label: "Technologies & Tools",
    gradient: "linear-gradient(135deg, #a8d4f5 0%, #8ab8f0 100%)",
    items: [
      { name: "Prometheus", icon: null },
      { name: "Grafana", icon: null },
      { name: "Alertmanager", icon: null },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      { name: "AWS (EC2 / S3)", icon: "devicon-amazonwebservices-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "GitHub Actions", icon: "devicon-github-plain" },
      { name: "DB2", icon: null },
      { name: "Sybase", icon: null },
      { name: "Tableau", icon: null },
      { name: "Gemini API", icon: null },
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Alteryx", icon: null },
    ],
  },
  {
    label: "Practices",
    gradient: "linear-gradient(135deg, #a8f5d4 0%, #8af0b8 100%)",
    items: [
      { name: "SLO/SLI Design", icon: null },
      { name: "Incident Response", icon: null },
      { name: "Runbook Authoring", icon: null },
      { name: "Load & Stress Testing", icon: null },
      { name: "Technical Triage", icon: null },
      { name: "Process Automation", icon: null },
      { name: "Agile / SDLC", icon: null },
      { name: "Stakeholder Management", icon: null },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const chipContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-white flex flex-col items-center py-20 px-8"
    >
      <div className="flex flex-col items-center mb-14">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[175%] font-light tracking-[2px] text-heading"
        >
          SKILLS
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
        className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SKILL_CATEGORIES.map((category) => (
          <motion.div
            key={category.label}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(0,0,0,0.10)" }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="bg-white rounded-lg overflow-hidden flex flex-col"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
          >
            {/* Gradient header */}
            <div
              className="h-[56px] flex items-center px-6"
              style={{ background: category.gradient }}
            >
              <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-heading opacity-70">
                {category.label}
              </span>
            </div>

            {/* Chips */}
            <motion.div
              variants={chipContainerVariants}
              className="p-6 flex flex-wrap gap-2"
            >
              {category.items.map((item) => (
                <motion.span
                  key={item.name}
                  variants={chipVariants}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0F0F0] text-body text-[13px]"
                >
                  {item.icon && (
                    <i className={item.icon} style={{ fontSize: "1.1rem" }} />
                  )}
                  {item.name}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
