"use client";

import React from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
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
  return (
    <div className="flex-1 overflow-auto">
      {children}
    </div>
  );
}
