import { SYMPTOMS } from "@/lib/site-data";

export function SymptomMarquee() {
  return (
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
  );
}
