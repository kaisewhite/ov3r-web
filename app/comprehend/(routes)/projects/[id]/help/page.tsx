"use client";

import { IconBook, IconBulb, IconLifebuoy, IconRocket } from "@tabler/icons-react";

interface HelpSection {
  title: string;
  description: string;
  icon: React.ReactNode;
  links: {
    title: string;
    description: string;
  }[];
}

const helpSections: HelpSection[] = [
  {
    title: "Getting Started",
    description: "Learn the basics of using Comprehend",
    icon: <IconRocket className="h-5 w-5" />,
    links: [
      {
        title: "Quick Start Guide",
        description: "Get up and running with your first project",
      },
      {
        title: "Project Setup",
        description: "Configure your project settings and preferences",
      },
      {
        title: "Knowledge Base Creation",
        description: "Learn how to build and organize your knowledge base",
      },
    ],
  },
  {
    title: "Features & Guides",
    description: "Detailed guides for Comprehend features",
    icon: <IconBook className="h-5 w-5" />,
    links: [
      {
        title: "AI Chat Interface",
        description: "How to effectively use the AI chat interface",
      },
      {
        title: "Document Processing",
        description: "Understanding document processing and indexing",
      },
      {
        title: "Web Crawling",
        description: "Set up and manage web crawling for content",
      },
    ],
  },
  {
    title: "Best Practices",
    description: "Tips and recommendations for optimal use",
    icon: <IconBulb className="h-5 w-5" />,
    links: [
      {
        title: "Content Organization",
        description: "Best practices for organizing your knowledge base",
      },
      {
        title: "Query Optimization",
        description: "How to write effective queries for better results",
      },
      {
        title: "Performance Tips",
        description: "Optimize your project for better performance",
      },
    ],
  },
  {
    title: "Support",
    description: "Get help when you need it",
    icon: <IconLifebuoy className="h-5 w-5" />,
    links: [
      {
        title: "FAQs",
        description: "Frequently asked questions and answers",
      },
      {
        title: "Contact Support",
        description: "Get in touch with our support team",
      },
      {
        title: "System Status",
        description: "Check the current system status",
      },
    ],
  },
];

export default function HelpPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Help & Documentation</h1>
        <p className="text-sm text-muted-foreground">
          Find guides, tutorials, and answers to common questions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {helpSections.map((section) => (
          <div key={section.title} className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              {section.icon}
              <div>
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {section.links.map((link) => (
                <button
                  key={link.title}
                  className="w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <h3 className="font-medium text-sm">{link.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-card p-6 text-center">
        <p className="text-sm text-muted-foreground">
          Full documentation is coming soon. This is a placeholder page.
        </p>
      </div>
    </div>
  );
} 