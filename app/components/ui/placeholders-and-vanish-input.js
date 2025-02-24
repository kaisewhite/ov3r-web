"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const PlaceholdersAndVanishInput = ({ placeholders, onChange, onSubmit }) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
        setVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [placeholders.length]);

  return (
    <form onSubmit={onSubmit} className='w-full flex justify-center items-center'>
      <div className='relative w-full max-w-2xl'>
        <input
          type='text'
          onChange={onChange}
          className='w-full h-12 px-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:focus:ring-neutral-400'
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 0.5 : 0 }}
          transition={{ duration: 0.5 }}
          className='absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500 dark:text-neutral-400'
        >
          {placeholders[currentPlaceholder]}
        </motion.span>
      </div>
    </form>
  );
};
