import { TECHNIQUES } from "@/lib/site-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechniqueCard } from "@/components/cards/TechniqueCard";

export function TechniquesGrid() {
  return (
    <section id="tecnicas" className="scroll-mt-20 py-24 px-6 bg-champagne/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Nossa abordagem"
          title="Conheça as abordagens da Biointegral"
          description="Abordagens não invasivas, apresentadas com clareza sobre como funcionam e quais são seus limites. Não substituem o acompanhamento médico."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECHNIQUES.map((t) => (
            <TechniqueCard key={t.slug} technique={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
