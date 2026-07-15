import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Jednostránkový web — hlavní URL + kotvy na sekce.
  const sections = ["about", "work", "projects", "stack", "contact"];

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...sections.map((id) => ({
      url: `${siteConfig.url}/#${id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
