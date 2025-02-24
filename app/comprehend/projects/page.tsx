"use client";

import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronRight } from "lucide-react";
import { CreateProjectDialog } from "./components/create-project-dialog";

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
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <CreateProjectDialog />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead className="min-w-[300px]">Description</TableHead>
              <TableHead className="w-[150px] text-right">Documents</TableHead>
              <TableHead className="w-[150px]">Last Updated</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockProjects.map((project) => (
              <TableRow
                key={project.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => router.push(`/comprehend/projects/${encodeURIComponent(project.id)}/dashboard`)}
              >
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {project.description}
                </TableCell>
                <TableCell className="text-right">{project.documents}</TableCell>
                <TableCell>{project.lastUpdated}</TableCell>
                <TableCell>
                  <ChevronRight className="h-4 w-4 ml-2" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
