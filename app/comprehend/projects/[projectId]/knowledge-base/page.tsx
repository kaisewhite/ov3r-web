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
      <h2 className="text-lg text-muted-foreground">Select a category from the sidebar</h2>
    </div>
  );
}
