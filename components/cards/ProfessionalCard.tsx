import Image from "next/image";
import { IMAGES } from "@/lib/images";
type ProfessionalCardProps = {
  name: string;
  crefito: string;
  image: "draFresia" | "drSergio";
  bio: string;
  offset?: boolean;
};

export function ProfessionalCard({
  name,
  crefito,
  image,
  bio,
  offset = false,
}: ProfessionalCardProps) {
  return (
    <div
      className={`bg-white rounded-3xl ring-1 ring-black/5 overflow-hidden ${offset ? "md:mt-16" : ""}`}
    >
      <div className="relative w-full aspect-square">
        <Image
          src={IMAGES[image]}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-8">
        <h2 className="font-display text-3xl text-navy mb-1">{name}</h2>
        <p className="text-xs text-gold font-semibold tracking-widest uppercase mb-4">
          {crefito}
        </p>
        <p className="text-zinc-600 leading-relaxed text-sm">{bio}</p>
      </div>
    </div>
  );
}
