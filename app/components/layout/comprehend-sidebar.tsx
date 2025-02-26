"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils/cn";
import { Folders } from "lucide-react";

const navItems = [
  { label: "Projects", href: "/comprehend/projects", icon: Folders },
];

export function ComprehendSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-full border-r bg-background">
      <nav className="p-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md transition-colors",
              pathname === item.href
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
} 