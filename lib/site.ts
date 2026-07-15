// Centrální konfigurace webu pro SEO / sitemap / robots.
// URL lze přepsat env proměnnou NEXT_PUBLIC_SITE_URL (bez lomítka na konci).
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://karelpelcak.eu";

export const siteConfig = {
  url: rawUrl.replace(/\/$/, ""),
  name: "Karel Pelčák",
  title: "Karel Pelčák — Full-Stack Developer",
  description:
    "Full-stack vývojář se specializací na edge computing. Od návrhu API po pixel-perfect UI — NextJS, Hono a Cloudflare Workers. Based in Prague, working worldwide.",
  locale: "cs_CZ",
  keywords: [
    "Karel Pelčák",
    "full-stack developer",
    "fullstack vývojář",
    "edge computing",
    "Cloudflare Workers",
    "NextJS",
    "Hono",
    "Nuxt",
    "React",
    "TypeScript",
    "Rust",
    "web development",
    "Praha",
    "Brno",
    "freelance developer",
  ],
} as const;
