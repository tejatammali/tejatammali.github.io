"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    label: "Languages",
    namespace: "ns/languages",
    gradient: "linear-gradient(135deg, #d3cbf5 0%, #b8a8f0 100%)",
    items: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Golang", icon: "devicon-go-plain colored" },
      { name: "SQL", icon: null },
      { name: "Bash", icon: null },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    ],
  },
  {
    label: "Technologies & Tools",
    namespace: "ns/platform",
    gradient: "linear-gradient(135deg, #a8d4f5 0%, #8ab8f0 100%)",
    items: [
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "AWS (EKS, EC2, S3)", icon: "devicon-amazonwebservices-plain colored" },
      { name: "Terraform", icon: "devicon-terraform-plain colored" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Helm", icon: null },
      { name: "Prometheus", icon: "devicon-prometheus-original colored" },
      { name: "Grafana", icon: "devicon-grafana-original colored" },
      { name: "Loki", icon: null },
      { name: "Alertmanager", icon: null },
      { name: "OpenTelemetry", icon: null },
      { name: "Jenkins", icon: "devicon-jenkins-plain colored" },
      { name: "Ansible", icon: "devicon-ansible-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Jira", icon: "devicon-jira-plain colored" },
      { name: "Alteryx", icon: null },
      { name: "Signavio", icon: null },
    ],
  },
  {
    label: "Practices",
    namespace: "ns/practices",
    gradient: "linear-gradient(135deg, #a8f5d4 0%, #8af0b8 100%)",
    items: [
      { name: "SLI/SLO & Error Budget Design", icon: null },
      { name: "Incident Response & Postmortems", icon: null },
      { name: "Infrastructure as Code", icon: null },
      { name: "Toil Reduction & Self-Healing Automation", icon: null },
      { name: "Runbook Authoring", icon: null },
      { name: "Root Cause Analysis", icon: null },
      { name: "Chaos Engineering", icon: null },
      { name: "CI/CD & Release Coordination", icon: null },
      { name: "Cloud Migration & Data Validation", icon: null },
      { name: "Requirements, User Stories & UAT", icon: null },
      { name: "Agile / SDLC", icon: null },
    ],
  },
];

const POD_COUNT = SKILL_CATEGORIES.reduce((n, c) => n + c.items.length, 0);

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

/* Small container glyph used for chips with no vendor icon */
function PodGlyph() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="opacity-45 shrink-0"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="10" height="10" rx="2" />
      <line x1="1" y1="4.5" x2="11" y2="4.5" />
    </svg>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-white dark:bg-[#0f1117] flex flex-col items-center py-20 px-8 transition-colors duration-300"
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

      {/* Cluster boundary — namespaces inside, pods inside those */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[940px] rounded-xl border border-dashed border-[#d5d5d5] dark:border-[#2a2d3a] p-5 md:p-7"
      >
        <div className="flex items-center justify-between flex-wrap gap-2 mb-6 px-1">
          <span className="font-mono text-[11px] tracking-[2px] text-muted">
            ⎈ cluster/teja-sre
          </span>
          <span className="font-mono text-[11px] tracking-[2px] text-muted">
            {SKILL_CATEGORIES.length} namespaces · {POD_COUNT} pods running
          </span>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.label}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(0,0,0,0.10)" }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="bg-white dark:bg-[#1a2035] rounded-lg overflow-hidden flex flex-col border border-transparent dark:border-[#2d3752]"
              style={{ boxShadow: "0 4px 20px var(--card-shadow)" }}
            >
              {/* Gradient namespace header */}
              <div
                className="h-[56px] flex flex-col justify-center px-6"
                style={{ background: category.gradient }}
              >
                <span className="font-mono text-[10px] tracking-[1.5px] text-heading opacity-55">
                  {category.namespace}
                </span>
                <span className="text-[11px] font-semibold tracking-[2.5px] uppercase text-heading opacity-70">
                  {category.label}
                </span>
              </div>

              {/* Pods */}
              <motion.div
                variants={chipContainerVariants}
                className="p-6 flex flex-wrap gap-2"
              >
                {category.items.map((item) => (
                  <motion.span
                    key={item.name}
                    variants={chipVariants}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0F0F0] dark:bg-[#252d42] text-body text-[13px]"
                  >
                    {item.icon ? (
                      <i className={item.icon} style={{ fontSize: "1.1rem" }} />
                    ) : (
                      <PodGlyph />
                    )}
                    {item.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
