"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { BookOpenText, Home, LayoutDashboard, Settings, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const routes = [
  { href: "/", label: "Home", icon: Home },
  { href: "/shortcuts", label: "Shortcuts", icon: LayoutDashboard },
  { href: "/study-guide", label: "Study Guide", icon: BookOpenText },
  { href: "/settings", label: "Settings", icon: Settings }
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
      if (count === 1) router.push("/");
      else if (count === 2) router.push("/secret/games");
      else router.push("/secret/hub");

      clickCount.current = 0;
      timer.current = null;
    }, 230);
  };

  return (
    <header className="navbar">
      <button
        type="button"
        className="brand"
        onClick={handleLogoClick}
        aria-label="TWC logo"
        title="TWC"
      >
        <span className="brand-badge">
          <Sparkles size={15} />
          TWC
        </span>
      </button>

      <nav className="nav-links" aria-label="Primary navigation">
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link
              key={route.href}
              href={route.href}
              className={pathname === route.href ? "nav-link active" : "nav-link"}
            >
              <Icon size={16} />
              <span>{route.label}</span>
            </Link>
          );
        })}
        <ThemeToggle placement="navbar" />
      </nav>
    </header>
  );
}
