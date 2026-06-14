import { preload } from "react-dom";
import type { Metadata } from "next";
import { HashScroll } from "@/components/HashScroll";
import { HeroSection } from "@/components/sections/HeroSection";
import { SymptomMarquee } from "@/components/sections/SymptomMarquee";
import { IndicationsGrid } from "@/components/sections/IndicationsGrid";
import { TechniquesGrid } from "@/components/sections/TechniquesGrid";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ClinicsGrid } from "@/components/sections/ClinicsGrid";
import { FaqList } from "@/components/sections/FaqList";
import { FinalCta } from "@/components/sections/FinalCta";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Microfisioterapia, PSYCH-K® e Biodécodage",
  description:
    "Trate a causa das suas dores. Microfisioterapia, PSYCH-K® e Biodécodage em São Paulo e Santo André.",
  path: "/",
  ogTitle: "Biointegral Saúde — Fisioterapia Integrativa",
});

export default function HomePage() {
  preload("/images/hero-professionals.webp", {
    as: "image",
    fetchPriority: "high",
  });

  return (
    <div className="bg-canvas text-zinc-900">
      <HashScroll />
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
