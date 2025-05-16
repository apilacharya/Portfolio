"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InteractiveIconProps {
  children: ReactNode;
  className?: string;
  variant?: "teal" | "purple" | "blue" | "pink";
}

export function InteractiveIcon({
  children,
  className,
  variant = "teal",
}: InteractiveIconProps) {
  const gradients = {
    teal: "from-teal-500/20 to-blue-500/20",
    purple: "from-purple-500/20 to-blue-500/20",
    blue: "from-blue-500/20 to-teal-500/20",
    pink: "from-pink-500/20 to-purple-500/20",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative flex h-12 w-12 items-center justify-center rounded-xl",
        "transition-colors duration-300",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-br opacity-50",
          gradients[variant]
        )}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
