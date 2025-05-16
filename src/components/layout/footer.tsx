"use client";

import { Github, Heart, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-2 px-4 border-t border-purple-soft/10 bg-gradient-to-t from-purple-gradient/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          {/* Social Links */}
          <div className="flex items-center justify-center">
            <motion.a
              href="https://github.com/apilacharya/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted-foreground hover:text-purple-soft transition-colors duration-200 space-x-1.5 px-3 py-1.5 rounded-md hover:bg-purple-soft/5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">View Source</span>
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-[8rem] mx-auto h-px bg-gradient-to-r from-transparent via-purple-soft/20 to-transparent" />

          {/* Credits */}
          <div className="flex flex-col items-center justify-center gap-2 text-sm text-muted-foreground">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-1.5"
            >
              <span>Built with</span>
              <Heart className="w-4 h-4 text-purple-soft" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-purple-soft" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs"
            >
              © {currentYear} Apil Raj Acharya • All Rights Reserved
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
