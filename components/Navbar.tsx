"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
];

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-[#0f1117]/90 backdrop-blur-md"
          style={{ boxShadow: "0 1px 20px rgba(0,0,0,0.08)" }}
        >
          <div className="flex items-center justify-between px-6">
            <a
              href="#home"
              className="nav-link nav-link-home py-[22px] font-medium text-[17px] text-heading"
            >
              Teja Tammali
            </a>
            <div className="flex items-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link px-3 py-[22px] font-medium text-[14px] text-heading tracking-wide hidden md:inline-block"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Tammali_Teja_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 px-3 py-1.5 rounded text-[13px] font-medium text-heading border border-accent hover:bg-accent/30 transition-colors duration-200"
              >
                Resume ↓
              </a>
              <button
                onClick={toggle}
                aria-label="Toggle dark mode"
                className="ml-2 p-2 rounded-full text-heading hover:bg-accent/20 transition-colors duration-200"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
