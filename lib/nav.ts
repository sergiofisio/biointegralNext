export const NAV_SECTIONS = [
  { section: "indicacoes", label: "Indicações" },
  { section: "tecnicas", label: "Técnicas" },
  { section: "sobre", label: "Especialistas" },
  { section: "clinicas", label: "Unidades" },
  { section: "faq", label: "FAQ" },
  { section: "contato", label: "Contato" },
] as const;

export type HomeSection = (typeof NAV_SECTIONS)[number]["section"];

const PATH_SECTION_MAP: Array<{
  match: (path: string) => boolean;
  section: HomeSection;
}> = [
  { match: (path) => path === "/quem-somos", section: "sobre" },
  { match: (path) => path === "/indicacoes", section: "indicacoes" },
  { match: (path) => path.startsWith("/tecnicas/"), section: "tecnicas" },
  { match: (path) => path === "/clinicas", section: "clinicas" },
  { match: (path) => path === "/faq", section: "faq" },
  { match: (path) => path === "/contato", section: "contato" },
];

export function sectionHref(section: string) {
  return `/#${section}`;
}

export function isHomePath(pathname: string) {
  const normalized = pathname.replace(/\/$/, "") || "/";
  return normalized === "/";
}

export function getHomeSectionForPath(pathname: string): HomeSection | null {
  const path = pathname.replace(/\/$/, "") || "/";
  return PATH_SECTION_MAP.find(({ match }) => match(path))?.section ?? null;
}

export function getSectionLabel(section: string): string {
  return NAV_SECTIONS.find((item) => item.section === section)?.label ?? "Home";
}

export function homeSectionHref(section: HomeSection) {
  return `/#${section}`;
}
