"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";

const evolutionStages = [
    {
        id: 1,
        image: "/static-wing/design-evolution/1.png",
        title: "Initial Concept",
        description: "Early explorations of the static wing geometry, focusing on basic lift principles without forward velocity.",
        year: "Phase 1"
    },
    {
        id: 2,
        image: "/static-wing/design-evolution/2.png",
        title: "Airfoil Refinement",
        description: "Optimization of the airfoil shape to maximize pressure differentials using computational fluid dynamics (CFD).",
        year: "Phase 2"
    },
    {
        id: 3,
        image: "/static-wing/design-evolution/3.png",
        title: "Flow Integration",
        description: "Integration of active flow control channels to guide airflow precisely over the critical surfaces.",
        year: "Phase 3"
    },
    {
        id: 4,
        image: "/static-wing/design-evolution/4.png",
        title: "Structural Optimization",
        description: "Balancing aerodynamic performance with structural integrity and weight reduction.",
        year: "Phase 4"
    },
    {
        id: 5,
        image: "/static-wing/design-evolution/5.png",
        title: "Final Configuration",
        description: "The mature static wing design, fully optimized for high-efficiency lift generation and stability.",
        year: "Phase 5"
    },
];

export default function DesignEvolution() {
    const [activeStage, setActiveStage] = useState(0);

    return (
        <section className="relative py-24 bg-background overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="font-rajdhani text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
                        Iteration & Improvement
                    </span>
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">
                        DESIGN <span className="text-primary">EVOLUTION</span>
                    </h2>
                    <p className="max-w-2xl text-text font-inter text-lg">
                        The journey from theoretical concept to validated reality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Navigation/Timeline */}
                    <div className="lg:col-span-4 space-y-4">
                        {evolutionStages.map((stage, index) => (
                            <button
                                key={stage.id}
                                onClick={() => setActiveStage(index)}
                                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group ${activeStage === index
                                        ? "bg-primary/10 border-primary/50"
                                        : "bg-surface/20 border-white/5 hover:bg-surface/40 hover:border-white/10"
                                    }`}
                            >
                                <div className="flex items-center justify-between relative z-10">
                                    <div>
                                        <span className={`font-rajdhani text-xs uppercase tracking-wider block mb-1 ${activeStage === index ? "text-primary" : "text-text/60"}`}>
                                            {stage.year}
                                        </span>
                                        <span className={`font-orbitron text-lg font-bold block ${activeStage === index ? "text-white" : "text-white/70"}`}>
                                            {stage.title}
                                        </span>
                                    </div>
                                    {activeStage === index && (
                                        <motion.div layoutId="active-dot" className="w-2 h-2 bg-primary rounded-full box-shadow-glow" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right: Display Area */}
                    <div className="lg:col-span-8 bg-surface/10 rounded-3xl border border-white/10 p-2 lg:p-4 aspect-4/3 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStage}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full relative rounded-2xl overflow-hidden"
                            >
                                <Image
                                    src={evolutionStages[activeStage].image}
                                    alt={evolutionStages[activeStage].title}
                                    fill
                                    className="object-contain bg-black/40"
                                    priority
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/90 via-black/60 to-transparent">
                                    <p className="font-inter text-white/90 text-lg">
                                        {evolutionStages[activeStage].description}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
}
