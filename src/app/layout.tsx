import type { Metadata as NextMetadata } from "next";
import { Toaster } from "sonner";
import type { Viewport } from "next";

import "./globals.css";

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
  metadataBase: new URL("https://www.biointegral.com.br"),
  openGraph: {
    title: "Biointegral Saúde",
    description:
      "Dr. Sergio e Dra Fresia - Pioneiros no Brasil de várias técnicas como MICROFISIOTERAPIA, PSYCH-K® e BIODECODAGE",
    url: new URL("https://www.biointegral.com.br"),
    // image: '/assets/OG/site.png',
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
      </body>
    </html>
  );
}
