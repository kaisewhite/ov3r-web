"use client";

import { WobbleCard } from "@/app/components/ui/wobble-card";
import { IconBrain, IconDatabase, IconMessageChatbot, IconSearch } from "@tabler/icons-react";
import Link from "next/link";

export default function ComprehendWelcomePage() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full'>
      <WobbleCard containerClassName='col-span-1 lg:col-span-2 h-full bg-neutral-900 min-h-[500px] lg:min-h-[300px]'>
        <div className='max-w-lg relative z-10'>
          <h2 className='text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            Welcome to Comprehend: Your AI-Powered Knowledge Hub
          </h2>
          <p className='mt-4 text-left text-base/6 text-neutral-300'>
            Transform your documents into intelligent, searchable knowledge bases with our advanced Retrieval-Augmented Generation (RAG) system.
          </p>
          <Link
            href='/comprehend/projects'
            className='mt-6 inline-flex items-center px-4 py-2 border border-neutral-600 text-sm font-medium rounded-md text-white bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500'
          >
            Create Your First Project
          </Link>
        </div>
        <div className='absolute bottom-8 right-8 flex gap-4'>
          <IconBrain className='w-12 h-12 text-neutral-500 opacity-50' />
          <IconDatabase className='w-12 h-12 text-neutral-500 opacity-50' />
          <IconSearch className='w-12 h-12 text-neutral-500 opacity-50' />
        </div>
      </WobbleCard>

      <WobbleCard containerClassName='col-span-1 min-h-[300px] bg-neutral-800'>
        <h2 className='max-w-80 text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white'>
          Intelligent Document Processing
        </h2>
        <p className='mt-4 max-w-[26rem] text-left text-base/6 text-neutral-300'>
          Upload PDFs, Word docs, and more. Our AI automatically processes and indexes your content for instant retrieval.
        </p>
        <IconDatabase className='absolute bottom-8 right-8 w-12 h-12 text-neutral-500 opacity-50' />
      </WobbleCard>

      <WobbleCard containerClassName='col-span-1 lg:col-span-3 bg-black min-h-[500px] lg:min-h-[300px]'>
        <div className='max-w-lg relative z-10'>
          <h2 className='text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            AI-Powered Conversations with Your Data
          </h2>
          <p className='mt-4 max-w-[26rem] text-left text-base/6 text-neutral-300'>
            Ask questions in natural language and get accurate answers backed by your documents. Perfect for research, customer support, and knowledge
            management.
          </p>
        </div>
        <div className='absolute bottom-8 right-8 flex gap-4'>
          <IconMessageChatbot className='w-16 h-16 text-neutral-500 opacity-50' />
        </div>
      </WobbleCard>

      <WobbleCard containerClassName='col-span-1 lg:col-span-2 bg-neutral-800 min-h-[300px]'>
        <h2 className='max-w-80 text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white'>
          Custom Knowledge Bases
        </h2>
        <p className='mt-4 max-w-[26rem] text-left text-base/6 text-neutral-300'>
          Create specialized knowledge bases for different use cases: legal research, technical documentation, market analysis, and more.
        </p>
        <div className='absolute bottom-8 right-8 flex gap-4'>
          <IconSearch className='w-12 h-12 text-neutral-500 opacity-50' />
        </div>
      </WobbleCard>

      <WobbleCard containerClassName='col-span-1 min-h-[300px] bg-neutral-900'>
        <h2 className='max-w-80 text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white'>Start Building Now</h2>
        <p className='mt-4 max-w-[26rem] text-left text-base/6 text-neutral-300'>
          Ready to transform your documents into an intelligent knowledge base? Create your first project in minutes.
        </p>
        <Link
          href='/comprehend/projects/new'
          className='mt-6 inline-flex items-center px-4 py-2 border border-neutral-600 text-sm font-medium rounded-md text-black bg-white hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500'
        >
          Get Started
        </Link>
      </WobbleCard>
    </div>
  );
}
