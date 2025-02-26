"use client";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { FolderKanban, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Comprehend?",
    answer: "Comprehend is a RAG-based system for building custom knowledge bases with AI-powered search and chat capabilities. It enables you to create, manage, and query your organization's knowledge effectively."
  },
  {
    question: "How do I create a new project?",
    answer: "Navigate to the Projects page and click the 'Create Project' button. Fill in the required information such as project name and description, then click 'Create' to set up your new knowledge base."
  },
  {
    question: "What types of documents can I upload?",
    answer: "Comprehend supports various document formats including PDF, DOC/DOCX, TXT, and markdown files. The system processes these documents and makes their content searchable through our AI-powered interface."
  },
  {
    question: "How does the chat interface work?",
    answer: "The chat interface uses advanced AI to understand your questions and provide relevant answers based on your knowledge base. It references your uploaded documents and can provide source citations for its responses."
  },
  {
    question: "Can I customize the AI model settings?",
    answer: "Yes, you can customize various aspects of the AI model including response length, creativity level, and citation preferences through the project settings page."
  }
];

export default function FAQPage() {
  return (
    <div className="flex h-screen">
      <div className="w-64 border-r">
        <Sidebar>
          <SidebarBody>
            <SidebarLink
              className="font-bold flex items-center px-4"
              link={{
                label: "Projects",
                href: "/comprehend/projects",
                icon: <FolderKanban className="h-4 w-4 mr-2 text-neutral-500" />
              }}
            />
            <SidebarLink
              className="font-bold flex items-center px-4"
              link={{
                label: "FAQ",
                href: "/comprehend/faq",
                icon: <HelpCircle className="h-4 w-4 mr-2 text-neutral-500" />
              }}
            />
          </SidebarBody>
        </Sidebar>
      </div>
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-neutral-600 pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
