"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface MetricCard {
  value: string;
  unit?: string;
  label: string;
  sublabel?: string;
}

const metrics: MetricCard[] = [
  {
    value: "1000+",
    unit: "kg",
    label: "Payload",
    sublabel: undefined,
  },
  {
    value: "~2900",
    unit: "kg",
    label: "MTOW",
    sublabel: "Maximum Takeoff Weight",
  },
  {
    value: "~64",
    unit: "dB",
    label: "Noise",
    sublabel: "at 100 meters",
  },
  {
    value: "Negligible",
    unit: undefined,
    label: "DWOW",
    sublabel: "Downwash/Outwash",
  },
];

export default function OverviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-background overflow-hidden flex items-center"
    >
      {/* Background Elements */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-rajdhani text-accent text-sm tracking-[0.3em] uppercase mb-4"
          >
            Performance Metrics
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            KEY <span className="text-primary">SPECIFICATIONS</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-linear-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        {/* Metrics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-surface/30 backdrop-blur-md border border-white/5 hover:border-accent/30 rounded-2xl p-6 sm:p-10 lg:p-12 transition-all duration-500 hover:bg-surface/50 hover:transform hover:-translate-y-3">
                {/* Accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-accent rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Glowing orb */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Value */}
                  <div className="mb-4 sm:mb-6">
                    <span className="font-orbitron text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                      {metric.value}
                    </span>
                    {metric.unit && (
                      <span className="font-rajdhani text-xl sm:text-2xl md:text-3xl text-accent ml-2 sm:ml-3">
                        {metric.unit}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <h3 className="font-rajdhani text-xl sm:text-2xl md:text-3xl font-semibold text-text tracking-wide uppercase mb-2">
                    {metric.label}
                  </h3>

                  {/* Sublabel */}
                  {metric.sublabel && (
                    <p className="font-inter text-sm sm:text-base text-text/50">
                      {metric.sublabel}
                    </p>
                  )}
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-b-2 border-accent/20 group-hover:border-accent/60 transition-colors duration-500" />

                {/* Corner dots */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-2 h-2 bg-accent/30 rounded-full group-hover:bg-accent transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mt-20 gap-4"
        >
          <div className="w-24 h-px bg-linear-to-r from-transparent to-accent/50" />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-3 h-3 bg-accent rounded-full"
          />
          <div className="w-24 h-px bg-linear-to-l from-transparent to-accent/50" />
        </motion.div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-surface to-transparent" />
    </section>
  );
}
