import { SectionLabel } from "./SectionLabel";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  className = "mb-16 max-w-2xl",
}: SectionHeaderProps) {
  return (
    <div className={`${className} ${centered ? "text-center mx-auto" : ""}`}>
      <SectionLabel className="mb-3">{label}</SectionLabel>
      <h2 className="font-display text-4xl md:text-5xl text-navy text-balance leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-zinc-500 mt-4 text-pretty">{description}</p>
      )}
    </div>
  );
}
