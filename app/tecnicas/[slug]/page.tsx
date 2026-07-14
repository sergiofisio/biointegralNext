import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TECHNIQUES, SITE } from "@/lib/site-data";
import { IMAGES } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { TechniqueCard } from "@/components/cards/TechniqueCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  buildBreadcrumbJsonLd,
  buildTechniqueServiceJsonLd,
} from "@/lib/json-ld";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TECHNIQUES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tech = TECHNIQUES.find((t) => t.slug === slug);
  if (!tech) return { title: "Técnica não encontrada" };

  return pageMetadata({
    title: `${tech.name} em São Paulo e Santo André`,
    description: tech.metaDescription,
    path: `/tecnicas/${tech.slug}`,
    ogType: "article",
    keywords: tech.keywords,
  });
}

export default async function TechniquePage({ params }: Props) {
  const { slug } = await params;
  const tech = TECHNIQUES.find((t) => t.slug === slug);
  if (!tech) notFound();

  const others = TECHNIQUES.filter((t) => t.slug !== tech.slug);
  const breadcrumbItems = [
    { name: "Início", path: "/" },
    { name: "Técnicas", path: "/#tecnicas" },
    { name: tech.name, path: `/tecnicas/${tech.slug}` },
  ];

  const webpageLd = buildTechniqueServiceJsonLd(tech.slug);

  return (
    <div className="bg-canvas">
      <JsonLd data={buildBreadcrumbJsonLd(breadcrumbItems)} />
      {webpageLd && <JsonLd data={webpageLd} />}

      <section className="px-6 pt-16 pb-12 max-w-5xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        <h1 className="font-display text-5xl md:text-7xl text-navy leading-[0.95] text-balance mb-8">
          {tech.name}
        </h1>
        <p className="text-lg text-zinc-600 max-w-3xl leading-relaxed">
          {tech.short}
        </p>
      </section>

      <section className="px-6 max-w-5xl mx-auto">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden ring-1 ring-black/5 relative">
          <Image
            src={IMAGES.tech[tech.slug]}
            alt={`${tech.name} — Biointegral Saúde`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
      </section>

      <article className="px-6 py-16 max-w-3xl mx-auto space-y-12">
        {tech.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-3xl text-navy mb-4">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="text-zinc-700 leading-relaxed text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}

        <div className="flex gap-4 flex-wrap pt-4">
          <WhatsAppButton href={SITE.whatsappUrl} className="px-6 py-3">
            Agendar uma sessão
          </WhatsAppButton>
          <Link
            href="/contato"
            className="px-6 py-3 rounded-full font-medium text-sm ring-1 ring-zinc-950/10 text-navy inline-flex items-center"
          >
            Fazer uma pergunta
          </Link>
          <Link
            href="/clinicas"
            className="px-6 py-3 rounded-full font-medium text-sm ring-1 ring-zinc-950/10 text-navy inline-flex items-center"
          >
            Ver unidades
          </Link>
        </div>
      </article>

      <section className="px-6 py-16 bg-champagne/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-navy mb-8">
            Outras técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((t) => (
              <TechniqueCard key={t.slug} technique={t} variant="compact" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
