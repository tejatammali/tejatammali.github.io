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

const COURSEWORK: Record<string, string[]> = {
  "Information Science": [
    "User-Centered Design & Development",
    "Database Design Modeling",
    "Dynamic Web Applications",
    "Organization Management",
    "Information Organization",
  ],
  "Data Science": [
    "Object-Oriented Python Programming",
    "Data Sources & Manipulation",
    "Statistics in Data Science",
    "Data Science Techniques",
  ],
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function EducationSection() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#474d5a] flex flex-col items-center py-20 px-8 text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-[175%] font-light tracking-[2px] mb-12"
      >
        EDUCATION
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="w-full max-w-3xl flex flex-col gap-8"
      >
        {/* Degree entries */}
        {DEGREES.map((d) => (
          <motion.div
            key={d.school}
            variants={itemVariants}
            className="flex items-center gap-6 flex-wrap"
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

        {/* Coursework */}
        <motion.div variants={itemVariants} className="mt-4">
          <h4 className="text-base font-semibold mb-4">Relevant Coursework:</h4>
          <div className="flex flex-wrap gap-14">
            {Object.entries(COURSEWORK).map(([subject, courses]) => (
              <div key={subject}>
                <p className="font-medium mb-2 opacity-95">{subject}</p>
                <ul
                  className="pl-5 text-sm leading-7 opacity-80"
                  style={{ listStyleType: "circle" }}
                >
                  {courses.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
