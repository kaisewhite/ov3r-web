"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  ChevronDown,
  ChevronRight,
  Image,
  Lightbulb,
  ListTodo,
  Mic,
  MoreHorizontal,
  Plus,
  Search,
  Text,
  UserCircle2,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function SpecializedBotsPage() {
  const router = useRouter();

  const models = [
    {
      name: "GPT-4o",
      description: "Great for most questions",
      selected: true,
    },
    {
      name: "GPT-4o with scheduled tasks",
      description: "Ask ChatGPT to follow up later",
      beta: true,
    },
    {
      name: "o1",
      description: "Uses advanced reasoning",
    },
    {
      name: "o3-mini",
      description: "Fast at advanced reasoning",
    },
    {
      name: "o3-mini-high",
      description: "Great at coding and logic",
    },
  ];

  return (
    <div className="flex h-[calc(100vh-7rem)]">

      {/* Main Chat Area */}
      <main className="flex-1 p-6">
        <div className="flex h-full">
          <p className="font-bold">Placeholder</p>
        </div>
      </main>
    </div>
  );
}
