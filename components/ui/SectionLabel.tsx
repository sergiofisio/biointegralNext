type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`text-xs font-semibold text-gold uppercase tracking-widest block ${className}`}
    >
      {children}
    </span>
  );
}
