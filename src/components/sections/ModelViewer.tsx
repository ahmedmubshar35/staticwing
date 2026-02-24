"use client";

import { Suspense, useState, useCallback, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "motion/react";

useGLTF.preload("/staticwing.glb");

interface Hotspot {
  id: string;
  label: string;
  position: [number, number, number];
  description: string;
}

// Positions derived from GLB mesh bounding box analysis:
// Model centered at origin, spans X:[-4.5,4.5] Y:[-2.9,2.9] Z:[-2.4,2.4]
// Rear engines at negative X, nose at positive X, top fans at high Y, landing gear at low Y
const hotspots: Hotspot[] = [
  {
    id: "vtol-fans",
    label: "VTOL Lift Fans",
    position: [0.39, 2.36, 2.24],
    description:
      "Dual top-mounted ducted fans providing vertical lift. The FS2 shrouding effect enables full jet expansion and continuous thrust.",
  },
  {
    id: "rear-thrust",
    label: "Rear Propulsion",
    position: [-4.50, 0.46, 0.07],
    description:
      "Dual counter-thrust engines for forward propulsion and VTOL-to-cruise transition. Rear section redirects airflow at 41.5\u00B0 for vertical thrust.",
  },
  {
    id: "fuselage",
    label: "Fuselage & Payload",
    position: [-1.03, -1.34, 0.40],
    description:
      "Reinforced central fuselage for heavy payload integration. Supports up to 1,000+ kg with balanced weight distribution.",
  },
  {
    id: "landing-gear",
    label: "Landing Gear",
    position: [3.75, -2.33, 1.90],
    description:
      "Lightweight gear designed for StaticWing\u2019s single-axis downwash. No reinforced landing sites needed \u2014 safe near people and structures.",
  },
];

const DEFAULT_CAMERA = new THREE.Vector3(0, 3, 8);
const ZOOM_OFFSET = new THREE.Vector3(0, 1, 4);

function CameraController({ activeHotspot }: { activeHotspot: string | null }) {
  const { gl } = useThree();
  const targetPos = useRef(new THREE.Vector3());
  const targetLookAt = useRef(new THREE.Vector3());
  const isAnimating = useRef(false);

  useEffect(() => {
    const hotspot = hotspots.find((h) => h.id === activeHotspot);
    if (hotspot) {
      const pos = new THREE.Vector3(...hotspot.position);
      targetLookAt.current.copy(pos);
      targetPos.current.copy(pos).add(ZOOM_OFFSET);
      isAnimating.current = true;
    } else {
      targetPos.current.copy(DEFAULT_CAMERA);
      targetLookAt.current.set(0, 0, 0);
      isAnimating.current = true;
    }
  }, [activeHotspot]);

  // Stop animation if user interacts
  useEffect(() => {
    const el = gl.domElement;
    const stop = () => { isAnimating.current = false; };
    el.addEventListener("pointerdown", stop);
    el.addEventListener("wheel", stop);
    return () => {
      el.removeEventListener("pointerdown", stop);
      el.removeEventListener("wheel", stop);
    };
  }, [gl]);

  useFrame((state) => {
    if (!isAnimating.current) return;
    const cam = state.camera;
    cam.position.lerp(targetPos.current, 0.08);
    const controls = state.controls as unknown as { target: THREE.Vector3 };
    if (controls?.target) {
      controls.target.lerp(targetLookAt.current, 0.08);
    }
    if (cam.position.distanceTo(targetPos.current) < 0.05) {
      isAnimating.current = false;
    }
  });

  return null;
}

function Model() {
  const { scene } = useGLTF("/staticwing.glb");
  return (
    <Center>
      <primitive
        object={scene}
        onPointerDown={(e: { stopPropagation: () => void; point: { x: number; y: number; z: number } }) => {
          e.stopPropagation();
          const p = e.point;
          console.log(`CLICKED: [${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)}]`);
        }}
      />
    </Center>
  );
}

function HotspotMarker({
  hotspot,
  isActive,
  onClick,
}: {
  hotspot: Hotspot;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Html position={hotspot.position} center>
      <div className="relative">
        {/* Dot button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="group relative flex items-center justify-center"
        >
          <span
            className={`absolute w-8 h-8 rounded-full ${
              isActive ? "bg-accent/30" : "bg-primary/20"
            } animate-ping`}
            style={{ animationDuration: "2s" }}
          />
          <span
            className={`absolute w-6 h-6 rounded-full border ${
              isActive
                ? "border-accent bg-accent/20"
                : "border-primary/60 bg-primary/10 group-hover:border-accent group-hover:bg-accent/10"
            } transition-all duration-300`}
          />
          <span
            className={`relative w-2.5 h-2.5 rounded-full ${
              isActive ? "bg-accent" : "bg-primary group-hover:bg-accent"
            } transition-colors duration-300`}
          />
        </button>

        {/* Info card with connecting line */}
        {isActive && (
          <div className="absolute bottom-full left-1/2 mb-0 pointer-events-auto" style={{ width: "220px", transform: "translateX(-50%)" }}>
            {/* Card */}
            <div className="bg-surface/90 backdrop-blur-md border border-white/10 rounded-lg p-3 mb-2">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="font-rajdhani text-[10px] uppercase tracking-widest text-accent">
                    Detail
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                  }}
                  className="text-text/40 hover:text-white transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h4 className="font-orbitron text-xs font-bold text-white mb-1">
                {hotspot.label}
              </h4>
              <p className="font-inter text-[11px] text-text/60 leading-relaxed">
                {hotspot.description}
              </p>
            </div>
            {/* Connecting line */}
            <div className="w-px h-4 bg-accent/50 mx-auto" />
          </div>
        )}
      </div>
    </Html>
  );
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <svg
            className="animate-spin h-16 w-16 text-primary"
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
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
        <p className="text-text font-inter text-sm">Loading 3D Model...</p>
        <p className="text-text/50 font-inter text-xs mt-1">
          This may take a moment
        </p>
      </div>
    </div>
  );
}

