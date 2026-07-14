export const IMAGES = {
  hero: {
    src: "/images/hero-professionals-1280.webp",
    srcSet:
      "/images/hero-professionals-640.webp 640w, /images/hero-professionals-960.webp 960w, /images/hero-professionals-1280.webp 1280w",
    /** Variante mobile-first para preload (LCP). */
    preload: "/images/hero-professionals-640.webp",
    sizes: "(max-width: 1024px) 100vw, 40vw",
  },
  draFresia: "/images/dra-fresia.webp",
  drSergio: "/images/dr-sergio.webp",
  tech: {
    microfisioterapia: "/images/tech-micro.webp",
    "psych-k": "/images/tech-psychk.webp",
    biodecodage: "/images/tech-biode.webp",
  },
} as const;
