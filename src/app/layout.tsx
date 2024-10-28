import type { Metadata as NextMetadata } from "next";
import { Toaster } from "sonner";
import Head from "next/head";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

interface Metadata extends NextMetadata {
  favicon?: string;
}

export const viewport = {
  width: "device-width",
  initialScale: "1.0",
};

export const metadata: Metadata = {
  title: "Biointegral Saúde",
  description:
    "Dr. Sergio e Dra Fresia - Pioneiros no Brasil de várias técnicas como MICROFISIOTERAPIA, PSYCH-K® e BIODECODAGE",
  favicon: "/favicon.ico",
  keywords:
    "biointegral saúde, microfisioterapia, psych, psych-k®, biodecodage, saúde integral, terapias complementares, bem-estar, saúde emocional, saúde física",
  metadataBase: new URL("https://www.biointegralsaude.com.br"),
  openGraph: {
    title: "Biointegral Saúde",
    description:
      "Dr. Sergio e Dra Fresia - Pioneiros no Brasil de várias técnicas como MICROFISIOTERAPIA, PSYCH-K® e BIODECODAGE",
    url: new URL("https://www.biointegralsaude.com.br"),
    images: ["/assets/OG/site.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <meta name="keywords" content={String(metadata.keywords)} />
        <meta property="og:title" content={String(metadata.openGraph?.title)} />
        <meta
          property="og:description"
          content={String(metadata.openGraph?.description)}
        />
        <meta
          property="og:url"
          content={String(metadata.openGraph?.url?.toString())}
        />
        <meta
          property="og:image"
          content={
            Array.isArray(metadata.openGraph?.images) &&
            metadata.openGraph.images.length > 0
              ? metadata.openGraph.images[0].toString()
              : "/assets/OG/site.png"
          }
        />
        <link rel="icon" href={metadata.favicon || "/favicon.ico"} />
      </Head>
      <body
        className="max-w-[100vw] h-screen relative"
        suppressHydrationWarning={true}
      >
        {children}
        <Toaster
          position="bottom-center"
          expand={true}
          visibleToasts={1}
          closeButton={true}
          toastOptions={{
            unstyled: true,
            classNames: {
              closeButton: `!bg-black !text-white !right-2 !left-none !top-2 !w-5 !h-5 hover:!bg-white hover:!text-black`,
            },
          }}
        />
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "opomyyzey5");
          `}
        </Script>
        <GoogleAnalytics gaId="G-5JGHQFVJYM" />
      </body>
    </html>
  );
}
