"use client";

import { usePathname } from "next/navigation";
import { GlobalHeader } from "./global-header";
import { Breadcrumb } from "./breadcrumb";
import { ServiceSidebar } from "./service-sidebar";
import { ProjectSidebar } from "./project-sidebar";
import { detectNavigationContext } from "@/app/lib/utils/navigation";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const context = detectNavigationContext(pathname);
  
  // Extract project ID from path if in project context
  const projectId = context === "PROJECT" 
    ? pathname.split("/")[3] 
    : undefined;

  // Only show navigation elements for Comprehend service routes
  const showNav = pathname.startsWith("/comprehend");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <GlobalHeader />
      {showNav && <Breadcrumb />}
      <div className="flex-1 flex">
        {showNav && (
          context === "PROJECT" && projectId ? (
            <ProjectSidebar projectId={projectId} />
          ) : (
            <ServiceSidebar />
          )
        )}
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
