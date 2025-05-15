"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="text-center space-y-6"
      >
        <motion.h1
          variants={fadeUpVariants}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Hi, I&apos;m Apil Raj Acharya
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto"
        >
          Full Stack Developer specializing in building exceptional digital
          experiences with Next.js, React, and Node.js
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          className="flex justify-center gap-4"
        >
          <Link href="#projects">
            <Button className="transition-transform hover:scale-105">
              View Projects
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              variant="outline"
              className="transition-transform hover:scale-105"
            >
              Contact Me
            </Button>
          </Link>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="pt-8"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
