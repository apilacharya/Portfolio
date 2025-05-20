import { type BlogPost } from '@/types/blog'

export const BLOG_CATEGORIES = [
  'Web Development',
  'React',
  'Next.js',
  'TypeScript',
  'Backend',
  'DevOps',
  'Career'
] as const

export type BlogCategory = typeof BLOG_CATEGORIES[number]

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-responsive-websites-with-tailwind',
    title: 'Building Responsive Websites with Tailwind CSS',
    description: 'Learn how to create beautiful, responsive websites using Tailwind CSS with practical examples and best practices.',
    date: '2024-05-19',
    category: 'Web Development',
    image: '/blog/project1.png',
    author: {
      name: 'Apil Raj Acharya',
      avatar: '/project1.png',
      bio: 'Full Stack Developer'
    }
  },
  {
    slug: 'nextjs-app-router-guide',
    title: 'Complete Guide to Next.js App Router',
    description: 'Explore the new App Router in Next.js 13+ and learn how to build modern web applications with server components.',
    date: '2024-05-15',
    category: 'Next.js',
    image: '/blog/project2.png',
    author: {
      name: 'Apil Raj Acharya',
      avatar: '/project1.png',
      bio: 'Full Stack Developer'
    }
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for 2025',
    description: 'Learn the latest TypeScript best practices and patterns to write more maintainable and type-safe code.',
    date: '2025-01-10',
    category: 'TypeScript',
    image: '/blog/project3.png',
    author: {
      name: 'Apil Raj Acharya',
      avatar: '/project1.png',
      bio: 'Full Stack Developer'
    }
  }
]
