"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

const ListItem = React.forwardRef((props, ref) => {
  const { className, title, children, ...rest } = props;
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...rest}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Header() {
  const searchPlaceholders = [
    "Search for Comprehend projects...",
    "Find AI models and datasets...",
    "Explore OV3R services...",
    "Search knowledge bases...",
    "Find conversation history...",
  ];

  const services = [
    {
      name: "Comprehend",
      href: "/comprehend/home/welcome",
      description: "AI-powered document processing and knowledge base",
    },
    {
      name: "ServiceA",
      href: "/servicea/home/welcome",
      description: "Description for Service A",
    },
    {
      name: "ServiceB",
      href: "/serviceb/home/welcome",
      description: "Description for Service B",
    },
    {
      name: "ServiceC",
      href: "/servicec/home/welcome",
      description: "Description for Service C",
    },
  ];

  const handleSearchChange = (e) => {
    console.log("Search:", e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted");
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur'>
      <div className='container flex h-14 max-w-screen-2xl items-center px-6'>
        <div className='mr-4 flex'>
          <Link href='/console/home' className='flex items-center space-x-2 font-bold'>
            ov3r
          </Link>
        </div>

        <div className='flex items-center space-x-6 text-sm font-medium'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                    {services.map((service) => (
                      <ListItem key={service.name} title={service.name} href={service.href}>
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className='flex-1 mx-6'>
          <PlaceholdersAndVanishInput placeholders={searchPlaceholders} onChange={handleSearchChange} onSubmit={handleSearchSubmit} />
        </div>

        <nav className='flex items-center space-x-6 text-sm font-medium'>
          <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center gap-1 transition-colors hover:text-foreground/80'>
              My Account
              <IconChevronDown className='h-4 w-4' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-[200px]'>
              <DropdownMenuItem asChild>
                <Link href='/console/profile' className='flex items-center'>
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href='/console/billing' className='flex items-center'>
                  Billing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href='/console/subscription' className='flex items-center'>
                  Subscription
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href='/console/logout' className='flex items-center'>
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
