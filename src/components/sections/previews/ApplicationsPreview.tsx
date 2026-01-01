"use client";

import Link from "next/link";
import { motion } from "motion/react";

const useCaseIcons = [
  { name: "Rescue", color: "text-red-400", bgColor: "bg-red-500/10", borderColor: "border-red-500/30" },
  { name: "Logistics", color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/30" },
  { name: "Military", color: "text-slate-400", bgColor: "bg-slate-500/10", borderColor: "border-slate-500/30" },
  { name: "Construction", color: "text-amber-400", bgColor: "bg-amber-500/10", borderColor: "border-amber-500/30" },
];

export default function ApplicationsPreview() {
  return (
    <section className="relative min-h-[60vh] bg-background overflow-hidden flex items-center py-12">
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
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <p className="font-rajdhani text-accent text-sm tracking-[0.3em] uppercase mb-4">
              Discover
            </p>
            <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              REAL-WORLD <span className="text-accent">APPLICATIONS</span>
            </h2>
            <p className="font-inter text-text/70 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              From emergency rescue operations to heavy-lift logistics, StaticWing is designed
              to tackle the most demanding missions across multiple industries.
            </p>

            {/* CTA Button */}
            <Link
              href="/applications"
              className="group inline-flex items-center gap-3 px-8 py-4 font-rajdhani font-semibold text-sm tracking-wider uppercase border border-accent/50 hover:border-accent rounded-lg transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 text-accent group-hover:text-background transition-colors duration-300">
                View Applications
              </span>
              <svg
                className="w-5 h-5 relative z-10 text-accent group-hover:text-background transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </motion.div>

          {/* Right - Icons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {useCaseIcons.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true, amount: 0 }}
                  className={`w-28 h-28 md:w-32 md:h-32 ${item.bgColor} ${item.borderColor} border rounded-xl flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300`}
                >
                  <svg className={`w-8 h-8 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.name === "Rescue" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    )}
                    {item.name === "Logistics" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    )}
                    {item.name === "Military" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {item.name === "Construction" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    )}
                  </svg>
                  <span className={`font-rajdhani text-xs uppercase tracking-wider ${item.color}`}>
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-surface to-transparent" />
    </section>
  );
}
