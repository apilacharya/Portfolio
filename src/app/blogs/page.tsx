import { type Metadata } from "next";
import { BlogGrid } from "@/components/blog/blog-grid";
import { blogPosts } from "@/data/blog";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Apil Raj Acharya",
  description:
    "Articles and insights about web development, React, Next.js, and more.",
  keywords: [
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Full Stack Development",
    "Blog",
  ],
  openGraph: {
    title: "Blog - Apil Raj Acharya",
    description:
      "Articles and insights about web development, React, Next.js, and more.",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Blog - Apil Raj Acharya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Apil Raj Acharya",
    description:
      "Articles and insights about web development, React, Next.js, and more.",
    images: ["/opengraph-image.png"],
  },
};

interface Props {
  searchParams: Promise<{
    page?: string;
    category?: string;
    sort?: string;
    search?: string;
  }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const page = Number((await searchParams).page) || 1;
  const category = (await searchParams).category;
  const sort = (await searchParams).sort as "date" | "title";
  const search = (await searchParams).search;

  // Filter and sort posts
  let filteredPosts = [...blogPosts];

  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.category === category);
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchLower) ||
        post.description.toLowerCase().includes(searchLower)
    );
  }

  if (sort === "title") {
    filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    filteredPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  // Pagination
  const postsPerPage = 6;
  const totalPosts = filteredPosts.length;
  const startIndex = (page - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Blog & Articles
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              Insights and tutorials about web development, best practices, and
              the latest technologies.
            </p>
          </div>
          <Link
            href="/"
            className="group inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        <BlogGrid posts={paginatedPosts} />

        {/* Pagination and Return to Blog Preview */}
        <div className="mt-12 flex flex-col items-center gap-8">
          <div className="flex justify-center gap-2">
            {Array.from(
              { length: Math.ceil(totalPosts / postsPerPage) },
              (_, i) => (
                <Link
                  key={i + 1}
                  href={`/blog?page=${i + 1}${
                    category ? `&category=${category}` : ""
                  }${sort ? `&sort=${sort}` : ""}`}
                  scroll={false}
                >
                  <Button
                    variant={page === i + 1 ? "default" : "outline"}
                    size="sm"
                  >
                    {i + 1}
                  </Button>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
