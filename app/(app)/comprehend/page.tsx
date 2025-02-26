"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Brain, Search, MessageSquare, Database, FolderKanban, Bot } from "lucide-react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";


const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent"></div>
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
    <div className="flex h-full relative -mx-8 -mt-6">
      <div className="fixed left-0 top-[6.5rem] h-[calc(100vh-6.5rem)] w-64 border-r border-neutral-200 dark:border-neutral-700 bg-muted/5">
        <Sidebar animate={false}>
          <SidebarBody>
            <div className="px-4 py-4">
              <h2 className="text-2xl font-semibold tracking-tight">Comprehend</h2>
            </div>
            <SidebarLink
              className="font-bold flex items-center px-4"
              link={{
                label: "Projects",
                href: "/comprehend/projects",
                icon: <FolderKanban className="h-4 w-4 mr-2" />
              }}
            />
            <SidebarLink
              className="font-bold flex items-center px-4"
              link={{
                label: "Specialized Bots",
                href: "/comprehend/specialized-bots",
                icon: <Bot className="h-4 w-4 mr-2" />
              }}
            />
          </SidebarBody>
        </Sidebar>
      </div>

      <div className="flex-1 p-10 overflow-auto ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold mb-6">
              Think Smarter, Not Harder
            </h1>
            <p className="text-lg text-muted-foreground">
              The ultimate tool for understanding the information that matters most to you. A powerful RAG-based system for building custom knowledge bases with AI-powered search and chat capabilities.
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
