"use client";

import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("twc-theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("twc-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      onClick={() => setDark((value) => !value)}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {dark ? <SunMedium size={18} /> : <MoonStar size={18} />}
    </button>
  );
}
