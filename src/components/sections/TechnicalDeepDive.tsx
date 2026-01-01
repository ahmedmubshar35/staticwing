"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { section } from "motion/react-client";

export default function TechnicalDeepDive() {
    return (
        <section className="relative py-24 bg-background overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="font-rajdhani text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
                        Under the Hood
                    </span>
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">
                        TECHNICAL <span className="text-primary">DEEP DIVE</span>
                    </h2>
                </motion.div>

                {/* 1. Airfoil Optimization */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-orbitron text-2xl font-bold text-white mb-6">
                            Airfoil <span className="text-accent">Parametrization</span>
                        </h3>
                        <p className="font-inter text-text text-lg leading-relaxed mb-6">
                            The core of the Static Wing efficiency lies in its highly specific airfoil parametrization.
                            Using advanced algorithms, we've optimized the curvature to maintain attached flow even at high angles of flow incidence.
                        </p>
                        <ul className="space-y-3 font-rajdhani text-white/80">
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                Maximized Laminar Flow Region
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                Delayed Boundary Layer Separation
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                Minimized Pressure Drag
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                    >
                        <Image
                            src="/static-wing/airfoil/airfoil-parametrization.png"
                            alt="Airfoil Parametrization"
                            fill
                            className="object-contain p-4 bg-white"
                        />
                    </motion.div>
                </div>

                {/* Drag Buildup Analysis */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="text-center mb-8">
                        <h4 className="font-orbitron text-xl font-bold text-white mb-2">
                            Drag <span className="text-accent">Buildup</span>
                        </h4>
                        <p className="text-text/70 font-inter text-sm max-w-xl mx-auto">
                            Analysis of drag components across the airfoil surface
                        </p>
                    </div>
                    <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                        <div className="aspect-video relative">
                            <Image
                                src="/static-wing/airfoil/drag-buildup.png"
                                alt="Drag Buildup Analysis"
                                fill
                                className="object-contain p-4 bg-white"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* 2. Flow Control - Split Layout */}
                <div className="mb-32">
                    <div className="text-center mb-12">
                        <h3 className="font-orbitron text-2xl font-bold text-white">
                            Active <span className="text-primary">Flow Control</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative rounded-2xl bg-surface/10 border border-white/10 overflow-hidden">
                                <div className="aspect-4/3 relative">
                                    <Image
                                        src="/static-wing/streamlines-of-flow-stream.png"
                                        alt="Streamlines of Flow"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 px-2">
                                <h4 className="text-white font-orbitron text-lg mb-2">Flow Streamlines</h4>
                                <p className="text-sm text-text/70 font-inter">Visualizing the smooth adherence of air across the upper surface, critical for lift generation.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative rounded-2xl bg-surface/10 border border-white/10 overflow-hidden">
                                <div className="aspect-4/3 relative">
                                    <Image
                                        src="/static-wing/custom-duct-design-for-distribution-of-flow-stream.png"
                                        alt="Custom Duct Design"
                                        fill
                                        className="object-contain p-8 bg-black/60 group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 px-2">
                                <h4 className="text-white font-orbitron text-lg mb-2">Custom Duct Geometry</h4>
                                <p className="text-sm text-text/70 font-inter">Engineered internal ducting ensures uniform pressure distribution and accelerated outflow.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 3. Propulsion System */}
                <div className="bg-surface/10 rounded-3xl p-8 lg:p-12 border border-white/5 relative overflow-hidden">
                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                        <div className="lg:col-span-2">
                            <span className="font-rajdhani text-primary text-xs tracking-widest uppercase mb-2 block">Power Unit</span>
                            <h3 className="font-orbitron text-3xl font-bold text-white mb-6">
                                Custom <br />Propulsion
                            </h3>
                            <p className="font-inter text-text leading-relaxed">
                                The heartbeat of the Static Wing. Our custom-designed propulsion system is integrated directly into the wing structure, minimizing parasitic drag while maximizing thrust efficiency.
                            </p>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video bg-black/40">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src="/static-wing/custom-propulsion-system.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Design Optimization Section */}
                <div className="mt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="font-rajdhani text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
                            Performance Analysis
                        </span>
                        <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-4">
                            Design <span className="text-accent">Optimization</span>
                        </h3>
                        <p className="text-text/80 font-inter mt-4 max-w-2xl mx-auto">
                            Drag minimization iterations through CFD analysis, refining airfoil geometry for optimal performance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <motion.div
                                key={`min-drag-${num}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: num * 0.1 }}
                                className="relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-accent/30 transition-colors group"
                            >
                                <Image
                                    src={`/static-wing/airfoil/airfoil-design-for-min-drag.png/${num}.png`}
                                    alt={`Design Optimization Graph ${num}`}
                                    fill
                                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Iteration Number Badge */}
                                <div className="absolute top-2 left-2 bg-accent/90 text-black font-orbitron text-xs font-bold px-2 py-1 rounded-md">
                                    {num}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-xs text-center font-rajdhani text-white/50 uppercase tracking-wider mt-6">
                        Drag Minimization Iterations
                    </p>
                </div>

                {/* 5. Multi-variable Optimization Section */}
                <div className="mt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="font-rajdhani text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
                            CFD Results
                        </span>
                        <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-4">
                            Multi-variable <span className="text-primary">Optimization</span>
                        </h3>
                        <p className="text-text/80 font-inter mt-4 max-w-2xl mx-auto">
                            Comprehensive optimization across multiple variables, showing the evolution of airfoil performance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <motion.div
                                key={`optimization-${num}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: num * 0.05 }}
                                className="relative aspect-square bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-colors group"
                            >
                                <Image
                                    src={`/static-wing/airfoil/airfoil-optimization.png/${num}.png`}
                                    alt={`Optimization Graph ${num}`}
                                    fill
                                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Iteration Number Badge */}
                                <div className="absolute top-2 left-2 bg-primary/90 text-black font-orbitron text-xs font-bold px-2 py-1 rounded-md">
                                    {num}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Airfoil Performance Data Cards */}
                    <div className="mt-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px flex-1 bg-white/10" />
                            <span className="font-rajdhani text-primary uppercase tracking-widest text-sm">CFD Simulation Results</span>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Airfoil 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="relative bg-surface/10 rounded-xl p-5 border border-white/10 hover:border-accent/30 transition-all duration-300 group"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                                            <span className="font-orbitron text-accent font-bold text-sm">1</span>
                                        </div>
                                        <h4 className="font-orbitron text-lg font-bold text-white">Airfoil 1</h4>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="font-inter text-text/60 text-sm">Drag</span>
                                            <span className="font-orbitron text-white font-semibold">~15 KN</span>
                                        </div>
                                        <div className="h-px bg-white/10" />
                                        <div className="flex items-center justify-between">
                                            <span className="font-inter text-text/60 text-sm">Lift</span>
                                            <span className="font-orbitron text-white/40 text-sm">—</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Airfoil 5 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative bg-surface/10 rounded-xl p-5 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                            <span className="font-orbitron text-primary font-bold text-sm">5</span>
                                        </div>
                                        <h4 className="font-orbitron text-lg font-bold text-white">Airfoil 5</h4>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="font-inter text-text/60 text-sm">Drag</span>
                                            <span className="font-orbitron text-white font-semibold">~11.7 KN</span>
                                        </div>
                                        <div className="h-px bg-white/10" />
                                        <div className="flex items-center justify-between">
                                            <span className="font-inter text-text/60 text-sm">Lift</span>
                                            <span className="font-orbitron text-white/40 text-sm">—</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Airfoil 6 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="relative bg-surface/10 rounded-xl p-5 border border-white/10 hover:border-accent/30 transition-all duration-300 group"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                                            <span className="font-orbitron text-accent font-bold text-sm">6</span>
                                        </div>
                                        <h4 className="font-orbitron text-lg font-bold text-white">Airfoil 6</h4>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="font-inter text-text/60 text-sm">Drag</span>
                                            <span className="font-orbitron text-white font-semibold">~11.7 KN</span>
                                        </div>
                                        <div className="h-px bg-white/10" />
                                        <div className="flex items-center justify-between">
                                            <span className="font-inter text-text/60 text-sm">Lift</span>
                                            <span className="font-orbitron text-primary font-semibold">28.5 KN</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Airfoil 10 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="relative bg-surface/10 rounded-xl p-5 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                            <span className="font-orbitron text-primary font-bold text-sm">10</span>
                                        </div>
                                        <h4 className="font-orbitron text-lg font-bold text-white">Airfoil 10</h4>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="font-inter text-text/60 text-sm">Drag</span>
                                            <span className="font-orbitron text-white font-semibold">~12.2 KN</span>
                                        </div>
                                        <div className="h-px bg-white/10" />
                                        <div className="flex items-center justify-between">
                                            <span className="font-inter text-text/60 text-sm">Lift</span>
                                            <span className="font-orbitron text-primary font-semibold">30.5 KN</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Performance Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 bg-surface/5 rounded-xl p-6 border border-white/5"
                        >
                            <p className="text-center text-text/70 font-inter text-sm">
                                <span className="text-accent font-semibold">Key Insight:</span> From Airfoil 1 to Airfoil 10, drag was reduced by <span className="text-white font-semibold">~19%</span> while achieving <span className="text-primary font-semibold">30.5 KN</span> of lift — demonstrating significant aerodynamic efficiency improvements through iterative optimization.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
