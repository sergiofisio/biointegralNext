import Link from "next/link";
import { CLINICS, SITE } from "@/lib/site-data";
import type { LocalLanding } from "@/lib/local-landings";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { buildBreadcrumbJsonLd } from "@/lib/json-ld";
import { SEO_BASE_URL } from "@/lib/seo";

type LocalLandingPageProps = {
  landing: LocalLanding;
};

export function LocalLandingPage({ landing }: LocalLandingPageProps) {
  const clinics = CLINICS.filter((c) =>
    landing.clinics.includes(c.slug as (typeof landing.clinics)[number]),
  );
  const breadcrumbItems = [
    { name: "Início", path: "/" },
    { name: "Microfisioterapia", path: "/tecnicas/microfisioterapia" },
    { name: landing.city, path: landing.path },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: landing.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    url: `${SEO_BASE_URL}${landing.path}/`,
    name: landing.h1,
    description: landing.description,
    about: {
      "@type": "Service",
      name: "Microfisioterapia",
      areaServed: landing.city,
      provider: { "@id": `${SEO_BASE_URL}/#organization` },
    },
    inLanguage: "pt-BR",
  };

  return (
    <div className="bg-canvas">
      <JsonLd data={buildBreadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="px-6 pt-16 pb-12 max-w-5xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        <h1 className="font-display text-5xl md:text-7xl text-navy leading-[0.95] text-balance mb-8">
          {landing.h1}
        </h1>
        <p className="text-lg text-zinc-600 max-w-3xl leading-relaxed">
          {landing.description}
        </p>
      </section>

      <article className="px-6 pb-16 max-w-3xl mx-auto space-y-8">
        {landing.intro.map((p) => (
          <p key={p.slice(0, 40)} className="text-zinc-700 leading-relaxed text-lg">
            {p}
          </p>
        ))}
        <p className="text-zinc-700 leading-relaxed text-lg">
          Leia o método com mais detalhe em{" "}
          <Link
            href="/tecnicas/microfisioterapia/"
            className="text-gold font-medium hover:underline"
          >
            o que é Microfisioterapia
          </Link>
          , conheça{" "}
          <Link href="/quem-somos/" className="text-gold font-medium hover:underline">
            Dr. Sergio e Dra. Fresia
          </Link>{" "}
          e as demais{" "}
          <Link href="/clinicas/" className="text-gold font-medium hover:underline">
            unidades
          </Link>
          .
        </p>
      </article>

      <section className="px-6 py-16 bg-champagne/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl text-navy mb-8">
            Por que esta unidade
          </h2>
          <div className="space-y-8">
            {landing.whyHere.map((item) => (
              <div key={item.heading}>
                <h3 className="font-display text-2xl text-navy mb-2">
                  {item.heading}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="font-display text-3xl text-navy mb-8">Endereços</h2>
        <ul className="space-y-6">
          {clinics.map((c) => (
            <li key={c.slug} className="ring-1 ring-black/5 rounded-2xl p-6 bg-white">
              <div className="font-medium text-navy">{c.name}</div>
              <p className="text-sm text-zinc-600 mt-1">
                {c.address} — {c.neighborhood}
              </p>
              <a
                href={c.mapsUrl}
                className="text-xs font-semibold text-gold uppercase tracking-wider mt-3 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no mapa
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-4">
          <WhatsAppButton href={SITE.whatsappUrl}>Agendar em {landing.city}</WhatsAppButton>
          <Link
            href="/contato"
            className="px-6 py-3 rounded-full font-medium text-sm ring-1 ring-zinc-950/10 text-navy inline-flex items-center"
          >
            Formulário de contato
          </Link>
        </div>
      </section>

      <section className="px-6 pb-24 max-w-3xl mx-auto space-y-3">
        <h2 className="font-display text-3xl text-navy mb-6">Perguntas locais</h2>
        {landing.faq.map((f) => (
          <details
            key={f.q}
            className="group bg-white rounded-2xl ring-1 ring-black/5 p-6"
          >
            <summary className="cursor-pointer font-medium text-navy list-none">
              {f.q}
            </summary>
            <p className="text-sm text-zinc-600 mt-4 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </section>
    </div>
  );
}
