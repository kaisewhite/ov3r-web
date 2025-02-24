"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils/cn";
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  Puzzle,
  HelpCircle,
  Github,
  Webhook,
} from "lucide-react";

interface ProjectSidebarProps {
  projectId: string;
}

const projectNavItems = [
  { label: "Dashboard", href: "dashboard", icon: LayoutDashboard },
  { label: "Conversations", href: "conversations", icon: MessageSquare },
  { label: "Settings", href: "settings", icon: Settings },
  {
    label: "Integrations",
    href: "integrations",
    icon: Puzzle,
    subItems: [
      { label: "GitHub", href: "github", icon: Github },
      { label: "API", href: "api", icon: Webhook },
    ],
  },
  { label: "Help", href: "help", icon: HelpCircle },
];

export function ProjectSidebar({ projectId }: ProjectSidebarProps) {
  const pathname = usePathname();
  const basePath = `/comprehend/projects/${projectId}`;

  return (
    <aside className="w-64 border-r h-full bg-card">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-2">Project Name</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Project dashboard and settings
        </p>
        <nav className="space-y-1">
          {projectNavItems.map((item) => (
            <div key={item.href}>
              <Link
                href={`${basePath}/${item.href}`}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                  pathname === `${basePath}/${item.href}`
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
              {item.subItems && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={`${basePath}/${item.href}/${subItem.href}`}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                        pathname === `${basePath}/${item.href}/${subItem.href}`
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <subItem.icon className="h-4 w-4" />
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
