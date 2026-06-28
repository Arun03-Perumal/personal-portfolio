import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arun-perumal.vercel.app"),

  title: {
    default: "Arun Perumal | Full Stack Developer",
    template: "%s | Arun Perumal",
  },

  description:
    "Portfolio of Arun Perumal, Full Stack Developer and Computer Science Engineering student passionate about building modern, scalable and high-performance web applications using Next.js, React, TypeScript, Tailwind CSS, Supabase and PostgreSQL.",

  keywords: [
    "Arun Perumal",
    "Portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Web Developer",
    "Software Engineer",
    "Computer Science Engineering",
    "Chennai",
    "India",
  ],

  authors: [
    {
      name: "Arun Perumal",
      url: "https://your-domain.vercel.app",
    },
  ],

  creator: "Arun Perumal",

  publisher: "Arun Perumal",

  applicationName: "Arun Portfolio",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Arun Perumal | Full Stack Developer",

    description:
      "Explore the portfolio of Arun Perumal showcasing projects, technical skills, certifications and modern web development experience.",

    url: "https://arun-perumal.vercel.app",

    siteName: "Arun Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Arun Perumal Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Arun Perumal | Full Stack Developer",

    description:
      "Modern Full Stack Developer Portfolio built with Next.js, React, TypeScript and Tailwind CSS.",

    images: ["/opengraph-image"],
  },

  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },

  alternates: {
    canonical: "https://arun-perumal.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}