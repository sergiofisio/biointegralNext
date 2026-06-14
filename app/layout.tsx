import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CLINICS, SITE } from "@/lib/site-data";
import {
  SEO_BASE_URL,
  SEO_DEFAULT_IMAGE,
  SEO_KEYWORDS,
  SEO_LOGO_URL,
  SEO_SITE_NAME,
} from "@/lib/seo";
import { rootOpenGraph } from "@/lib/metadata";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_BASE_URL),
  title: {
    default:
      "Biointegral Saúde — Microfisioterapia, PSYCH-K® e Biodécodage em SP",
    template: "%s · Biointegral Saúde",
  },
  description:
    "Clínica de fisioterapia integrativa em São Paulo e ABC Paulista. Pioneiros em Microfisioterapia, PSYCH-K® e Biodécodage com Dr. Sergio e Dra. Fresia.",
  keywords: SEO_KEYWORDS,
  authors: [{ name: SEO_SITE_NAME, url: SEO_BASE_URL }],
  creator: SEO_SITE_NAME,
  publisher: SEO_SITE_NAME,
  category: "health",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: `${SEO_BASE_URL}/` },
  openGraph: {
    ...rootOpenGraph,
    title: "Biointegral Saúde — Fisioterapia Integrativa em São Paulo",
    description:
      "Trate a causa primária das suas dores. Pioneiros em Microfisioterapia, PSYCH-K® e Biodécodage.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biointegral Saúde — Fisioterapia Integrativa",
    description:
      "Clínica pioneira em Microfisioterapia, PSYCH-K® e Biodécodage em São Paulo e ABC.",
    images: [SEO_DEFAULT_IMAGE],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

const medicalBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SEO_BASE_URL}/#organization`,
  name: SEO_SITE_NAME,
  url: `${SEO_BASE_URL}/`,
  logo: SEO_LOGO_URL,
  image: SEO_DEFAULT_IMAGE,
  description:
    "Clínica de fisioterapia integrativa especializada em Microfisioterapia, PSYCH-K® e Biodécodage.",
  medicalSpecialty: "PhysicalTherapy",
  email: SITE.email,
  telephone: `+${SITE.whatsappNumber}`,
  areaServed: ["São Paulo", "Santo André", "ABC Paulista"],
  sameAs: [SITE.instagram, SITE.facebook],
  address: CLINICS.map((c) => ({
    "@type": "PostalAddress",
    streetAddress: c.address,
    addressLocality: c.city,
    addressRegion: "SP",
    addressCountry: "BR",
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalBusinessJsonLd),
          }}
        />
        <Nav />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
