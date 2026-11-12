import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Instrument_Serif, Inter } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SiteVersionGuard } from "@/components/SiteVersionGuard";
import { HashScroll } from "@/components/HashScroll";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { SocialRail } from "@/components/site/SocialRail";
import { WebMcpProvider } from "@/components/WebMcpProvider";
import { WEB_MCP_INLINE_SCRIPT } from "@/lib/webmcp-inline";
import {
  SEO_BASE_URL,
  SEO_DEFAULT_IMAGE,
  SEO_KEYWORDS,
  SEO_SITE_NAME,
} from "@/lib/seo";
import { rootOpenGraph } from "@/lib/metadata";
import { buildOrganizationGraph } from "@/lib/json-ld";
import { JsonLd } from "@/components/ui/JsonLd";
import "./globals.css";

const GOOGLE_TAG_ID = "AW-955217513";
const GTM_CONTAINER_ID = "GTM-PZPZ23";

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
    "Clínica de fisioterapia integrativa em São Paulo e ABC. Microfisioterapia, PSYCH-K® e Biodécodage com Dr. Sergio e Dra. Fresia.",
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
    title: "Biointegral Saúde — Fisioterapia e cuidado integrativo",
    description:
      "Fisioterapia e cuidado integrativo em São Paulo e Santo André. Microfisioterapia, PSYCH-K® e Biodécodage com Dra. Fresia e Dr. Sergio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biointegral Saúde — Fisioterapia e cuidado integrativo",
    description:
      "Fisioterapia e cuidado integrativo em São Paulo e Santo André. Microfisioterapia, PSYCH-K® e Biodécodage.",
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
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
            title="Google Tag Manager"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_TAG_ID}');
dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtm.js?id=${GOOGLE_TAG_ID}`}
          strategy="afterInteractive"
        />
        <Script
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`}
          strategy="afterInteractive"
        />
        <script src="/agent-root/webmcp-v2.js" />
        <script dangerouslySetInnerHTML={{ __html: WEB_MCP_INLINE_SCRIPT }} />
        <JsonLd data={buildOrganizationGraph()} />
        <WebMcpProvider />
        <SiteVersionGuard />
        <Nav />
        <HashScroll />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <SocialRail />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
