"use client";

import Header from "@/app/components/Header";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/app/components/ui/sidebar";
import { IconHome, IconDatabase, IconSettings, IconBrain } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Logo = () => {
  return (
    <Link href='/comprehend/home/welcome' className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'>
      <div className='h-5 w-6 bg-primary dark:bg-primary rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='font-medium text-black dark:text-white whitespace-pre'>
        Comprehend
      </motion.span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link href='/comprehend/home/welcome' className='font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20'>
      <div className='h-5 w-6 bg-primary dark:bg-primary rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0' />
    </Link>
  );
};

export default function ComprehendLayout({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Don't render the service layout for project routes
  if (pathname.includes("/projects/") && !pathname.endsWith("/projects")) {
    return children;
  }

  const links = [
    {
      label: "Welcome",
      href: "/comprehend/home/welcome",
      icon: <IconHome className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />,
    },
    {
      label: "Projects",
      href: "/comprehend/projects",
      icon: <IconDatabase className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />,
    },
    {
      label: "Models",
      href: "/comprehend/models",
      icon: <IconBrain className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />,
    },
    {
      label: "Settings",
      href: "/comprehend/settings",
      icon: <IconSettings className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />,
    },
  ];

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <div className='flex flex-1'>
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className='min-h-[calc(100vh-3.5rem)] flex flex-col'>
            <div className='flex flex-col flex-1'>
              {open ? <Logo /> : <LogoIcon />}
              <div className='mt-8 flex flex-col gap-2'>
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
        <main className='flex-1 overflow-y-auto p-6 bg-background'>
          <div className='max-w-5xl mx-auto'>{children}</div>
        </main>
      </div>
    </div>
  );
}
