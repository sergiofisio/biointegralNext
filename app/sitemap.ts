import type { MetadataRoute } from "next";
import { TECHNIQUES } from "@/lib/site-data";
import { canonicalUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/quem-somos", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/clinicas", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contato", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const techniqueRoutes = TECHNIQUES.map((t) => ({
    path: `/tecnicas/${t.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...techniqueRoutes].map((route) => ({
    url: canonicalUrl(route.path || "/"),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
