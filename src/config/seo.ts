/**
 * Configuração centralizada para SEO
 * Base URL deve ser a mesma em produção (sem barra final)
 */
export const SEO_BASE_URL = "https://www.biointegralsaude.com.br";
export const SEO_DEFAULT_IMAGE = `${SEO_BASE_URL}/assets/OG/site.png`;
export const SEO_SITE_NAME = "Biointegral Saúde";

export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
  keywords?: string;
  jsonLd?: object | object[];
}
