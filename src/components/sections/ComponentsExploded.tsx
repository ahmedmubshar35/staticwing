"use client";

import { Suspense, useState, useCallback, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { motion } from "motion/react";

interface ComponentPart {
  id: string;
  label: string;
  model: string;
  color: string;
  description: string;
  bullets: string[];
  offset: [number, number, number];
  labelOffset: [number, number, number];
}

// Assembly center from bounding box analysis (after 0.001x scaling)
// All parts share coordinate space from CAD export, centered near (0, 0.16, -0.897)
const ASSEMBLY_CENTER: [number, number, number] = [0, -0.16, 0.897];

// Exploded offsets computed from bounding-box centers:
// Each part's center relative to assembly center, multiplied by 3x for clear separation.
// Parts that overlap are manually tweaked for visibility.
const parts: ComponentPart[] = [
  {
    id: "top-fans",
    label: "Axial Fans",
    model: "/staticwing-parts/top-fans.glb",
    color: "#4AAAA5",
    description: "Axial Fans & Ducts",
    bullets: [
      "Generate high-energy airflow",
      "Supply energized flow to wing",
    ],
    offset: [-0.01, 0.07, 0],
    labelOffset: [-0.008, 0.215, -0.897],
  },
  {
    id: "front-fan",
    label: "Front Fan",
    model: "/staticwing-parts/front-fan.glb",
    color: "#4AAAA5",
    description: "Directional Fans",
    bullets: [
      "Yaw control independent of freestream",
      "Precise heading control",
    ],
    offset: [0.06, -0.01, 0],
    labelOffset: [0.074, 0.190, -0.897],
  },
  {
    id: "wing",
    label: "Wing",
    model: "/staticwing-parts/wing.glb",
    color: "#3B82F6",
    description: "Wing",
    bullets: [
      "Converts airflow energy into lift",
      "Uniform lift across full span",
    ],
    offset: [-0.02, 0.02, 0],
    labelOffset: [-0.014, 0.188, -0.897],
  },
  {
    id: "elevons",
    label: "Control Surfaces",
    model: "/staticwing-parts/elevons.glb",
    color: "#3B82F6",
    description: "Control Surfaces",
    bullets: [
      "Roll and pitch control",
      "Effective at low speed",
    ],
    offset: [-0.06, -0.01, 0],
    labelOffset: [-0.071, 0.143, -0.897],
  },
  {
    id: "internal-system",
    label: "Internal System",
    model: "/staticwing-parts/internal-system.glb",
    color: "#F472B6",
    description: "Cabins / Storage",
    bullets: [
      "Designed for maximum payload",
      "Efficient load integration",
    ],
    offset: [0.12, -0.06, 0],
    labelOffset: [0.047, 0.185, -0.897],
  },
  {
    id: "front-side",
    label: "Cowl",
    model: "/staticwing-parts/front-side.glb",
    color: "#94A3B8",
    description: "Cowling / Fairing",
    bullets: [
      "Aerodynamic shielding",
      "Reduces parasitic drag",
    ],
    offset: [-0.05, -0.01, -0.07],
    labelOffset: [-0.038, 0.195, -0.941],
  },
  {
    id: "legs",
    label: "Landing Gear",
    model: "/staticwing-parts/legs.glb",
    color: "#A3A042",
    description: "Landing Gear",
    bullets: [
      "Lightweight structure",
      "No reinforced surface needed",
    ],
    offset: [0.08, -0.07, 0],
    labelOffset: [0.054, 0.159, -0.897],
  },
  {
    id: "right-side",
    label: "Right Cowl",
    model: "/staticwing-parts/right-side.glb",
    color: "#94A3B8",
    description: "Right Cowling",
    bullets: [
      "Aerodynamic shielding",
      "Symmetric fairing",
    ],
    offset: [-0.05, -0.01, 0.07],
    labelOffset: [-0.038, 0.195, -0.853],
  },
  {
    id: "top-wings-rooms",
    label: "Wing Cabins",
    model: "/staticwing-parts/top-wings-rooms.glb",
    color: "#F472B6",
    description: "Wing Cabins / Storage",
    bullets: [
      "Upper payload bays",
      "Distributed weight integration",
    ],
    offset: [-0.01, 0.05, 0],
    labelOffset: [-0.009, 0.217, -0.897],
  },
  {
    id: "front-no-holes",
    label: "Fuselage",
    model: "/staticwing-parts/front-no-holes.glb",
    color: "#94A3B8",
    description: "Fuselage Structure",
    bullets: [
      "Main structural frame",
      "Component mounting base",
    ],
    offset: [0.14, 0.05, 0],
    labelOffset: [0.051, 0.192, -0.897],
  },
];

// Preload all models
parts.forEach((p) => useGLTF.preload(p.model));

function PartModel({
  part,
  isExploded,
  isActive,
  onClick,
}: {
  part: ComponentPart;
  isExploded: boolean;
  isActive: boolean;
  onClick: () => void;
}) {
  const { scene } = useGLTF(part.model);
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const position: [number, number, number] = isExploded
    ? part.offset
    : [0, 0, 0];

  return (
    <group
      position={position}
      onPointerDown={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <primitive object={clonedScene} />
      {isActive && (
        <Html
          position={part.labelOffset}
          center
          distanceFactor={0.18}
          style={{ pointerEvents: "none" }}
        >
          <div className="flex flex-col items-center" style={{ pointerEvents: "auto" }}>
            {/* Info card */}
            <div
              className="relative bg-surface/90 backdrop-blur-md border border-accent/30 rounded-lg p-3 min-w-[180px] max-w-[220px] mb-1"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-rajdhani text-[10px] uppercase tracking-widest text-accent">
                  {part.label}
                </span>
              </div>
              <h4 className="font-orbitron text-[11px] font-bold text-white mb-1">
                {part.description}
              </h4>
              <ul className="space-y-0.5">
                {part.bullets.map((b) => (
                  <li key={b} className="font-inter text-[10px] text-text/60 flex items-start gap-1">
                    <span className="text-accent/50 mt-0.5">&bull;</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            {/* Connecting line */}
            <div className="w-px h-6 bg-accent/50" />
            <div className="w-2 h-2 rounded-full bg-accent/80 border border-accent" />
          </div>
        </Html>
      )}
    </group>
  );
}

const DEFAULT_CAM: [number, number, number] = [0.15, 0.08, 0.25];

function CameraController({
  activePart,
  isExploded,
}: {
  activePart: ComponentPart | null;
  isExploded: boolean;
}) {
  const { camera, gl, controls } = useThree();
  const targetPos = useRef(new THREE.Vector3(...DEFAULT_CAM));
  const targetLook = useRef(new THREE.Vector3(0, 0, 0));
  const isAnimating = useRef(false);

  useEffect(() => {
    const handler = () => { isAnimating.current = false; };
    const dom = gl.domElement;
    dom.addEventListener("pointerdown", handler);
    dom.addEventListener("wheel", handler);
    return () => {
      dom.removeEventListener("pointerdown", handler);
      dom.removeEventListener("wheel", handler);
    };
  }, [gl]);

  useEffect(() => {
    if (activePart) {
      // Compute world position of the part's center
      const offset = isExploded ? activePart.offset : [0, 0, 0];
      const partWorld = new THREE.Vector3(
        ASSEMBLY_CENTER[0] + offset[0] + activePart.labelOffset[0],
        ASSEMBLY_CENTER[1] + offset[1] + activePart.labelOffset[1] - 0.015,
        ASSEMBLY_CENTER[2] + offset[2] + activePart.labelOffset[2]
      );

      // Position camera at a distance from the part, offset toward current camera direction
      const camDir = new THREE.Vector3().subVectors(camera.position, partWorld).normalize();
      targetPos.current.copy(partWorld).addScaledVector(camDir, 0.12);
      targetLook.current.copy(partWorld);
      isAnimating.current = true;
    } else {
      targetPos.current.set(...DEFAULT_CAM);
      targetLook.current.set(0, 0, 0);
      isAnimating.current = true;
    }
  }, [activePart, isExploded, camera]);

  useFrame(() => {
    if (!isAnimating.current) return;

    camera.position.lerp(targetPos.current, 0.05);

    // Update OrbitControls target
    const ctrl = controls as any;
    if (ctrl?.target) {
      ctrl.target.lerp(targetLook.current, 0.05);
      ctrl.update();
    }

    if (camera.position.distanceTo(targetPos.current) < 0.001) {
      isAnimating.current = false;
    }
  });

  return null;
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
        <p className="text-text font-inter text-sm">Loading Components...</p>
      </div>
    </div>
  );
}

export default function ComponentsExploded() {
  const [isExploded, setIsExploded] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activePart, setActivePart] = useState<string | null>(null);

  const handlePartClick = useCallback(
    (id: string) => {
      setActivePart(activePart === id ? null : id);
    },
    [activePart]
  );

  const activeData = parts.find((p) => p.id === activePart);

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="font-orbitron text-xl md:text-2xl font-bold text-white mb-2">
            Static Wing <span className="text-accent">Components</span>
          </h2>
          <p className="font-inter text-sm text-text/60">
            Explore the individual subsystems that make up the StaticWing architecture
          </p>
        </motion.div>

        <div>
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
                camera={{ position: [0.15, 0.08, 0.25], fov: 45, near: 0.001, far: 10 }}
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

                <group position={ASSEMBLY_CENTER}>
                  {parts.map((part) => (
                    <PartModel
                      key={part.id}
                      part={part}
                      isExploded={isExploded}
                      isActive={activePart === part.id}
                      onClick={() => handlePartClick(part.id)}
                    />
                  ))}
                </group>

                <CameraController
                  activePart={activeData || null}
                  isExploded={isExploded}
                />

                <OrbitControls
                  makeDefault
                  autoRotate={autoRotate && !activePart}
                  autoRotateSpeed={1}
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                  minDistance={0.05}
                  maxDistance={1.5}
                  minPolarAngle={0.2}
                  maxPolarAngle={Math.PI / 2 + 0.3}
                />
              </Canvas>
            </Suspense>
            ) : (
              <LoadingFallback />
            )}

            {/* Explode toggle */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => setIsExploded(!isExploded)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-rajdhani uppercase tracking-wider transition-all duration-300 ${
                  isExploded
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
                    d={
                      isExploded
                        ? "M19 9l-7 7-7-7"
                        : "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    }
                  />
                </svg>
                {isExploded ? "Assembled" : "Exploded"}
              </button>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
