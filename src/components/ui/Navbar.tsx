"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Technology", href: "/technology" },
  { name: "Applications", href: "/applications" },
  { name: "Team", href: "/team" },
  { name: "Deep Dive", href: "/deep-dive" },
  { name: "Request Demo", href: "/request-demo" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center">
            <span className="font-orbitron text-2xl font-bold tracking-wider text-white">
              STATIC<span className="text-accent">WING</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-rajdhani text-sm tracking-wider uppercase transition-colors duration-300 ${isActive(link.href)
                  ? "text-accent"
                  : "text-text/70 hover:text-white"
                  }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block origin-center"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden"
          >
            {/* Background grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />

            {/* Glow effects */}
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative z-10 flex flex-col items-center justify-center h-full gap-8 pt-20"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-orbitron text-2xl tracking-wider uppercase transition-colors duration-300 ${isActive(link.href)
                      ? "text-accent"
                      : "text-white hover:text-accent"
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Company branding */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="absolute bottom-10 flex items-center gap-2"
              >
                <span className="font-rajdhani text-sm text-text/50">A product of</span>
                <Link
                  href="https://vtolution.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-orbitron text-sm text-primary hover:text-accent transition-colors duration-300"
                >
                  VTOLUTION
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
