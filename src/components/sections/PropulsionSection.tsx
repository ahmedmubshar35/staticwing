"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const propulsionSteps = [
  {
    id: 1,
    tag: "Dual Engine Intake",
    title: "Four Coordinated Engines",
    description:
      "At the front, a dual engine system works in harmony — one small, one large. These engines channel airflow into an internal system where both streams converge before splitting into two distinct paths.",
    highlight: "4",
    highlightLabel: "Engines",
  },
  {
    id: 2,
    tag: "Vertical Lift",
    title: "41.5° Rear Deflection",
    description:
      "A curved rear section redirects the lower airstream downward at precisely 41.5 degrees. This calculated angle generates the thrust required for pure vertical takeoff — no runway needed.",
    highlight: "41.5°",
    highlightLabel: "Deflection Angle",
  },
  {
    id: 3,
    tag: "Transition Control",
    title: "Elevons & Counter Thrust",
    description:
      "At the critical moment, elevons adjust with precision while two lateral counter-thrust engines support the shift. This coordinated balance transforms vertical lift into stable axial motion seamlessly.",
    highlight: "2",
    highlightLabel: "Counter Thrust Engines",
  },
  {
    id: 4,
    tag: "Stall Prevention",
    title: "Non-Conventional Aerofoil",
    description:
      "The unconventional aerofoil design prevents classical stall conditions. Horizontal jet streams and flow shielding keep airflow attached at all times, maintaining continuous lift even at steep angles.",
    highlight: "0",
    highlightLabel: "Stall Risk",
  },
  {
    id: 5,
    tag: "Performance",
    title: "35 m/s Top Speed",
    description:
      "All systems working together enable speeds of up to 35 meters per second while ensuring stability through every maneuver — from vertical takeoff to high-speed cruise.",
    highlight: "35",
    highlightLabel: "m/s Max Speed",
  },
];

export default function PropulsionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Progress indicator
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow effects */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 pt-20 pb-10 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-rajdhani text-accent text-sm tracking-[0.3em] uppercase mb-4 text-center"
        >
          Propulsion System
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
        >
          HOW IT <span className="text-primary">FLIES</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-32 h-1 bg-linear-to-r from-primary to-accent mx-auto rounded-full"
        />
      </div>

      {/* Sticky Image - Fixed to viewport center */}
      <div className="hidden lg:block fixed left-0 top-0 w-1/2 h-screen pointer-events-none z-20">
        <div className="h-full flex items-center justify-center px-8 lg:px-16">
          <motion.div
            className="relative w-full max-w-lg"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]) }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-accent/5 to-transparent rounded-3xl blur-3xl scale-110" />

            {/* Image container */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white/10 bg-background/80 backdrop-blur-md">
              <Image
                src="/renders/2.jpg"
                alt="StaticWing Propulsion System"
                fill
                className="object-contain p-6"
                priority
              />

              {/* Tech overlay lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#22D3EE" stopOpacity="1" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="5%" y1="25%" x2="95%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" />
                <line x1="5%" y1="75%" x2="95%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" />
              </svg>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-12 h-12 border-l-2 border-t-2 border-accent/40" />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r-2 border-b-2 border-accent/40" />

            {/* Floating indicators */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] -right-4 px-3 py-1.5 bg-surface/90 backdrop-blur-sm rounded-lg border border-accent/30 shadow-lg"
            >
              <span className="font-rajdhani text-xs text-accent font-semibold tracking-wider">INTAKE</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[20%] -left-4 px-3 py-1.5 bg-surface/90 backdrop-blur-sm rounded-lg border border-primary/30 shadow-lg"
            >
              <span className="font-rajdhani text-xs text-primary font-semibold tracking-wider">THRUST</span>
            </motion.div>

            {/* Progress indicator */}
            <div className="absolute -right-8 top-0 bottom-0 w-1 bg-surface/50 rounded-full overflow-hidden">
              <motion.div
                className="w-full bg-linear-to-b from-accent to-primary rounded-full"
                style={{ height: progressHeight }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left - Spacer for fixed image */}
          <div className="hidden lg:block" />

          {/* Right - Scrolling Content */}
          <div className="relative">
            {/* Mobile Image */}
            <div className="lg:hidden relative aspect-video w-full mb-12">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-accent/5 to-transparent rounded-2xl blur-2xl" />
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/renders/2.jpg"
                  alt="StaticWing Propulsion System"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>

            {/* Content Cards */}
            <div className="space-y-6 lg:space-y-8 lg:min-h-screen lg:py-[50vh]">
              {propulsionSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-20%" }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="relative bg-surface/20 backdrop-blur-sm rounded-2xl border border-white/5 p-6 lg:p-8 hover:border-accent/20 transition-all duration-300 group hover:bg-surface/30">
                    {/* Step number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-background border border-accent/50 rounded-full flex items-center justify-center shadow-lg shadow-accent/10">
                      <span className="font-orbitron text-xs font-bold text-accent">{step.id}</span>
                    </div>

                    {/* Tag */}
                    <span className="font-rajdhani text-xs text-accent uppercase tracking-widest mb-2 block pl-4">
                      {step.tag}
                    </span>

                    {/* Title */}
                    <h3 className="font-orbitron text-xl md:text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-inter text-text text-base leading-relaxed mb-5">
                      {step.description}
                    </p>

                    {/* Highlight Stat */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      <span className="font-orbitron text-3xl font-bold text-accent">
                        {step.highlight}
                      </span>
                      <span className="font-rajdhani text-sm text-text/60 uppercase tracking-wider">
                        {step.highlightLabel}
                      </span>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-accent/20 group-hover:border-accent/50 transition-colors duration-300" />
                  </div>

                  {/* Connector line */}
                  {index < propulsionSteps.length - 1 && (
                    <div className="hidden lg:block absolute left-1/2 -bottom-6 w-px h-6">
                      <div className="w-full h-full bg-linear-to-b from-accent/30 to-transparent" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Final Summary */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-20%" }}
                className="relative mt-8"
              >
                <div className="relative bg-linear-to-br from-primary/10 via-surface/30 to-accent/10 rounded-2xl border border-accent/20 p-6 lg:p-8">
                  <h3 className="font-orbitron text-lg font-bold text-white mb-3">
                    The Result
                  </h3>
                  <p className="font-inter text-text text-base leading-relaxed">
                    Every component works in concert — from the dual-engine intake to the precision elevons —
                    creating a VTOL system that transitions seamlessly between hover and cruise,
                    maintaining stability and efficiency throughout the entire flight envelope.
                  </p>

                  {/* Key specs row */}
                  <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-white/10">
                    <div className="text-center">
                      <span className="font-orbitron text-xl font-bold text-primary block">4</span>
                      <span className="font-rajdhani text-xs text-text/60 uppercase">Engines</span>
                    </div>
                    <div className="text-center">
                      <span className="font-orbitron text-xl font-bold text-accent block">35</span>
                      <span className="font-rajdhani text-xs text-text/60 uppercase">m/s Speed</span>
                    </div>
                    <div className="text-center">
                      <span className="font-orbitron text-xl font-bold text-primary block">0</span>
                      <span className="font-rajdhani text-xs text-text/60 uppercase">Stall Risk</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom padding and line */}
      <div className="h-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-surface to-transparent" />
    </section>
  );
}
