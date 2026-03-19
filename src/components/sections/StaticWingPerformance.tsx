"use client";

import { motion } from "motion/react";

const FeatureItem = ({ number, title, desc }: { number: string; title: string, desc: string }) => (
    <div className="p-6 rounded-xl bg-surface/20 border border-white/5 hover:border-primary/30 hover:bg-surface/30 transition-all duration-300">
        <span className="font-orbitron text-4xl font-bold text-white/10 block mb-4">{number}</span>
        <h4 className="font-orbitron text-white text-lg font-bold mb-3">{title}</h4>
        <p className="text-text font-inter text-sm leading-relaxed">{desc}</p>
    </div>
);

export default function StaticWingPerformance() {
    return (
        <section className="relative py-24 bg-background">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-orbitron text-3xl font-bold text-white">
                        PERFORMANCE <span className="text-accent">METRICS</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FeatureItem
                        number="01"
                        title="Extended Range"
                        desc="The aerodynamically optimized low-drag cruise configuration reduces propulsion power requirements, improving range performance compared with conventional VTOL systems."
                    />
                    <FeatureItem
                        number="02"
                        title="Agile Turns"
                        desc="A coordinated thrust vectoring mechanism enables tight turning performance with limited bank angles, providing enhanced maneuverability for operations in confined urban environment."
                    />
                    <FeatureItem
                        number="03"
                        title="Passenger Comfort"
                        desc="Optimized short duration takeoff sequences and smooth lift-vector transitions decrease vibration loads and improve passenger ride quality."
                    />
                </div>
            </div>
        </section>
    );
}
