import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  MapPin,
  Heart,
  Brain,
  Sparkles,
  ShieldCheck,
  Users,
} from "lucide-react";
import { CLINICS, SYMPTOMS, TECHNIQUES, FAQS, SITE } from "@/lib/site-data";
import { SEO_BASE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Microfisioterapia, PSYCH-K® e Biodécodage",
  description:
    "Trate a causa primária das suas dores. Clínica pioneira no Brasil em Microfisioterapia, PSYCH-K® e Biodécodage. Atendimento em São Paulo e Santo André.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Biointegral Saúde — Fisioterapia Integrativa",
    description:
      "Ciência e sensibilidade para o seu equilíbrio vital. Dr. Sergio e Dra. Fresia em SP e ABC.",
    url: SEO_BASE_URL,
  },
};

const techImages: Record<string, string> = {
  microfisioterapia: "/images/tech-micro.jpg",
  "psych-k": "/images/tech-psychk.jpg",
  biodecodage: "/images/tech-biode.jpg",
};

export default function HomePage() {
  return (
    <div className="bg-canvas text-zinc-900">
      <section className="pt-12 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-gold/10 text-gold text-xs font-semibold tracking-wider uppercase mb-6">
              Saúde Integrativa · Desde 2008
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] text-navy text-balance mb-8">
              Ciência e sensibilidade para o seu{" "}
              <span className="italic text-gold">equilíbrio vital.</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-[52ch] text-pretty mb-10 leading-relaxed">
              Sob a coordenação do Dr. Sergio e Dra. Fresia, unimos a precisão
              da Microfisioterapia ao reequilíbrio emocional do PSYCH-K® e
              Biodécodage para tratar a causa primária das suas dores físicas e
              emocionais.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white py-3 pr-5 pl-4 flex items-center gap-2 rounded-full text-sm font-medium ring-1 ring-navy hover:bg-navy-soft transition-colors"
              >
                <Calendar className="size-4 shrink-0" />
                Agende sua consulta
              </a>
              <Link
                href="/tecnicas/microfisioterapia"
                className="bg-transparent text-navy py-3 px-6 rounded-full text-sm font-medium ring-1 ring-zinc-950/10 hover:bg-zinc-950/5 transition-colors flex items-center gap-2"
              >
                Conheça nossas técnicas
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 animate-fade-up">
            <div className="w-full aspect-[4/5] bg-champagne outline outline-1 -outline-offset-1 outline-black/5 rounded-3xl overflow-hidden relative">
              <Image
                src="/images/hero-professionals.jpg"
                alt="Dr. Sergio e Dra. Fresia, fisioterapeutas integrativos"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 border-y border-zinc-950/5 bg-zinc-50 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
          {[...SYMPTOMS, ...SYMPTOMS].map((s, i) => (
            <span
              key={i}
              className="text-zinc-400 font-medium flex items-center gap-3 text-sm"
            >
              <span className="size-1.5 rounded-full bg-gold" /> {s}
            </span>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-3 block">
            Para quem é indicado
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-navy text-balance leading-tight">
            Quando o sintoma é apenas a ponta do iceberg.
          </h2>
          <p className="text-zinc-500 mt-4 text-pretty">
            Nossas técnicas são especialmente indicadas para quem busca tratar
            a origem de queixas que persistem mesmo após tratamentos
            convencionais.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-zinc-200 ring-1 ring-zinc-200 rounded-3xl overflow-hidden">
          {[
            {
              icon: Heart,
              title: "Dores Crônicas",
              desc: "Lombalgia, cervicalgia, enxaqueca e dores sem causa aparente.",
            },
            {
              icon: Brain,
              title: "Ansiedade e Pânico",
              desc: "Crises recorrentes, fobias e bloqueios emocionais.",
            },
            {
              icon: Sparkles,
              title: "Traumas Emocionais",
              desc: "Perdas, lutos, abusos e memórias dolorosas.",
            },
            {
              icon: ShieldCheck,
              title: "Alergias e Imunidade",
              desc: "Rinites, dermatites e quadros alérgicos persistentes.",
            },
            {
              icon: Users,
              title: "Relacionamentos",
              desc: "Padrões repetitivos em relações afetivas e profissionais.",
            },
            {
              icon: Heart,
              title: "Distúrbios do Sono",
              desc: "Insônia, pesadelos e dificuldade para relaxar.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-canvas p-8 hover:bg-champagne/40 transition-colors"
            >
              <Icon className="size-6 text-gold mb-4" />
              <h3 className="font-display text-2xl text-navy mb-2">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tecnicas" className="py-24 px-6 bg-champagne/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-3 block">
              Nossa abordagem
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy text-balance leading-tight">
              Três técnicas integradas em cada sessão.
            </h2>
            <p className="text-zinc-500 mt-4 text-pretty">
              Métodos não invasivos que acessam a memória celular e o
              subconsciente para promover a autocura.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TECHNIQUES.map((t) => (
              <Link
                key={t.slug}
                href={`/tecnicas/${t.slug}`}
                className="group block"
              >
                <div className="w-full aspect-video bg-zinc-100 rounded-2xl mb-6 overflow-hidden ring-1 ring-black/5 relative">
                  <Image
                    src={techImages[t.slug]}
                    alt={t.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-display text-2xl text-navy mb-2">
                  {t.name}
                </h3>
                <p className="text-sm text-zinc-600 mb-4 text-pretty leading-relaxed">
                  {t.short}
                </p>
                <span className="text-xs font-semibold text-gold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saiba mais <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5 relative">
              <Image
                src="/images/dra-fresia.jpg"
                alt="Dra. Fresia"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-black/5 mt-12 relative">
              <Image
                src="/images/dr-sergio.jpg"
                alt="Dr. Sergio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-3 block">
              Quem somos
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy text-balance leading-tight mb-6">
              Dr. Sergio e Dra. Fresia — pioneiros das terapias integrativas no
              Brasil.
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Fisioterapeutas formados pelas Faculdades Integradas Pitágoras de
              Montes Claros/MG, aperfeiçoaram-se em Terapia Manual e se
              especializaram em Microfisioterapia diretamente com os criadores
              da técnica, Daniel Grosjean e Patrice Benini, na França.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-8">
              Especializaram-se também em Décodage Biologique com Emmanuel
              Corbeel, na Bélgica, e dedicam-se atualmente ao estudo da
              BIOdécodage Prática com seu criador Christian Flèche.
            </p>
            <Link
              href="/quem-somos"
              className="inline-flex items-center gap-2 text-navy font-semibold border-b border-gold pb-1 hover:gap-3 transition-all"
            >
              Conheça nossa trajetória <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-6 block">
              Depoimento
            </span>
            <blockquote className="font-display text-3xl md:text-4xl text-champagne leading-tight text-balance">
              &ldquo;A Biointegral mudou minha percepção sobre saúde. Pela
              primeira vez, senti que alguém olhou para a causa, não apenas
              para o sintoma. Em poucas sessões minha enxaqueca crônica
              simplesmente parou.&rdquo;
            </blockquote>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="size-12 rounded-full bg-gold/20 ring-1 ring-gold/30 grid place-items-center text-gold font-display text-lg">
                M
              </div>
              <div>
                <div className="text-white font-medium">Mariana Silva, 34</div>
                <div className="text-gold/70 text-xs">
                  São Paulo · paciente desde 2022
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-white/10 pb-6 opacity-60">
              <div className="size-12 rounded-full bg-gold/20 ring-1 ring-gold/30 grid place-items-center text-gold font-display text-lg">
                R
              </div>
              <div>
                <div className="text-white font-medium">Ricardo Menezes, 42</div>
                <div className="text-gold/60 text-xs">Santo André</div>
              </div>
            </div>
            <div className="flex items-center gap-4 opacity-40">
              <div className="size-12 rounded-full bg-gold/20 ring-1 ring-gold/30 grid place-items-center text-gold font-display text-lg">
                C
              </div>
              <div>
                <div className="text-white font-medium">Carla Tavares, 51</div>
                <div className="text-gold/60 text-xs">São Paulo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clinicas" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-3 block">
            Onde estamos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-navy text-balance leading-tight">
            Clínicas em São Paulo e ABC Paulista.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINICS.map((c) => (
            <div
              key={c.slug}
              className="p-8 rounded-3xl bg-white ring-1 ring-black/5 flex flex-col"
            >
              <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">
                {c.city}
              </span>
              <h3 className="font-display text-2xl text-navy mb-3">{c.name}</h3>
              <p className="text-sm text-zinc-500 mb-6 flex-1">
                {c.address}
                <br />
                {c.neighborhood}
              </p>
              <a
                href={c.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-navy uppercase tracking-wider"
              >
                <MapPin className="size-4" /> Ver no Google Maps
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="py-24 px-6 bg-champagne/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest mb-3 block">
              Dúvidas frequentes
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy text-balance leading-tight">
              Antes de agendar.
            </h2>
          </div>
          <div className="space-y-3">
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
                <p className="text-sm text-zinc-600 mt-4 leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-gold rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <h2 className="font-display text-4xl md:text-6xl text-navy mb-6 text-balance leading-tight">
            Pronto para tratar a causa,{" "}
            <span className="italic">não apenas o sintoma?</span>
          </h2>
          <p className="text-navy/80 mb-10 max-w-xl mx-auto text-pretty">
            Fale com nossa recepção pelo WhatsApp e agende uma avaliação em uma
            das três unidades.
          </p>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-medium hover:bg-navy-soft transition-colors"
          >
            <Calendar className="size-4" /> Agendar pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
