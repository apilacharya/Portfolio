import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./smooth-scroll.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apil-raj-acharya.vercel.app"),
  title: "Apil Raj Acharya - Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, TypeScript, and Node.js",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Full Stack Developer",
    "Web Developer",
  ],
  authors: [{ name: "Apil Raj Acharya" }],
  creator: "Apil Raj Acharya",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apil-raj-acharya.vercel.app",
    title: "Apil Raj Acharya - Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, TypeScript, and Node.js",
    siteName: "Apil Raj Acharya Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Apil Raj Acharya - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apil Raj Acharya - Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, TypeScript, and Node.js",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
