import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TECHNIQUES, type Course } from "@/lib/site-data";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  const related = TECHNIQUES.filter((t) =>
    course.relatedTechniques.includes(t.slug),
  );

  return (
    <article className="bg-white rounded-3xl ring-1 ring-black/5 p-8 flex flex-col">
      <p className="text-xs text-gold font-semibold tracking-widest uppercase mb-3">
        Pós-graduação · {course.hours}h
      </p>
      <h3 className="font-display text-2xl md:text-3xl text-navy mb-4 text-balance">
        {course.title}
      </h3>
      <p className="text-sm text-zinc-600 leading-relaxed mb-6">
        {course.summary}
      </p>
      <p className="text-xs font-semibold text-navy uppercase tracking-wider mb-3">
        No seu atendimento
      </p>
      <ul className="space-y-3 mb-6">
        {course.benefits.map((benefit) => (
          <li
            key={benefit.slice(0, 48)}
            className="border-l-2 border-gold pl-4 text-sm text-zinc-700 leading-relaxed"
          >
            {benefit}
          </li>
        ))}
      </ul>
      {related.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2">
          {related.map((t) => (
            <Link
              key={t.slug}
              href={`/tecnicas/${t.slug}/`}
              className="text-xs font-semibold text-gold uppercase tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              {t.name} <ArrowRight className="size-3" />
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
