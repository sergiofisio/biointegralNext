import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/images";

type Technique = {
  slug: string;
  name: string;
  short: string;
};

type TechniqueCardProps = {
  technique: Technique;
  variant?: "grid" | "compact";
};

export function TechniqueCard({
  technique,
  variant = "grid",
}: TechniqueCardProps) {
  const imageSrc = IMAGES.tech[technique.slug as keyof typeof IMAGES.tech];

  if (variant === "compact") {
    return (
      <Link
        href={`/tecnicas/${technique.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white rounded-2xl ring-1 ring-black/5 p-8 hover:shadow-md transition-shadow"
      >
        <h3 className="font-display text-2xl text-navy mb-2">
          {technique.name}
        </h3>
        <p className="text-sm text-zinc-500 mb-4">{technique.short}</p>
        <span className="text-xs font-semibold text-gold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
          Saiba mais <ArrowRight className="size-3" />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/tecnicas/${technique.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="w-full aspect-video bg-zinc-100 rounded-2xl mb-6 overflow-hidden ring-1 ring-black/5 relative">
        <Image
          src={imageSrc}
          alt={technique.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="font-display text-2xl text-navy mb-2">{technique.name}</h3>
      <p className="text-sm text-zinc-600 mb-4 text-pretty leading-relaxed">
        {technique.short}
      </p>
      <span className="text-xs font-semibold text-gold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
        Saiba mais <ArrowRight className="size-3" />
      </span>
    </Link>
  );
}
