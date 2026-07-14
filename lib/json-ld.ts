import { canonicalUrl, SEO_BASE_URL, SEO_DEFAULT_IMAGE, SEO_LOGO_URL, SEO_SITE_NAME } from "@/lib/seo";
import {
  CLINICS,
  FAQS,
  PROFESSIONALS,
  SITE,
  TECHNIQUES,
} from "@/lib/site-data";

const ORG_ID = `${SEO_BASE_URL}/#organization`;

export function buildOrganizationGraph() {
  const clinics = CLINICS.map((c) => ({
    "@type": "MedicalClinic" as const,
    "@id": `${SEO_BASE_URL}/clinicas/#${c.slug}`,
    name: `${SEO_SITE_NAME} — ${c.name}`,
    url: `${SEO_BASE_URL}/clinicas/`,
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: c.address,
      addressLocality: c.city.includes("Santo") ? "Santo André" : "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    hasMap: c.mapsUrl,
    telephone: `+${SITE.whatsappNumber}`,
    email: SITE.email,
  }));

  const people = PROFESSIONALS.map((p) => ({
    "@type": "Person" as const,
    "@id": `${SEO_BASE_URL}/quem-somos/#${p.image}`,
    name: p.name,
    jobTitle: "Fisioterapeuta",
    description: p.bio,
    identifier: p.crefito,
    worksFor: { "@id": ORG_ID },
    url: `${SEO_BASE_URL}/quem-somos/`,
  }));

  const services = TECHNIQUES.map((t) => ({
    "@type": "Service" as const,
    "@id": `${SEO_BASE_URL}/tecnicas/${t.slug}/#service`,
    name: t.name,
    description: t.metaDescription ?? t.short,
    url: `${SEO_BASE_URL}/tecnicas/${t.slug}/`,
    provider: { "@id": ORG_ID },
    areaServed: ["São Paulo", "Santo André", "ABC Paulista"],
    serviceType: "Physical therapy",
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": ORG_ID,
        name: SEO_SITE_NAME,
        alternateName: "Biointegral",
        url: `${SEO_BASE_URL}/`,
        logo: SEO_LOGO_URL,
        image: SEO_DEFAULT_IMAGE,
        description:
          "Clínica de fisioterapia integrativa em São Paulo e Santo André, especializada em Microfisioterapia, PSYCH-K® e Biodécodage. Atendimento com Dr. Sergio e Dra. Fresia (CREFITO-3).",
        medicalSpecialty: "PhysicalTherapy",
        email: SITE.email,
        telephone: `+${SITE.whatsappNumber}`,
        foundingDate: "2008",
        areaServed: ["São Paulo", "Santo André", "ABC Paulista"],
        sameAs: [SITE.instagram, SITE.facebook],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Técnicas integrativas",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@id": s["@id"] },
          })),
        },
        department: clinics.map((c) => ({ "@id": c["@id"] })),
        employee: people.map((p) => ({ "@id": p["@id"] })),
      },
      ...clinics,
      ...people,
      ...services,
    ],
  };
}

export function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function buildTechniqueServiceJsonLd(slug: string) {
  const tech = TECHNIQUES.find((t) => t.slug === slug);
  if (!tech) return null;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${SEO_BASE_URL}/tecnicas/${tech.slug}/#webpage`,
    url: `${SEO_BASE_URL}/tecnicas/${tech.slug}/`,
    name: `${tech.name} em São Paulo e Santo André`,
    description: tech.metaDescription ?? tech.short,
    about: {
      "@type": "Service",
      "@id": `${SEO_BASE_URL}/tecnicas/${tech.slug}/#service`,
      name: tech.name,
      provider: { "@id": ORG_ID },
    },
    isPartOf: { "@id": ORG_ID },
    inLanguage: "pt-BR",
  };
}
