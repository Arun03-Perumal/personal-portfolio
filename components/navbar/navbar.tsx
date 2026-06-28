"use client";

import Link from "next/link";

import MobileNav from "./mobile-nav";

import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0B1120]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-white transition hover:text-[#60A5FA]"
        >
          {profile.shortName}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Resume */}
        <a
          href={profile.resume}
          className="hidden rounded-xl bg-[#60A5FA] px-5 py-2 text-sm font-semibold text-[#0B1120] transition hover:bg-[#38BDF8] md:block"
        >
          Resume
        </a>

        <MobileNav />
      </div>
    </header>
  );
}