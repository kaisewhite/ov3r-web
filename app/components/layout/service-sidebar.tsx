"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils/cn";
import {
  Folders,
  Settings,
  HelpCircle,
} from "lucide-react";

const serviceNavItems = [
  { label: "Projects", href: "/comprehend/projects", icon: Folders },
  { label: "Settings", href: "/comprehend/settings", icon: Settings },
  { label: "FAQ", href: "/comprehend/faq", icon: HelpCircle },
];

export function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r h-full bg-card">
      <div className="p-6">
        <nav className="space-y-1">
          {serviceNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
