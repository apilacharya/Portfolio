# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and TailwindCSS. This portfolio showcases my skills, projects, and experience in fullstack web development.

## 🌟 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and TailwindCSS
- **Server Components**: Leverages React Server Components (RSC) for optimal performance
- **Dark Mode**: Seamless theme switching with next-themes
- **Responsive Design**: Mobile-first approach ensuring perfect display across all devices
- **Blog Section**: MDX-powered blog with search, filtering, and pagination
- **Interactive UI**: Smooth animations with Framer Motion
- **UI Components**: Beautiful, accessible components using shadcn/ui
- **Type Safety**: Full TypeScript support with strict mode enabled
- **Performance Optimized**: Built with performance best practices

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [MDX](https://mdxjs.com/)
- [pnpm](https://pnpm.io/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env.local` file:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
pnpm dev
```

Visit `http://localhost:3000` to see the site.

## 📁 Project Structure

```
/public/        # Static assets
/src/
    /app/         # Next.js app directory with pages
    /api/         # API routes
    /components/  # Reusable components
    /styles/      # Global styles
    /lib/         # Utility functions
    /hooks/       # Custom hooks
    /data/        # Static data and content
    /content/     # MDX blog posts
```

## 📝 Blog System

The blog system uses MDX for content management:

- Write blog posts in MDX format in `/content/blog/`
- Add blog images in `/public/blog/`
- Support for code syntax highlighting
- Automatic table of contents generation
- Category-based filtering
- Search functionality
- Responsive image optimization

## 🎨 Customization

### Theme

Modify the theme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Your custom colors
    }
  }
}
```

### Components

Custom components are built using shadcn/ui and can be modified in `/src/components/ui/`.

## 📱 Performance

The website achieves optimal performance through:

- React Server Components
- Image optimization
- Route prefetching
- Proper caching strategies
- Code splitting
- Minimal client-side JavaScript

## 🚀 Deployment

The site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Configure your environment variables
4. Deploy!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

Apil Acharya
Portfolio: [Your Portfolio URL]
LinkedIn: [Your LinkedIn]
GitHub: [Your GitHub]

---

Built with ❤️ by Apil Acharya
