"use client";
import { useEffect } from "react";
import { usePassword } from "@/context/PasswordContext";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import PageHero from "@/components/ui/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import TechnologyPreview from "@/components/sections/previews/TechnologyPreview";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
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
        title="Contact"
        accentWord="Us"
        subtitle="Have questions about StaticWing? Get in touch with our team."
      />
      <ContactSection />
      <Footer />
    </div>
  );
}
