"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="rounded-lg border border-[#1E293B] p-2 text-white transition hover:border-[#60A5FA]"
            aria-label="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[280px] border-l border-[#1E293B] bg-[#111827]"
        >
          <div className="mt-10 flex flex-col gap-8">
            <Link
              href="/"
              className="text-2xl font-bold text-[#60A5FA]"
            >
              {profile.shortName}
            </Link>

            <nav className="flex flex-col gap-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg text-[#94A3B8] transition hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <a
              href={profile.resume}
              className="mt-4 rounded-xl bg-[#60A5FA] px-4 py-3 text-center font-semibold text-[#0B1120] transition hover:bg-[#38BDF8]"
            >
              Resume
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}