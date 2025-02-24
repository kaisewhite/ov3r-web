"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatSidebar } from "./components/chat-sidebar";
import { Bot, Sparkles, FileText, Search, BookOpen, Database, Code } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const quickStartGuides = [
  {
    title: "Getting Started",
    description: "Learn the basics of interacting with your knowledge base",
    icon: Bot,
    examples: [
      "What can you help me with?",
      "How do I get the best results?",
      "Show me some example queries",
    ],
  },
  {
    title: "Advanced Features",
    description: "Discover powerful capabilities and advanced techniques",
    icon: Sparkles,
    examples: [
      "What advanced features are available?",
      "How can I use filters in my queries?",
      "Tell me about context windows",
    ],
  },
  {
    title: "Document Management",
    description: "Best practices for organizing and managing your documents",
    icon: FileText,
    examples: [
      "What file formats do you support?",
      "How should I structure my documents?",
      "Tips for document preprocessing",
    ],
  },
  {
    title: "Search Techniques",
    description: "Learn effective ways to search and query your data",
    icon: Search,
    examples: [
      "What are the best search practices?",
      "How to write effective queries?",
      "Understanding search relevance",
    ],
  },
];

const knowledgeBaseStats = [
  { label: "Documents", value: "156", icon: FileText },
  { label: "Sources", value: "12", icon: Database },
  { label: "APIs", value: "3", icon: Code },
  { label: "Categories", value: "8", icon: BookOpen },
];

export default function ChatPage() {
  const params = useParams();
  const projectId = params.projectId as string;

  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      {/* Chat List Sidebar */}
      <ChatSidebar projectId={projectId} />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-[500px] max-w-[calc(100%-540px)]">
        {/* Empty State / Welcome */}
        <ScrollArea className="flex-1">
          <div className="h-full flex items-center justify-center">
            <div className="w-full p-6">
              <div className="text-center space-y-2 mb-8">
                <h1 className="text-2xl font-semibold">Welcome to Your AI Assistant</h1>
                <p className="text-muted-foreground">
                  I can help you explore and understand your knowledge base. Select a conversation from
                  the sidebar or try one of the example topics below.
                </p>
              </div>

              {/* Quick Start Guides */}
              <div className="grid grid-cols-2 gap-6">
                {quickStartGuides.map((guide) => (
                  <div
                    key={guide.title}
                    className="space-y-3 p-4 rounded-lg border bg-card"
                  >
                    <div className="flex items-start gap-3">
                      <guide.icon className="h-5 w-5 text-primary shrink-0" />
                      <div>
                        <h3 className="font-medium">{guide.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {guide.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {guide.examples.map((example) => (
                        <button
                          key={example}
                          className="w-full text-left px-3 py-2 text-sm rounded-md 
                                   bg-muted/50 hover:bg-muted transition-colors"
                          onClick={() => {
                            // TODO: Set the input value to this example
                            console.log("Selected example:", example);
                          }}
                        >
                          {example}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Chat Input */}
        <div className="border-t p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: Implement chat submission
              console.log("Submit chat");
            }}
            className="flex gap-3"
          >
            <Input
              placeholder="Ask a question or type '/' for commands..."
              className="flex-1"
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>

      {/* Knowledge Base Info Panel */}
      <div className="w-[300px] shrink-0 flex flex-col bg-muted/5 border-l">
        <div className="p-4 border-b">
          <h2 className="font-semibold">Knowledge Base</h2>
          <p className="text-sm text-muted-foreground mt-1">Legal Research Assistant</p>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {knowledgeBaseStats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg border bg-card">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="text-sm font-medium truncate">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-semibold">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Recent Documents */}
            <div className="space-y-4">
              <h3 className="font-medium">Recent Documents</h3>
              <div className="space-y-2">
                {["Contract Analysis.pdf", "Legal Guidelines.docx", "Case Study.pdf"].map((doc) => (
                  <div
                    key={doc}
                    className="flex items-center gap-2 p-3 rounded-md hover:bg-muted transition-colors cursor-pointer"
                  >
                    <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                    <span className="text-sm truncate">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
