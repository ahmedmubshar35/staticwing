"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function FeatureSection3() {
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
              Downwash Innovation
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
            >
              MINIMAL <span className="text-primary">GROUND IMPACT</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="font-inter text-lg md:text-xl text-text leading-relaxed mb-10"
            >
              This design produces a{" "}
              <span className="text-white font-semibold">single, minimal downwash axis</span>{" "}
              that is not perpendicular to the ground. By eliminating multi-axis downwash,
              our UAV{" "}
              <span className="text-accent font-semibold">avoids ground damage</span>{" "}
              and requires{" "}
              <span className="text-white font-semibold">no reinforced landing sites</span>.
            </motion.p>

            {/* Comparison Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* Traditional VTOL */}
              <div className="relative bg-surface/30 rounded-xl border border-red-500/20 p-4 sm:p-5 group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-500/50 rounded-t-xl" />
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="font-rajdhani text-sm text-red-400 uppercase tracking-wider">Traditional</span>
                </div>
                <p className="font-inter text-text/70 text-xs sm:text-sm">Multi-axis downwash causes ground erosion & debris</p>
                <div className="mt-3 pt-3 border-t border-white/5">
                  <span className="font-orbitron text-xl sm:text-2xl font-bold text-red-400">360°</span>
                  <span className="font-rajdhani text-xs text-text/50 ml-2">Downwash Spread</span>
                </div>
              </div>

              {/* StaticWing */}
              <div className="relative bg-surface/30 rounded-xl border border-accent/30 p-4 sm:p-5 group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent rounded-t-xl" />
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-rajdhani text-sm text-accent uppercase tracking-wider">StaticWing</span>
                </div>
                <p className="font-inter text-text/70 text-xs sm:text-sm">Single-axis, angled downwash minimizes impact</p>
                <div className="mt-3 pt-3 border-t border-white/5">
                  <span className="font-orbitron text-xl sm:text-2xl font-bold text-accent">1</span>
                  <span className="font-rajdhani text-xs text-text/50 ml-2">Axis Only</span>
                </div>
              </div>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 space-y-3"
            >
              {[
                "No ground reinforcement needed",
                "Safe operation near people & structures",
                "Reduced debris and dust disturbance",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-inter text-text text-sm">{benefit}</span>
                </div>
              ))}
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
                  src="/renders/5.png"
                  alt="StaticWing Downwash Comparison"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent" />
              </motion.div>

              {/* Corner accents */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-r-2 border-t-2 border-accent/50" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-2 border-b-2 border-accent/50" />

              {/* Floating label */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-lg border border-accent/30"
              >
                <span className="font-rajdhani text-sm text-accent font-semibold">Single Axis</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-surface to-transparent" />
    </section>
  );
}
