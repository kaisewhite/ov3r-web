"use client";

import { ChevronDown, Globe, Menu, Mic, MoreHorizontal, Plus, Bot, Sparkles, HelpCircle, ChevronLeft } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function AdvisorPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState({
    name: "Tax Sage",
    description: "Expert guidance on tax regulations and optimization",
  });

  const primaryModels = [
    {
      name: "Tax Sage",
      description: "Expert guidance on tax regulations and optimization",
    },
    {
      name: "Jurisdiction Guide",
      description: "Navigate legal matters with confidence",
    },
    {
      name: "Wealth Advisor",
      description: "Strategic financial planning and investment insights",
    },
    {
      name: "Health Navigator",
      description: "Comprehensive healthcare information and guidance",
    },
    {
      name: "Entrepreneur Guide",
      description: "Business strategy and growth consulting",
    },
    {
      name: "Property Advisor",
      description: "Real estate market insights and property guidance",
    },
  ];

  const additionalModels = [
    {
      name: "Scholar Assist",
      description: "Educational resources and academic support",
    },
    {
      name: "Voyage Expert",
      description: "Travel planning and destination insights",
    },
    {
      name: "Tech Consultant",
      description: "Technology solutions and digital transformation",
    },
    {
      name: "Career Compass",
      description: "Professional development and career guidance",
    },
    {
      name: "Wellness Coach",
      description: "Personalized fitness and nutrition advice",
    },
    {
      name: "Home Project Pro",
      description: "Home improvement and renovation guidance",
    }
  ];

  const handleModelSelect = (model: typeof primaryModels[0]) => {
    setSelectedModel(model);
    setIsOpen(false);
  };

  const sidebarItems = [
    { id: 1, text: "Today" },
    { id: 2, text: "Yesterday" },
    { id: 3, text: "Previous 7 Days" },
  ];

  const exampleCards = [
    {
      title: "What We Offer",
      description: "Access specialized AI advisors trained on expert knowledge across multiple domains. Get accurate, nuanced answers to complex questions about taxes, legal matters, and more - all in one platform.",
      icon: Bot,
      examples: [
        "What tax deductions are available for my small business?",
        "Can you explain the legal requirements for starting an LLC?",
        "Help me understand recent changes in data privacy regulations"
      ]
    },
    {
      title: "How It Works",
      description: "Select a specialized advisor from the dropdown, ask your question, and receive domain-specific answers informed by expert knowledge. Our advisors are continually updated to provide the most current and accurate information available.",
      icon: Sparkles,
      examples: [
        "Switch to the tax advisor to analyze my deductions",
        "Use the legal advisor to review my contract",
        "Help me draft a privacy policy that's GDPR compliant"
      ]
    }
  ];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        // Handle send message
        setMessage("");
      }
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-[calc(100vh-7rem)]">
      {/* Left Sidebar */}
      <motion.div
        initial={false}
        animate={{
          width: isSidebarOpen ? 260 : 0,
          opacity: isSidebarOpen ? 1 : 0
        }}
        transition={{ duration: 0.15 }}
        className="bg-[#F7F7F8] border-r border-[#E5E5E5] overflow-hidden fixed left-0 h-full"
      >
        <div className="w-[260px]">
          <div className="flex justify-between items-center p-4">
            <button onClick={() => setIsSidebarOpen(false)}>
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
            <Plus className="h-5 w-5 text-gray-600" />
          </div>

          <AnimatePresence>
            {isSidebarOpen && (
              <>
                {sidebarItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.02, duration: 0.15 }}
                    className="text-[12px] text-[#8E8EA0] font-medium uppercase py-[10px] pl-4"
                  >
                    {item.text}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: sidebarItems.length * 0.02, duration: 0.15 }}
                >
                  <Link 
                    href="/advisor/faq"
                    className="flex items-center gap-2 px-4 py-[10px] hover:bg-neutral-200 text-[12px] text-[#8E8EA0] font-medium uppercase"
                  >
                    <HelpCircle className="h-4 w-4" />
                    FAQ
                  </Link>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <main className="flex-1 bg-white flex flex-col ml-[260px]">
        {/* Header */}
        <div className="h-14 border-b flex items-center px-4">
          {!isSidebarOpen && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-md mr-2"
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 px-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8 pt-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Your Personalized AI Advisor</h1>
              <p className="text-xl text-muted-foreground">
                I can help you make informed decisions across various domains. Select an advisor
                from the dropdown or try one of the example topics below.
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
                        onClick={() => setMessage(example)}
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-lg text-center font-medium text-muted-foreground">
                  What can I help with?
                </h2>

                <div className="relative flex flex-col bg-zinc-800 rounded-xl">
                  <Textarea
                    placeholder="Ask anything"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="min-h-[56px] max-h-[200px] bg-transparent border-0 focus-visible:ring-0 resize-none px-4 pt-4 pb-2 border-none shadow-none text-zinc-100 placeholder:text-zinc-400"
                    rows={1}
                  />

                  <div className="flex items-center gap-2 px-4 pb-3">
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-lg hover:bg-zinc-700 text-zinc-300"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-lg hover:bg-zinc-700 gap-2 text-xs text-zinc-300"
                      >
                        <Globe className="h-4 w-4" />
                        Search
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-lg hover:bg-zinc-700 text-zinc-300"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                          <DropdownMenuItem>Clear conversation</DropdownMenuItem>
                          <DropdownMenuItem>Help & FAQ</DropdownMenuItem>
                          <DropdownMenuItem>Settings</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
