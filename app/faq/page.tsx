import type { Metadata } from "next";
import { FAQS } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { FaqList } from "@/components/sections/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Perguntas Frequentes",
  description:
    "Dúvidas comuns sobre Microfisioterapia, PSYCH-K®, Biodécodage e o atendimento da clínica.",
  path: "/faq",
  ogTitle: "FAQ — Biointegral Saúde",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <div className="bg-canvas">
      <JsonLd data={faqJsonLd} />
      <PageHeader
        label="FAQ"
        title="Perguntas frequentes."
        description="Reunimos as dúvidas mais comuns sobre nossas técnicas e atendimento."
        className="max-w-4xl"
        showBackLink
      />
      <FaqList variant="page" />
    </div>
  );
}
