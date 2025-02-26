"use client";

import React from "react";


export default function ComprehendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex-1 flex flex-col">
      {children}
    </div>
  );
}
