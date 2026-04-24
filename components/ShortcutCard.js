"use client";

import { motion } from "framer-motion";
import { Copy, ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ShortcutCard({ shortcut, index }) {
  const Icon = shortcut.icon;
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(shortcut.url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1300);
  };

  const handleEnter = () => {
    if (shortcut.openInApp) {
      router.push(shortcut.url);
      return;
    }

    window.open(shortcut.url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.article
      className="shortcut-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <div className={`shortcut-icon ${shortcut.accent}`}>
        <Icon size={22} />
      </div>
      <div className="shortcut-copy">
        <h3>{shortcut.name}</h3>
        <p>{shortcut.description}</p>
      </div>
      <div className="shortcut-actions">
        <button type="button" className="mini-button" onClick={handleCopy}>
          <Copy size={15} />
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
        <button type="button" className="mini-button ghost" onClick={handleEnter}>
          <ExternalLink size={15} />
          <span>{shortcut.actionLabel ?? "Enter"}</span>
        </button>
      </div>
    </motion.article>
  );
}
