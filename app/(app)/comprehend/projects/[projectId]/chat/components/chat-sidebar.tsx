"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Search, MessageSquare } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Mock data for conversations
const mockConversations = [
  {
    id: "1",
    title: "Project Requirements",
    preview: "What are the key requirements for implementing the search...",
    timestamp: "2025-02-24T12:00:00",
    unread: true,
  },
  {
    id: "2",
    title: "API Integration",
    preview: "How do we integrate with the external data sources?",
    timestamp: "2025-02-24T11:30:00",
    unread: false,
  },
  {
    id: "3",
    title: "Performance Review",
    preview: "Analysis of system performance and optimization suggestions",
    timestamp: "2025-02-24T10:00:00",
    unread: false,
  },
];

interface ChatSidebarProps {
  projectId: string;
}

export function ChatSidebar({ projectId }: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter conversations based on search query
  const filteredConversations = mockConversations.filter((conv) =>
    conv.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Format timestamp to relative time
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return "just now";
  };

  return (
    <div className="w-[280px] h-[calc(100vh-6rem)] shrink-0 border-r flex flex-col bg-background">
      {/* Header */}
      <div className="p-4 border-b space-y-3">
        <Button
          variant="default"
          className="w-full justify-start gap-2 px-4"
          onClick={() => {
            // TODO: Implement new chat
            console.log("New chat");
          }}
        >
          <Plus className="h-4 w-4" />
          New Chat
        </Button>

        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search chats..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="p-3 space-y-2">
          {filteredConversations.map((conv) => (
            <Link
              key={conv.id}
              href={`/comprehend/projects/${projectId}/chat/${conv.id}`}
              className={cn(
                "flex flex-col gap-1 p-3 rounded-lg transition-colors hover:bg-muted",
                conv.unread && "bg-primary/5"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <MessageSquare className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium truncate">{conv.title}</span>
                </div>
                <span className="text-xs text-muted-foreground shrink-0 ml-2">
                  {formatTimestamp(conv.timestamp)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 pl-6">
                {conv.preview}
              </p>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
