"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function TeamPreview() {
  return (
    <section className="relative min-h-[60vh] bg-background overflow-hidden flex items-center py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Team Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Team avatars arrangement */}
              <div className="flex items-center gap-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface/50 border-2 border-white/10 flex items-center justify-center ${
                      i > 0 ? "-ml-4" : ""
                    }`}
                    style={{ zIndex: 4 - i }}
                  >
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-text/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center -ml-4"
                  style={{ zIndex: 0 }}
                >
                  <span className="font-orbitron text-sm md:text-base text-primary font-bold">+4</span>
                </motion.div>
              </div>

              {/* Labels */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                <span className="px-3 py-1 bg-surface/30 border border-white/10 rounded-full font-rajdhani text-xs text-text/70">
                  Engineers
                </span>
                <span className="px-3 py-1 bg-surface/30 border border-white/10 rounded-full font-rajdhani text-xs text-text/70">
                  Advisors
                </span>
                <span className="px-3 py-1 bg-surface/30 border border-white/10 rounded-full font-rajdhani text-xs text-text/70">
                  Partners
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="font-rajdhani text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Meet The
            </p>
            <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              EXPERT <span className="text-primary">TEAM</span>
            </h2>
            <p className="font-inter text-text/70 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Our team brings together world-class aerospace engineers, technical advisors,
              and university partnerships to push the boundaries of VTOL innovation.
            </p>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center">
                <span className="font-orbitron text-3xl font-bold text-white block">8+</span>
                <span className="font-rajdhani text-sm text-text/50">Team Members</span>
              </div>
              <div className="text-center">
                <span className="font-orbitron text-3xl font-bold text-accent block">3</span>
                <span className="font-rajdhani text-sm text-text/50">Universities</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/team"
              className="group inline-flex items-center gap-3 px-8 py-4 font-rajdhani font-semibold text-sm tracking-wider uppercase border border-primary/50 hover:border-primary rounded-lg transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 text-primary group-hover:text-background transition-colors duration-300">
                Meet The Team
              </span>
              <svg
                className="w-5 h-5 relative z-10 text-primary group-hover:text-background transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface to-transparent" />
    </section>
  );
}
