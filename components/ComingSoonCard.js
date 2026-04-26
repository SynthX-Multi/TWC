"use client";

import { motion } from "framer-motion";
import { ArrowRight, Copy, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ComingSoonCard({ index, item }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await navigator.clipboard.writeText("More coming soon.");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1300);
  };

  const handleEnter = () => {
    router.push("/secret/coursera");
  };

  return (
    <motion.article
      className="shortcut-card coming-soon-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.35 }}
      whileHover={{ y: -4, scale: 1.01 }}
      onDoubleClick={handleEnter}
    >
      <div className="shortcut-icon coming-soon">
        <Sparkles size={22} />
      </div>
      <div className="shortcut-copy">
        <h3>{item?.name ?? "More coming soon."}</h3>
        <p>{item?.description ?? "Double click this card to open the hidden Coursera tools page."}</p>
      </div>
      <div className="shortcut-actions">
        <button type="button" className="mini-button" onClick={handleCopy}>
          <Copy size={15} />
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
        <button type="button" className="mini-button ghost" onClick={handleEnter}>
          <ArrowRight size={15} />
          <span>Enter</span>
        </button>
      </div>
    </motion.article>
  );
}
