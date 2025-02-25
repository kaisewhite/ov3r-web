"use client";

import { useParams, usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator"
import StatusSummary from "./components/status-summary";

export default function KnowledgeBaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* const params = useParams(); */
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

      {/* Main content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
