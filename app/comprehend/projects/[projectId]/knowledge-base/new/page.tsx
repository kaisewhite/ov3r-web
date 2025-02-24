"use client";

import React from "react";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import {
  Globe,
  FileText,
  List,
  File,
  Type,
  HelpCircle,
  Webhook,
  ChevronRight,
  AlertCircle,
  Plus,
  ArrowLeft,
} from "lucide-react";

const sourceTypes = [
  { id: "website", label: "Website", icon: Globe, description: "Crawl a website's content" },
  { id: "sitemap", label: "Sitemap", icon: List, description: "Import content from a sitemap" },
  { id: "url-list", label: "URL List", icon: FileText, description: "Import content from a list of URLs" },
  { id: "document", label: "Document", icon: File, description: "Upload and process documents" },
  { id: "text", label: "Text", icon: Type, description: "Enter text directly" },
  { id: "faq", label: "FAQ", icon: HelpCircle, description: "Create a FAQ knowledge base" },
  { id: "zoho", label: "Zoho", icon: Webhook, description: "Import content from Zoho" },
];

interface SourceSettings {
  url: string;
  maxDepth: number;
  followExternalLinks: boolean;
  respectRobotsTxt: boolean;
  concurrentRequests: number;
}

const defaultSettings: SourceSettings = {
  url: "",
  maxDepth: 3,
  followExternalLinks: false,
  respectRobotsTxt: true,
  concurrentRequests: 5,
};

export default function NewDataSourcePage() {
  const params = useParams();
  const projectId = params.projectId as string;
  const [step, setStep] = useState<"select" | "configure" | "review">("select");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [settings, setSettings] = useState<SourceSettings>(defaultSettings);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleTypeSelect = (typeId: string) => {
    setSelectedType(typeId);
    setStep("configure");
  };

  const handleBack = () => {
    if (step === "configure") {
      setStep("select");
      setSelectedType(null);
    } else if (step === "review") {
      setStep("configure");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("review");
  };

  return (
    <div className="max-w-[1200px] mx-auto p-8">
      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span className={step === "select" ? "text-primary font-medium" : ""}>
            1. Select Source Type
          </span>
          <ChevronRight className="h-4 w-4" />
          <span className={step === "configure" ? "text-primary font-medium" : ""}>
            2. Configure Settings
          </span>
          <ChevronRight className="h-4 w-4" />
          <span className={step === "review" ? "text-primary font-medium" : ""}>
            3. Review & Create
          </span>
        </div>
        <h1 className="text-2xl font-semibold">
          {step === "select" && "Select a Source Type"}
          {step === "configure" && "Configure Source Settings"}
          {step === "review" && "Review & Create Source"}
        </h1>
      </div>

      {/* Back Button */}
      {step !== "select" && (
        <Button
          variant="ghost"
          className="mb-6"
          onClick={handleBack}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      )}

      {/* Step Content */}
      {step === "select" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sourceTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleTypeSelect(type.id)}
              className="flex flex-col gap-3 p-4 rounded-lg border text-left transition-colors hover:border-primary/50 hover:bg-primary/5"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/10">
                  <type.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-medium">{type.label}</div>
              </div>
              <div className="text-sm text-muted-foreground">
                {type.description}
              </div>
            </button>
          ))}
        </div>
      )}

      {step === "configure" && selectedType === "website" && (
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <div>
              <Label htmlFor="url">Website URL</Label>
              <Input
                id="url"
                placeholder="https://example.com"
                value={settings.url}
                onChange={(e) =>
                  setSettings({ ...settings, url: e.target.value })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <Label>Advanced Settings</Label>
                <span className="text-sm text-muted-foreground">
                  Configure crawling behavior
                </span>
              </div>
              <Switch
                checked={showAdvanced}
                onCheckedChange={setShowAdvanced}
              />
            </div>

            {showAdvanced && (
              <div className="space-y-6 rounded-lg border p-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <Label>Maximum Crawl Depth</Label>
                      <span className="text-sm text-muted-foreground">
                        {settings.maxDepth}
                      </span>
                    </div>
                    <Slider
                      value={[settings.maxDepth]}
                      onValueChange={([value]) =>
                        setSettings({ ...settings, maxDepth: value })
                      }
                      max={10}
                      min={1}
                      step={1}
                      className="mt-2"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <Label>Follow External Links</Label>
                      <span className="text-sm text-muted-foreground">
                        Crawl links to other domains
                      </span>
                    </div>
                    <Switch
                      checked={settings.followExternalLinks}
                      onCheckedChange={(checked) =>
                        setSettings({
                          ...settings,
                          followExternalLinks: checked,
                        })
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <Label>Respect robots.txt</Label>
                      <span className="text-sm text-muted-foreground">
                        Follow website crawling rules
                      </span>
                    </div>
                    <Switch
                      checked={settings.respectRobotsTxt}
                      onCheckedChange={(checked) =>
                        setSettings({
                          ...settings,
                          respectRobotsTxt: checked,
                        })
                      }
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <Label>Concurrent Requests</Label>
                      <span className="text-sm text-muted-foreground">
                        {settings.concurrentRequests}
                      </span>
                    </div>
                    <Slider
                      value={[settings.concurrentRequests]}
                      onValueChange={([value]) =>
                        setSettings({
                          ...settings,
                          concurrentRequests: value,
                        })
                      }
                      max={10}
                      min={1}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Button type="submit" size="lg">
              Next
            </Button>
          </div>
        </form>
      )}

      {step === "review" && selectedType && (
        <div className="max-w-2xl space-y-8">
          <div className="space-y-6">
            <div className="rounded-lg border p-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/10">
                  {(() => {
                    const sourceType = sourceTypes.find(t => t.id === selectedType);
                    if (sourceType) {
                      const Icon = sourceType.icon;
                      return <Icon className="h-5 w-5 text-primary" />;
                    }
                    return null;
                  })()}
                </div>
                <div>
                  <h3 className="font-medium">
                    {sourceTypes.find(t => t.id === selectedType)?.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {sourceTypes.find(t => t.id === selectedType)?.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Settings</h4>
                <div className="space-y-1">
                  <div className="text-sm">
                    <span className="text-muted-foreground">URL:</span>{" "}
                    {settings.url}
                  </div>
                  {showAdvanced && (
                    <>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Max Depth:</span>{" "}
                        {settings.maxDepth}
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Follow External Links:</span>{" "}
                        {settings.followExternalLinks ? "Yes" : "No"}
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Respect robots.txt:</span>{" "}
                        {settings.respectRobotsTxt ? "Yes" : "No"}
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Concurrent Requests:</span>{" "}
                        {settings.concurrentRequests}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => {
                // TODO: Implement API call
                console.log("Creating data source:", {
                  projectId,
                  type: selectedType,
                  settings,
                });
              }}
              size="lg"
            >
              Create Data Source
            </Button>
            <Button
              variant="outline"
              onClick={() => setStep("configure")}
            >
              Edit Settings
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
