"use client";

import { useParams } from "next/navigation";

// Mock data for demonstration
const mockProjectData = {
  "legal-research": {
    name: "Legal Research Assistant",
    stats: {
      documents: 156,
      conversations: 423,
      lastUpdated: "2024-02-24",
      storage: "1.2 GB",
    },
    recentDocuments: [
      { name: "Contract Analysis Guidelines.pdf", added: "2024-02-24" },
      { name: "Legal Precedents 2024.docx", added: "2024-02-23" },
      { name: "Regulatory Compliance Update.pdf", added: "2024-02-22" },
    ],
  },
  "medical-knowledge": {
    name: "Medical Knowledge Base",
    stats: {
      documents: 324,
      conversations: 892,
      lastUpdated: "2024-02-23",
      storage: "2.8 GB",
    },
    recentDocuments: [
      { name: "Clinical Trial Results Q4.pdf", added: "2024-02-23" },
      { name: "Patient Care Guidelines.docx", added: "2024-02-22" },
      { name: "Research Protocol 2024.pdf", added: "2024-02-21" },
    ],
  },
};

export default function ProjectDashboard() {
  const params = useParams();
  const projectId = params.projectId as string;
  const project = mockProjectData[projectId as keyof typeof mockProjectData];

  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-2">{project.name}</h1>
        <p className="text-sm text-muted-foreground">
          Project dashboard and overview
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(project.stats).map(([key, value]) => (
          <div key={key} className="rounded-lg border p-4">
            <div className="text-sm font-medium text-muted-foreground">
              {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
            </div>
            <div className="text-2xl font-semibold mt-2">{value}</div>
          </div>
        ))}
      </div>

      {/* Recent Documents */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Documents</h2>
        <div className="rounded-lg border divide-y">
          {project.recentDocuments.map((doc) => (
            <div
              key={doc.name}
              className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium">{doc.name}</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Added {doc.added}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center rounded-lg border p-4 hover:border-primary transition-colors">
            Upload Documents
          </button>
          <button className="flex items-center justify-center rounded-lg border p-4 hover:border-primary transition-colors">
            Start Conversation
          </button>
          <button className="flex items-center justify-center rounded-lg border p-4 hover:border-primary transition-colors">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
