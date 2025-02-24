"use client";

import React from "react";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
