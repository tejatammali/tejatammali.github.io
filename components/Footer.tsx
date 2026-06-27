"use client";

import { motion } from "framer-motion";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tejatammali/",
    external: true,
  },
  {
    label: "Github",
    href: "https://github.com/tejatammali",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:teja.tammali0@gmail.com",
    external: false,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#F0F0F0] dark:bg-[#0d1117] h-24 flex flex-col items-center justify-center gap-2 transition-colors duration-300"
    >
      <div className="flex items-center gap-2 text-sm">
        {LINKS.map((link, i) => (
          <span key={link.href} className="flex items-center gap-2">
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-body hover:text-muted transition-colors duration-300"
            >
              {link.label}
            </a>
            {i < LINKS.length - 1 && <span className="text-body">&bull;</span>}
          </span>
        ))}
      </div>
      <p className="text-muted m-0" style={{ fontSize: 14 }}>
        &copy; {year} Teja Tammali
      </p>
    </motion.footer>
  );
}
