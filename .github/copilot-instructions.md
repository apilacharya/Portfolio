Portfolio website

## Project Overview

This is Apil Acharya's portfolio website, built using Next.js 15, TypeScript, TailwindCSS and Shadcn. The website showcases my skills, projects, and experience in a fullstack web development. It serves as a personal branding tool to attract potential employers and clients.
The website is fully responsive, ensuring a seamless experience across devices. It utilizes modern web technologies and best practices to deliver a fast and engaging user experience.
My expertise in fullstack web development includes Nextjs, React, Nodejs,TailwindCSS, TypeScript, Express, MongoDB, and PostgreSQL. 

The webside is minimalisitc with modern theme system.

## Required Sections in Portfolio Site
1. **About**: A detailed description of my background, skills, and experience.
2. **Projects**: A showcase of my projects with links to live demos and source code.
3. **Blog**: A section for sharing articles, tutorials, and insights related to web development.
3. **Skills**: A list of my technical skills and proficiencies.
4. **Contact**: A contact form for potential clients or employers to reach out to me.

## Folder structure:

```
/public/        # Static assets
/src/
    /app/            # Next.js app directory with pages setup
    /api/         # API routes
    /components/  # Reusable components
    /styles/      # Global styles
    /lib/           # Utility functions
    /hooks/         # Custom hooks
    /lib/           # External libraries and configurations
    /data/          # Static data and content

```

# Technologies used:

- Nextjs
- Tailwind css
- Shadcn/ui
- TypeScript
- Vercel as deployment
- Motion/react for animations (https://www.framer.com/docs/motion/)

## Key Features

- Responsive design for mobile and desktop
- Dark mode support using next-themes
- Interactive components using shadcn/ui
- Animation using motion/react


## ROLE

You are assisting in the development of Apil Acharya's portfolio website built using Next.js and TailwindCSS. Your role is to provide guidance and suggestions for implementing features, fixing bugs, and improving the overall quality of the codebase. You will also help in writing tests, ensuring best practices are followed, and maintaining a clean and organized code structure.

## TECH STACK

- Next.js 15 & React 19
- App Router with Server Components by default
- TypeScript with strict mode
- Tailwind CSS with shadcn/ui
- `motion/react` for animations
- Vercel for deployment
- Use pnpm for package management
- Use `lucide-react` for icons

## KEY ARCHITECTURAL PRINCIPLES

1. Component Architecture:

- Use React Server Components (RSC) by default
- Add 'use client' directive only for interactive components
- Follow component composition over inheritance
- Implement proper TypeScript types for all props and functions
- Reserve function declarations for utilities and helpers
- If the component is too large, break it down into smaller components by creating a new file for each component
- Group similar components together in a folder inside `src/components`
- Ensure components are reusable and maintainable and make components smaller and generic
- avoid using unnecessary colors pallete and use only black and white with some color accents

2. Performance:

- Leverage React Suspense boundaries
- Implement streaming where appropriate
- Use proper image optimization
- Follow proper caching strategies
- Implement proper loading states

3. Styling:

- Use Tailwind's utility-first approach
- Follow mobile-first responsive design
- Implement dark mode using next-themes
- Use shadcn/ui components consistently
- Use `motion/react` for animations and try to animate consistently

## MISCELLANEOUS

When implementing features:

1. Start with Server Components
2. Add client interactivity only when needed
3. Ensure proper TypeScript types
4. Validate all inputs
5. Handle loading and error states
6. Follow mobile-first design
7. Implement proper tests
8. Use proper TypeScript types for all functions and props and avoid use of `any` type
9. Never use `use client` on `page.tsx` files and avoid using `framer-motion` on `page.tsx` files
10. Please make sure SEO and performance are top-notch since its high ranking portfolio website
11. For blog section use `mdx` format and use `@next/mdx` package for parsing mdx files. The blog section shall have card view with image, title, short description and date with read more for each blog where user can click and read the full blog. If multiple card of blog is in blog section then use `react-slick` for slider. The blog section shall be responsive and mobile friendly. The blog section shall have a search bar to search the blogs. The blog section shall have a filter to filter the blogs by category. The blog section shall have a pagination to paginate the blogs. The blog section shall have a sort by date and title
