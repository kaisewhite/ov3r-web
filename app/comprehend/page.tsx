"use client";

export default function ComprehendPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8.5rem)] max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-semibold mb-6">
        Comprehend
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        A powerful RAG-based system for building custom knowledge bases with AI-powered search and chat capabilities.
      </p>
      <div className="grid gap-6 text-left w-full">
        <Feature
          title="Document Processing"
          description="Upload documents, crawl web content, and build comprehensive knowledge bases from various sources."
        />
        <Feature
          title="AI-Powered Search"
          description="Use advanced natural language processing to find exactly what you need across your knowledge base."
        />
        <Feature
          title="Interactive Chat"
          description="Engage with your data through an AI chatbot that understands context and provides accurate responses."
        />
      </div>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg border bg-card">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
