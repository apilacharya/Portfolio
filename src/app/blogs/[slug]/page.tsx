import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXContent } from "@/components/blog/mdx-content";
import { BlogLayout } from "@/components/blog/blog-layout";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Apil Raj Acharya's Blog`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  // Read MDX file
  const mdxFilePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  let mdxSource;

  try {
    const fileContent = await fs.readFile(mdxFilePath, "utf-8");
    const { content } = matter(fileContent);
    const { content: compiledContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: true },
    });
    mdxSource = compiledContent;
  } catch (error) {
    console.error("Error reading MDX file:", error);
    mdxSource = "Content not available.";
  }

  return (
    <article className="py-24 relative">
      
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto">
        <BlogLayout></BlogLayout>

          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <time>{new Date(post.date).toLocaleDateString()}</time>
              <span>•</span>
              <span>{post.category}</span>
            </div>
          </div>

          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <MDXContent>{mdxSource}</MDXContent>
        </div>
      </div>
    </article>
  );
}
