"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Command, Globe2, Server, Code2 } from "lucide-react";

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
    <section id="about" className="py-24 px-4 bg-purple-gradient">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto max-w-6xl"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer passionate about creating exceptional digital
            experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div variants={fadeInUp} className="space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-6 bg-purple-gradient-dark">
                <h3 className="text-2xl font-semibold mb-4">Background</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    I&apos;m a Full Stack Developer with expertise in modern web
                    technologies. My journey in web development started with a
                    passion for creating intuitive and efficient digital
                    solutions.
                  </p>
                  <p className="leading-relaxed">
                    I specialize in building fast, responsive, and user-friendly
                    applications using Next.js, React, and Node.js. My
                    experience spans from front-end development to backend
                    architecture and database management.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            <Card className="overflow-hidden h-full">
              <CardContent className="p-6 bg-purple-gradient-dark h-full">
                <h3 className="text-2xl font-semibold mb-4">Experience</h3>
                <ul className="grid gap-3">
                  {[
                    "3+ years of professional development",
                    "Expert in React and Next.js ecosystem",
                    "Strong TypeScript and Node.js background",
                    "MongoDB and PostgreSQL proficiency",
                    "REST API development expertise",
                    "Modern UI/UX implementation",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-soft flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full transition-colors hover:border-purple-soft/50">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 w-fit rounded-xl bg-purple-soft/10 transition-colors group-hover:bg-purple-soft/20">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{skill.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
