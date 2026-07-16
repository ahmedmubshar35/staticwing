"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const useCases = [
  {
    id: 1,
    title: "Search & Rescue",
    subtitle: "Emergency Response",
    description: "Rapid deployment in emergency situations with heavy payload capacity for medical supplies and rescue equipment. StaticWing's whisper-quiet operation and zero downwash make it safe to operate near casualties and rescue teams.",
    features: ["Medical Supply Delivery", "Thermal Imaging", "Remote Area Access", "24/7 Deployment"],
    image: "/renders/7.png",
    color: "red",
    reverse: false,
  },
  {
    id: 2,
    title: "Construction",
    subtitle: "Heavy Lift Operations",
    description: "Precision material delivery to elevated and hard-to-reach locations, reducing crane dependency and accelerating project timelines. The 1000+ kg payload capacity handles everything from steel beams to concrete components.",
    features: ["Material Delivery", "Site Surveying", "Progress Monitoring", "Reduced Equipment Costs"],
    image: "/renders/8.png",
    color: "amber",
    reverse: true,
  },
  {
    id: 3,
    title: "Military Operations",
    subtitle: "Tactical Advantage",
    description: "Enables tactical resupply and reconnaissance operations with low acoustic emissions and minimal thermal signature, supporting stealth deployment in contested or sensitive environments. StaticWing's propulsion configuration enhances operational security and mission discretion.",
    features: ["Stealth Operations", "ISR Missions", "Experimental weapons launcher reducing dependency on Airforce and Navy", "Zero Thermal Signature"],
    image: "/renders/9.png",
    color: "slate",
    reverse: false,
  },
  {
    id: 4,
    title: "Transportation & Logistics",
    subtitle: "Cargo Solutions",
    description: "Efficient cargo delivery over challenging terrain with 1000+ kg payload capacity and vertical takeoff capabilities. Perfect for last-mile delivery, island resupply, and accessing areas without runway infrastructure.",
    features: ["Heavy Cargo Transport", "Remote Delivery", "No Runway Required", "All-Weather Operations"],
    image: "/renders/10.png",
    color: "primary",
    reverse: true,
  },
];

const colorMap: Record<string, { accent: string; border: string; text: string; bg: string }> = {
  red: {
    accent: "text-red-400",
    border: "border-red-500/30",
    text: "text-red-400",
    bg: "bg-red-500/10",
  },
  amber: {
    accent: "text-amber-400",
    border: "border-amber-500/30",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  slate: {
    accent: "text-slate-300",
    border: "border-slate-400/30",
    text: "text-slate-300",
    bg: "bg-slate-400/10",
  },
  primary: {
    accent: "text-primary",
    border: "border-primary/30",
    text: "text-primary",
    bg: "bg-primary/10",
  },
};

export default function UseCasesSection() {
  return (
    <div className="bg-background">
      {useCases.map((useCase, index) => {
        const colors = colorMap[useCase.color];
        return (
          <section
            key={useCase.id}
            className="relative  bg-background overflow-hidden flex items-center py-24"
          >
            {/* Background Elements */}
            <div className="absolute inset-0">
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: "100px 100px",
                }}
              />

              {/* Glow effects */}
              <div className={`absolute top-1/3 ${useCase.reverse ? 'right-1/4' : 'left-1/4'} w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]`} />
              <div className={`absolute bottom-1/3 ${useCase.reverse ? 'left-1/4' : 'right-1/4'} w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]`} />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${useCase.reverse ? '' : ''}`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: useCase.reverse ? 50 : -50 }}
                  {...(index === 0 ? { animate: { opacity: 1, x: 0 } } : { whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0 } })}
                  transition={{ duration: 0.8 }}
                  className={`relative ${useCase.reverse ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="relative aspect-4/3 w-full">
                    {/* Glow behind image */}
                    <div className={`absolute inset-0 ${colors.bg} rounded-2xl blur-3xl scale-90 opacity-50`} />

                    {/* Image container */}
                    <div className={`relative z-10 w-full h-full rounded-2xl overflow-hidden border ${colors.border}`}>
                      <Image
                        src={useCase.image}
                        alt={useCase.title}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent" />
                    </div>

                    {/* Number badge */}
                    <div className={`absolute top-4 right-4 w-12 h-12 ${colors.bg} ${colors.border} border rounded-lg flex items-center justify-center`}>
                      <span className={`font-orbitron text-xl font-bold ${colors.text}`}>0{useCase.id}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: useCase.reverse ? -50 : 50 }}
                  {...(index === 0 ? { animate: { opacity: 1, x: 0 } } : { whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0 } })}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`${useCase.reverse ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <p className={`font-rajdhani text-sm tracking-[0.3em] uppercase mb-4 ${colors.accent}`}>
                    {useCase.subtitle}
                  </p>

                  <h2 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {useCase.title}
                  </h2>

                  <p className="font-inter text-text/80 text-lg leading-relaxed mb-8">
                    {useCase.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {useCase.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 20 }}
                        {...(index === 0 ? { animate: { opacity: 1, y: 0 } } : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0 } })}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                        className={`flex items-center gap-3 p-3 ${colors.bg} rounded-lg border ${colors.border}`}
                      >
                        <svg className={`w-5 h-5 ${colors.text} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-rajdhani text-sm text-text/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contextual CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    {...(index === 0 ? { animate: { opacity: 1, y: 0 } } : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0 } })}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-wrap items-center gap-4 mt-8"
                  >
                    <Link
                      href="/request-demo"
                      className={`group inline-flex items-center gap-2 px-6 py-3 ${colors.bg} border ${colors.border} rounded-full hover:bg-white/5 transition-all duration-300`}
                    >
                      <span className={`font-orbitron text-sm font-bold tracking-wider ${colors.text}`}>
                        REQUEST DEMO
                      </span>
                      <svg className={`w-4 h-4 ${colors.text} group-hover:translate-x-1 transition-transform`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>

                    <Link
                      href="/contact"
                      className="font-rajdhani text-sm text-text/60 hover:text-white uppercase tracking-wider transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-white/40"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-surface to-transparent" />
          </section>
        );
      })}

      {/* Bottom Stats Section */}
      <section className="relative bg-background overflow-hidden py-12">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0 }}
            className="text-center mb-12"
          >
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-4">
              READY FOR <span className="text-accent">ANY MISSION</span>
            </h3>
            <p className="font-inter text-text/60 max-w-2xl mx-auto">
              StaticWing combines stability, efficiency, and raw power to be adaptable across all industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          >
            <div className="flex items-center justify-center gap-3 p-4 sm:p-6">
              <span className="font-orbitron text-6xl sm:text-7xl font-bold text-accent">∞</span>
              <span className="font-rajdhani text-xs sm:text-sm text-text/60 uppercase tracking-wider">Adaptability</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 sm:p-6">
              <span className="font-orbitron text-2xl sm:text-3xl font-bold text-primary">1000+</span>
              <span className="font-rajdhani text-xs sm:text-sm text-text/60 uppercase tracking-wider">kg Payload</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 sm:p-6">
              <span className="font-orbitron text-2xl sm:text-3xl font-bold text-white">24/7</span>
              <span className="font-rajdhani text-xs sm:text-sm text-text/60 uppercase tracking-wider">Operational</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-surface to-transparent" />
      </section>
    </div>
  );
}
