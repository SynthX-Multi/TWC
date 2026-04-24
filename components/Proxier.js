"use client";

import { useState } from "react";
import Toast from "./Toast";

export default function Proxier() {
  const [input, setInput] = useState("");
  const [passed, setPassed] = useState([]);
  const [failed, setFailed] = useState([]);
  const [status, setStatus] = useState("");
  const [toast, setToast] = useState("");
  const [showFailed, setShowFailed] = useState(false);

  const parseInput = (text) => {
    return text
      .split(/[\n,]+/)
      .map((link) => link.trim())
      .filter((link) => link.length > 0);
  };

  const buildTestURL = (baseUrl) => {
    return baseUrl.endsWith("/")
      ? baseUrl + "robots.txt"
      : baseUrl + "/robots.txt";
  };

  const checkSingleLink = async (baseUrl) => {
    try {
      await fetch(buildTestURL(baseUrl), { mode: "no-cors" });
      return true;
    } catch {
      return false;
    }
  };

  const handleCheck = async () => {
    const links = parseInput(input);

    if (links.length === 0) {
      setStatus("No valid links provided.");
      return;
    }

    setPassed([]);
    setFailed([]);
    setStatus(`Checking ${links.length} links...`);

    let checked = 0;
    const concurrency = 5;
    let index = 0;

    const passedArr = [];
    const failedArr = [];

    async function worker() {
      while (index < links.length) {
        const i = index++;
        let link = links[i];

        if (!link.startsWith("http://") && !link.startsWith("https://")) {
          link = "http://" + link;
        }

        const isValid = await checkSingleLink(link);

        if (isValid) {
          passedArr.push(link);
          setPassed([...passedArr]);
        } else {
          failedArr.push(link);
          setFailed([...failedArr]);
        }

        checked++;
        setStatus(`${checked}/${links.length} checked`);
      }
    }

    await Promise.all(Array.from({ length: concurrency }, worker));

    setStatus("Done!");
  };

  const copy = async (text) => {
    await navigator.clipboard.writeText(text);
    setToast("Copied");
  };

  return (
    <div className="proxier">
      <textarea
        placeholder="Enter proxy links (comma or new line)..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="row-buttons">
        <button type="button" className="button" onClick={handleCheck}>
          Check
        </button>
      </div>

      <p className="status-text">{status}</p>

      <div className="result-block">
        <h3>Working Links ({passed.length})</h3>
        <div className="link-list">
          {passed.map((link, i) => (
            <div key={i} className="result-row">
              <span>{link}</span>
              <div className="result-actions">
                <button type="button" className="mini-button" onClick={() => window.open(link, "_blank", "noopener,noreferrer")}>
                  Open
                </button>
                <button type="button" className="mini-button" onClick={() => copy(link)}>
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="result-block">
        <button
          type="button"
          className="section-toggle"
          onClick={() => setShowFailed((value) => !value)}
        >
          Failed Links ({failed.length}) {showFailed ? "Hide" : "Show"}
        </button>

        {showFailed ? (
          <div className="link-list">
            {failed.map((link, i) => (
              <div key={i} className="result-row">
                <span>{link}</span>
                <div className="result-actions">
                  <button type="button" className="mini-button" onClick={() => copy(link)}>
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {toast ? <Toast message={toast} onClose={() => setToast("")} /> : null}
    </div>
  );
}
