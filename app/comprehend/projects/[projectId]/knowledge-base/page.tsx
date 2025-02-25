"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function KnowledgeBasePage() {
  const params = useParams();
  const projectId = params.projectId as string;

  return (
    <div className="flex-1 h-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">KNOWLEDGE BASE</h1>
        <div>
          <Link href={`/comprehend/projects/${projectId}/knowledge-base/new`}>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Data Source
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
