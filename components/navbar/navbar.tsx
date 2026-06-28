"use client";

import Link from "next/link";

import MobileNav from "./mobile-nav";

import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#1E293B] bg-[#0B1120]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#home"
          className="text-2xl font-extrabold tracking-tight"
        >
          <span className="text-white">{profile.shortName}</span>
          
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#94A3B8] transition-all duration-300 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href={profile.resume}
          className="hidden rounded-xl bg-[#60A5FA] px-5 py-2.5 text-sm font-semibold text-[#0B1120] transition-all duration-300 hover:bg-[#38BDF8] hover:scale-105 lg:block"
        >
          Resume
        </a>

        <MobileNav />
      </div>
    </header>
  );
}