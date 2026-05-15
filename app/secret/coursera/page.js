"use client";

import BackHomeButton from "../../../components/BackHomeButton";
import CopyButton from "../../../components/CopyButton";
import LinkCard from "../../../components/LinkCard";
import ToolTabs from "../../../components/ToolTabs";
import Converter from "../../../components/Converter";
import Proxier from "../../../components/Proxier";
import { courseraLinks, copySnippet } from "../../../data/courseraLinks";

function LoadstringerTab() {
  return (
    <div className="tool-card">
      <h3>Loadstringer</h3>
      <Converter type="loadstringer" />
    </div>
  );
}

function WisperTab() {
  return (
    <div className="tool-card">
      <h3>Wisper</h3>
      <Converter type="wisper" />
    </div>
  );
}

function ProxierTab() {
  return (
    <div className="tool-card">
      <h3>Proxier</h3>
      <Proxier />
    </div>
  );
}

export default function CourseraSecretPage() {
  const tabs = [
    { key: "loadstringer", label: "Loadstringer", component: LoadstringerTab },
    { key: "wisper", label: "Wisper", component: WisperTab },
    { key: "proxier", label: "Proxier", component: ProxierTab }
  ];

  return (
    <section className="page-section">
      <div className="secret-header">
        <div>
          <span className="eyebrow">Hidden page</span>
          <h1>Coursera tools</h1>
          <p>Legacy TWC utilities, saved links, and a clipboard snippet.</p>
        </div>
        <BackHomeButton />
      </div>

      <ToolTabs items={tabs} />

      <div className="section-divider" />

      <div className="subsection">
        <div className="subsection-header">
          <h2>Saved links</h2>
          <p>Open or copy these quickly.</p>
        </div>
        <div className="link-grid">
          {courseraLinks.map((item, index) => (
            <LinkCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="subsection">
        <div className="subsection-header">
          <h2>Clipboard code</h2>
          <p>Copy the Python snippet with one click.</p>
        </div>

        <div className="code-card">
          <pre><code>{copySnippet}</code></pre>
          <div className="code-actions">
            <CopyButton value={copySnippet} label="Copy code" />
          </div>
        </div>
      </div>
    </section>
  );
}
