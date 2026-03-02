"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DEGREES = [
  {
    school: "University of Maryland, Global Campus",
    degree: "M.S. \u2013 Information Technology, Software Engineering",
    status: "In Progress",
  },
  {
    school: "University of Maryland, College Park",
    degree: "B.S. \u2013 Information Science, Data Science",
    status: "Graduated: May 2022",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function EducationSection() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#474d5a] flex flex-col items-center py-20 px-8 text-white"
    >
      <div className="flex flex-col items-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[175%] font-light tracking-[2px]"
        >
          EDUCATION
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
        className="w-full max-w-3xl flex flex-col gap-8"
      >
        {DEGREES.map((d) => (
          <motion.div
            key={d.school}
            variants={itemVariants}
            whileHover={{ x: -6 }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
            className="flex items-center gap-6 flex-wrap pr-6 border-r-[3px] border-r-[rgba(255,255,255,0.15)] hover:border-r-accent transition-colors duration-300"
          >
            <div className="relative w-16 h-16 shrink-0">
              <Image
                src="/img/umdlogo.png"
                alt="University of Maryland logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold m-0">{d.school}</h2>
              <h3 className="text-base font-normal m-0 opacity-90">{d.degree}</h3>
              <p className="text-sm m-0 opacity-70">{d.status}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
