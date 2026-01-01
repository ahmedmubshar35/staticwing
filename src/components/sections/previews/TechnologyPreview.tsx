"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function TechnologyPreview() {
  return (
    <section className="relative min-h-[60vh] bg-background overflow-hidden flex items-center py-12">
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
          {/* Left - Icon/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Tech icon container */}
              <div className="w-48 h-48 md:w-64 md:h-64 bg-surface/30 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                {/* Animated rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border border-primary/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border border-accent/20 rounded-full"
                />

                {/* Icon */}
                <div className="relative z-10 w-20 h-20 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
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
              Explore Our
            </p>
            <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              ADVANCED <span className="text-primary">TECHNOLOGY</span>
            </h2>
            <p className="font-inter text-text/70 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Discover the engineering marvel behind StaticWing. From our revolutionary propulsion
              system to whisper-quiet operation, learn how we&apos;re redefining vertical flight.
            </p>

            {/* CTA Button */}
            <Link
              href="/technology"
              className="group inline-flex items-center gap-3 px-8 py-4 font-rajdhani font-semibold text-sm tracking-wider uppercase border border-primary/50 hover:border-primary rounded-lg transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 text-primary group-hover:text-background transition-colors duration-300">
                Explore Technology
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
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-surface to-transparent" />
    </section>
  );
}
