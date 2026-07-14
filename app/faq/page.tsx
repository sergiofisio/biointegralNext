import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { FaqList } from "@/components/sections/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = pageMetadata({
  title: "Perguntas Frequentes",
  description:
    "O que é microfisioterapia, diferenças entre PSYCH-K® e Biodécodage, onde fazer em São Paulo e Santo André, e como agendar na Biointegral Saúde.",
  path: "/faq",
  ogTitle: "FAQ — Biointegral Saúde",
  keywords: [
    "o que é microfisioterapia",
    "microfisioterapia São Paulo",
    "FAQ fisioterapia integrativa",
  ],
});

const breadcrumbItems = [
  { name: "Início", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export default function FAQPage() {
  return (
    <div className="bg-canvas">
      <JsonLd data={buildFaqJsonLd()} />
      <JsonLd data={buildBreadcrumbJsonLd(breadcrumbItems)} />
      <div className="px-6 pt-16 max-w-4xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
      </div>
      <PageHeader
        label="FAQ"
        title="Perguntas frequentes."
        description="Respostas claras sobre Microfisioterapia, PSYCH-K®, Biodécodage e o atendimento da clínica em São Paulo e ABC."
        className="max-w-4xl pt-4"
        showBackLink
      />
      <FaqList variant="page" />
    </div>
  );
}
