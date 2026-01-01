"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function FeatureSection4() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-background overflow-hidden flex items-center"
    >
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
            backgroundSize: "100px 100px",
          }}
        />

        {/* Glow effects */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            style={{ y: imageY }}
          >
            <div className="relative aspect-4/3 w-full">
              {/* Glow behind image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-linear-to-br from-green-500/20 via-accent/10 to-transparent rounded-2xl blur-3xl scale-90"
              />

              {/* Image container */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10"
              >
                <Image
                  src="/renders/13.png"
                  alt="StaticWing Electric & Eco-Friendly"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent" />
              </motion.div>

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-green-500/50" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-green-500/50" />

              {/* Floating eco badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-lg border border-green-500/30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-rajdhani text-sm text-green-400 font-semibold">Zero Emissions</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="lg:pl-8"
            style={{ y: contentY }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-rajdhani text-green-400 text-sm tracking-[0.3em] uppercase mb-4"
            >
              Sustainable Aviation
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
            >
              CLEAN & <span className="text-green-400">QUIET</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-inter text-lg md:text-xl text-text leading-relaxed mb-10"
            >
              It&apos;s{" "}
              <span className="text-green-400 font-semibold">fully electric</span>,{" "}
              <span className="text-white font-semibold">zero carbon emissions</span>,
              and operates quietly — under{" "}
              <span className="text-accent font-semibold">65 decibels</span> at 100 meters.
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {/* Electric */}
              <div className="relative bg-surface/30 rounded-xl border border-green-500/20 p-5 text-center group hover:border-green-500/40 transition-colors duration-300">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-orbitron text-2xl font-bold text-green-400 block">100%</span>
                <span className="font-rajdhani text-sm text-text/60 uppercase tracking-wider">Electric</span>
              </div>

              {/* Zero Emissions */}
              <div className="relative bg-surface/30 rounded-xl border border-white/10 p-5 text-center group hover:border-white/20 transition-colors duration-300">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-orbitron text-2xl font-bold text-white block">0</span>
                <span className="font-rajdhani text-sm text-text/60 uppercase tracking-wider">CO₂ Emissions</span>
              </div>

              {/* Quiet */}
              <div className="relative bg-surface/30 rounded-xl border border-accent/20 p-5 text-center group hover:border-accent/40 transition-colors duration-300">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <span className="font-orbitron text-2xl font-bold text-accent block">&lt;65</span>
                <span className="font-rajdhani text-sm text-text/60 uppercase tracking-wider">dB at 100m</span>
              </div>
            </motion.div>

            {/* Noise Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 p-5 bg-surface/20 rounded-xl border border-white/5"
            >
              <span className="font-rajdhani text-xs text-text/50 uppercase tracking-wider mb-4 block">Noise Level Comparison</span>

              <div className="space-y-3">
                {/* StaticWing */}
                <div className="flex items-center gap-3">
                  <span className="font-inter text-sm text-accent w-28 shrink-0">StaticWing</span>
                  <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "43%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                  <span className="font-orbitron text-sm text-accent w-16 text-right">~65 dB</span>
                </div>

                {/* Normal Conversation */}
                <div className="flex items-center gap-3">
                  <span className="font-inter text-sm text-text/60 w-28 shrink-0">Conversation</span>
                  <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                    <div className="h-full bg-text/30 rounded-full" style={{ width: "40%" }} />
                  </div>
                  <span className="font-orbitron text-sm text-text/60 w-16 text-right">~60 dB</span>
                </div>

                {/* Traditional Drone */}
                <div className="flex items-center gap-3">
                  <span className="font-inter text-sm text-text/60 w-28 shrink-0">Trad. Drone</span>
                  <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                    <div className="h-full bg-red-500/50 rounded-full" style={{ width: "70%" }} />
                  </div>
                  <span className="font-orbitron text-sm text-text/60 w-16 text-right">~105 dB</span>
                </div>

                {/* Helicopter */}
                <div className="flex items-center gap-3">
                  <span className="font-inter text-sm text-text/60 w-28 shrink-0">Helicopter</span>
                  <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                    <div className="h-full bg-red-500/50 rounded-full" style={{ width: "100%" }} />
                  </div>
                  <span className="font-orbitron text-sm text-text/60 w-16 text-right">~150 dB</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-surface to-transparent" />
    </section>
  );
}
