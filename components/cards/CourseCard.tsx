import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
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
      <div className="mt-auto">
        {related.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-2">
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
        {course.modules.length > 0 && (
          <details className="group mt-6 pt-6 border-t border-zinc-950/5">
            <summary className="cursor-pointer list-none text-xs font-semibold text-navy uppercase tracking-wider inline-flex items-center gap-2 [&::-webkit-details-marker]:hidden">
              Ver grade completa · {course.modules.length} módulos
              <ChevronDown className="size-3 transition-transform group-open:rotate-180" />
            </summary>
            <ol className="mt-6 space-y-5">
              {course.modules.map((module, index) => (
                <li key={module.title}>
                  <p className="text-[11px] text-gold font-semibold tracking-widest uppercase mb-1">
                    Módulo {index + 1}
                  </p>
                  <p className="text-sm font-medium text-navy mb-2">
                    {module.title}
                  </p>
                  <ul className="space-y-1">
                    {module.topics.map((topic) => (
                      <li
                        key={topic}
                        className="text-xs text-zinc-600 leading-relaxed pl-3 border-l border-zinc-950/10"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </details>
        )}
      </div>
    </article>
  );
}