export default function ModelViewer() {
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
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

  const handleHotspotClick = useCallback(
    (id: string) => {
      if (activeHotspot === id) {
        setActiveHotspot(null);
        setAutoRotate(true);
      } else {
        setActiveHotspot(id);
        setAutoRotate(false);
      }
    },
    [activeHotspot]
  );

  return (
    <section className="relative bg-background py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h2 className="font-orbitron text-xl md:text-2xl font-bold text-white">
              Interactive Model
            </h2>
            <p className="font-inter text-sm text-text/60 mt-1">
              Click and drag to rotate &middot; Click a hotspot to explore
            </p>
          </div>
          <button
            onClick={() => {
              setAutoRotate(!autoRotate);
              if (!autoRotate) setActiveHotspot(null);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-rajdhani uppercase tracking-wider transition-all duration-300 ${
              autoRotate
                ? "bg-primary/10 border-primary/30 text-primary"
                : "bg-surface/30 border-white/10 text-text/50 hover:text-white hover:border-white/20"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                autoRotate ? "bg-primary animate-pulse" : "bg-text/30"
              }`}
            />
            Auto-Rotate
          </button>
        </motion.div>

        <div>
          <motion.div
            ref={canvasWrapperRef}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black/40"
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

                <CameraController activeHotspot={activeHotspot} />

                <Model />

                {hotspots.map((hotspot) => (
                  <HotspotMarker
                    key={hotspot.id}
                    hotspot={hotspot}
                    isActive={activeHotspot === hotspot.id}
                    onClick={() => handleHotspotClick(hotspot.id)}
                  />
                ))}

                <OrbitControls
                  makeDefault
                  autoRotate={autoRotate}
                  autoRotateSpeed={1.5}
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

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

            <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-accent/30 pointer-events-none" />
            <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-accent/30 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-accent/30 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-accent/30 pointer-events-none" />
          </motion.div>

        </div>

        {/* Hotspot nav pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mt-6"
        >
          {hotspots.map((hotspot) => (
            <button
              key={hotspot.id}
              onClick={() => handleHotspotClick(hotspot.id)}
              className={`px-4 py-2 rounded-full border text-xs font-rajdhani uppercase tracking-wider transition-all duration-300 ${
                activeHotspot === hotspot.id
                  ? "bg-accent/10 border-accent/40 text-accent"
                  : "bg-surface/30 border-white/10 text-text/50 hover:text-white hover:border-white/20"
              }`}
            >
              {hotspot.label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
