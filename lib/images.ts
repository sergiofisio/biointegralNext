export const IMAGES = {
  hero: {
    src: "/images/hero-professionals-640.webp",
    srcSet:
      "/images/hero-professionals-480.webp 480w, /images/hero-professionals-640.webp 640w, /images/hero-professionals-960.webp 960w, /images/hero-professionals-1280.webp 1280w, /images/hero-professionals-1600.webp 1600w, /images/hero-professionals-2048.webp 2048w",
    /** Variante mobile-first para preload (LCP). */
    preload: "/images/hero-professionals-480.webp",
    /** Foto paisagem cortada num quadro 4:5: a largura útil é ~1,9x a do quadro. */
    sizes: "(max-width: 1024px) min(188vw, 790px), 75vw",
  },
  draFresia: "/images/dra-fresia new.webp",
  drSergio: "/images/dr-sergio new.webp",
  tech: {
    microfisioterapia: "/images/tech-micro.webp",
    "psych-k": "/images/tech-psychk.webp",
    biodecodage: "/images/tech-biode.webp",
  },
} as const;
