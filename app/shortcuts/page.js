"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ShortcutCard from "../../components/ShortcutCard";
import ComingSoonCard from "../../components/ComingSoonCard";
import { publicShortcuts, moreComingSoon } from "../../data/shortcuts";

export default function ShortcutsPage() {
  const [query, setQuery] = useState("");

  const filteredShortcuts = useMemo(() => {
    const lower = query.trim().toLowerCase();
    if (!lower) return publicShortcuts;
    return publicShortcuts.filter(
      (shortcut) =>
        shortcut.name.toLowerCase().includes(lower) ||
        shortcut.description.toLowerCase().includes(lower)
    );
  }, [query]);

  return (
    <section className="page-section">
      <div className="section-heading">
        <span className="eyebrow">Dashboard</span>
        <h1>Shortcuts</h1>
        <p>Search and open your favorite apps from one place.</p>
      </div>

      <div className="search-wrap">
        <Search size={18} />
        <input
          type="search"
          placeholder="Search shortcuts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search shortcuts"
        />
      </div>

      <div className="card-grid">
        {filteredShortcuts.map((shortcut, index) => (
          <ShortcutCard key={shortcut.name} shortcut={shortcut} index={index} />
        ))}
        <ComingSoonCard index={filteredShortcuts.length} item={moreComingSoon} />
      </div>
    </section>
  );
}
