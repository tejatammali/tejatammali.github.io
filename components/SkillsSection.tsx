"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "SQL", icon: null },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      { name: "Pandas", icon: null },
      { name: "NumPy", icon: null },
      { name: "Scikit-learn", icon: null },
      { name: "Matplotlib", icon: null },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
      { name: "GitHub Actions", icon: "devicon-github-plain" },
    ],
  },
  {
    label: "Machine Learning",
    items: [
      { name: "Predictive Modeling", icon: null },
      { name: "Time Series Forecasting", icon: null },
      { name: "Classification", icon: null },
      { name: "LLM API Integration", icon: null },
      { name: "Model Validation", icon: null },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Alteryx", icon: null },
      { name: "Tableau", icon: null },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Agile / Scrum", icon: null },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const chipContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
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
        className="w-full max-w-[860px] flex flex-col gap-8"
      >
        {SKILL_CATEGORIES.map((category) => (
          <motion.div
            key={category.label}
            variants={rowVariants}
            className="flex flex-wrap gap-y-3 gap-x-0 items-start"
          >
            {/* Category label */}
            <p
              className="text-[11px] font-semibold tracking-[2px] text-muted uppercase mt-1.5 w-[180px] shrink-0"
            >
              {category.label}
            </p>

            {/* Chips */}
            <motion.div
              variants={chipContainerVariants}
              className="flex flex-wrap gap-2 flex-1"
            >
              {category.items.map((item) => (
                <motion.span
                  key={item.name}
                  variants={chipVariants}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0F0F0] text-body text-[13px]"
                >
                  {item.icon && (
                    <i className={`${item.icon}`} style={{ fontSize: "1.1rem" }} />
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
