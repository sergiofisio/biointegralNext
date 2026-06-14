import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CLINICS } from "@/lib/site-data";
import { SEO_BASE_URL, SEO_DEFAULT_IMAGE, SEO_SITE_NAME } from "@/lib/seo";
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
  authors: [{ name: SEO_SITE_NAME }],
  openGraph: {
    siteName: SEO_SITE_NAME,
    type: "website",
    locale: "pt_BR",
    images: [{ url: SEO_DEFAULT_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [SEO_DEFAULT_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

const medicalBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SEO_SITE_NAME,
  description:
    "Clínica de fisioterapia integrativa especializada em Microfisioterapia, PSYCH-K® e Biodécodage.",
  medicalSpecialty: "PhysicalTherapy",
  areaServed: ["São Paulo", "Santo André", "ABC Paulista"],
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
