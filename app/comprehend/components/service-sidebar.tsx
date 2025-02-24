"use client";

import { Link, Settings } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

const navigationItems = [
  {
    title: "Projects",
    href: "/comprehend/projects",
    icon: Link,
  },
  {
    title: "Settings",
    href: "/comprehend/settings",
    icon: Settings,
  },
];

export function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen border-r flex flex-col bg-muted/5">
      <div className="p-2">
        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <NextLink
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-2 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </NextLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
