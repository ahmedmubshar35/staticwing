"use client";

import { motion } from "motion/react";

const colorThemes = {
    primary: {
        line: "bg-primary",
        badgeBg: "bg-primary/10",
        badgeBorder: "border-primary/30",
        icon: "text-primary",
        hoverBorder: "hover:border-primary/30",
    },
    accent: {
        line: "bg-accent",
        badgeBg: "bg-accent/10",
        badgeBorder: "border-accent/30",
        icon: "text-accent",
        hoverBorder: "hover:border-accent/30",
    },
    violet: {
        line: "bg-violet-400",
        badgeBg: "bg-violet-400/10",
        badgeBorder: "border-violet-400/30",
        icon: "text-violet-400",
        hoverBorder: "hover:border-violet-400/30",
    },
} as const;

type ThemeKey = keyof typeof colorThemes;

const FeatureItem = ({
    number,
    title,
    desc,
    theme,
    icon,
}: {
    number: string;
    title: string;
    desc: string;
    theme: ThemeKey;
    icon: React.ReactNode;
}) => {
    const c = colorThemes[theme];
    return (
        <div className={`relative overflow-hidden p-6 rounded-xl bg-surface/20 border border-white/5 ${c.hoverBorder} hover:bg-surface/30 transition-all duration-300`}>
            {/* Accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 ${c.line} opacity-70`} />

            <div className="flex items-start justify-between mb-5">
                {/* Icon badge */}
                <div className={`w-12 h-12 rounded-full ${c.badgeBg} border ${c.badgeBorder} flex items-center justify-center`}>
                    <svg className={`w-6 h-6 ${c.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {icon}
                    </svg>
                </div>
                <span className="font-orbitron text-3xl font-bold text-white/10">{number}</span>
            </div>

            <h4 className="font-orbitron text-white text-lg font-bold mb-3">{title}</h4>
            <p className="text-text font-inter text-sm leading-relaxed">{desc}</p>
        </div>
    );
};

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
                        theme="primary"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                            />
                        }
                        desc="The aerodynamically optimized low-drag cruise configuration reduces propulsion power requirements, improving range performance compared with conventional VTOL systems."
                    />
                    <FeatureItem
                        number="02"
                        title="Agile Turns"
                        theme="accent"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                        }
                        desc="A coordinated thrust vectoring mechanism enables tight turning performance with limited bank angles, providing enhanced maneuverability for operations in confined urban environment."
                    />
                    <FeatureItem
                        number="03"
                        title="Passenger Comfort"
                        theme="violet"
                        icon={
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                        }
                        desc="Optimized short duration takeoff sequences and smooth lift-vector transitions decrease vibration loads and improve passenger ride quality."
                    />
                </div>
            </div>
        </section>
    );
}
