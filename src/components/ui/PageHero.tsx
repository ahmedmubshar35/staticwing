"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface PageHeroProps {
  title: string;
  accentWord: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  joined?: boolean;
}

export default function PageHero({ title, accentWord, subtitle, ctaLabel, ctaHref, joined }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] bg-background overflow-hidden flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Center radial shade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15)_0%,transparent_50%)]" />

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

        {/* Top hairline */}
        <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
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
          {title}{joined ? "" : " "}
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
            className="font-rajdhani text-xl md:text-2xl font-normal text-white max-w-2xl mx-auto leading-snug"
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

        {/* Deep dive CTA */}
        {ctaLabel && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10"
          >
            <Link
              href={ctaHref}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary/10 border border-primary/20 rounded-full overflow-hidden hover:bg-primary/20 transition-all duration-300"
            >
              <span className="font-orbitron font-bold text-primary tracking-wider">
                {ctaLabel}
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
        )}
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface to-transparent" />
    </section>
  );
}
