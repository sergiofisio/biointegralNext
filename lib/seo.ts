export const SEO_BASE_URL = "https://www.biointegralsaude.com.br";
export const SEO_SITE_NAME = "Biointegral Saúde";
export const SEO_DEFAULT_IMAGE = `${SEO_BASE_URL}/images/og.png`;
export const SEO_LOGO_URL = `${SEO_BASE_URL}/images/logo.png`;

export const SEO_KEYWORDS = [
  "microfisioterapia",
  "microfisioterapia São Paulo",
  "PSYCH-K",
  "biodécodage",
  "fisioterapia integrativa",
  "clínica de fisioterapia SP",
  "Biointegral Saúde",
  "tratamento de dor crônica",
  "ABC Paulista",
  "Santo André",
];

export function canonicalUrl(path: string): string {
  if (path === "/") return `${SEO_BASE_URL}/`;
  const slug = path.startsWith("/") ? path : `/${path}`;
  return `${SEO_BASE_URL}${slug.endsWith("/") ? slug : `${slug}/`}`;
}
