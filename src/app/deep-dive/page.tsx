"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import DesignEvolution from "@/components/sections/DesignEvolution";
import TechnicalDeepDive from "@/components/sections/TechnicalDeepDive";


export default function StaticWingPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className="w-screen overflow-x-hidden bg-background">
            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                {/* Background Video or Image would go here - using simple gradient for now matching theme */}
                <div className="absolute inset-0 bg-background">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15)_0%,transparent_50%)]" />
                    <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <motion.div style={{ y }} className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-rajdhani text-accent text-sm md:text-base tracking-[0.5em] uppercase block mb-6"
                    >
                        Next Gen Aerodynamics
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-orbitron text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6"
                    >
                        STATIC<span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">WING</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-text/80 font-inter text-lg md:text-xl"
                    >
                        Lift generation without forward velocity. Inspired by nature, engineered for the future of urban flight.
                    </motion.p>
                </motion.div>
            </section>

            {/* Intro Section */}
            <section className="relative py-24 bg-background">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-8">
                        WHAT IS THE <br /><span className="text-primary">STATIC WING?</span>
                    </h2>
                    <div className="prose prose-lg prose-invert text-text/90 font-inter mx-auto">
                        <p className="mb-6">
                            The static wing is a revolutionary configuration designed to generate lift with minimal or zero forward airspeed. Unlike traditional fixed wings that rely on velocity, the Static Wing exploits controlled airflow redirection and pressure differentials.
                        </p>
                        <p>
                            This allows for hover and near-hover lift generation, extremely short takeoffs, and high lift coefficients without excessive angles of attack.
                        </p>
                    </div>
                </div>
            </section>

            {/* Biomimicry Section */}
            <section className="relative py-24 bg-surface/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="font-rajdhani text-accent text-sm tracking-[0.3em] uppercase mb-4 block">
                                Biomimicry
                            </span>
                            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6">
                                INSPIRED BY <br /><span className="text-primary">NATURE</span>
                            </h2>
                            <div className="prose prose-invert text-text font-inter">
                                <p className="mb-4">
                                    In nature, large birds such as eagles and hawks are often observed remaining stationary relative to the ground during strong headwinds or updrafts. These birds reshape their wings to maximize lift and minimize drag, allowing them to generate lift even when ground speed is zero.
                                </p>
                                <p>
                                    The energy required for lift comes from ambient airflow rather than forward motion. This phenomenon closely mirrors the static wing concept, where engine-induced or environmental airflow replaces forward speed as the lift-generating mechanism.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg relative aspect-4/3 bg-black/40">
                                {/* Biomimicry Video */}
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover opacity-80"
                                >
                                    <source src="/static-wing/video.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                    <span className="text-white text-xs font-rajdhani uppercase tracking-widest">Natural Phenomenon: Bird Hover</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DesignEvolution />
            <TechnicalDeepDive />


            <Footer />
        </div>
    );
}
