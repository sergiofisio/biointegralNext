import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const viewport = {
  width: "device-width",
  initialScale: "1.0",
};

export const metadata: Metadata = {
  title: "Biointegral Saúde",
  description:
    "Dr. Sergio e Dra Fresia - Pioneiros no Brasil de várias técnicas como MICROFISIOTERAPIA, PSYCH-K® e BIODECODAGE",
  keywords: [
    "biointegral saúde",
    "microfisioterapia",
    "psych",
    "psych-k®",
    "biodecodage",
    "saúde integral",
    "terapias complementares",
    "bem-estar",
    "saúde emocional",
    "saúde física",
  ],
  metadataBase: new URL("https://www.biointegralsaude.com.br"),
  openGraph: {
    title: "Biointegral Saúde",
    description:
      "Dr. Sergio e Dra Fresia - Pioneiros no Brasil de várias técnicas como MICROFISIOTERAPIA, PSYCH-K® e BIODECODAGE",
    url: "https://www.biointegralsaude.com.br",
    images: [
      {
        url: "/assets/OG/site.png",
        width: 1200,
        height: 630,
        alt: "Biointegral Saúde",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
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
