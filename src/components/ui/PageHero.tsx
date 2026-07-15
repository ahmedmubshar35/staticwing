"use client";

import { motion } from "motion/react";

interface PageHeroProps {
  title: string;
  accentWord: string;
  subtitle?: string;
}

export default function PageHero({ title, accentWord, subtitle }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] bg-background overflow-hidden flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.8 }}
          className="w-px h-16 bg-gradient-to-b from-transparent via-accent to-transparent mx-auto mb-8 origin-top"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary">
            {accentWord}
          </span>
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-rajdhani text-xl md:text-2xl font-semibold text-white max-w-2xl mx-auto leading-snug"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-10 rounded-full"
        />
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface to-transparent" />
    </section>
  );
}
