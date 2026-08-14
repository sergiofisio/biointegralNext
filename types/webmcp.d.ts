interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (
    args: Record<string, unknown>,
    opts?: { signal?: AbortSignal },
  ) => Promise<unknown> | unknown;
}

interface Navigator {
  modelContext?: {
    registerTool?: (tool: WebMcpTool) => void;
    unregisterTool?: (name: string) => void;
    provideContext?: (context: { tools?: WebMcpTool[] }) => void;
  };
}
