import type { Metadata } from "next";
import { SEO_BASE_URL } from "@/lib/seo";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogType?: "website" | "article";
};

export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogType = "website",
}: PageMetaInput): Metadata {
  const url = path === "/" ? SEO_BASE_URL : `${SEO_BASE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle ?? `${title} · Biointegral Saúde`,
      description,
      url,
      type: ogType,
    },
  };
}
