"use client";

import { MessageSquare } from "lucide-react";

export default function ChatsPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Chats</h1>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[400px] rounded-lg border bg-muted/10">
        <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
        <h2 className="text-lg font-medium mb-2">No chats yet</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Start a new chat to interact with your knowledge base
        </p>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          New Chat
        </button>
      </div>
    </div>
  );
}
