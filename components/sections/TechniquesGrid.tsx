import { TECHNIQUES } from "@/lib/site-data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechniqueCard } from "@/components/cards/TechniqueCard";

export function TechniquesGrid() {
  return (
    <section id="tecnicas" className="scroll-mt-20 py-24 px-6 bg-champagne/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Nossa abordagem"
          title="Três técnicas integradas em cada sessão."
          description="Métodos não invasivos que acessam a memória celular e o subconsciente para promover a autocura."
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
