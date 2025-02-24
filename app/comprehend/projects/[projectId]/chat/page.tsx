"use client";

import { useParams, useRouter } from "next/navigation";
import { ChatSidebar } from "./components/chat-sidebar";
import { ChatInput } from "./components/chat-input";
import { Card } from "@/components/ui/card";
import { Bot, Sparkles } from "lucide-react";

const exampleCards = [
  {
    title: "Getting Started",
    description: "Learn how to use OV3R's AI assistant effectively",
    icon: Bot,
    examples: [
      "What can you help me with?",
      "How do I create a new knowledge base?",
      "What are the key features of OV3R?"
    ]
  },
  {
    title: "Advanced Features",
    description: "Explore OV3R's advanced capabilities and integrations",
    icon: Sparkles,
    examples: [
      "What integrations are available?",
      "How can I customize my knowledge base?",
      "Tell me about RAG optimization"
    ]
  }
];

export default function ChatPage() {
  const { projectId } = useParams();
  const router = useRouter();

  const handleSendMessage = (content: string, attachments: File[]) => {
    // Generate a new chat ID and redirect to it
    const chatId = Date.now().toString();
    router.push(`/comprehend/projects/${projectId}/chat/${chatId}`);
  };

  const handleExampleClick = (example: string) => {
    handleSendMessage(example, []);
  };

  return (
    <div className="flex h-[calc(100vh-6rem)]">
      <ChatSidebar projectId={projectId as string} />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 px-6 py-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Welcome to Your AI Assistant</h1>
              <p className="text-xl text-muted-foreground">
                I can help you explore and understand your knowledge base. Select a conversation
                from the sidebar or try one of the example topics below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exampleCards.map((card, index) => (
                <Card key={index} className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold">{card.title}</h2>
                  </div>
                  <p className="text-muted-foreground">{card.description}</p>
                  <div className="space-y-2">
                    {card.examples.map((example, i) => (
                      <button
                        key={i}
                        className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors text-sm"
                        onClick={() => handleExampleClick(example)}
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <ChatInput onSendMessage={handleSendMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
