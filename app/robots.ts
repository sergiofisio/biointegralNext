import type { MetadataRoute } from "next";
import { SEO_BASE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/llms.txt"],
      disallow: "/satisfacao/",
    },
    sitemap: `${SEO_BASE_URL}/sitemap.xml`,
  };
}
