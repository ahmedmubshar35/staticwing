"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface DeepDiveCTAProps {
  eyebrow?: string;
  label?: string;
}

export default function DeepDiveCTA({
  eyebrow,
  label = "EXPLORE STATIC WING DEEP DIVE",
}: DeepDiveCTAProps) {
  return (
    <div className="relative w-full bg-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-rajdhani text-text/50 text-sm tracking-[0.3em] uppercase text-center"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/deep-dive"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary/10 border border-primary/20 rounded-full overflow-hidden hover:bg-primary/20 transition-all duration-300"
          >
            <span className="font-orbitron font-bold text-primary tracking-wider">
              {label}
            </span>
            <svg
              className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
