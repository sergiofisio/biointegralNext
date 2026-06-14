import { SectionLabel } from "./SectionLabel";
import { BackToHome } from "./BackToHome";
import type { HomeSection } from "@/lib/nav";

type PageHeaderProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  titleClassName?: string;
  showBackLink?: boolean;
  backSection?: HomeSection;
};

export function PageHeader({
  label,
  title,
  description,
  className = "",
  titleClassName = "text-5xl md:text-6xl",
  showBackLink = false,
  backSection,
}: PageHeaderProps) {
  return (
    <section className={`px-6 pt-16 pb-12 max-w-5xl mx-auto ${className}`}>
      {showBackLink && <BackToHome section={backSection} className="mb-6" />}
      <SectionLabel className="mb-4">{label}</SectionLabel>
      <h1
        className={`font-display ${titleClassName} text-navy leading-[0.95] text-balance mb-6`}
      >
        {title}
      </h1>
      {description && (
        <p className="text-lg text-zinc-600 max-w-2xl">{description}</p>
      )}
    </section>
  );
}
