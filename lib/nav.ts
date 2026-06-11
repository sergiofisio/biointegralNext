export const NAV_SECTIONS = [
  { section: "tecnicas", label: "Técnicas" },
  { section: "sobre", label: "Especialistas" },
  { section: "clinicas", label: "Unidades" },
  { section: "faq", label: "FAQ" },
  { section: "contato", label: "Contato" },
] as const;

export function sectionHref(section: string) {
  return `/#${section}`;
}
