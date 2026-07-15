import type { Icon } from "@phosphor-icons/react";
import {
  Lightning,
  ShieldCheck,
  Cpu,
  Ruler,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

export const navLinks = [
  { href: "#about", label: "O mně" },
  { href: "#work", label: "Zkušenosti" },
  { href: "#projects", label: "Projekty" },
  { href: "#stack", label: "Stack" },
] as const;

export const heroMeta = [
  { n: "6+", l: "Let praxe" },
  { n: "10+", l: "Projektů" },
  { n: "~30ms", l: "Cold start" },
] as const;

export const aboutParagraphs = [
  "Jmenuji se Karel a posledních osm let stavím webové produkty end-to-end. Baví mě práce na hraně — doslova: většinu backendu dnes provozuji na Cloudflare Workers, kde se latence měří v milisekundách a škálování řeším architekturou, ne fakturou.",
  "Nejsem jen „na frontend“ ani „na backend“. Vezmu produkt od whiteboardu přes datový model a API až po přístupné rozhraní — a nasadím ho ještě týž den.",
] as const;

export const aboutList: { icon: Icon; lead: string; text: string }[] = [
  {
    icon: Lightning,
    lead: "Edge-first architektura.",
    text: "Workers, D1, R2, Durable Objects — globální distribuce bez DevOps armády.",
  },
  {
    icon: ShieldCheck,
    lead: "Typová bezpečnost od DB po UI.",
    text: "Sdílené kontrakty mezi Hono/NestJS API a NextJS/Nuxt klientem.",
  },
  {
    icon: Cpu,
    lead: "Systémové jazyky, když je potřeba.",
    text: "Go a Rust pro výkonné nástroje a datové pipeline.",
  },
  {
    icon: Ruler,
    lead: "Design-aware.",
    text: "Rozumím gridu, typografii a přístupnosti — ne jen kódu.",
  },
];

export const bandStats = [
  { n: "6+", l: "Let profesionální praxe" },
  { n: "10+", l: "Dodaných projektů" },
  { n: "99.99%", l: "Uptime na edge" },
] as const;

type TimelineTag = { label: string; accent?: boolean };

export const timeline: {
  when: string;
  role: string;
  co: string;
  desc: string;
  tags: TimelineTag[];
}[] = [
  {
    when: "1/2026 — 4/2026",
    role: "Full Stack Engineer",
    co: "Develit.io · Web3",
    desc: "Medior full-stack developer se zaměřením na Web3. Vývoj Web3 aplikací — mimo jiné Emi, procesor pro nákup a prodej stablecoinů pro stable-labs. Stack Hono, Cloudflare a Nuxt 4.",
    tags: [
      { label: "Cloudflare", accent: true },
      { label: "Hono", accent: true },
      { label: "Nuxt" },
    ],
  },
  {
    when: "11/2024 — 2/2026",
    role: "Vývojář front-endu",
    co: "RegioJet a.s. · Brno",
    desc: "Vývoj front-endu pro největšího soukromého železničního a autobusového dopravce ve střední Evropě — webová platforma v NextJS a mobilní aplikace v React Native.",
    tags: [
      { label: "NextJS", accent: true },
      { label: "React Native" },
      { label: "Tailwind" },
    ],
  },
  {
    when: "2020 — 2024",
    role: "Informační technologie",
    co: "Střední škola · Maturitní obor",
    desc: "Maturitní obor se zaměřením na informační technologie — základy programování, sítí, databází a webového vývoje.",
    tags: [{ label: "Maturita" }],
  },
];

export const projects = [
  {
    num: "P.01",
    screenshot: "Náhled aplikace kpworkspace",
    image: "/kpworkspace.png",
    title: "kpworkspace",
    desc: "Rychlá multiplatformní desktopová aplikace, která spojuje terminál, editor, náhled prohlížeče, Git, Kanban, skills a paměť do soustředěných workspaců — s podporou MCP a lokálním převodem řeči na text.",
    tags: [
      "Tauri",
      "Rust",
      "NextJS",
      "Hono",
      "Cloudflare",
      "Better Auth",
      "Tailwind",
      "shadcn/ui",
    ],
    href: "https://kpworkspace.net",
  },
  {
    num: "P.02",
    screenshot: "Náhled platformy doggys.net",
    image: "/doggys.png",
    title: "doggys.net",
    desc: "Sociální platforma a komunita majitelů psů — místo, kde spolu budují příjemné prostředí pro pejsky.",
    tags: ["Vinext", "Hono", "Cloudflare", "Tailwind"],
    href: "https://doggys.net",
  },
  {
    num: "P.03",
    screenshot: "Náhled platformy promethiq.eu",
    image: "/PrometIQ.webp",
    title: "promethiq.eu",
    desc: "AI-powered trading platforma — obchodní rozhodování a analýza trhu poháněné umělou inteligencí.",
    tags: ["Python", "NextJS", "Hono", "Cloudflare"],
    href: "https://promethiq.eu",
  },
  {
    num: "P.04",
    screenshot: "Náhled platformy kphub.cz",
    image: "/kphub.png",
    title: "kphub.cz",
    desc: "Platforma, kde nabízím své služby jako full-stack developer — přehled práce, dovedností a kontakt na jednom místě.",
    tags: ["NextJS", "Vercel"],
    href: "https://kphub.cz",
  },
] as const;

export const stack = [
  { title: "Frontend", items: ["NextJS", "Nuxt", "Tailwind"] },
  { title: "Backend", items: ["Hono", "NestJS", "Go", "Rust", "Python"] },
  { title: "Data", items: ["Postgres", "D1", "R2"] },
  { title: "Infra", items: ["Cloudflare", "Vercel", "Workers"] },
] as const;

export const contactMeta: { icon: Icon; label: string; href: string }[] = [
  {
    icon: EnvelopeSimple,
    label: "spoluprace@karelpelcak.eu",
    href: "mailto:spoluprace@karelpelcak.eu",
  },
  {
    icon: GithubLogo,
    label: "github.com/karelpelcak",
    href: "https://github.com/karelpelcak",
  },
  {
    icon: LinkedinLogo,
    label: "linkedin.com/in/karel-pelcak",
    href: "https://www.linkedin.com/in/karel-pelcak/",
  },
];
