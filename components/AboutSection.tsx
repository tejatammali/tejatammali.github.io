"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#F0F0F0] min-h-screen flex flex-col items-center justify-center py-20 px-8"
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
        {/* Code console – slides in from left, then gently floats */}
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
              height: 420,
              width: 560,
              fontFamily: "Monaco, monospace",
              fontSize: "90%",
              lineHeight: "22px",
              backgroundColor: "#2a2d34",
              borderTop: "20px solid #e5e5e5",
              boxShadow: "12px 12px 1px #d7d3e7",
              padding: "28px",
            }}
          >
          {/* package aboutMe; */}
          <div>
            <span className="c1">package</span>{" "}
            <span className="c5">aboutMe</span>
            <span className="c2">;</span>
          </div>

          <div className="mt-3">
            <span className="c1">public</span>{" "}
            <span className="c3">class</span>{" "}
            <span className="c5">Teja</span>{" "}
            <span className="c1">extends</span>{" "}
            <span className="c5">humanBean</span>{" "}
            <span className="c2">{"{"}</span>
          </div>

          {/* Constructor */}
          <div className="pl-6">
            <span className="c1">public</span>{" "}
            <span className="c5">Teja</span>
            <span className="c2">{"() {"}</span>

            <div className="pl-6">
              <div>
                <span className="c3">String</span>{" "}
                <span className="c2">fullName = </span>
                <span className="c4">&quot;Teja Tammali&quot;</span>
                <span className="c2">;</span>
              </div>
              <div>
                <span className="c3">String</span>{" "}
                <span className="c2">home = </span>
                <span className="c4">&quot;Maryland&quot;</span>
                <span className="c2">;</span>
              </div>

              <div className="mt-2">
                <span className="c3">String</span>{" "}
                <span className="c2">mastersDegree = </span>
                <span className="c4">
                  &quot;UMGC (Information Technology, Software
                  Engineering)&quot;
                </span>
                <span className="c2">;</span>
              </div>
              <div>
                <span className="c3">String</span>{" "}
                <span className="c2">bachelorsDegree = </span>
                <span className="c4">
                  &quot;UMD College Park (Information Science, Data
                  Science)&quot;
                </span>
                <span className="c2">;</span>
              </div>

              <div className="mt-2">
                <span className="c3">Resume</span>{" "}
                <span className="c2">resume = </span>
                <span className="c1">new</span>{" "}
                <span className="c2">Resume(</span>
                <span className="c4">&quot;</span>
                <a
                  href="/Tammali_Teja_Resume.pdf"
                  className="code-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pdf
                </a>
                <span className="c4">&quot;</span>
                <span className="c2">);</span>
              </div>

              <div>
                <span className="c3">String[]</span>{" "}
                <span className="c2">hobbies = </span>
                <span className="c1">new </span>
                <span className="c3">String[]</span>
                <span className="c2">{"{"}</span>
                <div className="pl-6">
                  {[
                    "🏎️ F1 Connoisseur",
                    "🛫 Traveling",
                    "💪 Gym Time",
                    "👾 Video Games",
                    "👨‍💻 New Technology",
                  ].map((h, i, arr) => (
                    <div key={h}>
                      <span className="c4">&quot;{h}&quot;</span>
                      {i < arr.length - 1 && (
                        <span className="c2">,</span>
                      )}
                    </div>
                  ))}
                </div>
                <span className="c2">{"}"}</span>
              </div>
            </div>

            <span className="c2">{"}"}</span>
          </div>

          {/* contact() method */}
          <div className="pl-6 mt-1">
            <span className="c1">public static</span>{" "}
            <span className="c3">void</span>{" "}
            <span className="c5">contact</span>
            <span className="c2">{"() {"}</span>

            <div className="pl-6">
              <div>
                <span className="c3">Email</span>{" "}
                <span className="c2">email = </span>
                <span className="c1">new</span>{" "}
                <span className="c2">Email(</span>
                <span className="c4">&quot;</span>
                <a href="mailto:teja.tammali0@gmail.com" className="code-link">
                  teja.tammali0@gmail.com
                </a>
                <span className="c4">&quot;</span>
                <span className="c2">);</span>
              </div>
              <div>
                <span className="c3">String[]</span>{" "}
                <span className="c2">links = </span>
                <span className="c1">new </span>
                <span className="c3">String[]</span>
                <span className="c2">{"{"}</span>
                <div className="pl-6">
                  <div>
                    <span className="c4">&quot;</span>
                    <a
                      href="https://www.linkedin.com/in/tejatammali/"
                      className="code-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <span className="c4">&quot;</span>
                    <span className="c2">,</span>
                  </div>
                  <div>
                    <span className="c4">&quot;</span>
                    <a
                      href="https://github.com/tejatammali"
                      className="code-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                    <span className="c4">&quot;</span>
                  </div>
                </div>
                <span className="c2">{"}"}</span>
              </div>
            </div>

            <span className="c2">{"}"}</span>
          </div>

          <div>
            <span className="c2">{"}"}</span>
          </div>
          </motion.div>
        </motion.div>

        {/* Profile photo – slides in from right, then gently floats */}
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
              height: 420,
              borderTop: "20px solid #e5e5e5",
              boxShadow: "12px 12px 1px #d7d3e7",
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
