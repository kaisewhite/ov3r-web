"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/app/lib/utils/cn";
import { Moon, Sun, User, LayoutDashboard, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const services = [
  {
    title: "Comprehend",
    href: "/comprehend/projects",
    description: "RAG-based system for building custom knowledge bases with AI-powered search and chat.",
  },
  {
    title: "Transform",
    href: "/transform/projects",
    description: "Advanced data transformation and ETL pipeline orchestration platform.",
  },
  {
    title: "Analyze",
    href: "/analyze/projects",
    description: "AI-powered analytics and visualization tools for complex data insights.",
  },
  {
    title: "Connect",
    href: "/connect/projects",
    description: "Integration hub for connecting and synchronizing enterprise data sources.",
  },
  {
    title: "Secure",
    href: "/secure/projects",
    description: "Data security and compliance management with AI-driven threat detection.",
  },
  {
    title: "Automate",
    href: "/automate/projects",
    description: "Workflow automation platform with AI-assisted process optimization.",
  }
];

export function GlobalHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceClick = async (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    router.push(href);
  };
  
  return (
    <header className="h-14 border-b flex items-center justify-between px-6 bg-card">
      <div className="flex items-center space-x-6">
        <Link href="/console/home" className="text-xl font-semibold">
          OV3R
        </Link>
        <nav className="flex items-center space-x-4">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger
              className={cn(
                "w-9 h-9 p-0 flex items-center justify-center rounded-md transition-colors hover:bg-muted",
                pathname.startsWith("/console")
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span className="sr-only">Services</span>
            </PopoverTrigger>
            <PopoverContent className="w-[600px] p-4" align="start">
              <div className="relative mb-4">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className={cn(
                "grid gap-2",
                searchQuery ? "grid-cols-1" : "grid-cols-2 gap-4"
              )}>
                {filteredServices.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    onClick={(e) => handleServiceClick(service.href, e)}
                    className="block rounded-md p-3 hover:bg-muted"
                  >
                    <div className="text-sm font-medium mb-1">{service.title}</div>
                    <p className="text-sm leading-snug text-muted-foreground">
                      {service.description}
                    </p>
                  </a>
                ))}
              </div>
            </PopoverContent>
          </Popover>
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
