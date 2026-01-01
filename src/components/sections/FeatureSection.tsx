"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function FeatureSection() {
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
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
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
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-linear-to-br from-accent/20 via-primary/10 to-transparent rounded-2xl blur-3xl scale-90"
              />

              {/* Image container */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10"
              >
                <Image
                  src="/renders/1.jpg"
                  alt="StaticWing UAV Dimensions"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent" />
              </motion.div>

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-accent/50" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-accent/50" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="lg:pl-8"
            style={{ y: contentY }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-rajdhani text-accent text-sm tracking-[0.3em] uppercase mb-4"
            >
              Dimensions & Scale
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
            >
              ENGINEERED FOR <span className="text-primary">SCALE</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-inter text-xl md:text-2xl text-text leading-relaxed mb-10"
            >
              This UAV stretches{" "}
              <span className="text-white font-semibold">8 meters</span> from tip to tip,
              with a wingspan of{" "}
              <span className="text-white font-semibold">3 meters</span>, covering a total
              footprint of{" "}
              <span className="text-accent font-semibold">24 square meters</span>.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            >
              <div className="text-center p-3 sm:p-4 bg-surface/30 rounded-xl border border-white/5">
                <span className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-white block">8</span>
                <span className="font-rajdhani text-xs sm:text-sm text-text/70 uppercase tracking-wider">Meters Length</span>
              </div>
              <div className="text-center p-3 sm:p-4 bg-surface/30 rounded-xl border border-white/5">
                <span className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-white block">3</span>
                <span className="font-rajdhani text-xs sm:text-sm text-text/70 uppercase tracking-wider">Meters Span</span>
              </div>
              <div className="text-center p-3 sm:p-4 bg-surface/30 rounded-xl border border-white/5">
                <span className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-accent block">24</span>
                <span className="font-rajdhani text-xs sm:text-sm text-text/70 uppercase tracking-wider">m² Footprint</span>
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
