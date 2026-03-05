import { Helmet } from "react-helmet-async";
import { SEO_BASE_URL, SEO_DEFAULT_IMAGE, SEO_SITE_NAME } from "../../config/seo";
import type { SeoProps } from "../../config/seo";

export default function SeoHead({
  title,
  description,
  canonical,
  ogImage = SEO_DEFAULT_IMAGE,
  ogImageAlt = SEO_SITE_NAME,
  noIndex = false,
  keywords,
  jsonLd,
}: SeoProps) {
  const fullTitle = title.includes(SEO_SITE_NAME) ? title : `${title} | ${SEO_SITE_NAME}`;
  const canonicalUrl = canonical ? (canonical.startsWith("http") ? canonical : `${SEO_BASE_URL}${canonical}`) : SEO_BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith("http") ? ogImage : `${SEO_BASE_URL}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content={SEO_SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith("http") ? ogImage : `${SEO_BASE_URL}${ogImage}`} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* JSON-LD estruturado */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
