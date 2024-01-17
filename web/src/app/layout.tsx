import type { Metadata as NextMetadata } from "next";
import { Toaster } from "sonner";

import "./globals.css";

interface Metadata extends NextMetadata {
  favicon?: string;
}

export const metadata: Metadata = {
  title: "Biointegral Saúde",
  description:
    "Dr. Sergio e Dra Fresia - Pioneiros no Brasil de várias técnicas como MICROFISIOTERAPIA, PSYCH-K® e BIODECODAGE",
  favicon: "/favicon.ico", // Adicione o favicon aqui
};

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="max-w-[100vw] h-screen" suppressHydrationWarning={true}>
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
