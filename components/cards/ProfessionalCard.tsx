import Image from "next/image";
import { IMAGES } from "@/lib/images";
type ProfessionalCardProps = {
  name: string;
  crefito: string;
  image: "draFresia" | "drSergio";
  bio: string;
  offset?: boolean;
  courses?: string[];
};

export function ProfessionalCard({
  name,
  crefito,
  image,
  bio,
  offset = false,
  courses = [],
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
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-8">
        <h2 className="font-display text-3xl text-navy mb-1">{name}</h2>
        <p className="text-xs text-gold font-semibold tracking-widest uppercase mb-4">
          {crefito}
        </p>
        <p className="text-zinc-600 leading-relaxed text-sm">{bio}</p>
        {courses.length > 0 && (
          <div className="mt-6 pt-6 border-t border-zinc-950/5">
            <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">
              Pós-graduações
            </p>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li
                  key={course}
                  className="border-l-2 border-gold pl-4 text-sm text-zinc-600"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
