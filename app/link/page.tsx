import type { Metadata } from "next";
import type { Icon } from "@phosphor-icons/react";
import {
  Dog,
  GameController,
  Globe,
  InstagramLogo,
  LinkedinLogo,
  Rocket,
  TwitchLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Odkazy",
  description:
    "Všechny moje odkazy na jednom místě — YouTube, Twitch, Kick, Instagram, X, LinkedIn, Product Hunt, doggys.net a portfolio.",
  alternates: { canonical: "/link" },
  openGraph: {
    title: "Karel Pelčák — Odkazy",
    description:
      "Všechny moje odkazy na jednom místě — YouTube, Twitch, Kick, Instagram, X, LinkedIn, Product Hunt, doggys.net a portfolio.",
    url: "/link",
  },
  robots: { index: true, follow: true },
};

type LinkItem = {
  label: string;
  sub: string;
  href: string;
  icon: Icon;
  accent?: boolean;
};

const links: LinkItem[] = [
  {
    label: "Portfolio",
    sub: "karelpelcak.eu",
    href: "https://www.karelpelcak.eu/",
    icon: Globe,
    accent: true,
  },
  {
    label: "YouTube",
    sub: "@kpelcak",
    href: "https://www.youtube.com/@kpelcak",
    icon: YoutubeLogo,
  },
  {
    label: "Twitch",
    sub: "karelpelcak",
    href: "https://www.twitch.tv/karelpelcak",
    icon: TwitchLogo,
  },
  {
    label: "Kick",
    sub: "karelpelcak",
    href: "https://kick.com/karelpelcak",
    icon: GameController,
  },
  {
    label: "Instagram",
    sub: "@karel_pelcak",
    href: "https://www.instagram.com/karel_pelcak/",
    icon: InstagramLogo,
  },
  {
    label: "X (Twitter)",
    sub: "@KarelPelcakDev",
    href: "https://x.com/KarelPelcakDev",
    icon: XLogo,
  },
  {
    label: "LinkedIn",
    sub: "karel-pelcak",
    href: "https://www.linkedin.com/in/karel-pelcak/",
    icon: LinkedinLogo,
  },
  {
    label: "Product Hunt",
    sub: "@karel_pelcak",
    href: "https://www.producthunt.com/@karel_pelcak",
    icon: Rocket,
  },
  {
    label: "doggys.net",
    sub: "komunita majitelů psů",
    href: "https://doggys.net/",
    icon: Dog,
  },
];

export default function LinkPage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        padding: "56px 20px 48px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 480 }}>
        {/* profil */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div
            aria-hidden
            style={{
              width: 72,
              height: 72,
              borderRadius: 22,
              background: "var(--paper)",
              color: "var(--ink)",
              display: "grid",
              placeItems: "center",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 22,
              letterSpacing: "-0.04em",
              margin: "0 auto",
            }}
          >
            K·P
          </div>
          <h1
            style={{
              marginTop: 18,
              fontSize: 28,
              letterSpacing: "-0.03em",
            }}
          >
            Karel Pelčák
          </h1>
          <p
            style={{
              marginTop: 8,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--steel)",
            }}
          >
            Full-stack developer · Zlín
          </p>
        </div>

        {/* odkazy */}
        <nav aria-label="Odkazy" style={{ display: "grid", gap: 10 }}>
          {links.map(({ label, sub, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 16px",
                background: "var(--graphite)",
                border: "1px solid var(--line-soft)",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                transition: "border-color .2s, transform .2s var(--ease)",
              }}
            >
              <span
                aria-hidden
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  display: "grid",
                  placeItems: "center",
                  flex: "none",
                  background: "#0f121b",
                  border: "1px solid var(--line-soft)",
                  color: "var(--paper)",
                }}
              >
                <Icon size={19} weight="bold" />
              </span>
              <span style={{ minWidth: 0, flex: 1 }}>
                <span
                  style={{
                    display: "block",
                    fontWeight: 600,
                    fontSize: 15,
                    letterSpacing: "-0.01em",
                    color: "var(--paper)",
                    lineHeight: 1.25,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    display: "block",
                    marginTop: 2,
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.04em",
                    color: "var(--steel)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {sub}
                </span>
              </span>
              <span aria-hidden style={{ color: "var(--steel-dim)", fontSize: 18, lineHeight: 1 }}>
                ↗
              </span>
            </a>
          ))}
        </nav>

        <p
          style={{
            marginTop: 24,
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--steel-dim)",
          }}
        >
          <a href="/" style={{ color: "inherit" }}>
            ← karelpelcak.eu
          </a>
        </p>
      </div>
    </main>
  );
}
