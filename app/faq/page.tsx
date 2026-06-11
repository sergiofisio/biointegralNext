import type { Metadata } from "next";
import { FAQS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description:
    "Dúvidas comuns sobre Microfisioterapia, PSYCH-K®, Biodécodage e o atendimento da clínica.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Biointegral Saúde",
    description: "Respostas para as principais dúvidas.",
    url: "/faq",
  },
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="px-6 pt-16 pb-12 max-w-4xl mx-auto">
        <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-4 block">
          FAQ
        </span>
        <h1 className="font-display text-5xl md:text-6xl text-navy leading-[0.95] text-balance mb-6">
          Perguntas frequentes.
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl">
          Reunimos as dúvidas mais comuns sobre nossas técnicas e atendimento.
        </p>
      </section>

      <section className="px-6 pb-24 max-w-4xl mx-auto space-y-3">
        {FAQS.map((f, i) => (
          <details
            key={i}
            className="group bg-white rounded-2xl ring-1 ring-black/5 p-6 open:shadow-sm"
          >
            <summary className="flex justify-between items-center cursor-pointer font-medium text-navy list-none">
              {f.q}
              <span className="text-gold text-2xl font-light group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="text-sm text-zinc-600 mt-4 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
