"use client";

import { PasswordProvider, usePassword } from "@/context/PasswordContext";

function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const { isLoading } = usePassword();

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
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
            StaticWing
          </h2>
          <p className="text-text font-inter">Initializing...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PasswordProvider>
      <LoadingWrapper>{children}</LoadingWrapper>
    </PasswordProvider>
  );
}
