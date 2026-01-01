"use client";

import { createContext, useContext, useState, useEffect } from "react";

const SESSION_KEY = "staticwing_session";
const SESSION_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

interface SessionData {
  authorized: boolean;
  expiresAt: number;
}

interface PasswordContextType {
  password: string | null;
  authorized: boolean;
  isLoading: boolean;
  checkPassword: (password: string | null) => Promise<string>;
  logout: () => void;
}

const defaultValue: PasswordContextType = {
  password: null,
  authorized: false,
  isLoading: true,
  checkPassword: async () => "",
  logout: () => {},
};

const PasswordContext = createContext<PasswordContextType>(defaultValue);

const PasswordProvider = ({ children }: { children: React.ReactNode }) => {
  const [password, setPassword] = useState<string | null>(null);
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check for existing session on mount
  useEffect(() => {
    const checkExistingSession = () => {
      try {
        const sessionStr = localStorage.getItem(SESSION_KEY);
        if (sessionStr) {
          const session: SessionData = JSON.parse(sessionStr);
          const now = Date.now();

          if (session.authorized && session.expiresAt > now) {
            // Session is still valid
            setAuthorized(true);

            // Set up auto-logout when session expires
            const timeRemaining = session.expiresAt - now;
            const timeout = setTimeout(() => {
              logout();
            }, timeRemaining);

            setIsLoading(false);
            return () => clearTimeout(timeout);
          } else {
            // Session expired, clear it
            localStorage.removeItem(SESSION_KEY);
          }
        }
      } catch {
        // Invalid session data, clear it
        localStorage.removeItem(SESSION_KEY);
      }
      setIsLoading(false);
    };

    checkExistingSession();
  }, []);

  // Set up session expiry timer when authorized changes
  useEffect(() => {
    if (authorized) {
      const sessionStr = localStorage.getItem(SESSION_KEY);
      if (sessionStr) {
        try {
          const session: SessionData = JSON.parse(sessionStr);
          const now = Date.now();
          const timeRemaining = session.expiresAt - now;

          if (timeRemaining > 0) {
            const timeout = setTimeout(() => {
              logout();
            }, timeRemaining);

            return () => clearTimeout(timeout);
          }
        } catch {
          // Invalid session
        }
      }
    }
  }, [authorized]);

  const saveSession = () => {
    const session: SessionData = {
      authorized: true,
      expiresAt: Date.now() + SESSION_DURATION,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  };

  const checkPassword = async (inputPassword: string | null) => {
    console.log("Checking password:", inputPassword);
    try {
      const response = await fetch('/api/password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: inputPassword }),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setPassword(inputPassword);
        setAuthorized(true);
        saveSession();
        return "Redirecting...";
      } else {
        setPassword(null);
        setAuthorized(false);
        return data.error || "Authorization failed";
      }
    } catch (error) {
      console.error("Error checking password:", error);
      setPassword(null);
      setAuthorized(false);
      return "An error occurred. Please try again.";
    }
  };

  const logout = () => {
    setPassword(null);
    setAuthorized(false);
    localStorage.removeItem(SESSION_KEY);
  };

  const value: PasswordContextType = {
    password,
    authorized,
    isLoading,
    checkPassword,
    logout,
  };

  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
};

const usePassword = () => useContext(PasswordContext);

export { PasswordProvider, usePassword };
