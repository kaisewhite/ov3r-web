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
  const projectId = context === "PROJECT" || context === "CHAT" 
    ? pathname.split("/")[3] 
    : null;

  // Only show navigation elements for Comprehend service routes
  const showNav = pathname.startsWith("/comprehend");

  return (
    <div className="flex flex-col h-screen">
      <GlobalHeader />
      {showNav && <Breadcrumb />}
      <div className="flex-1 flex overflow-hidden">
        {context === "SERVICE" && <ServiceSidebar />}
        {context === "PROJECT" && projectId && <ProjectSidebar projectId={projectId} />}
        <div className="flex-1 overflow-auto">
          <div className="container py-6 px-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
