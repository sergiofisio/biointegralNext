import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TECHNIQUES, SITE } from "@/lib/site-data";
import { IMAGES } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { TechniqueCard } from "@/components/cards/TechniqueCard";
import { BackToHome } from "@/components/ui/BackToHome";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TECHNIQUES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tech = TECHNIQUES.find((t) => t.slug === slug);
  if (!tech) return { title: "Técnica não encontrada" };

  return pageMetadata({
    title: tech.name,
    description: tech.short,
    path: `/tecnicas/${tech.slug}`,
    ogType: "article",
  });
}

export default async function TechniquePage({ params }: Props) {
  const { slug } = await params;
  const tech = TECHNIQUES.find((t) => t.slug === slug);
  if (!tech) notFound();

  const others = TECHNIQUES.filter((t) => t.slug !== tech.slug);

  return (
    <div className="bg-canvas">
      <section className="px-6 pt-16 pb-12 max-w-5xl mx-auto">
        <BackToHome className="mb-6" />
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
            src={IMAGES.tech[tech.slug as keyof typeof IMAGES.tech]}
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
          <WhatsAppButton
            href={SITE.whatsappUrl}
            className="px-6 py-3"
          >
            Agendar uma sessão
          </WhatsAppButton>
          <Link
            href="/contato"
            className="px-6 py-3 rounded-full font-medium text-sm ring-1 ring-zinc-950/10 text-navy inline-flex items-center"
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
              <TechniqueCard key={t.slug} technique={t} variant="compact" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
