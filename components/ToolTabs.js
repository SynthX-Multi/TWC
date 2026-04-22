"use client";

import { useState } from "react";

export default function ToolTabs({ items }) {
  const [active, setActive] = useState(items[0]?.key);

  const ActiveComponent = items.find((item) => item.key === active)?.component;

  return (
    <div className="tool-tabs">
      <div className="tab-row">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            className={active === item.key ? "tab-button active" : "tab-button"}
            onClick={() => setActive(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="tool-panel">
        {ActiveComponent ? <ActiveComponent /> : null}
      </div>
    </div>
  );
}
