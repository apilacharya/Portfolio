import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { BlogPreview } from "@/components/sections/blog-preview";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <BlogPreview />
      <Contact />
    </main>
  );
}
