"use client";

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
    <div className="min-h-[calc(100vh-7rem)] bg-white">
      <div className="max-w-4xl w-full px-6 mx-auto pt-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
          <Accordion type="single" collapsible className="space-y-4 text-left">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="p-2">
                <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-neutral-600 pt-2 text-left">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
