"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconBoxAlignRightFilled,
  IconMessage,
  IconBrain,
  IconUsers,
} from "@tabler/icons-react";
import Image from "next/image";

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] items-center justify-center">
      <div className="flex items-center space-x-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-violet-500 flex items-center justify-center">
              <IconMessage className="h-4 w-4 text-white" />
            </div>
            <div className="text-2xl font-bold">1,234</div>
          </div>
          <div className="text-xs text-neutral-500">Total Conversations</div>
        </div>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] items-center justify-center">
      <div className="flex items-center space-x-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
              <IconBrain className="h-4 w-4 text-white" />
            </div>
            <div className="text-2xl font-bold">156</div>
          </div>
          <div className="text-xs text-neutral-500">Knowledge Base Documents</div>
        </div>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] items-center justify-center">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
              <IconUsers className="h-4 w-4 text-white" />
            </div>
            <div className="text-2xl font-bold">89%</div>
          </div>
          <div className="text-xs text-neutral-500">User Satisfaction</div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
              <IconMessage className="h-4 w-4 text-white" />
            </div>
            <div className="text-2xl font-bold">94%</div>
          </div>
          <div className="text-xs text-neutral-500">Response Rate</div>
        </div>
      </div>
    </div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex-shrink-0" />
        <p className="text-xs text-neutral-500">Recent updates to knowledge base and improved response accuracy...</p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">System performance optimized</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Recent Activity",
    description: <span className="text-sm">Track recent interactions and updates in your project.</span>,
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Conversations",
    description: <span className="text-sm">Monitor your chatbot's conversation metrics.</span>,
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconMessage className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Knowledge Base",
    description: <span className="text-sm">Track your document count and knowledge base health.</span>,
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Performance Metrics",
    description: <span className="text-sm">Monitor key performance indicators and user satisfaction.</span>,
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "System Updates",
    description: <span className="text-sm">Stay informed about recent system improvements and updates.</span>,
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
] as const;

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Project Dashboard</h1>
        <p className="text-sm text-muted-foreground">Monitor your project's performance and recent activities.</p>
      </div>

      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
} 