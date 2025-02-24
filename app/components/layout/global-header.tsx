"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils/cn";
import { Moon, Sun, User, LayoutDashboard } from "lucide-react";

export function GlobalHeader() {
  const pathname = usePathname();
  
  return (
    <header className="h-14 border-b flex items-center justify-between px-6 bg-card">
      <div className="flex items-center space-x-6">
        <Link href="/console/home" className="text-xl font-semibold">
          OV3R
        </Link>
        <nav className="flex items-center space-x-4">
          <Link
            href="/console/home"
            className={cn(
              "text-sm transition-colors hover:text-foreground flex items-center gap-2",
              pathname.startsWith("/console")
                ? "text-foreground font-medium"
                : "text-muted-foreground"
            )}
          >
            <LayoutDashboard className="h-4 w-4" />
            Console
          </Link>
          <Link
            href="/comprehend/projects"
            className={cn(
              "text-sm transition-colors hover:text-foreground",
              pathname.startsWith("/comprehend")
                ? "text-foreground font-medium"
                : "text-muted-foreground"
            )}
          >
            Comprehend
          </Link>
          {/* Add other service links here */}
        </nav>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="w-9 h-9 flex items-center justify-center rounded-md transition-colors hover:bg-muted"
          onClick={() => document.documentElement.classList.toggle("dark")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-md transition-colors hover:bg-muted">
          <User className="h-5 w-5" />
          <span className="sr-only">User menu</span>
        </button>
      </div>
    </header>
  );
}
