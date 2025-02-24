"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { FileIcon, ImageIcon } from "lucide-react";

interface ChatMessageProps {
  content: string;
  role: "user" | "assistant";
  timestamp: string;
  attachments?: Array<{
    type: "image" | "file";
    url: string;
    name: string;
  }>;
}

export function ChatMessage({ content, role, timestamp, attachments }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "py-6",
        role === "assistant" ? "bg-muted/50" : "bg-background"
      )}
    >
      <div className={cn(
        "max-w-3xl mx-auto px-6 space-y-2",
        role === "user" && "flex flex-col items-end"
      )}>
        <div className={cn(
          "space-y-2 max-w-[85%]",
          role === "user" && "items-end"
        )}>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          </div>
          <div className={cn(
            "prose prose-neutral dark:prose-invert max-w-none rounded-xl p-4",
            role === "assistant" ? "bg-background" : "bg-primary text-primary-foreground"
          )}>
            {content}
          </div>
          {attachments && attachments.length > 0 && (
            <div className={cn(
              "grid gap-2 mt-2",
              role === "user" ? "grid-cols-2" : "grid-cols-2"
            )}>
              {attachments.map((attachment, index) => (
                <Card
                  key={index}
                  className={cn(
                    "p-2 flex items-center gap-2 hover:bg-muted/50 cursor-pointer",
                    role === "user" && "bg-primary/10"
                  )}
                >
                  {attachment.type === "image" ? (
                    <ImageIcon className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <FileIcon className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-sm truncate">{attachment.name}</span>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
