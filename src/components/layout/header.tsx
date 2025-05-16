"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="relative group flex items-center">
            <span className="text-xl font-bold tracking-wider">
              A<span className="text-purple-soft">R</span>A
            </span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-purple-soft transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="relative"
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "relative font-medium transition-all duration-300 px-4",
                    activeSection === item.href.slice(1)
                      ? "bg-purple-500/10 text-purple-500 dark:bg-purple-400/20 dark:text-purple-400"
                      : "text-foreground hover:text-purple-500 dark:hover:text-purple-400",
                    "hover:bg-purple-500/10 dark:hover:bg-purple-400/20"
                  )}
                >
                  {item.label}
                  <motion.span
                    className={cn(
                      "absolute -bottom-[2px] left-0 right-0 h-[2px]",
                      activeSection === item.href.slice(1)
                        ? "bg-purple-500 dark:bg-purple-400"
                        : "bg-purple-500/50 dark:bg-purple-400/50"
                    )}
                    initial={false}
                    animate={{
                      width:
                        activeSection === item.href.slice(1) ? "100%" : "0%",
                      opacity: activeSection === item.href.slice(1) ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  />
                </Button>
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-purple-soft/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 border-b bg-background/95 backdrop-blur-md md:hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start font-medium transition-all duration-300",
                      "hover:bg-purple-500/10 hover:text-purple-500 hover:translate-x-1",
                      "dark:hover:bg-purple-400/20 dark:hover:text-purple-400",
                      activeSection === item.href.slice(1)
                        ? "bg-purple-500/10 text-purple-500 dark:bg-purple-400/20 dark:text-purple-400"
                        : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
