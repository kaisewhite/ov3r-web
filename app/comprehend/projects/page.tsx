"use client";

import Link from "next/link";

// Mock data for demonstration
const mockProjects = [
  {
    id: "legal-research",
    name: "Legal Research Assistant",
    description: "AI-powered legal document analysis and research tool",
    documents: 156,
    lastUpdated: "2024-02-24",
  },
  {
    id: "medical-knowledge",
    name: "Medical Knowledge Base",
    description: "Comprehensive medical research and documentation system",
    documents: 324,
    lastUpdated: "2024-02-23",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <Link
          href="/comprehend/projects/new"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Create Project
        </Link>
      </div>

      <div className="grid gap-4">
        {mockProjects.map((project) => (
          <Link
            key={project.id}
            href={`/comprehend/projects/${project.id}/dashboard`}
            className="group block"
          >
            <div className="rounded-lg border p-6 hover:border-primary transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.description}
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  Last updated: {project.lastUpdated}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div>{project.documents} documents</div>
                <div>•</div>
                <div>View Dashboard →</div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {mockProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold">No projects yet</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Create your first project to get started
          </p>
        </div>
      )}
    </div>
  );
}
