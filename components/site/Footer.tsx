import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { SITE, CLINICS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-zinc-950/5 bg-canvas">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <span className="font-display text-3xl italic text-navy block mb-3">
            Biointegral
          </span>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed mb-4">
            Pioneiros no Brasil em Microfisioterapia, PSYCH-K® e Biodécodage.
            Fisioterapia integrativa em São Paulo e ABC Paulista.
          </p>
          <p className="text-xs text-zinc-400">
            Dra. Fresia Jorge de Sá Bastos · CREFITO-3 118.225-F
          </p>
          <p className="text-xs text-zinc-400">
            Dr. Sergio Augusto Moreira Bastos Jr. · CREFITO-3 111.132-F
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold text-navy uppercase tracking-widest block mb-4">
            Navegação
          </span>
          <ul className="space-y-2 text-sm text-zinc-500">
            <li>
              <Link href="/quem-somos" className="hover:text-gold">
                Quem somos
              </Link>
            </li>
            <li>
              <Link href="/tecnicas/microfisioterapia" className="hover:text-gold">
                Microfisioterapia
              </Link>
            </li>
            <li>
              <Link href="/tecnicas/psych-k" className="hover:text-gold">
                PSYCH-K®
              </Link>
            </li>
            <li>
              <Link href="/tecnicas/biodecodage" className="hover:text-gold">
                Biodécodage
              </Link>
            </li>
            <li>
              <Link href="/clinicas" className="hover:text-gold">
                Unidades
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gold">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-gold">
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-xs font-semibold text-navy uppercase tracking-widest block mb-4">
            Unidades
          </span>
          <ul className="space-y-3 text-sm text-zinc-500">
            {CLINICS.map((c) => (
              <li key={c.slug}>
                <div className="font-medium text-zinc-700">{c.name}</div>
                <div className="text-xs">{c.address}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-950/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} Biointegral Saúde. Todos os direitos
          reservados.
        </p>
        <div className="flex gap-4">
          <a
            href={SITE.instagram}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-gold"
          >
            <Instagram className="size-5" />
          </a>
          <a
            href={SITE.facebook}
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-gold"
          >
            <Facebook className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
