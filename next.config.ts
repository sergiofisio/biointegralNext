import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const agentLinkHeader =
  "</.well-known/api-catalog>; rel=api-catalog, </openapi.json>; rel=service-desc, </docs/api/>; rel=service-doc, </llms.txt>; rel=describedby";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" as const } : {}),
  images: {
    unoptimized: true,
    // SVGs apenas de /public (locais). Sem remotePatterns — manter assim.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    if (isStaticExport) return [];
    return [
      {
        source: "/:path*",
        headers: [{ key: "Link", value: agentLinkHeader }],
      },
    ];
  },
};

export default nextConfig;
