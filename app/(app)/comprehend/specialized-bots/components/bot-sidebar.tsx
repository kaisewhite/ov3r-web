"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Search, Bot } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Mock data for bots
const mockBots = [
  {
    id: "1",
    title: "Legal Research Assistant",
    preview: "Specialized in legal document analysis and research",
    timestamp: "2025-02-24T12:00:00",
    unread: true,
  },
  {
    id: "2",
    title: "Technical Documentation Bot",
    preview: "Expert in parsing and explaining technical documentation",
    timestamp: "2025-02-24T11:30:00",
    unread: false,
  },
  {
    id: "3",
    title: "Medical Research Bot",
    preview: "Focused on medical literature and clinical studies",
    timestamp: "2025-02-24T10:00:00",
    unread: false,
  },
];

export function BotSidebar() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter bots based on search query
  const filteredBots = mockBots.filter((bot) =>
    bot.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Format timestamp to relative time
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours < 24) {
      return `${hours}h ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="w-80 border-r border-border h-full flex flex-col">
      <div className="p-4 border-b border-border space-y-4">
        <Button className="w-full justify-start space-x-2">
          <Plus className="h-4 w-4" />
          <span>New Bot</span>
        </Button>
        <div className="flex items-center space-x-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search bots..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8"
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-2 p-2">
          {filteredBots.map((bot) => (
            <Link
              key={bot.id}
              href={`/comprehend/specialized-bots/${bot.id}`}
              className={cn(
                "block p-3 rounded-lg hover:bg-muted transition-colors space-y-1",
                bot.unread && "bg-muted"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium line-clamp-1">{bot.title}</span>
                <span className="text-xs text-muted-foreground">
                  {formatTimestamp(bot.timestamp)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {bot.preview}
              </p>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
