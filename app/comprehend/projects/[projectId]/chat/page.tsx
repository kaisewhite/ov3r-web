"use client";

import { useParams } from "next/navigation";
import { ChatSidebar } from "./components/chat-sidebar";

export default function ChatPage() {
  const { projectId } = useParams();

  return (
    <div className="flex h-[calc(100vh-6rem)]">
      <ChatSidebar projectId={projectId as string} />
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-4 pl-6">Chat</h1>
      </div>
    </div>
  );
}
