"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, FileText, Globe, List, Plus, Type, Upload } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type DataSourceType = "website" | "sitemap" | "url-list" | "document" | "text";

interface DataSourceOption {
  id: DataSourceType;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DATA_SOURCE_OPTIONS: DataSourceOption[] = [
  {
    id: "website",
    title: "Website",
    description: "Enter a website URL to crawl and index its content",
    icon: Globe,
  },
  {
    id: "sitemap",
    title: "Sitemap",
    description: "Provide a sitemap URL to systematically crawl website content",
    icon: List,
  },
  {
    id: "url-list",
    title: "URL List",
    description: "Enter a list of specific URLs to crawl",
    icon: List,
  },
  {
    id: "document",
    title: "Document",
    description: "Upload documents (PDF, Word, TXT)",
    icon: FileText,
  },
  {
    id: "text",
    title: "Text",
    description: "Enter custom text content directly",
    icon: Type,
  },
];

export function AddDataSourceDialog() {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<DataSourceType | null>(null);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [sitemapUrl, setSitemapUrl] = useState("");
  const [urlList, setUrlList] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [text, setText] = useState("");

  const handleSelectType = (type: DataSourceType) => {
    setSelectedType(type);
  };

  const handleBack = () => {
    setSelectedType(null);
    setWebsiteUrl("");
    setSitemapUrl("");
    setUrlList("");
    setFiles([]);
    setText("");
  };

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setSelectedType(null);
      setWebsiteUrl("");
      setSitemapUrl("");
      setUrlList("");
      setFiles([]);
      setText("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles = selectedFiles.filter(file => {
      const isValidType = ['.pdf', '.txt', '.doc', '.docx', '.pptx'].some(ext => 
        file.name.toLowerCase().endsWith(ext)
      );
      const isValidSize = file.size <= 50 * 1024 * 1024; // 50MB
      return isValidType && isValidSize;
    });
    setFiles(prevFiles => {
      const newFiles = [...prevFiles, ...validFiles];
      return newFiles.slice(0, 10); // Limit to 10 files
    });
  };

  const removeFile = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isValidUrlList = (urls: string) => {
    const urlArray = urls.split(',').map(url => url.trim()).filter(Boolean);
    return urlArray.length > 0 && urlArray.length <= 2000 && urlArray.every(isValidUrl);
  };

  const canContinue = () => {
    switch (selectedType) {
      case "website":
        return isValidUrl(websiteUrl);
      case "sitemap":
        return isValidUrl(sitemapUrl);
      case "url-list":
        return isValidUrlList(urlList);
      case "document":
        return files.length > 0;
      case "text":
        return text.trim().length > 0;
      default:
        return false;
    }
  };

  const renderTypeSpecificContent = () => {
    switch (selectedType) {
      case "website":
        return (
          <div className="space-y-4 pt-4">
            <div>
              <p className="text-sm text-gray-600">
                Enter the URL of a website to crawl. The crawler will fetch all the pages on your website.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Note: maximum number of pages that can be crawled is 1,000. If there are more pages, use the Sitemap or URL List options.
              </p>
            </div>
            <div className="pt-2">
              <Input
                id="website-url"
                placeholder="https://example.com"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="font-mono"
              />
            </div>
          </div>
        );
      case "sitemap":
        return (
          <div className="space-y-4 pt-4">
            <div>
              <p className="text-sm text-gray-600">
                Enter a sitemap URL. The crawler will visit all the URLs listed in the sitemap and ingest their content to train the chatbot.
              </p>
            </div>
            <div className="pt-2">
              <Input
                id="sitemap-url"
                placeholder="https://example.com/sitemap.xml"
                value={sitemapUrl}
                onChange={(e) => setSitemapUrl(e.target.value)}
                className="font-mono"
              />
            </div>
          </div>
        );
      case "url-list":
        return (
          <div className="space-y-4 pt-4">
            <div>
              <p className="text-sm text-gray-600">
                Enter a list of URLs to add (separated by commas, max 2,000 links)
              </p>
            </div>
            <div className="pt-2">
              <Textarea
                id="url-list"
                placeholder="https://example.com/page1,&#10;https://example.com/page2,&#10;https://example.com/page3"
                value={urlList}
                onChange={(e) => setUrlList(e.target.value)}
                className="font-mono min-h-[200px]"
              />
            </div>
          </div>
        );
      case "document":
        return (
          <div className="space-y-4 pt-4">
            <div>
              <p className="text-sm text-gray-600">
                Upload and train the chatbot on your documents.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Supported files: PDF, TXT, Microsoft Word, PPTX<br />
                Max. 10 files at a time<br />
                File size: 50MB
              </p>
            </div>
            <div className="pt-2">
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  multiple
                  onChange={handleFileChange}
                  accept=".pdf,.txt,.doc,.docx,.pptx"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center gap-2"
                >
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    Drop files here or click to upload
                  </span>
                </label>
              </div>
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <span className="text-sm text-gray-600 truncate">{file.name}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      case "text":
        return (
          <div className="space-y-4 pt-4">
            <div>
              <p className="text-sm text-gray-600">
                Enter the text that you want to train the chatbot on. Ideally, this would be the information you want the chatbot to learn, which may not be available via other sources such as your website.
              </p>
            </div>
            <div className="pt-2">
              <Textarea
                id="training-text"
                placeholder="Enter your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[300px]"
              />
            </div>
          </div>
        );
      default:
        return (
          <div className="pt-4">
            <p className="text-gray-600">Configuration for {selectedType} will go here.</p>
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-1">
          <Plus className="h-4 w-4" />
          Add Data Source
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {selectedType === "website" ? "Website URL" : 
             selectedType === "sitemap" ? "Sitemap URL" : 
             selectedType === "url-list" ? "URL List" : 
             selectedType === "document" ? "Documents" : 
             selectedType === "text" ? "Text" :
             "Add Data Source"}
          </DialogTitle>
        </DialogHeader>

        {!selectedType ? (
          // Step 1: Data Source Type Selection
          <div className="grid grid-cols-2 gap-4 pt-4">
            {DATA_SOURCE_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <Card
                  key={option.id}
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => handleSelectType(option.id)}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-gray-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-gray-900">{option.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          // Step 2: Type-Specific Configuration
          renderTypeSpecificContent()
        )}

        <div className="flex justify-end gap-3 mt-6">
          {selectedType ? (
            <>
              <Button variant="outline" onClick={handleBack} className="gap-1">
                <ChevronLeft className="h-4 w-4" />
                Back
              </Button>
              <Button disabled={!canContinue()}>Continue</Button>
            </>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
