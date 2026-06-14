import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQS } from "@/lib/site-data";
import { SectionHeader } from "@/components/ui/SectionHeader";

type FaqListProps = {
  variant?: "home" | "page";
};

export function FaqList({ variant = "home" }: FaqListProps) {
  if (variant === "page") {
    return (
      <section className="px-6 pb-24 max-w-4xl mx-auto space-y-3">
        {FAQS.map((f, i) => (
          <FaqItem key={i} question={f.q} answer={f.a} />
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
          {FAQS.map((f, i) => (
            <FaqItem key={i} question={f.q} answer={f.a} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-navy font-semibold border-b border-gold pb-1 hover:gap-3 transition-all"
          >
            Ver todas as perguntas <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-2xl ring-1 ring-black/5 p-6 open:shadow-sm">
      <summary className="flex justify-between items-center cursor-pointer font-medium text-navy list-none">
        {question}
        <span className="text-gold text-2xl font-light group-open:rotate-45 transition-transform">
          +
        </span>
      </summary>
      <p className="text-sm text-zinc-600 mt-4 leading-relaxed">{answer}</p>
    </details>
  );
}
