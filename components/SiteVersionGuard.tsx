"use client";

import { useEffect } from "react";
import { SITE_BUILD_ID } from "@/lib/build-id";

const STORAGE_KEY = "site-build-id";
const RELOAD_FLAG = "site-version-reloading";
const VERSION_QUERY = "_v";

async function clearBrowserCaches() {
  if (typeof caches !== "undefined") {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
  }

  if ("serviceWorker" in navigator) {
    try {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map((reg) => reg.unregister()));
    } catch {
      // ignore
    }
  }
}

function bustUrl(buildId: string) {
  const url = new URL(window.location.href);
  url.searchParams.set(VERSION_QUERY, buildId);
  return url.pathname + url.search + url.hash;
}

function currentBustParam() {
  return new URL(window.location.href).searchParams.get(VERSION_QUERY);
}

export function SiteVersionGuard() {
  useEffect(() => {
    // Só pula em `next dev` sem export (buildId literal "development").
    if (SITE_BUILD_ID === "development") return;

    let cancelled = false;

    async function verifyVersion() {
      if (cancelled) return;

      try {
        const response = await fetch(`/version.json?t=${Date.now()}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          applyVersionCheck(SITE_BUILD_ID);
          return;
        }

        const data = (await response.json()) as { buildId?: string };
        const remoteId = data.buildId ?? SITE_BUILD_ID;
        await applyVersionCheck(remoteId);
      } catch {
        await applyVersionCheck(SITE_BUILD_ID);
      }
    }

    async function applyVersionCheck(latestId: string) {
      if (cancelled || !latestId) return;

      const storedId = localStorage.getItem(STORAGE_KEY);
      const bundleStale = latestId !== SITE_BUILD_ID;
      const storageStale = Boolean(storedId && storedId !== latestId);
      const needsUpdate = bundleStale || storageStale;

      if (!storedId) {
        localStorage.setItem(STORAGE_KEY, latestId);
        sessionStorage.removeItem(RELOAD_FLAG);
        if (!bundleStale) return;
      }

      if (!needsUpdate) {
        sessionStorage.removeItem(RELOAD_FLAG);
        if (currentBustParam() === latestId) {
          // Limpa query de bust após reload bem-sucedido (URL limpa).
          const url = new URL(window.location.href);
          if (url.searchParams.has(VERSION_QUERY)) {
            url.searchParams.delete(VERSION_QUERY);
            window.history.replaceState(
              null,
              "",
              url.pathname + url.search + url.hash,
            );
          }
        }
        return;
      }

      // Anti-loop: já fizemos hard navigation para este buildId.
      if (
        sessionStorage.getItem(RELOAD_FLAG) === latestId &&
        currentBustParam() === latestId
      ) {
        localStorage.setItem(STORAGE_KEY, latestId);
        sessionStorage.removeItem(RELOAD_FLAG);
        return;
      }

      localStorage.setItem(STORAGE_KEY, latestId);
      sessionStorage.setItem(RELOAD_FLAG, latestId);
      await clearBrowserCaches();

      if (currentBustParam() === latestId) {
        window.location.reload();
        return;
      }

      window.location.replace(bustUrl(latestId));
    }

    void verifyVersion();

    function onVisible() {
      if (document.visibilityState === "visible") {
        void verifyVersion();
      }
    }

    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("focus", onVisible);

    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("focus", onVisible);
    };
  }, []);

  return null;
}
