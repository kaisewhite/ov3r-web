"use client";

import { GlobalHeader } from "@/app/components/layout/global-header";
import { Breadcrumb } from "@/app/components/layout/breadcrumb";

export default function SpecializedBotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <GlobalHeader />
      <Breadcrumb />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
