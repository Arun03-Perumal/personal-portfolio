"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      className="relative flex items-center gap-2 md:hidden"
      ref={menuRef}
    >
      {/* GitHub */}
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background"
      >
        <FaGithub className="text-lg" />
      </a>

      {/* LinkedIn */}
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background"
      >
        <FaLinkedin className="text-lg" />
      </a>

      {/* Toggle Button */}
      <button
        aria-label="Toggle Menu"
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary hover:bg-primary/10"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            className="absolute right-0 top-14 w-72 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="border-b border-border px-6 py-5">
              <h2 className="text-xl font-bold text-primary">
                {profile.shortName}
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                {profile.title}
              </p>
            </div>

            {/* Navigation */}
            <nav className="p-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:pl-6 hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Resume */}
            <div className="border-t border-border p-4">
              <Link
                href={profile.resume}
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-background transition hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}