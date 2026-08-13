"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DEGREES = [
  {
    school: "University of Maryland, Global Campus",
    degree: "M.S. – Information Technology",
    status: "December 2024",
    // Swap this for /img/umgclogo.png once the PNG is dropped into public/img
    logo: "/img/umgclogo.svg",
  },
  {
    school: "University of Maryland, College Park",
    degree: "B.S. – Information Science",
    status: "May 2022",
    logo: "/img/umdlogo.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function EducationSection() {
  return (
    <section
      id="education"
      className="bg-[#474d5a] dark:bg-[#0d1117] flex flex-col items-center py-20 px-8 text-white transition-colors duration-300"
    >
      <div className="flex flex-col items-center mb-10">
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
        className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {DEGREES.map((d) => (
          <motion.div
            key={d.school}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
            className="flex items-center gap-4 rounded-lg border border-white/10 hover:border-accent/40 bg-white/[0.04] px-5 py-4 transition-colors duration-300"
          >
            <div className="relative w-12 h-12 shrink-0 rounded bg-white p-1">
              <Image
                src={d.logo}
                alt={`${d.school} logo`}
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <h2 className="text-[15px] font-semibold m-0 leading-snug">{d.degree}</h2>
              <p className="text-[13px] m-0 opacity-75 leading-snug">{d.school}</p>
              <p className="text-[12px] m-0 opacity-50">{d.status}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
