import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROFESSIONALS } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Quem somos — Dr. Sergio e Dra. Fresia",
  description:
    "Conheça Dr. Sergio Augusto e Dra. Fresia Jorge, fisioterapeutas pioneiros no Brasil em Microfisioterapia, PSYCH-K® e Biodécodage. CREFITO-3, formação internacional.",
  path: "/quem-somos",
  ogTitle: "Quem somos — Biointegral Saúde",
  keywords: [
    "Dr Sergio Bastos",
    "Dra Fresia Bastos",
    "fisioterapeuta microfisioterapia",
  ],
});

const breadcrumbItems = [
  { name: "Início", path: "/" },
  { name: "Quem somos", path: "/quem-somos" },
];

export default function AboutPage() {
  return (
    <div className="bg-canvas">
      <JsonLd data={buildBreadcrumbJsonLd(breadcrumbItems)} />
      <div className="px-6 pt-16 max-w-5xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      </div>
      <PageHeader
        label="Quem somos"
        title={
          <>
            Dr. Sergio e Dra. Fresia — uma vida dedicada à{" "}
            <span className="italic text-gold">causa</span>.
          </>
        }
        description="Fisioterapeutas formados pelas Faculdades Integradas Pitágoras de Montes Claros/MG, aperfeiçoaram-se em Terapia Manual e construíram uma das trajetórias mais sólidas do Brasil em terapias integrativas. Clínica fundada em 2008, com atendimento em São Paulo e Santo André."
        className="pt-4 max-w-5xl"
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
          <p className="mt-8 text-sm text-zinc-600 leading-relaxed">
            Para detalhes das técnicas aplicadas no consultório, veja{" "}
            <Link
              href="/tecnicas/microfisioterapia/"
              className="text-gold font-medium hover:underline"
            >
              Microfisioterapia
            </Link>
            ,{" "}
            <Link
              href="/tecnicas/psych-k/"
              className="text-gold font-medium hover:underline"
            >
              PSYCH-K®
            </Link>{" "}
            e{" "}
            <Link
              href="/tecnicas/biodecodage/"
              className="text-gold font-medium hover:underline"
            >
              Biodécodage
            </Link>
            .
          </p>
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
