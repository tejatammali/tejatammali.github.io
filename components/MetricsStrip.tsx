"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  {
    value: "8 hrs",
    label: "of daily toil eliminated",
    sub: "reduced to 30 seconds",
  },
  {
    value: "99.9%",
    label: "manual intervention reduced",
    sub: "self-healing automation",
  },
  {
    value: "50k+",
    label: "products automated",
    sub: "Alteryx / Python pipeline",
  },
  {
    value: "12+",
    label: "production incidents / month",
    sub: "as incident commander",
  },
];

export default function MetricsStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="metrics"
      ref={ref}
      className="bg-[#2a2d34] dark:bg-[#0d1117] py-16 px-8 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] tracking-[3px] text-white/40 uppercase mb-10"
        >
          Impact by the Numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center text-center group"
            >
              <span
                className="font-light text-white leading-none mb-2 group-hover:text-accent transition-colors duration-300"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {m.value}
              </span>
              <span className="text-[13px] text-white/65 leading-snug mb-1.5">
                {m.label}
              </span>
              <span className="text-[11px] text-accent/80 tracking-wide">
                {m.sub}
              </span>

              {/* Divider — only between items, hidden on last */}
              {i < METRICS.length - 1 && (
                <div className="hidden md:block absolute" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-12 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-center"
        />
      </div>
    </section>
  );
}
