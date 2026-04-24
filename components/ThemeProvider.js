"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

const ACCENTS = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const DEFAULT_ACCENT = "indigo";
const DEFAULT_POSITION = "floating";

function safeGet(key, fallback) {
  if (typeof window === "undefined" ) return fallback;
  try {
    return window.localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

export function ThemeProvider({ children }) {
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState("light");
  const [accent, setAccent] = useState(DEFAULT_ACCENT);
  const [togglePlacement, setTogglePlacement] = useState(DEFAULT_POSITION);

  useEffect(() => {
    const savedMode = safeGet("twc-mode", "light");
    const savedAccent = safeGet("twc-accent", DEFAULT_ACCENT);
    const savedPlacement = safeGet("twc-toggle-placement", DEFAULT_POSITION);

    setMode(savedMode === "dark" ? "dark" : "light");
    setAccent(ACCENTS.includes(savedAccent) ? savedAccent : DEFAULT_ACCENT);
    setTogglePlacement(savedPlacement === "navbar" ? "navbar" : DEFAULT_POSITION);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || typeof document === "undefined") return;

    const body = document.body;
    body.classList.toggle("dark", mode === "dark");

    ACCENTS.forEach((item) => body.classList.remove(`theme-${item}`));
    body.classList.add(`theme-${accent}`);

    body.dataset.togglePlacement = togglePlacement;

    try {
      window.localStorage.setItem("twc-mode", mode);
      window.localStorage.setItem("twc-accent", accent);
      window.localStorage.setItem("twc-toggle-placement", togglePlacement);
    } catch {
      // ignore storage issues
    }
  }, [mode, accent, togglePlacement, ready]);

  const value = useMemo(
    () => ({
      ready,
      mode,
      accent,
      togglePlacement,
      setAccent,
      setTogglePlacement,
      toggleMode: () => setMode((current) => (current === "dark" ? "light" : "dark"))
    }),
    [ready, mode, accent, togglePlacement]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeSettings() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeSettings must be used within ThemeProvider");
  }
  return context;
}
