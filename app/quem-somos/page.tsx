import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROFESSIONALS } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";

export const metadata: Metadata = pageMetadata({
  title: "Quem somos — Dr. Sergio e Dra. Fresia",
  description:
    "Conheça Dr. Sergio Augusto e Dra. Fresia Jorge, fisioterapeutas pioneiros no Brasil em Microfisioterapia, PSYCH-K® e Biodécodage.",
  path: "/quem-somos",
  ogTitle: "Quem somos — Biointegral Saúde",
});

export default function AboutPage() {
  return (
    <div className="bg-canvas">
      <PageHeader
        label="Quem somos"
        title={
          <>
            Dr. Sergio e Dra. Fresia — uma vida dedicada à{" "}
            <span className="italic text-gold">causa</span>.
          </>
        }
        description="Fisioterapeutas formados pelas Faculdades Integradas Pitágoras de Montes Claros/MG, aperfeiçoaram-se em Terapia Manual e construíram uma das trajetórias mais sólidas do Brasil em terapias integrativas."
        className="pt-20 max-w-5xl"
        titleClassName="text-5xl md:text-7xl"
        showBackLink
      />

      <section className="px-6 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROFESSIONALS.map((p) => (
          <ProfessionalCard key={p.name} {...p} />
        ))}
      </section>

      <section className="px-6 py-16 bg-champagne/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-navy mb-8">
            Formação internacional
          </h2>
          <ul className="space-y-4 text-zinc-600">
            <li className="border-l-2 border-gold pl-6 py-1">
              <strong className="text-navy">Microfisioterapia</strong> —
              formação direta com Daniel Grosjean e Patrice Benini, criadores da
              técnica, na França.
            </li>
            <li className="border-l-2 border-gold pl-6 py-1">
              <strong className="text-navy">Décodage Biologique</strong> —
              especialização com Emmanuel Corbeel, na Bélgica.
            </li>
            <li className="border-l-2 border-gold pl-6 py-1">
              <strong className="text-navy">BIOdécodage Prática</strong> —
              estudos continuados com o criador do método, Christian Flèche.
            </li>
            <li className="border-l-2 border-gold pl-6 py-1">
              <strong className="text-navy">PSYCH-K®</strong> — facilitadores
              certificados internacionalmente.
            </li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <Link
          href="/contato"
          className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-medium hover:bg-navy-soft transition-colors"
        >
          Agendar uma consulta <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  );
}
