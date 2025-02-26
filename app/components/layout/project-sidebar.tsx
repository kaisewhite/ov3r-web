"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils/cn";
import {
  HelpCircle,
  MessageSquare,
  Settings,
  Github,
  Webhook,
  Database,
  Link2,
} from "lucide-react";

interface ProjectSidebarProps {
  projectId: string;
}

const projectNavItems = [
  { label: "Knowledge Base", href: "knowledge-base", icon: Database },
  { label: "Chat", href: "chat", icon: MessageSquare },
  { label: "Settings", href: "settings", icon: Settings },
  {
    label: "Integrations",
    href: "integrations",
    icon: Webhook,
    children: [
      { label: "GitHub", href: "integrations/github", icon: Github },
    ],
  },
  { label: "Help", href: "help", icon: HelpCircle },
];

export function ProjectSidebar({ projectId }: ProjectSidebarProps) {
  const pathname = usePathname();
  const basePath = `/comprehend/projects/${encodeURIComponent(projectId)}`;

  return (
    <aside className="w-64 border-r h-full bg-card">
      <nav className="p-6 space-y-1">
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
            {item.children && (
              <div className="ml-4 mt-1 space-y-1">
                {item.children.map((subItem) => (
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
    </aside>
  );
}
