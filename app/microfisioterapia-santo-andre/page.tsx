import type { Metadata } from "next";
import { LocalLandingPage } from "@/components/sections/LocalLandingPage";
import { getLocalLanding } from "@/lib/local-landings";
import { pageMetadata } from "@/lib/metadata";

const landing = getLocalLanding("microfisioterapia-santo-andre")!;

export const metadata: Metadata = pageMetadata({
  title: landing.title,
  description: landing.description,
  path: landing.path,
  keywords: landing.keywords,
});

export default function MicrofisioterapiaSantoAndrePage() {
  return <LocalLandingPage landing={landing} />;
}
