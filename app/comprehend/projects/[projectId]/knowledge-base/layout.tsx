"use client";

import { KnowledgeBaseSidebar } from "./components/knowledge-base-sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator"
import StatusSummary from "./components/status-summary";

export default function KnowledgeBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const pathname = usePathname();
  const isNewPage = pathname.endsWith('/new');

  const statusData = {
    sourcesCount: 3,
    processedCount: 2,
    pendingCount: 1,
    processingCount: 0,
    errorCount: 0
  };

  if (isNewPage) {
    return (
      <div className="flex flex-col h-full">
        <div className="px-6 pt-6">
          <h1 className="text-xl font-semibold">NEW DATA SOURCE</h1>
        </div>
        <div className="px-6">
          <Separator />
        </div>
        <div className="flex-1 px-6 py-6">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header section */}
      <div>
        <div className="px-6 pt-1 pb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">KNOWLEDGE BASE</h1>
            <Link href={`/comprehend/projects/${params.projectId}/knowledge-base/new`}>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Data Source
              </Button>
            </Link>
            {/* Status Summary Component */}
            <StatusSummary 
              sourcesCount={statusData.sourcesCount}
              processedCount={statusData.processedCount}
              pendingCount={statusData.pendingCount}
              processingCount={statusData.processingCount}
              errorCount={statusData.errorCount}
            />
          </div>
        </div>
        <div className="px-6">
          <Separator />
        </div>
      </div>

      {/* Content section with sidebar */}
      <div className="flex-1 flex">
        <div className="w-64 border-r">
          <KnowledgeBaseSidebar />
        </div>
        <div className="flex-1 min-w-0 px-6">{children}</div>
      </div>
    </div>
  );
}
