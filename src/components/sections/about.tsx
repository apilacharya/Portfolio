"use client";

import { motion } from "framer-motion";
import { Command, Globe2, Server, Code2, BookOpen } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function About() {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Frontend Development",
      description:
        "Building beautiful, responsive user interfaces with React and Next.js",
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Backend Development",
      description:
        "Creating robust server-side solutions with Node.js and databases",
    },
    {
      icon: <Command className="w-8 h-8 text-primary" />,
      title: "Full Stack Expertise",
      description: "End-to-end development from UI/UX to database architecture",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-primary" />,
      title: "Web Technologies",
      description: "Modern web development with cutting-edge technologies",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-purple-gradient/20" />
      <div className="absolute w-[500px] h-[500px] bg-purple-soft/5 rounded-full blur-3xl -top-40 -right-20 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-purple-soft/5 rounded-full blur-3xl -bottom-40 -left-20 animate-pulse" />

      <div className="container mx-auto max-w-6xl px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="relative mb-20">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-20 h-20 bg-purple-soft/10 rounded-full blur-2xl" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 dark:text-white relative">
              About Me
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-center">
              Full Stack Developer passionate about creating exceptional digital
              experiences
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="mb-20">
            <motion.div
              variants={fadeInUp}
              className="relative max-w-3xl mx-auto"
            >
              <div className="relative z-10 bg-background/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-soft/10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-soft/10">
                    <BookOpen className="h-6 w-6 text-purple-soft" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                      My Journey
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      The path that led me here
                    </p>
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I&apos;m a Full Stack Developer with expertise in modern web
                    technologies. My journey in web development started with a
                    passion for creating intuitive and efficient digital
                    solutions.
                  </p>
                  <p>
                    I specialize in building fast, responsive, and user-friendly
                    applications using Next.js, React, and Node.js. My
                    experience spans from front-end development to backend
                    architecture and database management.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 relative max-w-3xl mx-auto"
            >
              {[
                "3+ years of professional development",
                "Expert in React and Next.js ecosystem",
                "Strong TypeScript and Node.js background",
                "MongoDB and PostgreSQL proficiency",
                "REST API development expertise",
                "Modern UI/UX implementation",
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background/30 backdrop-blur-sm border border-purple-soft/10"
                  whileHover={{ x: 5 }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-soft/10">
                    <svg
                      className="h-4 w-4 text-purple-soft"
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
                  </span>
                  <span className="text-sm text-muted-foreground">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-soft/10 via-transparent to-transparent rounded-2xl blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative h-full p-6 rounded-2xl bg-background/30 backdrop-blur-sm border border-purple-soft/10">
                  <div className="mb-4">
                    <span className="inline-block p-3 rounded-xl bg-purple-soft/10 text-purple-soft transition-colors duration-300 group-hover:bg-purple-soft/20">
                      {skill.icon}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
