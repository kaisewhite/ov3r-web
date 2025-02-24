"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { parsePathToSegments } from "@/app/lib/utils/navigation";
import { cn } from "@/app/lib/utils/cn";
import { ChevronRight } from "lucide-react";

export function Breadcrumb() {
  const pathname = usePathname();
  const segments = parsePathToSegments(pathname);

  return (
    <nav className="flex items-center h-10 px-6 border-b bg-card/50">
      <ol className="flex items-center space-x-2 text-sm">
        {segments.map((segment, index) => (
          <li key={segment.url} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/50" />
            )}
            <Link
              href={segment.url}
              className={cn(
                "transition-colors hover:text-foreground",
                segment.isCurrent
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              {segment.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
