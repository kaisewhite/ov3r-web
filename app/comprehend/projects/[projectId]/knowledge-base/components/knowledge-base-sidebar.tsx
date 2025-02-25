"use client";

import { useParams, usePathname } from "next/navigation";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Link, FileText, Type } from "lucide-react";
import { cn } from "@/lib/utils";
import StatusSummary from "./status-summary";

export function KnowledgeBaseSidebar() {
  const params = useParams();
  const pathname = usePathname();
  const projectId = params.projectId as string;



  const links = [
    {
      label: "Links",
      href: `/comprehend/projects/${projectId}/knowledge-base/links`,
      icon: <Link className="h-5 w-5 flex-shrink-0" />,
      active: pathname === `/comprehend/projects/${projectId}/knowledge-base/links`
    },
    {
      label: "Documents",
      href: `/comprehend/projects/${projectId}/knowledge-base/documents`,
      icon: <FileText className="h-5 w-5 flex-shrink-0" />,
      active: pathname === `/comprehend/projects/${projectId}/knowledge-base/documents`
    },
    {
      label: "Text",
      href: `/comprehend/projects/${projectId}/knowledge-base/text`,
      icon: <Type className="h-5 w-5 flex-shrink-0" />,
      active: pathname === `/comprehend/projects/${projectId}/knowledge-base/text`
    },
  ];

  return (
    <Sidebar open={true} animate={false}>
      <SidebarBody className="!bg-background py-6 pr-4 flex flex-col gap-3 border-none">
        {links.map((link) => (
          <SidebarLink
            key={link.href}
            link={link}
            className={cn(
              "flex items-center px-4 py-2 text-sm transition-colors rounded-md mr-4",
              link.active ? "bg-muted font-medium" : "hover:bg-muted/50"
            )}
          />
        ))}
      </SidebarBody>
    </Sidebar>
  );
}
