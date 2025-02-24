"use client";

import { useParams } from "next/navigation";

export default function ChatPage() {
  const { projectId } = useParams();

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl font-semibold mb-4 pl-6">Chat</h1>
    </div>
  );
}
