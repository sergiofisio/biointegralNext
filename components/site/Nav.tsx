"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { NAV_SECTIONS } from "@/lib/nav";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SectionScrollLink } from "@/components/ui/SectionScrollLink";

export function Nav() {
  const { open, toggle, close } = useMobileMenu();

  return (
    <nav className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-zinc-950/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl italic text-navy">
          Biointegral
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          {NAV_SECTIONS.map((l) => (
            <SectionScrollLink
              key={l.section}
              section={l.section}
              className="hover:text-navy transition-colors"
            >
              {l.label}
            </SectionScrollLink>
          ))}
          <WhatsAppButton variant="nav">Agendar Consulta</WhatsAppButton>
        </div>
        <button
          aria-label="Menu"
          className="md:hidden text-navy"
          onClick={toggle}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-950/5 bg-canvas">
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
