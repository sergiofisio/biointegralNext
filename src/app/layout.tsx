import type { Metadata as NextMetadata } from "next";
import { Toaster } from "sonner";

import "./globals.css";
import Head from "next/head";

interface Metadata extends NextMetadata {
  favicon?: string;
}

export const metadata: Metadata = {
  title: "Biointegral Saúde",
  description:
    "Dr. Sergio e Dra Fresia - Pioneiros no Brasil de várias técnicas como MICROFISIOTERAPIA, PSYCH-K® e BIODECODAGE",
  favicon: "/favicon.ico",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description?.toString()} />
        <title>{metadata.title?.toString()}</title>
        <link rel="icon" href={metadata.favicon} />
        {/* Metadados Open Graph */}
        <meta property="og:title" content={metadata.title?.toString()} />
        <meta
          property="og:description"
          content={metadata.description?.toString()}
        />
        {/* <meta property="og:image" content={"/assets/OG/site.png"} /> */}
        <meta property="og:url" content={"https://www.biointegral.com.br"} />
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
      </body>
    </html>
  );
}
