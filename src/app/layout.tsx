import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./smooth-scroll.css";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/header";
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
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
