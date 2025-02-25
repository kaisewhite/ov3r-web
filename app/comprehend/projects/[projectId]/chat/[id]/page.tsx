"use client";

import { useParams } from "next/navigation";
import { ChatSidebar } from "../components/chat-sidebar";
import { ChatMessage } from "../components/chat-message";
import { ChatInput } from "../components/chat-input";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock conversation data
const mockConversation = [
  {
    role: "user" as const,
    content: "What are the key requirements for implementing the search functionality?",
    timestamp: "2025-02-24T12:00:00",
  },
  {
    role: "assistant" as const,
    content: "Based on the project requirements, here are the key aspects for the search implementation:\n\n1. Full-text search capability\n2. Support for multiple file formats\n3. Real-time indexing\n4. Relevance scoring\n5. Filter and faceting options",
    timestamp: "2025-02-24T12:01:00",
    attachments: [
      {
        type: "file" as const,
        name: "search-requirements.pdf",
        url: "/files/search-requirements.pdf",
      },
    ],
  },
];

export default function ChatPage() {
  const params = useParams();
  const projectId = params.projectId;

  const handleSendMessage = (content: string, attachments: File[]) => {
    // TODO: Implement sending message
    console.log("Sending message:", { content, attachments });
  };

  return (
    <div className="flex h-[calc(100vh-6rem)]">
      <ChatSidebar projectId={projectId as string} />
      <div className="flex-1 flex flex-col">
        <div className="flex items-center px-6 py-3 border-b">
          <h1 className="text-2xl font-semibold">Chat</h1>
        </div>
        <ScrollArea className="flex-1 px-6">
          <div className="max-w-3xl mx-auto">
            {mockConversation.map((message, index) => (
              <ChatMessage key={index} {...message} />
            ))}
          </div>
        </ScrollArea>
        <div className="px-6 pb-6">
          <div className="max-w-3xl mx-auto">
            <ChatInput onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}
