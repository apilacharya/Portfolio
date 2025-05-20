"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface BlogLayoutProps {
  children?: React.ReactNode;
}

export function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className=" bg-background"
    >
      <div className="container ">
        <div className="py-4">
          <Link
            href="/blogs"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Blog
          </Link>
        </div>
        {children}
      </div>
    </motion.div>
  );
}
