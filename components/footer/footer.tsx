import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  SiLeetcode,
  SiHackerrank,
} from "react-icons/si";

import { ArrowUpRight } from "lucide-react";

import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-width py-12">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-primary">
              {profile.name}
            </h2>

            <p className="mt-4 max-w-md leading-7 text-muted-foreground">
              Full Stack Developer passionate about building modern,
              scalable and user-focused web applications.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-background"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-background"
            >
              <FaLinkedin className="text-xl" />
            </a>

            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-background"
            >
              <SiLeetcode className="text-xl" />
            </a>

            <a
              href={profile.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackerRank"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-background"
            >
              <SiHackerrank className="text-xl" />
            </a>

            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-background"
            >
              <FaXTwitter className="text-xl" />
            </a>

            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-background"
            >
              <FaInstagram className="text-xl" />
            </a>

            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-background"
            >
              <FaFacebook className="text-xl" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-background"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with
            Next.js, TypeScript & Tailwind CSS.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 transition hover:text-primary"
          >
            Back to Top
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}