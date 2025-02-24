"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { MessageSquare, Plus, Search, AlertCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Utility function to format timestamps consistently
function formatTimestamp(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Format based on how recent the timestamp is
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;

  // For older dates, show the actual date
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

// Mock data - replace with real data
const mockChats = [
  {
    id: "1",
    title: "Project Requirements",
    preview: "What are the key requirements for implementing the search functionality?",
    timestamp: new Date(Date.now() - 30 * 60000), // 30 minutes ago
    unread: true,
  },
  {
    id: "2",
    title: "API Integration",
    preview: "How do we integrate with the external data sources?",
    timestamp: new Date(Date.now() - 2 * 3600000), // 2 hours ago
    unread: false,
  },
  {
    id: "3",
    title: "Performance Review",
    preview: "Analysis of system performance and optimization suggestions",
    timestamp: new Date(Date.now() - 24 * 3600000), // 1 day ago
    unread: false,
  },
  {
    id: "4",
    title: "Documentation Update",
    preview: "Updates needed for the technical documentation",
    timestamp: new Date(Date.now() - 3 * 24 * 3600000), // 3 days ago
    unread: false,
  },
  {
    id: "5",
    title: "Security Review",
    preview: "Discussion about implementing additional security measures",
    timestamp: new Date(Date.now() - 5 * 24 * 3600000), // 5 days ago
    unread: false,
  },
].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

interface ChatSidebarProps {
  projectId: string;
}

export function ChatSidebar({ projectId }: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [error, setError] = React.useState<string | null>("API connection failed. Retrying...");

  const filteredChats = mockChats.filter(
    (chat) =>
      chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-[240px] shrink-0 border-r flex flex-col bg-background">
      {/* Header */}
      <div className="p-2 border-b space-y-2">
        <Button
          variant="default"
          className="w-full justify-start gap-2"
          onClick={() => {
            // TODO: Implement new chat
            console.log("New chat");
          }}
        >
          <Plus className="h-4 w-4" />
          New Chat
        </Button>

        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search chats..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {filteredChats.map((chat) => (
            <Link
              key={chat.id}
              href={`/comprehend/projects/${projectId}/chat/${chat.id}`}
              className={cn(
                "flex flex-col gap-1 p-2 rounded-lg transition-colors hover:bg-muted",
                chat.unread && "bg-primary/5"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <MessageSquare className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium truncate">{chat.title}</span>
                </div>
                <span className="text-xs text-muted-foreground shrink-0 ml-2">
                  {formatTimestamp(chat.timestamp)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 pl-6">
                {chat.preview}
              </p>
            </Link>
          ))}
        </div>
      </ScrollArea>

      {/* Error Alert */}
      {error && (
        <Alert variant="destructive" className="mx-2 mb-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-sm ml-2">
            {error}
            <Button
              variant="link"
              className="h-auto p-0 ml-2"
              onClick={() => setError(null)}
            >
              Dismiss
            </Button>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
