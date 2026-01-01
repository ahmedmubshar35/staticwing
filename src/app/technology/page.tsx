"use client";
import { useEffect } from "react";
import { usePassword } from "@/context/PasswordContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import PageHero from "@/components/ui/PageHero";
import FeatureSection from "@/components/sections/FeatureSection";
import FeatureSection2 from "@/components/sections/FeatureSection2";
import PropulsionSection from "@/components/sections/PropulsionSection";
import FeatureSection3 from "@/components/sections/FeatureSection3";
import FeatureSection4 from "@/components/sections/FeatureSection4";
import ApplicationsPreview from "@/components/sections/previews/ApplicationsPreview";
import Footer from "@/components/sections/Footer";
import StaticWingPerformance from "@/components/sections/StaticWingPerformance";

export default function TechnologyPage() {
  const router = useRouter();
  const { authorized, isLoading } = usePassword();

  useEffect(() => {
    if (!isLoading && !authorized) {
      router.push('/password');
    }
  }, [authorized, isLoading, router]);

  if (isLoading) {
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
            Vtolution
          </h2>
          <p className="text-text font-inter">Loading...</p>
        </div>
      </div>
    );
  }

  if (!authorized) {
    return null;
  }

  return (
    <div className="w-screen overflow-x-hidden">
      <Navbar />
      <PageHero
        title="Our"
        accentWord="Technology"
        subtitle="Discover the engineering innovations that make StaticWing the most advanced VTOL platform in its class."
      />

      {/* Link to Deep Dive */}
      <div className="w-full bg-background pb-12">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <Link
            href="/deep-dive"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary/10 border border-primary/20 rounded-full overflow-hidden hover:bg-primary/20 transition-all duration-300"
          >
            <span className="font-orbitron font-bold text-primary tracking-wider">EXPLORE STATIC WING DEEP DIVE</span>
            <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <FeatureSection />
      <FeatureSection2 />

      <PropulsionSection />
      <StaticWingPerformance />
      <FeatureSection3 />
      <FeatureSection4 />
      <Footer />
    </div>
  );
}
