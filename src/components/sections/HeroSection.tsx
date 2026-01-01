"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{ y: videoY }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Hero Content with Parallax */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
        style={{ y: contentY, opacity }}
      >
        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-px h-20 bg-linear-to-b from-transparent via-accent to-transparent mb-8"
        />

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          THE FUTURE OF
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary">
            VERTICAL FLIGHT
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-inter text-lg md:text-xl text-text max-w-2xl mb-8 leading-relaxed"
        >
          Revolutionary VTOL technology delivering unmatched payload capacity,
          whisper-quiet operation, and zero downwash interference.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <button className="group relative px-8 py-4 font-rajdhani font-semibold text-lg tracking-wider uppercase overflow-hidden rounded-sm">
            <span className="relative z-10 text-white group-hover:text-background transition-colors duration-300">
              Discover StaticWing
            </span>
            <div className="absolute inset-0 border-2 border-accent rounded-sm" />
            <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-rajdhani text-sm text-text/60 tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-linear-to-b from-accent to-transparent"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Corner Decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="absolute top-24 left-6 w-20 h-20 border-l-2 border-t-2 border-accent/30" />
        <div className="absolute top-24 right-6 w-20 h-20 border-r-2 border-t-2 border-accent/30" />
        <div className="absolute bottom-24 left-6 w-20 h-20 border-l-2 border-b-2 border-accent/30" />
        <div className="absolute bottom-24 right-6 w-20 h-20 border-r-2 border-b-2 border-accent/30" />
      </motion.div>
    </section>
  );
}
