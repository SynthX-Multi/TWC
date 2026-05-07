"use client";

import { Sparkles, Palette, ToggleLeft, ToggleRight, Wand2 } from "lucide-react";
import { motion } from "framer-motion";
import { useThemeSettings } from "../../components/ThemeProvider";

const colorOptions = [
  { key: "red", label: "Red" },
  { key: "orange", label: "Orange" },
  { key: "yellow", label: "Yellow" },
  { key: "green", label: "Green" },
  { key: "blue", label: "Blue" },
  { key: "indigo", label: "Indigo" },
  { key: "violet", label: "Violet" }
];

export default function SettingsPage() {
  const { accent, setAccent, togglePlacement, setTogglePlacement } = useThemeSettings();

  return (
    <section className="page-section">
      <div className="section-heading">
        <span className="eyebrow">
          <Wand2 size={15} />
          Settings
        </span>
        <h1>Appearance</h1>
        <p>Customize the UI to your liking.</p>
      </div>

      <div className="settings-grid">
        <motion.div className="settings-card" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          <div className="settings-card-head">
            <Palette size={18} />
            <h2>Theme color</h2>
          </div>
          <p>Choose your preferred theme.</p>
          <div className="color-grid">
            {colorOptions.map((item) => (
              <button
                key={item.key}
                type="button"
                className={accent === item.key ? "theme-swatch active" : "theme-swatch"}
                onClick={() => setAccent(item.key)}
              >
                <span className={`swatch-dot theme-${item.key}`} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div className="settings-card" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          <div className="settings-card-head">
            <ToggleLeft size={18} />
            <h2>Toggle placement</h2>
          </div>
          <p>Customize the light and dark toggle button.</p>
          <div className="placement-grid">
            <button
              type="button"
              className={togglePlacement === "floating" ? "placement-choice active" : "placement-choice"}
              onClick={() => setTogglePlacement("floating")}
            >
              <ToggleRight size={18} />
              <span>Current position</span>
            </button>
            <button
              type="button"
              className={togglePlacement === "navbar" ? "placement-choice active" : "placement-choice"}
              onClick={() => setTogglePlacement("navbar")}
            >
              <ToggleLeft size={18} />
              <span>Navigator bar</span>
            </button>
          </div>
        </motion.div>

        <motion.div className="settings-card settings-card-wide" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
          <div className="settings-card-head">
            <Sparkles size={18} />
            <h2>More features coming soon</h2>
          </div>
          <p>
            This area is reserved for future controls like custom layouts, pinned shortcuts, and quick profile presets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
