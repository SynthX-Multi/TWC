"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/shortcuts", label: "Shortcuts" }
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const clickCount = useRef(0);
  const timer = useRef(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const handleLogoClick = () => {
    clickCount.current += 1;

    if (timer.current) window.clearTimeout(timer.current);

    timer.current = window.setTimeout(() => {
      const count = clickCount.current;

      if (count === 1) {
        router.push("/");
      } else if (count === 2) {
        router.push("/secret/games");
      } else {
        router.push("/secret/hub");
      }

      clickCount.current = 0;
      timer.current = null;
    }, 220);
  };

  return (
    <header className="navbar">
      <button
        type="button"
        className="brand"
        onClick={handleLogoClick}
        aria-label="TWC logo"
      >
        <span className="brand-badge">TWC</span>
      </button>

      <nav className="nav-links" aria-label="Primary navigation">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={pathname === route.href ? "nav-link active" : "nav-link"}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
