"use client";;
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

export default function WordRotate({
  words,
  duration = 3500,

  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: .5, type:'spring' },
  },

  className
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span className=" mt-2 lg:mt-4  overflow-hidden w-auto text-xl  lg:text-7xl inline-flex text-gray-50 px-5 py-2 lg:py-3 lg:px-14 bg-blue-500 rounded-[1.5rem]">
      <AnimatePresence mode="wait">
        <motion.span key={words[index]} className={cn(className)} {...framerProps}>
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );  
}
