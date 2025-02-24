"use client";

import { IconApi, IconCopy } from "@tabler/icons-react";
import { useState } from "react";

export default function APIIntegrationPage() {
  const [copied, setCopied] = useState(false);
  const dummyApiKey = "ov3r_pk_1234567890abcdef";

  const handleCopy = () => {
    navigator.clipboard.writeText(dummyApiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">API Integration</h1>
        <p className="text-sm text-muted-foreground">
          Access your knowledge base programmatically using our REST API.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">API Key</h2>
          <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
            <code className="text-sm flex-1 font-mono">{dummyApiKey}</code>
            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-8 w-8"
            >
              <IconCopy className="h-4 w-4" />
              <span className="sr-only">Copy API key</span>
            </button>
          </div>
          {copied && (
            <p className="text-xs text-muted-foreground mt-2">
              API key copied to clipboard
            </p>
          )}
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Start</h2>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              To get started with the API, make requests using your API key in the
              Authorization header:
            </p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code className="text-sm font-mono">
{`curl -X POST https://api.ov3r.tech/v1/comprehend/query \\
  -H "Authorization: Bearer ${dummyApiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "What are the tax regulations for small businesses?"}'`}
              </code>
            </pre>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <IconApi className="h-5 w-5" />
            <p className="text-sm">
              Full API documentation coming soon. This is a placeholder page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 