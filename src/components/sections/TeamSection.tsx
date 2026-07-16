"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const avatarSizeClasses = {
  lg: "w-16 h-16 sm:w-20 sm:h-20",
  md: "w-12 h-12",
  sm: "w-10 h-10",
} as const;

const avatarIconSizeClasses = {
  lg: "w-8 h-8 sm:w-10 sm:h-10",
  md: "w-6 h-6",
  sm: "w-5 h-5",
} as const;

function TeamAvatar({
  image,
  alt,
  size,
  containerClassName,
  iconClassName,
}: {
  image?: string;
  alt: string;
  size: keyof typeof avatarSizeClasses;
  containerClassName: string;
  iconClassName: string;
}) {
  return (
    <div
      className={`relative ${avatarSizeClasses[size]} rounded-full flex items-center justify-center shrink-0 overflow-hidden ${containerClassName}`}
    >
      {image ? (
        <Image src={image} alt={alt} fill className="object-cover object-top" />
      ) : (
        <svg className={`${avatarIconSizeClasses[size]} ${iconClassName}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 2.239-7 5v2h14v-2c0-2.761-3.134-5-7-5z" />
        </svg>
      )}
    </div>
  );
}

const partnerLogos = [
  { name: "Salford University", type: "research" },
  { name: "UCL", type: "research" },
  { name: "Cranfield University", type: "research" },
  { name: "Schuebeler", type: "tech" },
  { name: "Blue Bear Systems", type: "tech" },
] as const;

function PartnerSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const track = [...partnerLogos, ...partnerLogos];

  return (
    <div
      className="relative overflow-hidden py-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background/60 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background/60 to-transparent z-10" />

      <div
        className="flex items-center gap-10 w-max animate-marquee"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {track.map((partner, index) => (
          <span
            key={`${partner.name}-${index}`}
            className="font-orbitron text-base sm:text-lg font-bold text-white/60 tracking-wide whitespace-nowrap hover:text-white transition-colors duration-300"
          >
            {partner.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background overflow-hidden py-12 sm:py-16"
    >
      {/* Background Elements */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
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
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 space-y-16 sm:space-y-20">

        {/* Group 1: Leadership */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-white">Leadership</h2>
              <p className="font-rajdhani text-xs sm:text-sm text-primary uppercase tracking-wider">Founders & Directors</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Neil Baxter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-linear-to-br from-primary/10 via-surface/30 to-transparent backdrop-blur-sm rounded-2xl border border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <TeamAvatar
                    image="/team/1.png"
                    alt="Neil Baxter"
                    size="lg"
                    containerClassName="bg-linear-to-br from-primary to-accent ring-2 ring-white/10"
                    iconClassName="text-white/90"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2 py-0.5 bg-primary/20 rounded text-xs font-rajdhani text-primary uppercase tracking-wider mb-2">Founder</span>
                    <h3 className="font-orbitron text-lg sm:text-xl font-bold text-white mb-1">Neil Baxter</h3>
                    <p className="font-rajdhani text-sm text-text/50 uppercase tracking-wider mb-3">Managing Director</p>
                    <p className="font-inter text-sm text-text/70 leading-relaxed">
                      Commercial pilot with 15+ years of aviation experience, leading technology development for VTOLUTION.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5 pl-[84px] sm:pl-[100px]">
                  <span className="px-2 py-1 bg-white/5 rounded text-xs font-rajdhani text-text/50">15+ Years Aviation</span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs font-rajdhani text-text/50">Commercial Pilot</span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs font-rajdhani text-text/50">Tech Lead</span>
                </div>
              </div>
            </motion.div>

            {/* Peter Oakland */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="relative h-full bg-linear-to-bl from-accent/10 via-surface/30 to-transparent backdrop-blur-sm rounded-2xl border border-accent/20 p-6 hover:border-accent/40 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <TeamAvatar
                    image="/team/2.webp"
                    alt="Peter Oakland"
                    size="lg"
                    containerClassName="bg-linear-to-br from-accent to-primary ring-2 ring-white/10"
                    iconClassName="text-white/90"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-orbitron text-lg sm:text-xl font-bold text-white mb-1">Peter Oakland</h3>
                    <p className="font-rajdhani text-sm text-text/50 uppercase tracking-wider mb-3">IP & Research Lead</p>
                    <p className="font-inter text-sm text-text/70 leading-relaxed">
                      25+ years of commercial piloting and entrepreneurial background. Responsible for IP-focused data research.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5 pl-[84px] sm:pl-[100px]">
                  <span className="px-2 py-1 bg-white/5 rounded text-xs font-rajdhani text-text/50">25+ Years Experience</span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs font-rajdhani text-text/50">IP Research</span>
                  <span className="px-2 py-1 bg-white/5 rounded text-xs font-rajdhani text-text/50">Entrepreneur</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Group 2: Technical Advisors */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-white">Technical Advisors</h2>
              <p className="font-rajdhani text-xs sm:text-sm text-accent uppercase tracking-wider">Engineering Excellence</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Prof. Oliviu */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0 }}
            >
              <div className="relative h-full bg-surface/30 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-accent/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <TeamAvatar
                    image="/team/3.jpg"
                    alt="Prof. Oliviu Sugar-Gabor"
                    size="md"
                    containerClassName="bg-accent/10 border border-accent/20 ring-2 ring-accent/10"
                    iconClassName="text-accent"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-orbitron text-base sm:text-lg font-bold text-white mb-1">Prof. Oliviu Sugar-Gabor</h3>
                    <p className="font-rajdhani text-xs text-accent uppercase tracking-wider mb-3">Aerodynamics Specialist</p>
                    <p className="font-inter text-xs sm:text-sm text-text/60 leading-relaxed">
                      Professor of Aerodynamics with significant experience in applied aerodynamics, CFD, and novel aircraft concepts.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pl-16">
                  <span className="px-2 py-0.5 bg-accent/10 border border-accent/20 rounded text-xs font-rajdhani text-accent/80">CFD</span>
                  <span className="px-2 py-0.5 bg-accent/10 border border-accent/20 rounded text-xs font-rajdhani text-accent/80">Aerodynamics</span>
                  <span className="px-2 py-0.5 bg-accent/10 border border-accent/20 rounded text-xs font-rajdhani text-accent/80">Novel Aircraft</span>
                </div>
              </div>
            </motion.div>

            {/* Prof. Pedram */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0 }}
            >
              <div className="relative h-full bg-surface/30 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <TeamAvatar
                    image="/team/4.jpg"
                    alt="Prof. Pedram Asef"
                    size="md"
                    containerClassName="bg-primary/10 border border-primary/20 ring-2 ring-primary/10"
                    iconClassName="text-primary"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-orbitron text-base sm:text-lg font-bold text-white mb-1">Prof. Pedram Asef</h3>
                    <p className="font-rajdhani text-xs text-primary uppercase tracking-wider mb-3">Propulsion Specialist</p>
                    <p className="font-inter text-xs sm:text-sm text-text/60 leading-relaxed">
                      Electric Propulsion Systems Specialist. Chartered Engineer (CEng), IEEE Senior Member, leading £5M+ R&D projects.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pl-16">
                  <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded text-xs font-rajdhani text-primary/80">Electric Propulsion</span>
                  <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded text-xs font-rajdhani text-primary/80">IEEE Senior</span>
                  <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded text-xs font-rajdhani text-primary/80">£5M+ R&D</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Group 3: Business Advisors */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-white">Business Advisors</h2>
              <p className="font-rajdhani text-xs sm:text-sm text-text/50 uppercase tracking-wider">Strategy & Investment</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Simon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0 }}
            >
              <div className="relative h-full bg-surface/20 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <TeamAvatar
                    image="/team/5.jpg"
                    alt="Simon Chadowitz"
                    size="sm"
                    containerClassName="bg-white/5 border border-white/10 ring-2 ring-white/5"
                    iconClassName="text-white/60"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-orbitron text-sm sm:text-base font-bold text-white">Simon Chadowitz</h3>
                    <p className="font-rajdhani text-xs text-text/40 uppercase tracking-wider mb-3">Investor & Advisor</p>
                    <p className="font-inter text-xs sm:text-sm text-text/50 leading-relaxed">
                      Law Firm Partner – investor and head of business strategy.
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/5 pl-14">
                  <span className="px-2 py-1 bg-white/5 rounded text-xs font-rajdhani text-text/40">Legal & Strategy</span>
                </div>
              </div>
            </motion.div>

            {/* Saul */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0 }}
            >
              <div className="relative h-full bg-surface/20 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <TeamAvatar
                    image="/team/6.jpg"
                    alt="Saul Henry Lewin"
                    size="sm"
                    containerClassName="bg-white/5 border border-white/10 ring-2 ring-white/5"
                    iconClassName="text-white/60"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-orbitron text-sm sm:text-base font-bold text-white">Saul Henry Lewin</h3>
                    <p className="font-rajdhani text-xs text-text/40 uppercase tracking-wider mb-3">Business Advisor</p>
                    <p className="font-inter text-xs sm:text-sm text-text/50 leading-relaxed">
                      Entrepreneur, Founder of Wingstop UK. Business & Strategy Advisor and Investor.
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/5 pl-14">
                  <span className="px-2 py-1 bg-white/5 rounded text-xs font-rajdhani text-text/40">Business Growth</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Group 4: Engineering Team */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0 }}
          >
            <div className="relative h-full bg-linear-to-br from-primary/10 to-accent/5 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-orbitron text-xl font-bold text-white">Engineering Team</h2>
                  <p className="font-rajdhani text-xs text-primary uppercase tracking-wider">Core Development</p>
                </div>
              </div>

              <p className="font-inter text-sm text-text/70 leading-relaxed mb-5">
                5 experienced aerospace engineers, some with military backgrounds, bringing operational insight into defence and humanitarian logistics.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-4 bg-background/50 rounded-xl border border-white/5">
                  <span className="font-orbitron text-2xl sm:text-3xl font-bold text-primary block">5</span>
                  <span className="font-rajdhani text-xs text-text/50 uppercase">Aerospace Engineers</span>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-xl border border-white/5">
                  <span className="font-orbitron text-2xl sm:text-3xl font-bold text-accent block">+</span>
                  <span className="font-rajdhani text-xs text-text/50 uppercase">Military Background</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Full-width Partnerships banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0 }}
        className="relative z-10 mt-16 sm:mt-20 py-12 sm:py-16 bg-linear-to-r from-accent/10 via-surface/40 to-primary/10 border-y border-accent/20"
      >
        <div className="max-w-3xl mx-auto px-6 text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/20 border border-accent/30 mb-4">
            <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <p className="font-rajdhani text-xs sm:text-sm text-accent uppercase tracking-wider mb-3">Research & Development</p>
          <h2 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-4">Partnerships</h2>
          <p className="font-inter text-sm sm:text-base text-text/70 leading-relaxed">
            Collaborating with leading universities and technology partners to push the boundaries of VTOL innovation.
          </p>
        </div>

        <PartnerSlider />
      </motion.div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-surface to-transparent" />
    </section>
  );
}
