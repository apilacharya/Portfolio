"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Vercel"],
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
    <section id="skills" className="py-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto"
      >
        <motion.h2
          variants={categoryVariants}
          className="text-3xl font-bold mb-8 text-center"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {" "}
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={categoryVariants}>
              <Card>
                <CardContent className="p-6">
                  <motion.h3
                    variants={skillVariants}
                    className="text-xl font-semibold mb-4"
                  >
                    {category.title}
                  </motion.h3>

                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-2 gap-2"
                  >
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        variants={skillVariants}
                        whileHover="hover"
                        className="p-2 bg-muted rounded-md text-sm text-center transition-colors hover:bg-muted/80"
                      >
                        {skill}
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
