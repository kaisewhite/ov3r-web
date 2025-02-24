"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ServiceSidebar } from "../components/layout/service-sidebar";

export default function ComprehendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Return just children (no service sidebar) for any route under /projects
  if (pathname.includes("/projects")) {
    return children;
  }

  return (
    <div className="flex min-h-screen">
      <ServiceSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
