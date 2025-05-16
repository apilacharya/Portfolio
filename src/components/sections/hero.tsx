"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SectionBackground } from "@/components/ui/section-background";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = 80; // Account for fixed header
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4 relative overflow-hidden">
      <SectionBackground variant="purple" />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute hidden lg:block"
        animate={{
          x: [-20, 20, -20],
          y: [-15, 15, -15],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          top: "25%",
          left: "15%",
        }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-xl" />
      </motion.div>

      <motion.div
        className="absolute hidden lg:block"
        animate={{
          x: [20, -20, 20],
          y: [15, -15, 15],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          top: "30%",
          right: "15%",
        }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl" />
      </motion.div>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="text-center space-y-10 relative"
      >
        <motion.h1
          variants={fadeUpVariants}
          className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/80 pb-1"
        >
          Hi, I&apos;m Apil Raj Acharya
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto"
        >
          Specializing in building exceptional digital experiences with Next.js,
          React, and Node.js
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          className="flex justify-center gap-4"
        >
          <Link
            href="https://docs.google.com/document/d/12TyXHFWljq-8g4W1pI0iMLhBuOi5KF0WIncih4WJgAY/edit?usp=sharing"
            target="_blank"
          >
            <Button className="transition-transform hover:scale-105">
              View Resume
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
          className="absolute left-1/2 -translate-x-1/2 cursor-pointer text-muted-foreground hover:text-muted-foreground/80 transition-colors"
          onClick={scrollToAbout}
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
