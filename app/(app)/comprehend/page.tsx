"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Brain, Search, MessageSquare, Database } from "lucide-react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconLayoutDashboard } from "@tabler/icons-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "Document Processing",
    description: "Upload documents, crawl web content, and build comprehensive knowledge bases from various sources.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Database className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI-Powered Search",
    description: "Use advanced natural language processing to find exactly what you need across your knowledge base.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Search className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Interactive Chat",
    description: "Engage with your data through an AI chatbot that understands context and provides accurate responses.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <MessageSquare className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "RAG-Based System",
    description: "Leverage the power of Retrieval-Augmented Generation to provide accurate, context-aware responses from your data.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Brain className="h-4 w-4 text-neutral-500" />,
  },
];

export default function ComprehendPage() {
  return (
    <div className="flex h-full">
      <Sidebar animate={false}>
        <SidebarBody>
          <SidebarLink
            className="font-bold"
            link={{
              label: "Projects",
              href: "/comprehend/projects"
            }}
          />
        </SidebarBody>
      </Sidebar>

      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold mb-6">
              Comprehend
            </h1>
            <p className="text-lg text-muted-foreground">
              A powerful RAG-based system for building custom knowledge bases with AI-powered search and chat capabilities.
            </p>
          </div>

          <BentoGrid className="md:auto-rows-[20rem]">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}
