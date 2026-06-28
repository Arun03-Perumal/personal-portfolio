"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import MobileNav from "./mobile-nav";

import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-foreground transition-colors duration-300 hover:text-primary"
        >
          {profile.shortName}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {item.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-primary transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden lg:flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background"
          >
            <FaGithub className="text-lg" />
          </a>

          {/* LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden lg:flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background"
          >
            <FaLinkedin className="text-lg" />
          </a>

          {/* Resume */}
          <a
            href={profile.resume}
            className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-all duration-300 hover:scale-105 hover:bg-[#38BDF8] lg:inline-flex"
          >
            Resume
          </a>

          {/* Mobile Menu */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}