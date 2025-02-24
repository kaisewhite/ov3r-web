"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  IconDashboard,
  IconMessage,
  IconBrain,
  IconPalette,
  IconUsers,
  IconSettings,
  IconShare,
  IconBrandZapier,
  IconWorldWww,
  IconFileText,
  IconMessageCircle,
  IconRoad,
  IconHelp,
  IconArrowLeft,
  IconBrandGithub,
  IconApi,
  IconChevronRight,
} from "@tabler/icons-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";
import Header from "@/app/components/Header";
import { Sidebar, SidebarBody, SidebarLink } from "@/app/components/ui/sidebar";
import { motion } from "framer-motion";

interface Project {
  id: string;
  name: string;
}

const PROJECTS_DATA: Record<string, Project> = {
  "1": { id: "1", name: "Legal Research Assistant" },
  "2": { id: "2", name: "Technical Documentation" }
};

interface SidebarLinkType {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const createNavLink = (href: string, label: string, Icon: React.ComponentType): SidebarLinkType => ({
  href,
  label,
  icon: <Icon className="w-5 h-5" />,
});

interface ProjectLayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  const [open, setOpen] = useState(true);
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  const project = PROJECTS_DATA[projectId] || { id: projectId, name: "Project Not Found" };

  useEffect(() => {
    if (window.location.pathname === `/comprehend/projects/${projectId}`) {
      router.push(`/comprehend/projects/${projectId}/dashboard`);
    }
  }, [projectId, router]);

  const chatbotLinks = [
    createNavLink(`/comprehend/projects/${projectId}/dashboard`, "Dashboard", IconDashboard),
    createNavLink(`/comprehend/projects/${projectId}/conversations`, "Conversations", IconMessage),
    createNavLink(`/comprehend/projects/${projectId}/settings`, "Settings", IconSettings),
  ];

  const integrationLinks = [
    createNavLink(`/comprehend/projects/${projectId}/github`, "GitHub", IconBrandGithub),
    createNavLink(`/comprehend/projects/${projectId}/api`, "API", IconApi),
  ];

  const helpLinks = [
    createNavLink(`/comprehend/projects/${projectId}/help`, "Documentation", IconHelp),
  ];

  const sidebarContent = (
    <div className="flex flex-col gap-6">
      <div className="space-y-1">
        <h2 className="px-3 text-sm font-semibold">Chatbot</h2>
        {chatbotLinks.map((link, index) => (
          <SidebarLink key={index} link={link} className="flex items-center gap-2 px-3 py-2" />
        ))}
      </div>
      <div className="space-y-1">
        <h2 className="px-3 text-sm font-semibold">Integrations</h2>
        {integrationLinks.map((link, index) => (
          <SidebarLink key={index} link={link} className="flex items-center gap-2 px-3 py-2" />
        ))}
      </div>
      <div className="space-y-1">
        <h2 className="px-3 text-sm font-semibold">Help</h2>
        {helpLinks.map((link, index) => (
          <SidebarLink key={index} link={link} className="flex items-center gap-2 px-3 py-2" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen">
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="flex flex-col gap-6">
          {sidebarContent}
        </SidebarBody>
      </Sidebar>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="border-b">
          <div className="px-6 py-4">
            <nav aria-label="breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground">
                <li className="inline-flex items-center gap-1.5">
                  <a href="/comprehend/projects" className="hover:text-foreground transition-colors">
                    Projects
                  </a>
                </li>
                <li role="presentation" aria-hidden="true" className="[&>svg]:size-3.5">
                  <IconChevronRight className="w-4 h-4" />
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <span role="link" aria-disabled="true" aria-current="page" className="font-normal text-foreground">
                    {project.name}
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
} 