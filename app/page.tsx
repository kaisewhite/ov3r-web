import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to OV3R
        </h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive ecosystem of advanced tools and services for data processing, AI, and automation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Comprehend Service Card */}
        <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Comprehend</h3>
            <p className="text-sm text-muted-foreground">
              Advanced RAG system for creating and querying custom knowledge bases
            </p>
          </div>
          <ul className="text-sm space-y-2 mb-6">
            <li>✓ Document upload and web crawling</li>
            <li>✓ Smart content transformation</li>
            <li>✓ AI-powered chatbot interface</li>
          </ul>
          <a
            href="/comprehend/projects"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Get Started →
          </a>
        </div>

        {/* Future Service Cards */}
        <div className="group relative overflow-hidden rounded-lg border p-6 bg-muted/50">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
            <p className="text-sm text-muted-foreground">
              More powerful services are on the way
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
