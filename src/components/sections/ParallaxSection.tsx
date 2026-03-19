"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-background overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
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
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Information with Parallax */}
            <motion.div
              className="order-2 lg:order-1"
              style={{ y: contentY }}
            >
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="font-rajdhani text-accent text-sm tracking-[0.3em] uppercase mb-4"
              >
                Revolutionary Technology
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                THE <span className="text-primary">STATICWING</span> ADVANTAGE
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-inter text-text text-lg leading-relaxed mb-8"
              >
                StaticWing represents a significant advancement in VTOL aircraft architecture. The configuration eliminates conventional rotor-induced downwash while maintaining high payload capability and a low acoustic signature during operation.
              </motion.p>

              {/* Key Features List */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-rajdhani text-white font-semibold text-lg">Minimal Downwash Effects</h4>
                    <p className="font-inter text-text/70 text-sm">The propulsion architecture mitigates rotor downwash typically associated with conventional VTOL systems, enabling safer operations near personnel, structures, and sensitive environments.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-rajdhani text-white font-semibold text-lg">Low Acoustic Signature</h4>
                    <p className="font-inter text-text/70 text-sm">The system achieves an acoustic level of approximately <strong className="text-white">64 dB at 100 m</strong>, supporting operations in noise-sensitive environments.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-rajdhani text-white font-semibold text-lg">High Payload Capability</h4>
                    <p className="font-inter text-text/70 text-sm">The architecture is designed to support <strong className="text-white">payload capacities exceeding 1,000 kg</strong>, enabling heavy-lift missions across logistics, industrial support, and specialized operational applications.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Drone Image with Parallax */}
            <motion.div
              className="order-1 lg:order-2 relative"
              style={{ y: imageY, scale: imageScale }}
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Glow effect behind image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl scale-75"
                />

                {/* Drone Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative z-10 w-full h-full flex items-center justify-center"
                >
                  <Image
                    src="/staticwing.png"
                    alt="StaticWing Drone"
                    width={500}
                    height={500}
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* Corner accents */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-accent/50" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-accent/50" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-accent/50" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-accent/50" />
                </motion.div>

                {/* Floating tech elements */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-8 h-8 border border-primary/50 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, 10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-surface to-transparent" />
    </section>
  );
}
