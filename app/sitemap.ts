import type { MetadataRoute } from "next";
import { servicePages } from "./service-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://drukforma3d.pl";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    ...servicePages.map((page) => ({
      url: `${base}/uslugi/${page.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/materialy-druk-3d`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
