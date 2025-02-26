"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function ComprehendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMainComprehendPage = pathname === "/comprehend";

  return (
    <div className={cn(
      "flex min-h-[calc(100vh-8rem)]",
      isMainComprehendPage && "-mx-8" // Remove container padding
    )}>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
