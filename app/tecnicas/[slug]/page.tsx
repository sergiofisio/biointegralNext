import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { TECHNIQUES, SITE } from "@/lib/site-data";
import { SEO_BASE_URL } from "@/lib/seo";

const techImages: Record<string, string> = {
  microfisioterapia: "/images/tech-micro.jpg",
  "psych-k": "/images/tech-psychk.jpg",
  biodecodage: "/images/tech-biode.jpg",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TECHNIQUES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tech = TECHNIQUES.find((t) => t.slug === slug);
  if (!tech) return { title: "Técnica não encontrada" };

  return {
    title: tech.name,
    description: tech.short,
    alternates: { canonical: `/tecnicas/${tech.slug}` },
    openGraph: {
      title: `${tech.name} — Biointegral Saúde`,
      description: tech.short,
      type: "article",
      url: `${SEO_BASE_URL}/tecnicas/${tech.slug}`,
    },
  };
}

export default async function TechniquePage({ params }: Props) {
  const { slug } = await params;
  const tech = TECHNIQUES.find((t) => t.slug === slug);
  if (!tech) notFound();

  const others = TECHNIQUES.filter((t) => t.slug !== tech.slug);

  return (
    <div className="bg-canvas">
      <section className="px-6 pt-16 pb-12 max-w-5xl mx-auto">
        <Link
          href="/"
          className="text-xs font-semibold text-gold uppercase tracking-widest mb-6 inline-block"
        >
          ← Técnicas
        </Link>
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
            src={techImages[tech.slug]}
            alt={tech.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto">
        <p className="text-zinc-700 leading-relaxed text-lg whitespace-pre-line">
          {tech.long}
        </p>
        <div className="mt-12 flex gap-4 flex-wrap">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-navy-soft transition-colors"
          >
            Agendar uma sessão
          </a>
          <Link
            href="/contato"
            className="px-6 py-3 rounded-full font-medium text-sm ring-1 ring-zinc-950/10 text-navy"
          >
            Fazer uma pergunta
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 bg-champagne/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl text-navy mb-8">
            Outras técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((t) => (
              <Link
                key={t.slug}
                href={`/tecnicas/${t.slug}`}
                className="group bg-white rounded-2xl ring-1 ring-black/5 p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="font-display text-2xl text-navy mb-2">
                  {t.name}
                </h3>
                <p className="text-sm text-zinc-500 mb-4">{t.short}</p>
                <span className="text-xs font-semibold text-gold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saiba mais <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
