"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE, TECHNIQUES } from "@/lib/site-data";
import { NAV_SECTIONS } from "@/lib/nav";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SectionScrollLink } from "@/components/ui/SectionScrollLink";
import { SocialLinks } from "@/components/site/SocialLinks";
import { cn } from "@/lib/utils";

export function Nav() {
  const { open, toggle, close } = useMobileMenu();

  return (
    <nav className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-zinc-950/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl italic text-navy">
          Biointegral
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-600">
          {NAV_SECTIONS.map((l) => (
            <SectionScrollLink
              key={l.section}
              section={l.section}
              className={cn("nav-link-underline hover:text-navy")}
            >
              {l.label}
            </SectionScrollLink>
          ))}
          <Link
            href="/tecnicas/microfisioterapia"
            className="nav-link-underline hover:text-navy hidden xl:inline"
          >
            Microfisioterapia
          </Link>
          <SocialLinks variant="nav" />
          <WhatsAppButton variant="nav">Agendar Consulta</WhatsAppButton>
        </div>
        <button
          aria-label="Menu"
          className="lg:hidden text-navy"
          onClick={toggle}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-zinc-950/5 bg-canvas">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm">
            {NAV_SECTIONS.map((l) => (
              <SectionScrollLink
                key={l.section}
                section={l.section}
                onNavigate={close}
                className="text-zinc-700"
              >
                {l.label}
              </SectionScrollLink>
            ))}
            <div className="pt-2 border-t border-zinc-950/5 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Técnicas
              </p>
              {TECHNIQUES.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tecnicas/${t.slug}`}
                  onClick={close}
                  className="block text-zinc-700"
                >
                  {t.name}
                </Link>
              ))}
            </div>
            <SocialLinks variant="menu" onNavigate={close} />
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white px-5 py-3 rounded-full text-sm font-medium text-center"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
