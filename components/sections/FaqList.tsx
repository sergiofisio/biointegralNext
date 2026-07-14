import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQS, FAQS_HOME, type FaqEntry } from "@/lib/site-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

type FaqListProps = {
  variant?: "home" | "page";
};

export function FaqList({ variant = "home" }: FaqListProps) {
  if (variant === "page") {
    return (
      <section className="px-6 pb-24 max-w-4xl mx-auto space-y-3">
        {FAQS.map((f) => (
          <FaqItem key={f.q} entry={f} />
        ))}
      </section>
    );
  }

  return (
    <section id="faq" className="scroll-mt-20 py-24 px-6 bg-champagne/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Dúvidas frequentes"
          title="Antes de agendar."
          centered
          className="mb-12 max-w-2xl"
        />
        <div className="space-y-3">
          {FAQS_HOME.map((f) => (
            <FaqItem key={f.q} entry={f} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-navy font-semibold border-b border-gold pb-1 hover:gap-3 transition-all"
          >
            Ver FAQ completo <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ entry }: { entry: FaqEntry }) {
  return (
    <details className="group bg-white rounded-2xl ring-1 ring-black/5 p-6 open:shadow-sm">
      <summary className="flex justify-between items-center cursor-pointer font-medium text-navy list-none gap-4">
        {entry.q}
        <span className="text-gold text-2xl font-light group-open:rotate-45 transition-transform shrink-0">
          +
        </span>
      </summary>
      <p className="text-sm text-zinc-600 mt-4 leading-relaxed">{entry.a}</p>
      {entry.related && entry.related.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-3">
          {entry.related.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-semibold text-gold uppercase tracking-wider hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </details>
  );
}
