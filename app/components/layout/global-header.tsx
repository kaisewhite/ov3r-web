"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils/cn";
import { Moon, Sun, User, LayoutDashboard, Brain } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  {
    title: "Comprehend",
    href: "/comprehend/projects",
    description: "RAG-based system for building custom knowledge bases with AI-powered search and chat.",
    icon: Brain,
  },
];

export function GlobalHeader() {
  const pathname = usePathname();
  
  return (
    <header className="h-14 border-b flex items-center justify-between px-6 bg-card">
      <div className="flex items-center space-x-6">
        <Link href="/console/home" className="text-xl font-semibold">
          OV3R
        </Link>
        <nav className="flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  showChevron={false}
                  className={cn(
                    "w-9 h-9 p-0 bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent",
                    pathname.startsWith("/console")
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <LayoutDashboard className="h-5 w-5" />
                  <span className="sr-only">Services</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="flex items-start space-x-4 rounded-md p-3 hover:bg-muted"
                        >
                          <service.icon className="h-5 w-5 mt-0.5" />
                          <div>
                            <div className="text-sm font-medium mb-1">{service.title}</div>
                            <p className="text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
