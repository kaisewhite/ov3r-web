"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ServiceSidebar } from "./components/service-sidebar";

export default function ComprehendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Check if we're on any projects route
  const isProjectsRoute = pathname.startsWith("/comprehend/projects");

  // Don't show service sidebar on any projects routes
  if (isProjectsRoute) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen">
      <ServiceSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
