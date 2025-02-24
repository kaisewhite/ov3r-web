"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { parsePathToSegments } from "@/app/lib/utils/navigation";

export function Breadcrumb() {
  const pathname = usePathname();
  const segments = parsePathToSegments(pathname);

  return (
    <nav className="flex h-12 items-center px-6 border-b bg-muted/5">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            OV3R
          </Link>
        </li>
        {segments.map((segment, index) => (
          <li key={segment.url} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            {segment.isClickable === false ? (
              <span className="text-sm font-medium text-muted-foreground">
                {segment.label}
              </span>
            ) : (
              <Link
                href={segment.url}
                className={`text-sm font-medium transition-colors ${
                  segment.isCurrent
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {segment.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
