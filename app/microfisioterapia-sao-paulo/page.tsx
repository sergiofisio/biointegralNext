import type { Metadata } from "next";
import { LocalLandingPage } from "@/components/sections/LocalLandingPage";
import { getLocalLanding } from "@/lib/local-landings";
import { pageMetadata } from "@/lib/metadata";

const landing = getLocalLanding("microfisioterapia-sao-paulo")!;

export const metadata: Metadata = pageMetadata({
  title: landing.title,
  description: landing.description,
  path: landing.path,
  keywords: landing.keywords,
});

export default function MicrofisioterapiaSaoPauloPage() {
  return <LocalLandingPage landing={landing} />;
}
