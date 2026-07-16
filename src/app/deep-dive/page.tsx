"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { usePassword } from "@/context/PasswordContext";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import PageHero from "@/components/ui/PageHero";
import Footer from "@/components/sections/Footer";
import DesignEvolution from "@/components/sections/DesignEvolution";
import TechnicalDeepDive from "@/components/sections/TechnicalDeepDive";
import CoreInnovationSection from "@/components/sections/CoreInnovationSection";


export default function StaticWingPage() {
    const router = useRouter();
    const { authorized, isLoading } = usePassword();

    useEffect(() => {
        if (!isLoading && !authorized) {
            router.push('/password');
        }
    }, [authorized, isLoading, router]);

    if (isLoading || !authorized) {
        return (
            <div className="fixed inset-0 bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                        <svg
                            className="animate-spin h-20 w-20 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </div>
                    <h2 className="text-primary font-orbitron text-2xl font-bold mb-2">
                        StaticWing
                    </h2>
                    <p className="text-text font-inter">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-screen overflow-x-clip bg-background">
            <Navbar />

            <PageHero
                title="STATIC"
                accentWord="WING"
                subtitle="Lift generation without forward velocity. Inspired by nature, engineered for the future of urban flight."
                joined
            />

            {/* Intro Section */}
            <section className="relative py-24 bg-background">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-8">
                        WHAT IS THE STATIC <br /><span className="text-primary">WING?</span>
                    </h2>
                </div>

                {/* Credibility Stats */}
                <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-16 text-center">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                        <div>
                            <span className="font-orbitron text-3xl sm:text-4xl font-bold text-white block mb-1">5</span>
                            <p className="font-inter text-sm text-text/60">Aerospace engineers on the core team</p>
                        </div>
                        <div>
                            <span className="font-orbitron text-3xl sm:text-4xl font-bold text-primary block mb-1">1,000+ kg</span>
                            <p className="font-inter text-sm text-text/60">Payload capacity, fully loaded</p>
                        </div>
                        <div>
                            <p className="font-rajdhani text-xs text-accent uppercase tracking-widest mb-3">Research Partners</p>
                            <div className="flex -space-x-2 justify-center">
                                {["UC", "CR", "SA", "SC", "BB"].map((initial) => (
                                    <span
                                        key={initial}
                                        className="w-10 h-10 rounded-full bg-background border border-accent/30 flex items-center justify-center text-xs font-rajdhani font-semibold text-accent"
                                    >
                                        {initial}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="font-orbitron text-3xl sm:text-4xl font-bold text-accent block mb-1">41.5°</span>
                            <p className="font-inter text-sm text-text/60">Rear deflection enabling pure VTOL, no runway required</p>
                        </div>
                    </div>

                    <p className="font-inter text-text/70 max-w-3xl mx-auto mt-10 pt-8 border-t border-white/5 leading-relaxed">
                        The StaticWing is an unconventional lifting configuration that produces aerodynamic lift at low or near-zero forward velocity — enabling hover-capable lift, extremely short takeoffs, and high lift coefficients without extreme angles of attack. Backed by a five-person aerospace engineering team, £5M+ in R&D project leadership, and research partnerships with UCL, Cranfield University, and Salford University, StaticWing pairs academic rigor with hands-on VTOL engineering.
                    </p>
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
                            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">
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

            <CoreInnovationSection />
            <DesignEvolution />
            <TechnicalDeepDive />


            <Footer />
        </div>
    );
}
