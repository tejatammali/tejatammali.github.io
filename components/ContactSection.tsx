"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Sign up at formspree.io and replace this with your form ID
const FORMSPREE_ID = "meebgvdn";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tejatammali/", external: true },
  { label: "GitHub", href: "https://github.com/tejatammali", external: true },
  { label: "Email", href: "mailto:teja.tammali0@gmail.com", external: false },
];

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-[14px] text-white/90 placeholder:text-white/30 focus:outline-none focus:border-accent/70 focus:bg-white/8 transition-colors duration-200";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (FORMSPREE_ID === "YOUR_FORM_ID") {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#2a2d34] dark:bg-[#0d1117] py-24 px-8 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[175%] font-light tracking-[2px] text-white"
          >
            GET IN TOUCH
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            className="mt-3 h-[3px] w-16 bg-accent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left — blurb + links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              Open to SRE, Platform Engineering, and DevOps roles in the D.C. area.
              Whether it&apos;s a role, a question, or just to connect — reach out.
            </p>
            <p className="text-white/40 text-[13px] leading-relaxed mb-10">
              I typically respond within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between border-b border-white/10 pb-4 hover:border-accent/50 transition-colors duration-300"
                >
                  <span className="text-white/80 text-[14px] font-medium group-hover:text-white transition-colors duration-200">
                    {s.label}
                  </span>
                  <span className="text-accent text-[18px] transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={set("name")}
              required
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={set("email")}
              required
              className={inputClass}
            />
            <textarea
              placeholder="Message"
              value={form.message}
              onChange={set("message")}
              required
              rows={6}
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="mt-2 px-6 py-3 rounded font-medium text-[14px] tracking-wide transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: status === "success"
                  ? "rgba(74, 222, 128, 0.15)"
                  : "rgba(211, 203, 245, 0.15)",
                border: `1px solid ${status === "success" ? "rgba(74, 222, 128, 0.4)" : "rgba(211, 203, 245, 0.4)"}`,
                color: status === "success" ? "rgb(74, 222, 128)" : "#d3cbf5",
              }}
            >
              {status === "loading" && "Sending…"}
              {status === "success" && "Message sent ✓"}
              {status === "error" && "Something went wrong — try email directly"}
              {status === "idle" && "Send Message →"}
            </button>

            {status === "error" && FORMSPREE_ID === "YOUR_FORM_ID" && (
              <p className="text-white/40 text-[12px]">
                Form not yet configured. Sign up at formspree.io and replace YOUR_FORM_ID in ContactSection.tsx.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
