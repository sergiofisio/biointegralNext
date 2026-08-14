"use client";

import { useEffect } from "react";
import { WEB_MCP_CLINIC } from "@/lib/webmcp-data";

const tools: WebMcpTool[] = [
  {
    name: "get_clinic_overview",
    description:
      "Returns Biointegral Saúde clinic overview: methods, professionals context, and canonical URL.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    execute: () => ({
      name: WEB_MCP_CLINIC.name,
      url: WEB_MCP_CLINIC.url,
      summary:
        "Integrative physiotherapy clinic in São Paulo and Santo André. Microfisioterapia, PSYCH-K® and Biodécodage.",
    }),
  },
  {
    name: "list_clinics",
    description: "Lists Biointegral Saúde clinic addresses in São Paulo and ABC.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    execute: () => ({ clinics: WEB_MCP_CLINIC.clinics }),
  },
  {
    name: "list_techniques",
    description: "Lists treatment methods with canonical documentation URLs.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    execute: () => ({ techniques: WEB_MCP_CLINIC.techniques }),
  },
  {
    name: "get_contact",
    description: "Returns public contact channels (email and WhatsApp).",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    execute: () => ({
      email: WEB_MCP_CLINIC.email,
      whatsapp: WEB_MCP_CLINIC.whatsapp,
    }),
  },
  {
    name: "open_whatsapp",
    description: "Opens the official clinic WhatsApp conversation in the browser.",
    inputSchema: {
      type: "object",
      properties: {
        message: {
          type: "string",
          description: "Optional prefilled message",
        },
      },
      additionalProperties: false,
    },
    execute: (args) => {
      const message =
        typeof args.message === "string" ? args.message.trim() : "";
      const url = message
        ? `https://wa.me/5511991489063?text=${encodeURIComponent(message)}`
        : WEB_MCP_CLINIC.whatsapp;
      if (typeof window !== "undefined") {
        window.open(url, "_blank", "noopener,noreferrer");
      }
      return { opened: true, url };
    },
  },
];

export function WebMcpProvider() {
  useEffect(() => {
    const ctx = navigator.modelContext;
    if (!ctx) return;

    ctx.provideContext?.({ tools });
    for (const tool of tools) {
      ctx.registerTool?.(tool);
    }

    return () => {
      for (const tool of tools) {
        ctx.unregisterTool?.(tool.name);
      }
    };
  }, []);

  return null;
}
