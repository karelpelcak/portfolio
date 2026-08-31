"use client";

import { useEffect, useState } from "react";
import { List } from "@phosphor-icons/react/dist/ssr";
import { navLinks } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`topbar ${scrolled ? "scrolled" : ""}`}>
      <div className="topbar-inner">
        <a className="brand" href="#">
          <span className="brand-mark">K·P</span>
          <span className="brand-text">
            Karel Pelčák
            <span>Full-stack · Zlín — Worldwide</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Hlavní navigace">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <span className="nav-status" aria-label="Dostupnost">
            <i aria-hidden /> K dispozici
          </span>
          <a className="btn btn-primary" href="#contact">
            Kontakt
          </a>
        </div>

        <button className="mobile-toggle" aria-label="Otevřít menu">
          <List size={18} />
        </button>
      </div>
    </div>
  );
}
