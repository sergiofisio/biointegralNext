import type { MetadataRoute } from "next";
import { SEO_BASE_URL, SEO_SITE_NAME } from "@/lib/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO_SITE_NAME,
    short_name: "Biointegral",
    description:
      "Clínica de fisioterapia integrativa em São Paulo e ABC Paulista. Microfisioterapia, PSYCH-K® e Biodécodage.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fcfafb",
    theme_color: "#0f172a",
    lang: "pt-BR",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
