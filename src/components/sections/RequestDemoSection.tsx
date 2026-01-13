"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

export default function RequestDemoSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            // Modify payload to include specific subject line instruction or handle specifically in API if needed
            // For now, we reuse the generic email endpoint. 
            // We append Company/Phone to message or send as is if API supports it.
            // Based on existing api/email/route.ts, it expects {name, email, message, isPasswordRequest}.
            // We will combine extra fields into the message or update API. 
            // For minimal friction, let's format the message to include Company and Phone.

            const formattedMessage = `
Company: ${formData.company}
Phone: ${formData.phone}

Message:
${formData.message}
      `;

            const response = await fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formattedMessage,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", company: "", phone: "", message: "" });
            } else {
                const data = await response.json();
                setErrorMessage(data.error || "Failed to submit request");
                setStatus("error");
            }
        } catch {
            setErrorMessage("Something went wrong. Please try again.");
            setStatus("error");
        }
    };

    return (
        <section
            id="request-demo"
            ref={sectionRef}
            className="relative min-h-screen bg-background overflow-hidden flex items-center py-20"
        >
            {/* Background Elements */}
            <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
                {/* Subtle grid */}
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

                {/* Glow effects */}
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
            </motion.div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left - Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-10">
                            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6">
                                Experience <span className="text-accent">The Future</span>
                            </h2>
                            <p className="font-inter text-text/70 leading-relaxed text-lg mb-8">
                                Schedule a personalized demonstration of the StaticWing platform. See how our revolutionary VTOL technology can transform your operations with unmatched efficiency and payload capacity.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-surface/30 border border-white/10 flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-rajdhani text-lg font-bold text-white mb-1">Tailored Walkthrough</h3>
                                        <p className="font-inter text-text/60 text-sm">We&apos;ll customize the demo to focus on your specific use cases and industry requirements.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-surface/30 border border-white/10 flex items-center justify-center shrink-0">
                                        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-rajdhani text-lg font-bold text-white mb-1">Technical Deep Dive</h3>
                                        <p className="font-inter text-text/60 text-sm">Get answers to complex technical questions from our engineering team.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="bg-surface/30 backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-10">
                            <h3 className="font-orbitron text-xl font-bold text-white mb-6">Request Your Demo</h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="font-rajdhani text-sm text-accent uppercase tracking-wider mb-2 block">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg font-inter text-white placeholder:text-text/40 focus:outline-none focus:border-accent/50 transition-colors duration-300"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="font-rajdhani text-sm text-accent uppercase tracking-wider mb-2 block">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg font-inter text-white placeholder:text-text/40 focus:outline-none focus:border-accent/50 transition-colors duration-300"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {/* Company */}
                                    <div>
                                        <label htmlFor="company" className="font-rajdhani text-sm text-accent uppercase tracking-wider mb-2 block">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg font-inter text-white placeholder:text-text/40 focus:outline-none focus:border-accent/50 transition-colors duration-300"
                                            placeholder="Company Name"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="font-rajdhani text-sm text-accent uppercase tracking-wider mb-2 block">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg font-inter text-white placeholder:text-text/40 focus:outline-none focus:border-accent/50 transition-colors duration-300"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="font-rajdhani text-sm text-accent uppercase tracking-wider mb-2 block">
                                        Specific Interests *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-lg font-inter text-white placeholder:text-text/40 focus:outline-none focus:border-accent/50 transition-colors duration-300 resize-none"
                                        placeholder="Tell us what you'd like to see in the demo..."
                                    />
                                </div>

                                {/* Status Messages */}
                                {status === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                                    >
                                        <p className="font-inter text-green-400 text-sm">
                                            Request received! We&apos;ll be in touch shortly to schedule your demo.
                                        </p>
                                    </motion.div>
                                )}

                                {status === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                                    >
                                        <p className="font-inter text-red-400 text-sm">{errorMessage}</p>
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="group relative w-full px-8 py-4 font-rajdhani font-semibold text-sm tracking-wider uppercase overflow-hidden rounded-lg border border-primary/50 hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10 text-primary group-hover:text-background transition-colors duration-300 flex items-center justify-center gap-2">
                                        {status === "loading" ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                Schedule Demo
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left group-disabled:scale-x-0" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-surface to-transparent" />
        </section>
    );
}
