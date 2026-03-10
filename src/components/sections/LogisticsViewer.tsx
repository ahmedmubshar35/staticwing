"use client";

import { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { motion } from "motion/react";

useGLTF.preload("/logistics.glb");

function Model() {
  const { scene } = useGLTF("/logistics.glb");
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <svg
          className="animate-spin h-12 w-12 text-primary mx-auto mb-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <p className="text-text font-inter text-sm">Loading Model...</p>
      </div>
    </div>
  );
}

export default function LogisticsViewer() {
  const [autoRotate, setAutoRotate] = useState(true);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = canvasWrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-orbitron text-xl md:text-2xl font-bold text-white mb-2">
            Final <span className="text-accent">Render</span>
          </h2>
          <p className="font-inter text-sm text-text/60">
            Full render of the StaticWing in its operational configuration
          </p>
        </motion.div>

        <motion.div
          ref={canvasWrapperRef}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black/40 relative"
        >
          {inView ? (
            <Suspense fallback={<LoadingFallback />}>
              <Canvas
                camera={{ position: [0, 3, 8], fov: 45 }}
                style={{ background: "transparent" }}
                gl={{
                  antialias: true,
                  alpha: true,
                  powerPreference: "high-performance",
                }}
                dpr={[1, 1.5]}
              >
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 8, 5]} intensity={1} />
                <directionalLight position={[-5, 4, -5]} intensity={0.3} />
                <hemisphereLight
                  color="#3B82F6"
                  groundColor="#1A1B23"
                  intensity={0.3}
                />

                <Model />

                <OrbitControls
                  autoRotate={autoRotate}
                  autoRotateSpeed={1}
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                  minDistance={2}
                  maxDistance={16}
                  minPolarAngle={0.2}
                  maxPolarAngle={Math.PI / 2 + 0.3}
                />
              </Canvas>
            </Suspense>
          ) : (
            <LoadingFallback />
          )}

          {/* Auto-rotate toggle */}
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-rajdhani uppercase tracking-wider transition-all duration-300 ${
                autoRotate
                  ? "bg-accent/10 border-accent/30 text-accent"
                  : "bg-surface/50 border-white/10 text-text/50 hover:text-white hover:border-white/20"
              }`}
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              {autoRotate ? "Stop Rotate" : "Auto Rotate"}
            </button>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-accent/30 pointer-events-none" />
          <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-accent/30 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-accent/30 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-accent/30 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
