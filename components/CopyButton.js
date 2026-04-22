"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ value, label = "Copy" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button type="button" className="button secondary" onClick={handleCopy}>
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span>{copied ? "Copied" : label}</span>
    </button>
  );
}
