"use client";

import React from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/app/lib/utils/cn";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Database,
  Filter,
  RefreshCw,
  Plus,
  Globe,
  FileText,
  AlertCircle,
  RotateCw,
  Trash2,
} from "lucide-react";
import Link from "next/link";

// Mock data for demonstration
const mockStats = [
  { label: "Total Sources", value: 12, icon: Database },
  { label: "Processed", value: 8, icon: FileText, color: "text-green-500" },
  { label: "Pending", value: 2, icon: Globe, color: "text-yellow-500" },
  { label: "Processing", value: 1, icon: RefreshCw, color: "text-blue-500" },
  { label: "Error", value: 1, icon: AlertCircle, color: "text-red-500" },
];

const mockSources = [
  {
    id: "1",
    name: "Company Website",
    type: "website",
    characters: "1.2M",
    status: "processed",
    dateAdded: "2024-02-24",
  },
  {
    id: "2",
    name: "Product Documentation",
    type: "document",
    characters: "450K",
    status: "pending",
    dateAdded: "2024-02-23",
  },
  {
    id: "3",
    name: "Support Articles",
    type: "sitemap",
    characters: "800K",
    status: "processing",
    dateAdded: "2024-02-22",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "processed":
      return "text-green-500";
    case "pending":
      return "text-yellow-500";
    case "processing":
      return "text-blue-500";
    case "error":
      return "text-red-500";
    default:
      return "text-muted-foreground";
  }
};

type PageParams = {
  projectId: string;
  [key: string]: string | string[];
}

export default function KnowledgeBasePage() {
  const router = useRouter();
  const params = useParams<PageParams>();
  const projectId = params.projectId;

  return (
    <div className="max-w-[1600px] mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold mb-2">Knowledge Base</h1>
        <p className="text-sm text-muted-foreground">
          Manage knowledge base sources and crawling jobs for your project
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {mockStats.map((stat) => (
          <div key={stat.label} className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-2">
              <stat.icon className={cn("h-4 w-4", stat.color || "text-muted-foreground")} />
              <div className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
            <div className="text-2xl font-semibold mt-2">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <div className="w-[200px]">
            <Input placeholder="Search sources..." />
          </div>
        </div>
        <Link href={`/comprehend/projects/${projectId}/knowledge-base/new`}>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add source
          </Button>
        </Link>
      </div>

      {/* Sources Table */}
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Source</TableHead>
              <TableHead>Characters</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockSources.map((source) => (
              <TableRow key={source.id}>
                <TableCell className="font-medium">{source.name}</TableCell>
                <TableCell>{source.characters}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className={getStatusColor(source.status)}>●</span>
                    <span className="capitalize">{source.status}</span>
                  </div>
                </TableCell>
                <TableCell>{source.dateAdded}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <RotateCw className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Empty State */}
      {mockSources.length === 0 && (
        <div className="text-center py-12">
          <Database className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">No sources yet</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Add your first source to start building your knowledge base
          </p>
          <Link href={`/comprehend/projects/${projectId}/knowledge-base/new`}>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add source
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
