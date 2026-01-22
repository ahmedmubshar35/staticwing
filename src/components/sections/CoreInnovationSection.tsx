"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Define steps with estimated timestamps (in seconds)
// Note: These need to be adjusted based on the actual video content
const innovationSteps = [
    {
        id: 1,
        tag: "Dual Engine Setup",
        title: "Initial Activation",
        description: "Primary and secondary engines activate to generate the initial high-speed flowstream (FS1) directed at the aerofoil.",
        highlight: "FS1",
        highlightLabel: "Flowstream One",
        startTime: 0,
        endTime: 17,
    },
    {
        id: 2,
        tag: "The Problem",
        title: "Atmospheric Compression",
        description: "High atmospheric pressure suppresses the jet stream, preventing expansion and neutralizing lift generation.",
        highlight: "High",
        highlightLabel: "Atmospheric Pressure",
        startTime: 17,
        endTime: 32,
    },
    {
        id: 3,
        tag: "The Solution",
        title: "The Shrouding Effect",
        description: "Engine 2 (FS2) activates to shield the main jet. This 'shrouding' breaks the pressure barrier, allowing full expansion.",
        highlight: "FS2",
        highlightLabel: "Shielding Flowstream",
        startTime: 32,
        endTime: 65,
    },
    {
        id: 4,
        tag: "Testing Dynamics",
        title: "Lift Cycle & Oscillation",
        description: "As lift pulls the wing down, it momentarily escapes the jet. The spring recoil creates a measurable oscillation cycle.",
        highlight: "Peak",
        highlightLabel: "Lift Measurement",
        startTime: 65,
        endTime: 83,
    },
    {
        id: 5,
        tag: "Real Application",
        title: "Continuous Vertical Movement",
        description: "In flight configuration, the wing remains fixed in the jet stream, converting oscillation into powerful, continuous thrust.",
        highlight: "Continuous",
        highlightLabel: "Thrust Generation",
        startTime: 83,
        endTime: 104,
    },
];

export default function CoreInnovationSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [activeStep, setActiveStep] = useState(innovationSteps[0]);

    useEffect(() => {
        const currentStep = innovationSteps.find(
            (step) => currentTime >= step.startTime && currentTime < step.endTime
        );
        if (currentStep && currentStep.id !== activeStep.id) {
            setActiveStep(currentStep);
        }
    }, [currentTime, activeStep.id]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (videoRef.current) {
                        // Try playing unmuted first (as requested)
                        videoRef.current.muted = false;
                        setIsMuted(false);

                        videoRef.current.play()
                            .then(() => setIsPlaying(true))
                            .catch((e) => {
                                console.log("Unmuted autoplay prevented, falling back to muted:", e);
                                // Fallback to muted autoplay
                                if (videoRef.current) {
                                    videoRef.current.muted = true;
                                    setIsMuted(true);
                                    videoRef.current.play()
                                        .then(() => setIsPlaying(true))
                                        .catch((e2) => {
                                            console.error("Autoplay failed completely:", e2);
                                            setIsPlaying(false);
                                        });
                                }
                            });
                    }
                } else {
                    if (videoRef.current) {
                        videoRef.current.pause();
                        setIsPlaying(false);
                    }
                }
            },
            { threshold: 0.6 } // Play when 60% visible
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <section className="relative bg-black py-16 lg:py-24 overflow-hidden border-y border-white/5">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-rajdhani text-accent text-sm tracking-[0.3em] uppercase block mb-3"
                    >
                        Deep Dive Mechanics
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-orbitron text-3xl md:text-5xl font-bold text-white"
                    >
                        THE <span className="text-primary">SHROUDING</span> EFFECT
                    </motion.h2>
                </div>

                {/* Cinema Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-surface/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 lg:p-6 shadow-2xl items-center">

                    {/* Left: Video Player (8 cols) */}
                    <div className="lg:col-span-8 relative rounded-xl overflow-hidden bg-black/50 border border-white/5 aspect-video flex flex-col group">
                        <video
                            ref={videoRef}
                            src="/static-wing/propulsion-system.mp4"
                            className="w-full h-full object-cover flex-1"
                            playsInline
                            loop
                            muted={isMuted}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                            onClick={togglePlay}
                        />

                        {/* Tap for Sound Overlay (Visible when playing muted) */}
                        <AnimatePresence>
                            {isPlaying && isMuted && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                                    className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/60 hover:bg-primary/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 group transition-all"
                                >
                                    <svg className="w-4 h-4 text-white group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                    </svg>
                                    <span className="text-xs font-rajdhani font-bold text-white uppercase tracking-wider group-hover:text-black">Tap for Sound</span>
                                </motion.button>
                            )}
                        </AnimatePresence>

                        {/* Custom Controls Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/50 to-transparent px-4 pb-4 pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <input
                                type="range"
                                min="0"
                                max={duration || 100}
                                value={currentTime}
                                onChange={handleSeek}
                                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary mb-4 hover:h-1.5 transition-all"
                            />

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <button onClick={togglePlay} className="text-white hover:text-primary transition-colors">
                                        {isPlaying ? (
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                                        ) : (
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        )}
                                    </button>

                                    <button onClick={toggleMute} className="text-white hover:text-primary transition-colors">
                                        {isMuted ? (
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" /></svg>
                                        ) : (
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
                                        )}
                                    </button>

                                    <span className="text-xs font-rajdhani font-medium text-white/80 tracking-wider">
                                        {formatTime(currentTime)} / {formatTime(duration)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Interactive Content (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col justify-center">

                        {/* Dynamic Content Area */}
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex flex-col"
                                >
                                    {/* Progress Line */}
                                    <div className="w-12 h-1 bg-primary mb-6" />

                                    <span className="font-rajdhani text-primary text-sm uppercase tracking-widest mb-3 font-semibold">
                                        {activeStep.tag}
                                    </span>

                                    <h3 className="font-orbitron text-3xl font-bold text-white mb-6">
                                        {activeStep.title}
                                    </h3>

                                    <p className="font-inter text-text/90 text-lg leading-relaxed mb-8">
                                        {activeStep.description}
                                    </p>

                                    <div className="pt-6 border-t border-white/10">
                                        <span className="block text-xs text-text/50 uppercase tracking-wider mb-2">Key Metric</span>
                                        <div className="flex items-center gap-3">
                                            <span className="font-orbitron text-2xl font-bold text-white">
                                                {activeStep.highlight}
                                            </span>
                                            <span className="font-rajdhani text-sm text-primary uppercase">
                                                {activeStep.highlightLabel}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <p className="text-center text-text/40 text-xs font-inter mt-8 max-w-2xl mx-auto italic">
                    Demo: Aerofoil inverted for reliable lift measurement.
                </p>

            </div>
        </section>
    );
}
