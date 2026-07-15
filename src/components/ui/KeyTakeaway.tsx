"use client";

import { motion } from "motion/react";

export default function KeyTakeaway({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-start gap-3 bg-accent/5 border border-accent/20 rounded-xl p-4 sm:p-5 ${className}`}
    >
      <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>
      <div className="flex-1">
        <span className="block font-rajdhani text-xs text-accent uppercase tracking-widest mb-1">
          Key Takeaway
        </span>
        <p className="font-inter text-sm sm:text-base text-white/90 leading-relaxed">{children}</p>
      </div>
    </motion.div>
  );
}
