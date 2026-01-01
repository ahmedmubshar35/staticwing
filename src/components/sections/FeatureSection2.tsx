"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function FeatureSection2() {
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
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Glow effects */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            className="lg:pr-8"
            style={{ y: contentY }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="font-rajdhani text-accent text-sm tracking-[0.3em] uppercase mb-4"
            >
              Power & Capacity
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
            >
              BUILT TO <span className="text-primary">LIFT</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-inter text-lg md:text-xl text-text leading-relaxed mb-10"
            >
              Its frame, reinforced and powered, carries a total weight of{" "}
              <span className="text-white font-semibold">1,900 kilograms</span>, including
              all onboard batteries. Yet, when fully loaded, the takeoff weight reaches{" "}
              <span className="text-white font-semibold">2,900 kilograms</span>, allowing
              it to lift a payload of over{" "}
              <span className="text-accent font-semibold">1,000 kilograms</span>.
            </motion.p>

            {/* Weight Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Empty Weight */}
              <div className="relative bg-surface/30 rounded-xl border border-white/5 p-5 overflow-hidden group hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-rajdhani text-sm text-text/60 uppercase tracking-wider block mb-1">Empty Weight</span>
                    <span className="font-inter text-text text-sm">Frame + Batteries</span>
                  </div>
                  <div className="text-right">
                    <span className="font-orbitron text-3xl md:text-4xl font-bold text-white">1,900</span>
                    <span className="font-rajdhani text-lg text-text/70 ml-2">kg</span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-4 h-1 bg-surface rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-linear-to-r from-primary/50 to-primary rounded-full"
                  />
                </div>
              </div>

              {/* MTOW */}
              <div className="relative bg-surface/30 rounded-xl border border-white/5 p-5 overflow-hidden group hover:border-accent/30 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-rajdhani text-sm text-text/60 uppercase tracking-wider block mb-1">Max Takeoff Weight</span>
                    <span className="font-inter text-text text-sm">Fully Loaded</span>
                  </div>
                  <div className="text-right">
                    <span className="font-orbitron text-3xl md:text-4xl font-bold text-white">2,900</span>
                    <span className="font-rajdhani text-lg text-text/70 ml-2">kg</span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-4 h-1 bg-surface rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="h-full bg-linear-to-r from-accent/50 to-accent rounded-full"
                  />
                </div>
              </div>

              {/* Payload */}
              <div className="relative bg-surface/30 rounded-xl border border-accent/20 p-5 overflow-hidden group hover:border-accent/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-accent/5" />
                <div className="relative flex items-center justify-between">
                  <div>
                    <span className="font-rajdhani text-sm text-accent uppercase tracking-wider block mb-1">Payload Capacity</span>
                    <span className="font-inter text-text text-sm">Usable Lift</span>
                  </div>
                  <div className="text-right">
                    <span className="font-orbitron text-3xl md:text-4xl font-bold text-accent">1,000+</span>
                    <span className="font-rajdhani text-lg text-accent/70 ml-2">kg</span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-4 h-1 bg-surface rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "35%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="h-full bg-linear-to-r from-accent to-accent/80 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative order-first lg:order-last"
            style={{ y: imageY }}
          >
            <div className="relative aspect-4/3 w-full">
              {/* Glow behind image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-linear-to-bl from-primary/20 via-accent/10 to-transparent rounded-2xl blur-3xl scale-90"
              />

              {/* Image container */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10"
              >
                <Image
                  src="/renders/4.png"
                  alt="StaticWing Payload Capacity"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent" />
              </motion.div>

              {/* Corner accents */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-2 border-b-2 border-primary/50" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-surface to-transparent" />
    </section>
  );
}
