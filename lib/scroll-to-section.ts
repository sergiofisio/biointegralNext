import { scroller } from "react-scroll";

export const HOME_SCROLL_TARGET_KEY = "home-scroll-target";
export const SCROLL_DURATION = 1000;
export const SCROLL_OFFSET = -80;

const scrollOptions = {
  duration: SCROLL_DURATION,
  delay: 0,
  smooth: "easeInOutCubic" as const,
  offset: SCROLL_OFFSET,
  isDynamic: true,
};

function setSectionHash(id: string) {
  const url = `${window.location.pathname}${window.location.search}#${id}`;
  window.history.replaceState(null, "", url);
}

export function scrollToSection(
  section: string,
  { updateHash = true }: { updateHash?: boolean } = {},
) {
  const id = section.replace(/^#/, "");
  if (!id || typeof window === "undefined") return;

  if (!document.getElementById(id)) return false;

  scroller.scrollTo(id, {
    ...scrollOptions,
    onEnd: updateHash ? () => setSectionHash(id) : undefined,
  });

  return true;
}

export function scrollToSectionWhenReady(
  section: string,
  { updateHash = true, maxAttempts = 25, delayMs = 100 } = {},
) {
  const id = section.replace(/^#/, "");
  if (!id) return;

  let attempts = 0;

  const tryScroll = () => {
    if (scrollToSection(id, { updateHash })) return;

    attempts += 1;
    if (attempts < maxAttempts) {
      window.setTimeout(tryScroll, delayMs);
    }
  };

  tryScroll();
}

export function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (id) scrollToSectionWhenReady(id);
}

export function queueHomeSectionScroll(section: string) {
  sessionStorage.setItem(HOME_SCROLL_TARGET_KEY, section);
}

export function consumeHomeSectionScroll(): string | null {
  const section = sessionStorage.getItem(HOME_SCROLL_TARGET_KEY);
  if (section) {
    sessionStorage.removeItem(HOME_SCROLL_TARGET_KEY);
  }
  return section;
}
