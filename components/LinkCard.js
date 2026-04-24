"use client";

import { motion } from "framer-motion";
import { Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function LinkCard({ item, index }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(item.url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1300);
  };

  return (
    <motion.article
      className="link-card"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.35 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <div className="link-card-main">
        <h3>{item.name}</h3>
        <p>{item.url}</p>
      </div>
      <div className="link-card-actions">
        <button type="button" className="mini-button" onClick={handleCopy}>
          <Copy size={15} />
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
        <a href={item.url} target="_blank" rel="noreferrer" className="mini-button ghost">
          <ExternalLink size={15} />
          <span>Open</span>
        </a>
      </div>
    </motion.article>
  );
}
