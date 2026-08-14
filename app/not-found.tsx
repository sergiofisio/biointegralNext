import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="bg-canvas px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl rounded-4xl bg-gold px-8 py-16 text-center md:px-16 md:py-20">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-widest text-navy/70">
          Erro 404
        </span>
        <h1 className="font-display text-5xl leading-tight text-navy text-balance md:text-6xl">
          Esta página não existe
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-navy/80 text-pretty">
          O endereço pode ter mudado ou ter sido digitado incorretamente. Volte
          à página inicial da Biointegral Saúde para continuar.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-navy-soft"
          >
            <Home className="size-4" />
            Ir para a home
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-navy ring-1 ring-navy/20 transition-colors hover:bg-navy/5"
          >
            Falar conosco <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
