import type { Metadata } from "next";
import { TECHNIQUES } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { TechniqueCard } from "@/components/cards/TechniqueCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/json-ld";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Técnicas — Microfisioterapia, PSYCH-K® e Biodécodage",
  description:
    "Conheça as três técnicas da Biointegral Saúde em São Paulo e Santo André: Microfisioterapia, PSYCH-K® e Biodécodage.",
  path: "/tecnicas",
  keywords: [
    "técnicas fisioterapia integrativa",
    "microfisioterapia",
    "PSYCH-K",
    "biodécodage",
  ],
});

const breadcrumbItems = [
  { name: "Início", path: "/" },
  { name: "Técnicas", path: "/tecnicas" },
];

export default function TechniquesIndexPage() {
  return (
    <div className="bg-canvas">
      <JsonLd data={buildBreadcrumbJsonLd(breadcrumbItems)} />
      <div className="px-6 pt-16 max-w-5xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      </div>
      <PageHeader
        label="Técnicas"
        title="Três abordagens, uma escuta clínica."
        description="Microfisioterapia, PSYCH-K® e Biodécodage aplicadas por fisioterapeutas CREFITO-3 em São Paulo e no ABC."
        className="pt-4"
        showBackLink
      />
      <section className="px-6 pb-8 max-w-5xl mx-auto">
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          Procurando atendimento local? Veja{" "}
          <Link
            href="/microfisioterapia-sao-paulo/"
            className="text-gold font-medium hover:underline"
          >
            microfisioterapia em São Paulo
          </Link>{" "}
          ou{" "}
          <Link
            href="/microfisioterapia-santo-andre/"
            className="text-gold font-medium hover:underline"
          >
            microfisioterapia em Santo André
          </Link>
          .
        </p>
      </section>
      <section className="px-6 pb-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {TECHNIQUES.map((t) => (
          <TechniqueCard key={t.slug} technique={t} />
        ))}
      </section>
    </div>
  );
}
