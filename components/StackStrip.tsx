"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STACK = [
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Terraform", icon: "devicon-terraform-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Prometheus", icon: "devicon-prometheus-original colored" },
  { name: "Grafana", icon: "devicon-grafana-original colored" },
  { name: "Jenkins", icon: "devicon-jenkins-plain" },
  { name: "Git", icon: "devicon-git-plain colored" },
];

export default function StackStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="stack"
      ref={ref}
      className="bg-[#2a2d34] dark:bg-[#0d1117] py-16 px-8 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-[11px] tracking-[3px] text-white/40 uppercase mb-10"
        >
          $ the stack i operate in
        </motion.p>

        {/* Node boundary — the tools sit inside one "host" box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="rounded-lg border border-dashed border-white/15 px-6 py-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8">
            {STACK.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + i * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group flex flex-col items-center gap-2.5 text-center"
              >
                <i
                  className={`${tool.icon} text-white/70 group-hover:text-white transition-colors duration-300`}
                  style={{ fontSize: "2rem" }}
                />
                <span className="text-[12px] text-white/55 group-hover:text-accent transition-colors duration-300">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
