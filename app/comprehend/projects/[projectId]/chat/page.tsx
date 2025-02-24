"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { ChatSidebar } from "./components/chat-sidebar";

export default function ChatPage({ params }: { params: { projectId: string } }) {
  const { projectId } = React.use(params);
  
  const handleNewChat = () => {
    // TODO: Implement new chat creation
    console.log("Creating new chat");
  };

  return (
    <div className="flex h-full">
      <ChatSidebar projectId={projectId} onNewChat={handleNewChat} />
      
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="flex flex-col items-center justify-center text-center max-w-md">
            <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-lg font-medium mb-2">Welcome to Chat</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Start a new chat or select an existing conversation to interact with your knowledge base
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
