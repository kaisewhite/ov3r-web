"use client";

import { IconBrandGithub } from "@tabler/icons-react";

export default function GitHubIntegrationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
        <IconBrandGithub className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-semibold tracking-tight mb-2">GitHub Integration</h1>
      <p className="text-sm text-muted-foreground max-w-md">
        Connect your GitHub repositories to enhance your knowledge base with documentation, issues, and discussions.
        This feature is coming soon.
      </p>
      <button
        disabled
        className="mt-8 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
      >
        <IconBrandGithub className="mr-2 h-4 w-4" />
        Connect GitHub Repository
      </button>
    </div>
  );
} 