"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
