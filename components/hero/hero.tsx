"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { profile } from "@/data/profile";
import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-20 lg:pt-12 lg:pb-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#60A5FA]/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#A78BFA]/10 blur-[120px]" />

      <div className="container-width relative z-10">
        <div className="grid min-h-[calc(100vh-72px)] items-center gap-12 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-card px-5 py-2">
              <span className="mr-3 h-2.5 w-2.5 rounded-full bg-green-500" />

              <span className="text-sm text-muted-foreground">
                Available for Internship
              </span>
            </div>

            {/* Heading */}

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Hi, I'm

              <span className="mt-3 block text-primary">
                {profile.name}
              </span>
            </h1>

            {/* Role */}

            <h2 className="mt-5 text-2xl font-semibold text-muted-foreground">
              {profile.title}
            </h2>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
              {profile.description}
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton>
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </PrimaryButton>

              <SecondaryButton>
                <Download className="mr-2 h-5 w-5" />
                Resume
              </SecondaryButton>
            </div>

            {/* Skills */}

            <div className="mt-12 flex flex-wrap gap-3">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-2xl">
              {/* Gradient Overlay */}

              <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/5 via-transparent to-[#A78BFA]/5" />

              <div className="relative z-10">
                {/* Profile Image */}

                <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-3xl border-2 border-primary/30 bg-background shadow-xl">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    priority
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                {/* Info */}

                <div className="mt-8 text-center">
                  <h3 className="text-3xl font-bold">
                    {profile.name}
                  </h3>

                  <p className="mt-2 text-primary">
                    {profile.title}
                  </p>

                  <p className="mt-5 text-muted-foreground">
                    {profile.college}
                  </p>

                  <p className="text-muted-foreground">
                    {profile.location}
                  </p>
                </div>

                {/* Stats */}

                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                  {profile.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center"
                    >
                      <h4 className="text-2xl font-bold text-primary">
                        {stat.value}
                      </h4>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}