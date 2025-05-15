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
  ArrowRight,
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

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-purple-gradient">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start a project or just want to chat? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div variants={fadeInUp} className="space-y-8">
            <Card className="overflow-hidden border-none bg-purple-gradient-dark">
              <CardHeader className="space-y-6 pb-6">
                <CardTitle className="text-2xl">Let&apos;s Connect</CardTitle>
                <CardDescription className="text-base">
                  Choose your preferred way to get in touch
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <motion.a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center p-4 rounded-lg bg-background/40 backdrop-blur-sm hover:bg-background/60 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-3" />
                    <span className="flex-1">Follow on GitHub</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </motion.a>

                  <motion.a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center p-4 rounded-lg bg-background/40 backdrop-blur-sm hover:bg-background/60 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-3" />
                    <span className="flex-1">Connect on LinkedIn</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </motion.a>

                  <motion.button
                    onClick={handleCopyEmail}
                    whileHover={{ x: 5 }}
                    className="flex items-center p-4 rounded-lg bg-background/40 backdrop-blur-sm hover:bg-background/60 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    <span className="flex-1">
                      {copied ? "Email copied!" : "Copy email address"}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </motion.button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="overflow-hidden border-purple-soft/10">
              <CardHeader className="space-y-6 pb-6">
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  I&apos;ll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-purple-gradient"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                      className="bg-purple-gradient"
                    />
                    <Textarea
                      name="message"
                      placeholder="Your message"
                      required
                      className="min-h-[150px] bg-purple-gradient"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full group bg-purple-soft hover:bg-purple-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <SendIcon className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
