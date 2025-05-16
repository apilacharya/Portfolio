"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Blocks,
  FileCode2,
  Layers,
  Database,
  Server,
  Gitlab,
  Braces,
  Frame,
  Box,
  Github,
  VideoIcon,
  Cloud,
  Upload,
  PenTool,
  MoveUpRight,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Frame className="w-6 h-6 text-purple-soft/50" />,
    skills: [
      {
        name: "Next.js",
        icon: (
          <MoveUpRight className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:rotate-12" />
        ),
      },
      {
        name: "React",
        icon: (
          <Frame className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:rotate-180" />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <FileCode2 className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:scale-110" />
        ),
      },
      {
        name: "TailwindCSS",
        icon: (
          <PenTool className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:-rotate-12" />
        ),
      },
      {
        name: "Framer Motion",
        icon: (
          <Box className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:scale-110" />
        ),
      },
      {
        name: "HTML/CSS",
        icon: (
          <Code2 className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:translate-x-1" />
        ),
      },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6 text-purple-soft/50" />,
    skills: [
      {
        name: "Node.js",
        icon: (
          <Server className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:scale-110" />
        ),
      },
      {
        name: "Express",
        icon: (
          <Blocks className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:rotate-12" />
        ),
      },
      {
        name: "REST APIs",
        icon: (
          <Layers className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:translate-y-[-2px]" />
        ),
      },
      {
        name: "GraphQL",
        icon: (
          <Braces className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:scale-110" />
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <Database className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:-rotate-12" />
        ),
      },
      {
        name: "PostgreSQL",
        icon: (
          <Database className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:rotate-12" />
        ),
      },
    ],
  },
  {
    title: "Tools & Others",
    icon: <Box className="w-6 h-6 text-purple-soft/50" />,
    skills: [
      {
        name: "Git",
        icon: (
          <Gitlab className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:scale-110" />
        ),
      },
      {
        name: "GitHub",
        icon: (
          <Github className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:rotate-180" />
        ),
      },
      {
        name: "VS Code",
        icon: (
          <VideoIcon className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:translate-x-1" />
        ),
      },
      {
        name: "Docker",
        icon: (
          <Box className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:rotate-45" />
        ),
      },
      {
        name: "AWS",
        icon: (
          <Cloud className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:translate-y-[-2px]" />
        ),
      },
      {
        name: "Vercel",
        icon: (
          <Upload className="w-5 h-5 text-purple-soft group-hover:text-purple-soft/90 transition-transform group-hover:translate-y-[-2px]" />
        ),
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto max-w-6xl"
      >
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            variants={categoryVariants}
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white"
          >
            Skills and Technologies
          </motion.h2>
          <motion.div
            variants={categoryVariants}
            className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-soft to-purple-dark rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={categoryVariants}>
              <Card className="h-full backdrop-blur-sm border border-purple-soft/10 hover:border-purple-soft/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-soft/5 bg-gradient-to-br from-background/80 via-background to-purple-gradient/5">
                <CardContent className="p-6">
                  <motion.h3
                    variants={skillVariants}
                    className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground"
                  >
                    {category.icon}
                    <span>{category.title}</span>
                  </motion.h3>

                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-2 gap-3"
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover="hover"
                        className="flex items-center gap-2 p-2 rounded-lg bg-background/40 hover:bg-purple-soft/10 transition-all duration-300 group backdrop-blur-sm"
                      >
                        {skill.icon}
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-purple-soft transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
