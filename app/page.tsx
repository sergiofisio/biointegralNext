import { preload } from "react-dom";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { SymptomMarquee } from "@/components/sections/SymptomMarquee";
import { IndicationsGrid } from "@/components/sections/IndicationsGrid";
import { TechniquesGrid } from "@/components/sections/TechniquesGrid";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ClinicsGrid } from "@/components/sections/ClinicsGrid";
import { FaqList } from "@/components/sections/FaqList";
import { FinalCta } from "@/components/sections/FinalCta";
import { pageMetadata } from "@/lib/metadata";
import { IMAGES } from "@/lib/images";

const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/TestimonialsSection").then(
      (mod) => mod.TestimonialsSection,
    ),
  {
    ssr: true,
    loading: () => (
      <section
        className="bg-navy py-24 px-6 min-h-112"
        aria-label="Depoimentos de pacientes"
      />
    ),
  },
);

export const metadata: Metadata = pageMetadata({
  title: "Microfisioterapia, PSYCH-K® e Biodécodage",
  description:
    "Trate a causa das suas dores. Microfisioterapia, PSYCH-K® e Biodécodage em São Paulo e Santo André.",
  path: "/",
  ogTitle: "Biointegral Saúde — Fisioterapia Integrativa",
});

export default function HomePage() {
  preload(IMAGES.hero.preload, {
    as: "image",
    fetchPriority: "high",
    imageSrcSet: IMAGES.hero.srcSet,
    imageSizes: IMAGES.hero.sizes,
  });

  return (
    <div className="bg-canvas text-zinc-900">
      <HeroSection />
      <SymptomMarquee />
      <IndicationsGrid />
      <TechniquesGrid />
      <AboutPreview />
      <TestimonialsSection />
      <ClinicsGrid />
      <FaqList />
      <FinalCta />
    </div>
  );
}
