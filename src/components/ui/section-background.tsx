"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionBackgroundProps {
  className?: string;
  variant?: "purple" | "blue" | "teal" | "pink";
}

export function SectionBackground({
  className,
  variant = "purple",
}: SectionBackgroundProps) {
  const gradients = {
    purple: {
      orb1: "from-purple-500/20 via-blue-500/10 to-transparent",
      orb2: "from-purple-500/10 via-blue-500/5 to-transparent",
      grid: "from-purple-500/2 via-blue-500/2 to-transparent",
    },
    blue: {
      orb1: "from-blue-500/20 via-teal-500/10 to-transparent",
      orb2: "from-blue-500/10 via-teal-500/5 to-transparent",
      grid: "from-blue-500/2 via-teal-500/2 to-transparent",
    },
    teal: {
      orb1: "from-teal-500/20 via-blue-500/10 to-transparent",
      orb2: "from-teal-500/10 via-blue-500/5 to-transparent",
      grid: "from-teal-500/2 via-blue-500/2 to-transparent",
    },
    pink: {
      orb1: "from-pink-500/20 via-purple-500/10 to-transparent",
      orb2: "from-pink-500/10 via-purple-500/5 to-transparent",
      grid: "from-pink-500/2 via-purple-500/2 to-transparent",
    },
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Grid pattern with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-b",
            gradients[variant].grid
          )}
        />
      </div>

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />

      {/* Animated orbs */}
      <motion.div
        className={cn(
          "absolute w-[500px] h-[500px] rounded-full blur-3xl",
          "-top-40 -right-20",
          `bg-gradient-to-br ${gradients[variant].orb1}`
        )}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={cn(
          "absolute w-[500px] h-[500px] rounded-full blur-3xl",
          "-bottom-40 -left-20",
          `bg-gradient-to-tr ${gradients[variant].orb2}`
        )}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
