"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MDXContentProps {
  children: React.ReactNode;
  className?: string;
}

export function MDXContent({ children, className }: MDXContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "prose prose-zinc dark:prose-invert max-w-none",
        // Headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-semibold",
        // Links
        "prose-a:text-purple-500 prose-a:no-underline hover:prose-a:text-purple-400",
        // Code
        "prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-700",
        "prose-code:text-purple-500 prose-code:bg-zinc-800/20 prose-code:rounded prose-code:px-1 prose-code:py-0.5",
        // Lists
        "prose-li:marker:text-zinc-400",
        // Blockquotes
        "prose-blockquote:border-l-purple-500 prose-blockquote:bg-zinc-800/20 prose-blockquote:py-1",
        // Images
        "prose-img:rounded-lg prose-img:shadow-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
