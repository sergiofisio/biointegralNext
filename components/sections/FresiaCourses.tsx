import { FRESIA_COURSES } from "@/lib/site-data";
import { CourseCard } from "@/components/cards/CourseCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FresiaCourses() {
  if (FRESIA_COURSES.length === 0) return null;

  return (
    <section id="formacao-academica" className="scroll-mt-20 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <SectionLabel className="mb-3">Formação acadêmica</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl text-navy text-balance leading-tight mb-4">
            Dra. Fresia — um olhar que integra mente, cérebro e corpo.
          </h2>
          <p className="text-zinc-600 leading-relaxed">
            Além da formação internacional nas técnicas integrativas, a Dra.
            Fresia aprofundou-se em pós-graduações que ampliam a compreensão
            das emoções, do comportamento e de como eles se expressam no corpo
            — um diferencial em cada etapa do atendimento.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 gap-6 ${FRESIA_COURSES.length > 2 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}
        >
          {FRESIA_COURSES.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
