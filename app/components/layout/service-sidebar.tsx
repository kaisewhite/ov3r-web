"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils/cn";
import {
  Link as LinkIcon,
  FileText,
  HelpCircle,
  FileBox,
  Building2,
} from "lucide-react";

const serviceNavItems = [
  { label: "Link", href: "/comprehend/link", icon: LinkIcon },
  { label: "Text", href: "/comprehend/text", icon: FileText },
  { label: "FAQ", href: "/comprehend/faq", icon: HelpCircle },
  { label: "Document", href: "/comprehend/document", icon: FileBox },
  { label: "Zoho", href: "/comprehend/zoho", icon: Building2 },
];

export function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r h-full bg-card">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-2">Comprehend</h2>
        <p className="text-sm text-muted-foreground mb-6">
          RAG system for custom knowledge bases
        </p>
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
