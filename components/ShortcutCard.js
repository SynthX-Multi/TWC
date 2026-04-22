"use client";

import { motion } from "framer-motion";
import { Copy, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ShortcutCard({ shortcut, index }) {
  const Icon = shortcut.icon;
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText(shortcut.internal ? window.location.origin + shortcut.url : shortcut.url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1300);
  };

  const card = (
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
        <span className="pill">{shortcut.internal ? "Secret" : "Open"}</span>
        <button type="button" className="mini-button" onClick={handleCopy}>
          <Copy size={15} />
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
        <span className="mini-button ghost">
          <ExternalLink size={15} />
          <span>{shortcut.internal ? "Enter" : "Open"}</span>
        </span>
      </div>
    </motion.article>
  );

  if (shortcut.internal) {
    return (
      <Link href={shortcut.url} className="card-link">
        {card}
      </Link>
    );
  }

  return (
    <a href={shortcut.url} target="_blank" rel="noreferrer" className="card-link">
      {card}
    </a>
  );
}
