"use client";

import { useRouter } from "next/navigation";
import { BotSidebar } from "./components/bot-sidebar";
import { BotInput } from "./components/bot-input";
import { Card } from "@/components/ui/card";
import { Scale, Stethoscope } from "lucide-react";

const exampleCards = [
  {
    title: "Legal Research Assistant",
    description: "Expert in legal analysis, case law, and regulatory compliance",
    icon: Scale,
    examples: [
      "Analyze this contract for potential risks",
      "Find relevant case law for intellectual property",
      "Explain recent changes in privacy regulations"
    ]
  },
  {
    title: "Medical Research Bot",
    description: "Specialized in medical literature and clinical research",
    icon: Stethoscope,
    examples: [
      "Summarize recent studies on immunotherapy",
      "Explain the mechanism of action for this drug",
      "Find clinical trials for rare diseases"
    ]
  }
];

export default function SpecializedBotsPage() {
  const router = useRouter();

  const handleSendMessage = () => {
    const chatId = Date.now().toString();
    router.push(`/comprehend/specialized-bots/${chatId}`);
  };

  return (
    <div className="flex h-[calc(100vh-7rem)]">
      <p className="text-xl text-muted-foreground">
        Our specialized bots are trained on domain-specific knowledge to provide
        expert assistance in various fields.
      </p>
    </div>
  );
}
