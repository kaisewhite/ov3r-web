"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Scale, Search } from "lucide-react";

const categories = [
  {
    id: "taxes",
    title: "Taxes",
    icon: FileText,
  },
  {
    id: "legislation",
    title: "Legislation",
    icon: Scale,
  },
];

export function BotSidebar() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="p-4 space-y-4">
        <div className="flex items-center space-x-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search bots..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8"
          />
        </div>
      </div>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Categories
        </h2>
        <div className="space-y-1">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.icon className="mr-2 h-4 w-4" />
              {category.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
