"use client";

import { useState } from "react";
import Toast from "./Toast";

export default function Converter({ type }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [toast, setToast] = useState("");

  const handleConvert = () => {
    if (type === "loadstringer") {
      setOutput(`loadstring(game:HttpGet("${input}", true))()`);
      setToast("Converted");
    }

    if (type === "wisper") {
      let url = input;

      if (url.startsWith("https://")) {
        url = url.replace("https://", "wss://");
      } else if (!url.startsWith("wss://")) {
        url = "wss://" + url;
      }

      const parts = url.split("/");
      if (!parts.includes("wisp")) {
        parts.splice(3, 0, "wisp");
      }

      setOutput(parts.join("/"));
      setToast("Converted");
    }
  };

  const copy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setToast("Copied");
  };

  const paste = async () => {
    const text = await navigator.clipboard.readText();
    setInput(text);
    setToast("Pasted");
  };

  return (
    <div className="converter">
      <textarea
        placeholder="Enter input..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="row-buttons">
        <button type="button" className="button" onClick={handleConvert}>
          Convert
        </button>
        <button type="button" className="button secondary" onClick={copy}>
          Copy
        </button>
        <button type="button" className="button secondary" onClick={paste}>
          Paste
        </button>
      </div>

      <textarea value={output} readOnly placeholder="Output appears here" />

      {toast ? <Toast message={toast} onClose={() => setToast("")} /> : null}
    </div>
  );
}
