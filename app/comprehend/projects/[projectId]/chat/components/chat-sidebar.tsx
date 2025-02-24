"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Plus, Search, Trash2 } from "lucide-react";
import { cn } from "@/app/lib/utils/cn";
import { Input } from "@/components/ui/input";

interface ChatSidebarProps {
  projectId: string;
  onNewChat: () => void;
}

// Mock data for chat history
const mockChats = [
  {
    id: "1",
    title: "Knowledge Base Setup",
    preview: "How do I set up my knowledge base?",
    timestamp: "2024-02-24T14:30:00Z",
  },
  {
    id: "2",
    title: "Document Processing",
    preview: "Can you explain how document processing works?",
    timestamp: "2024-02-24T13:15:00Z",
  },
];

export function ChatSidebar({ projectId, onNewChat }: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const filteredChats = mockChats.filter((chat) =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="max-w-xs h-full border-r flex flex-col bg-muted/5">
      <div className="space-y-3 p-1">
        <Button
          onClick={onNewChat}
          className="w-full justify-start"
          variant="default"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Chat
        </Button>

        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search chats..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="py-1">
          <div className="space-y-[2px]">
            {filteredChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChatId(chat.id)}
                className={cn(
                  "w-full text-left px-1 py-2 hover:bg-muted/50 transition-colors",
                  "group flex flex-col",
                  selectedChatId === chat.id && "bg-muted"
                )}
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="font-medium truncate">{chat.title}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate pl-6">
                  {chat.preview}
                </p>
                <div
                  className={cn(
                    "hidden group-hover:flex items-center justify-end gap-2 pt-1",
                    selectedChatId === chat.id && "flex"
                  )}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle delete
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
