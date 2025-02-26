"use client";

import { useRouter } from "next/navigation";
import { BotSidebar } from "./components/bot-sidebar";
import { Card } from "@/components/ui/card";
import { Scale, Stethoscope } from "lucide-react";

export default function SpecializedBotsPage() {
  const router = useRouter();

  return (
    <div className="flex h-[calc(100vh-7rem)]">
      <div className="w-80 border-r">
        <BotSidebar />
      </div>
      <main className="flex-1 p-6">
        {/* Main content goes here */}
        <div className="flex h-full">
          <p>Placeholder</p>
        </div>
      </main>
    </div>
  );
}
