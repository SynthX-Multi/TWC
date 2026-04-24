import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-mark">
        <span className="hero-logo">TWC</span>
      </div>

      <div className="hero-copy">
        <span className="eyebrow beta-tag">
          <Sparkles size={15} />
          Beta release. Please expect bugs.
        </span>
        <h1>One clean place for the apps you open most.</h1>
        <p>
          TWC is a fast launcher for your favorite school and productivity tools.
          Use the shortcuts page to open everything from one elegant dashboard.
        </p>

        <div className="hero-actions">
          <Link href="/shortcuts" className="button">
            <span>Go to shortcuts</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
