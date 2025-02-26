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
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Left Sidebar */}
      <div className="w-80 border-r bg-gray-50 p-4 flex flex-col">
        <h2 className="font-semibold mb-4">Model</h2>
        <div className="space-y-2">
          {models.map((model) => (
            <div
              key={model.name}
              className={cn(
                "p-3 rounded-lg cursor-pointer hover:bg-gray-100",
                model.selected && "bg-gray-100"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{model.name}</span>
                {model.beta && (
                  <Badge variant="secondary" className="text-xs">
                    BETA
                  </Badge>
                )}
                {model.selected && (
                  <svg
                    className="h-4 w-4 text-blue-600"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">{model.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-100 rounded-lg mt-2">
          <span className="font-medium">More models</span>
          <ChevronRight className="h-4 w-4" />
        </div>
        <div className="mt-4 p-3 flex items-center justify-between">
          <span className="font-medium">Temporary chat</span>
          <Switch />
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b p-4">
          <div className="max-w-4xl mx-auto relative flex items-center justify-center">
            <div className="absolute left-0">
              <div className="w-8" /> {/* Spacer to balance the right icon */}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  ChatGPT 4o
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {models.map((model) => (
                  <DropdownMenuItem key={model.name}>
                    {model.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="absolute right-0">
              <UserCircle2 className="h-8 w-8 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex-1 overflow-auto p-4">
          <div className="h-full flex items-center justify-center text-gray-500">
            What can I help with?
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t p-4">
          <div className="flex items-center gap-2 mb-4">
            <Button variant="ghost" size="sm">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="sm">
              Deep research
            </Button>
            <div className="flex-1" />
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <Input
              placeholder="Ask anything"
              className="pr-10"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 mt-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Create image
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Text className="h-4 w-4" />
              Summarize text
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ListTodo className="h-4 w-4" />
              Make a plan
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Brainstorm
            </Button>
            <Button variant="outline" size="sm">
              More
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex items-center justify-between text-sm text-gray-500">
          <span>ChatGPT can make mistakes. Check important info.</span>
          <Button variant="ghost" size="sm">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
