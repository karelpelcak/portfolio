import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karel Pelčák — Full-Stack Developer",
  description:
    "Full-stack vývojář se specializací na edge computing. Od návrhu API po pixel-perfect UI — NextJS, Hono a Cloudflare Workers. Based in Prague, working worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
