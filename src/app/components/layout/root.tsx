// components/RootLayout.tsx
import React from "react";

export default function RootLayout({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <>
      <main id="#inicio" className="relative">
        {header}
        {children}
      </main>
    </>
  );
}
