import { INDICATIONS } from "@/lib/site-data";
import { INDICATION_ICONS } from "@/lib/icons";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function IndicationsGrid() {
  return (
    <section id="indicacoes" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="Para quem é indicado"
        title="Quando o sintoma é apenas a ponta do iceberg."
        description="Nossas técnicas são especialmente indicadas para quem busca tratar a origem de queixas que persistem mesmo após tratamentos convencionais."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-zinc-200 ring-1 ring-zinc-200 rounded-3xl overflow-hidden">
        {INDICATIONS.map(({ icon, title, desc }) => {
          const Icon = INDICATION_ICONS[icon];
          return (
            <div
              key={title}
              className="bg-canvas p-8 hover:bg-champagne/40 transition-colors"
            >
              <Icon className="size-6 text-gold mb-4" />
              <h3 className="font-display text-2xl text-navy mb-2">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
