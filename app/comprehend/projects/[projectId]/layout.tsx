"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessageSquare,
  Database,
  Settings,
  ChevronRight,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Knowledge Base",
    href: "knowledge-base",
    icon: Database,
  },
  {
    name: "Chat",
    href: "chat",
    icon: MessageSquare,
  },
  {
    name: "Settings",
    href: "settings",
    icon: Settings,
  },
];

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const pathname = usePathname();
  const projectId = params.projectId as string;

  // Generate breadcrumb items based on the current path
  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return { path, label };
  });

  return (
    <div className="flex h-screen">
      {/* Project Sidebar */}
      <aside className="w-64 border-r bg-background shrink-0">
        <nav className="h-full flex flex-col">
          <div className="p-6 border-b">
            <h2 className="font-semibold">Project Name</h2>
            <p className="text-sm text-muted-foreground mt-1">ID: {projectId}</p>
          </div>
          <div className="flex-1 px-3 py-4">
            {navigation.map((item) => {
              const isActive = pathname.includes(item.href);
              return (
                <Link
                  key={item.name}
                  href={`/comprehend/projects/${projectId}/${item.href}`}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Breadcrumb Navigation */}
        <div className="h-14 border-b flex items-center px-6 gap-2 text-sm bg-background/50">
          <Link href="/comprehend" className="text-muted-foreground hover:text-foreground">
            OV3R
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              <Link
                href={crumb.path}
                className={cn(
                  "hover:text-foreground",
                  index === breadcrumbs.length - 1
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                )}
              >
                {crumb.label}
              </Link>
            </React.Fragment>
          ))}
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
