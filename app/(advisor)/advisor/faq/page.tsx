"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, ChevronLeft, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const primaryModels = [
  {
    name: "Tax Sage",
    description: "Expert guidance on tax regulations and optimization",
  },
  {
    name: "Legal Advisor",
    description: "Legal analysis and compliance guidance",
  },
  {
    name: "Strategy Consultant",
    description: "Business strategy and market analysis",
  },
  {
    name: "Financial Planner",
    description: "Personal and business financial planning",
  },
];

const faqs = [
  {
    question: "What is the Advisor service?",
    answer: "The Advisor service is an AI-powered platform that provides expert guidance across various domains including tax, legal, strategy, and financial planning. It leverages specialized AI models to deliver personalized advice and recommendations."
  },
  {
    question: "How do I choose the right advisor model?",
    answer: "Select the model that best matches your needs from the dropdown menu. Each model is specialized in its domain - Tax Sage for tax matters, Legal Advisor for legal questions, Strategy Consultant for business planning, and Financial Planner for financial advice."
  },
  {
    question: "How accurate is the advice provided?",
    answer: "While our AI models are trained on extensive professional knowledge, the advice provided should be considered as guidance rather than definitive answers. We recommend validating critical decisions with qualified human professionals."
  },
  {
    question: "Can I customize the advisor's responses?",
    answer: "Yes, you can guide the conversation by providing specific context and constraints. The AI will tailor its responses based on your unique situation and requirements."
  },
  {
    question: "Is my conversation data secure?",
    answer: "Yes, all conversations are encrypted and handled with strict privacy measures. We do not store sensitive personal information and you can request data deletion at any time."
  }
];

export default function FAQPage() {
  return (
    <div className="flex h-[calc(100vh-7rem)]">
      {/* Left Sidebar */}
      <motion.div
        initial={false}
        animate={{
          width: 260,
          opacity: 1
        }}
        className="bg-[#F7F7F8] border-r border-[#E5E5E5] overflow-hidden h-full"
      >
        <div className="w-[260px]">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">Models</span>
            </div>
          </div>
          <div className="space-y-2">
            {/* Model Selection */}
            <div className="px-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  {primaryModels.map((model) => (
                    <SelectItem key={model.name} value={model.name}>
                      {model.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* FAQ Link */}
            <div className="px-4">
              <Link 
                href="/advisor"
                className="flex items-center gap-2 p-2 hover:bg-neutral-200 rounded-lg text-sm font-medium"
              >
                <Bot className="h-4 w-4" />
                Chat
              </Link>
              <Link 
                href="/advisor/faq"
                className="flex items-center gap-2 p-2 hover:bg-neutral-200 rounded-lg text-sm font-medium"
              >
                <HelpCircle className="h-4 w-4" />
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <main className="flex-1 bg-white flex flex-col">
        <div className="flex-1 px-6 overflow-y-auto">
          <div className="max-w-3xl mx-auto py-8">
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
      </main>
    </div>
  );
}
