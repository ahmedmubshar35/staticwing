"use client";

import Image from "next/image";
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
    description: "Tactical resupply and reconnaissance with minimal acoustic signature and zero heat emissions for stealth operations. StaticWing's unique propulsion system provides unmatched operational security in sensitive environments.",
    features: ["Stealth Resupply", "ISR Missions", "Low Acoustic Signature", "Zero Thermal Signature"],
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

                    {/* Corner accents */}
                    <div className={`absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 ${colors.border}`} />
                    <div className={`absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 ${colors.border}`} />

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
            <div className="text-center p-4 sm:p-6 bg-surface/20 rounded-xl border border-white/5">
              <span className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-accent block">∞</span>
              <span className="font-rajdhani text-xs sm:text-sm text-text/60 uppercase tracking-wider">Adaptability</span>
            </div>
            <div className="text-center p-4 sm:p-6 bg-surface/20 rounded-xl border border-white/5">
              <span className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-primary block">1000+</span>
              <span className="font-rajdhani text-xs sm:text-sm text-text/60 uppercase tracking-wider">kg Payload</span>
            </div>
            <div className="text-center p-4 sm:p-6 bg-surface/20 rounded-xl border border-white/5">
              <span className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-white block">24/7</span>
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
