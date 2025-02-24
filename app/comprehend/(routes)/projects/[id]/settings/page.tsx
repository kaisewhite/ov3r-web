"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { IconBrain, IconClock, IconLanguage } from "@tabler/icons-react";

interface SettingsSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  fields: {
    id: string;
    label: string;
    type: "text" | "select" | "toggle";
    value: string | boolean;
    options?: string[];
    description?: string;
  }[];
}

const settingsSections: SettingsSection[] = [
  {
    id: "general",
    title: "General Settings",
    description: "Configure basic project settings and preferences.",
    icon: <IconBrain className="w-5 h-5" />,
    fields: [
      {
        id: "projectName",
        label: "Project Name",
        type: "text",
        value: "Legal Research Assistant",
        description: "The name of your project as it appears throughout the interface.",
      },
      {
        id: "language",
        label: "Primary Language",
        type: "select",
        value: "en",
        options: ["en", "es", "fr", "de"],
        description: "The primary language for AI interactions and responses.",
      },
    ],
  },
  {
    id: "ai",
    title: "AI Configuration",
    description: "Customize AI behavior and response settings.",
    icon: <IconClock className="w-5 h-5" />,
    fields: [
      {
        id: "responseLength",
        label: "Maximum Response Length",
        type: "select",
        value: "medium",
        options: ["short", "medium", "long"],
        description: "Control the length of AI-generated responses.",
      },
      {
        id: "streamResponse",
        label: "Stream Responses",
        type: "toggle",
        value: true,
        description: "Enable real-time streaming of AI responses.",
      },
    ],
  },
  {
    id: "localization",
    title: "Localization",
    description: "Configure language and region-specific settings.",
    icon: <IconLanguage className="w-5 h-5" />,
    fields: [
      {
        id: "timezone",
        label: "Timezone",
        type: "select",
        value: "UTC",
        options: ["UTC", "EST", "PST", "GMT"],
        description: "Set the timezone for timestamps and scheduling.",
      },
      {
        id: "dateFormat",
        label: "Date Format",
        type: "select",
        value: "MM/DD/YYYY",
        options: ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD"],
        description: "Choose how dates are displayed throughout the project.",
      },
    ],
  },
];

export default function SettingsPage() {
  const params = useParams();
  const [settings, setSettings] = useState(settingsSections);

  const handleInputChange = (sectionId: string, fieldId: string, value: string | boolean) => {
    setSettings(prev =>
      prev.map(section =>
        section.id === sectionId
          ? {
              ...section,
              fields: section.fields.map(field =>
                field.id === fieldId ? { ...field, value } : field
              ),
            }
          : section
      )
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Project Settings</h1>
        <p className="text-sm text-muted-foreground">
          Configure your project settings and preferences.
        </p>
      </div>

      <div className="space-y-10">
        {settings.map(section => (
          <div key={section.id} className="space-y-6">
            <div className="flex items-center gap-2">
              {section.icon}
              <div>
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {section.fields.map(field => (
                <div key={field.id} className="grid gap-2">
                  <label htmlFor={field.id} className="text-sm font-medium leading-none">
                    {field.label}
                  </label>
                  {field.type === "text" && (
                    <input
                      type="text"
                      id={field.id}
                      value={field.value as string}
                      onChange={(e) => handleInputChange(section.id, field.id, e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  )}
                  {field.type === "select" && (
                    <select
                      id={field.id}
                      value={field.value as string}
                      onChange={(e) => handleInputChange(section.id, field.id, e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {field.options?.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  {field.type === "toggle" && (
                    <button
                      type="button"
                      role="switch"
                      aria-checked={field.value as boolean}
                      onClick={() => handleInputChange(section.id, field.id, !(field.value as boolean))}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                        field.value ? "bg-primary" : "bg-input"
                      }`}
                    >
                      <span
                        className={`${
                          field.value ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-background transition-transform`}
                      />
                    </button>
                  )}
                  {field.description && (
                    <p className="text-xs text-muted-foreground">{field.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 