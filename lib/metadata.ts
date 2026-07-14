import type { Metadata } from "next";
import {
  SEO_BASE_URL,
  SEO_DEFAULT_IMAGE,
  SEO_KEYWORDS,
  SEO_SITE_NAME,
  canonicalUrl,
} from "@/lib/seo";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogType?: "website" | "article";
  keywords?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogType = "website",
  keywords,
}: PageMetaInput): Metadata {
  const url = canonicalUrl(path);
  const ogImageTitle = ogTitle ?? `${title} · ${SEO_SITE_NAME}`;

  return {
    title,
    description,
    keywords: keywords?.length ? [...keywords, ...SEO_KEYWORDS] : SEO_KEYWORDS,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: ogImageTitle,
      description,
      url,
      type: ogType,
      locale: "pt_BR",
      siteName: SEO_SITE_NAME,
      images: [
        {
          url: SEO_DEFAULT_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SEO_SITE_NAME} — fisioterapia integrativa em São Paulo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogImageTitle,
      description,
      images: [SEO_DEFAULT_IMAGE],
    },
  };
}

export const rootOpenGraph = {
  siteName: SEO_SITE_NAME,
  type: "website" as const,
  locale: "pt_BR",
  url: `${SEO_BASE_URL}/`,
  images: [
    {
      url: SEO_DEFAULT_IMAGE,
      width: 1200,
      height: 630,
      alt: `${SEO_SITE_NAME} — fisioterapia integrativa em São Paulo`,
    },
  ],
};
