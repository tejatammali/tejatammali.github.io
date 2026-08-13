"use client";

import { motion } from "framer-motion";

/**
 * Connector between two sections — renders the page as one top-to-bottom
 * pipeline diagram. `className` carries the gradient that blends the two
 * adjoining section backgrounds plus the text color for the label.
 */
export default function FlowRail({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-24 w-full overflow-hidden ${className}`}
    >
      {/* Vertical dashed edge */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l border-dashed border-current opacity-25" />

      {/* Packet travelling down the edge */}
      <motion.span
        initial={{ y: -6, opacity: 0 }}
        whileInView={{ y: [-6, 96], opacity: [0, 1, 1, 0] }}
        viewport={{ once: false, margin: "-20px" }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
      />

      {/* Stage label, tacked onto the edge */}
      <div className="absolute left-1/2 top-1/2 flex -translate-y-1/2 items-center gap-2 pl-3">
        <span className="h-px w-4 bg-current opacity-25" />
        <span className="font-mono text-[10px] uppercase tracking-[2px] opacity-45">
          {label}
        </span>
      </div>
    </div>
  );
}
