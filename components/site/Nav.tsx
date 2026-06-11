"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site-data";

const links = [
  { href: "/tecnicas/microfisioterapia", label: "Técnicas" },
  { href: "/quem-somos", label: "Especialistas" },
  { href: "/clinicas", label: "Unidades" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-zinc-950/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl italic text-navy">
          Biointegral
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-navy transition-colors ${pathname === l.href || pathname.startsWith(l.href + "/") ? "text-navy" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy text-white px-5 py-2 rounded-full text-sm font-medium ring-1 ring-navy hover:bg-navy-soft transition-colors"
          >
            Agendar Consulta
          </a>
        </div>
        <button
          aria-label="Menu"
          className="md:hidden text-navy"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-950/5 bg-canvas">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-zinc-700"
              >
                {l.label}
              </Link>
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
