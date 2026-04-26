"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useThemeSettings } from "./ThemeProvider";

export default function ThemeToggle({ placement = "floating" }) {
  const { ready, mode, toggleMode, togglePlacement } = useThemeSettings();

  if (!ready || togglePlacement !== placement) return null;

  return (
    <button
      type="button"
      className={placement === "navbar" ? "icon-button theme-inline" : "icon-button theme-floating"}
      onClick={toggleMode}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
    >
      {mode === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
    </button>
  );
}
