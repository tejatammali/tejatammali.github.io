"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#F0F0F0] dark:bg-[#111827] min-h-screen flex flex-col items-center justify-center py-20 px-8 transition-colors duration-300"
    >
      {/* Title */}
      <div className="flex flex-col items-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[175%] font-light tracking-[2px] text-heading"
        >
          HELLO, WORLD!
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="mt-3 h-[3px] w-16 bg-accent origin-left"
        />
      </div>

      <div className="flex items-start justify-center gap-10 flex-wrap w-full max-w-5xl">
        {/* Python code console */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="rounded overflow-y-auto"
            style={{
              height: 440,
              width: 560,
              fontFamily: "Monaco, monospace",
              fontSize: "88%",
              lineHeight: "22px",
              backgroundColor: "var(--console-bg)",
              borderTop: "20px solid var(--console-border)",
              boxShadow: "12px 12px 1px var(--console-shadow)",
              padding: "28px",
            }}
          >
            {/* # about_teja.py */}
            <div>
              <span className="c2"># about_teja.py</span>
            </div>

            <div className="mt-3">
              <span className="c1">class </span>
              <span className="c5">SREEngineer</span>
              <span className="c2">:</span>
            </div>

            {/* Fields */}
            <div className="pl-6 mt-1">
              <div>
                <span className="c5">name</span>
                <span className="c2">      = </span>
                <span className="c4">&quot;Teja Tammali&quot;</span>
              </div>
              <div>
                <span className="c5">location</span>
                <span className="c2">  = </span>
                <span className="c4">&quot;Maryland, D.C. Area&quot;</span>
              </div>
              <div>
                <span className="c5">currently</span>
                <span className="c2"> = </span>
                <span className="c4">&quot;Morgan Stanley&quot;</span>
              </div>

              <div className="mt-3">
                <span className="c5">focus</span>
                <span className="c2"> = [</span>
                {[
                  "SLI/SLO & Error Budgets",
                  "Incident Response & RCA",
                  "Toil Elimination",
                  "Observability Platforms",
                ].map((f, i, arr) => (
                  <div key={f} className="pl-6">
                    <span className="c4">&quot;{f}&quot;</span>
                    {i < arr.length - 1 && <span className="c2">,</span>}
                  </div>
                ))}
                <span className="c2">]</span>
              </div>

              <div className="mt-3">
                <span className="c5">hobbies</span>
                <span className="c2"> = [</span>
                {[
                  "🏎️  F1 Connoisseur",
                  "🛫  Traveling",
                  "💪  Gym Time",
                  "👾  Video Games",
                ].map((h, i, arr) => (
                  <div key={h} className="pl-6">
                    <span className="c4">&quot;{h}&quot;</span>
                    {i < arr.length - 1 && <span className="c2">,</span>}
                  </div>
                ))}
                <span className="c2">]</span>
              </div>
            </div>

            {/* contact() method */}
            <div className="pl-6 mt-3">
              <div>
                <span className="c6">@staticmethod</span>
              </div>
              <div>
                <span className="c1">def </span>
                <span className="c5">contact</span>
                <span className="c2">():</span>
              </div>
              <div className="pl-6">
                <span className="c1">return </span>
                <span className="c2">{"{"}</span>
                <div className="pl-6">
                  <div>
                    <span className="c4">&quot;email&quot;</span>
                    <span className="c2">:    </span>
                    <span className="c4">&quot;</span>
                    <a href="mailto:teja.tammali0@gmail.com" className="code-link">
                      teja.tammali0@gmail.com
                    </a>
                    <span className="c4">&quot;</span>
                    <span className="c2">,</span>
                  </div>
                  <div>
                    <span className="c4">&quot;linkedin&quot;</span>
                    <span className="c2">: </span>
                    <span className="c4">&quot;</span>
                    <a
                      href="https://www.linkedin.com/in/tejatammali/"
                      className="code-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      /in/tejatammali
                    </a>
                    <span className="c4">&quot;</span>
                    <span className="c2">,</span>
                  </div>
                  <div>
                    <span className="c4">&quot;github&quot;</span>
                    <span className="c2">:   </span>
                    <span className="c4">&quot;</span>
                    <a
                      href="https://github.com/tejatammali"
                      className="code-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      /tejatammali
                    </a>
                    <span className="c4">&quot;</span>
                  </div>
                </div>
                <span className="c2">{"}"}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
            className="relative overflow-hidden rounded"
            style={{
              width: 300,
              height: 440,
              borderTop: "20px solid var(--console-border)",
              boxShadow: "12px 12px 1px var(--console-shadow)",
            }}
          >
            <Image
              src="/img/profile.jpg"
              alt="Teja Tammali"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
