"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Loader2,
  SendIcon,
  CheckCircle,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { socials } from "@/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    toast.success("Email copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await toast.promise(
        // Simulate API call
        new Promise((resolve) => setTimeout(resolve, 2000)),
        {
          loading: "Sending message...",
          success: "Message sent successfully!",
          error: "Failed to send message. Please try again.",
        }
      );

      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-18 px-4 bg-gradient-to-b from-background to-purple-gradient/20"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s collaborate and build something
            amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeInUp}
            className="lg:sticky lg:top-24 space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-soft/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative space-y-6">
                <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white">
                  Quick Connect
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="p-4 rounded-xl bg-white/5 dark:bg-zinc-800/50 backdrop-blur-sm border border-purple-soft/10 hover:border-purple-soft/20 transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 text-zinc-700 dark:text-zinc-200 group-hover:text-purple-soft transition-colors" />
                  </motion.a>
                  <motion.a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="p-4 rounded-xl bg-white/5 dark:bg-zinc-800/50 backdrop-blur-sm border border-purple-soft/10 hover:border-purple-soft/20 transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-zinc-700 dark:text-zinc-200 group-hover:text-purple-soft transition-colors" />
                  </motion.a>
                  <motion.button
                    onClick={handleCopyEmail}
                    whileHover={{ y: -2 }}
                    className="p-4 rounded-xl bg-white/5 dark:bg-zinc-800/50 backdrop-blur-sm border border-purple-soft/10 hover:border-purple-soft/20 transition-all duration-300 group"
                  >
                    {copied ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <Mail className="w-6 h-6 text-zinc-700 dark:text-zinc-200 group-hover:text-purple-soft transition-colors" />
                    )}
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl overflow-hidden border border-purple-soft/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-soft/10 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-zinc-50/80 dark:bg-zinc-900/50 backdrop-blur-sm" />
              <div className="relative space-y-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  Why Work With Me?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-purple-soft/10 mt-1">
                      <svg
                        className="w-4 h-4 text-purple-soft"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Expertise in modern web technologies and best practices
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-purple-soft/10 mt-1">
                      <svg
                        className="w-4 h-4 text-purple-soft"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Strong focus on performance and user experience
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-purple-soft/10 mt-1">
                      <svg
                        className="w-4 h-4 text-purple-soft"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Collaborative approach with clear communication
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden border-purple-soft/10 backdrop-blur-sm bg-white/5 dark:bg-zinc-900/5">
              <CardHeader className="space-y-4 pb-6">
                <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Let&apos;s Build Something Together
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Share your vision and I&apos;ll get back to you within 24
                  hours to discuss how we can collaborate
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative group">
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder=""
                        required
                        className="bg-background/40 hover:bg-background/60 focus:bg-background/80 transition-all duration-300 h-14 pl-4 border-purple-soft/20 focus:border-purple-soft"
                      />
                      <label
                        htmlFor="name"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          formState.name
                            ? "top-2 text-xs text-purple-soft"
                            : "top-4 text-base text-muted-foreground group-hover:text-purple-soft/70"
                        }`}
                      >
                        Name
                      </label>
                    </div>

                    <div className="relative group">
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder=""
                        required
                        className="bg-background/40 hover:bg-background/60 focus:bg-background/80 transition-all duration-300 h-14 pl-4 border-purple-soft/20 focus:border-purple-soft"
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          formState.email
                            ? "top-2 text-xs text-purple-soft"
                            : "top-4 text-base text-muted-foreground group-hover:text-purple-soft/70"
                        }`}
                      >
                        Email
                      </label>
                    </div>

                    <div className="relative group">
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder=""
                        required
                        className="min-h-[150px] bg-background/40 hover:bg-background/60 focus:bg-background/80 transition-all duration-300 pt-6 pl-4 resize-none border-purple-soft/20 focus:border-purple-soft"
                      />
                      <label
                        htmlFor="message"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          formState.message
                            ? "top-2 text-xs text-purple-soft"
                            : "top-4 text-base text-muted-foreground group-hover:text-purple-soft/70"
                        }`}
                      >
                        Message
                      </label>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-soft to-purple-dark rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                    <Button
                      type="submit"
                      size="lg"
                      className="relative w-full bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 group overflow-hidden"
                      disabled={isSubmitting}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-soft to-purple-dark opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                      <span className="relative flex items-center justify-center font-medium text-base">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <SendIcon className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1 duration-300" />
                            Send Message
                          </>
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
