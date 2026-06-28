"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { profile } from "@/data/profile";
import PrimaryButton from "@/components/common/primary-button";
import SecondaryButton from "@/components/common/secondary-button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="container-width relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-[#1E293B] bg-[#111827] px-4 py-2">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-[#94A3B8]">
                Available for Internship
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
              Hi, I'm
              <span className="mt-2 block text-[#60A5FA]">
                {profile.name}
              </span>
            </h1>

            {/* Role */}
            <h2 className="mt-5 text-2xl font-semibold text-[#94A3B8]">
              {profile.title}
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#94A3B8]">
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

            {/* Tech Stack */}
            <div className="mt-12 flex flex-wrap gap-3">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#1E293B] bg-[#111827] px-4 py-2 text-sm text-[#F8FAFC]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md rounded-3xl border border-[#1E293B] bg-[#111827] p-8 shadow-xl">
              {/* Image Placeholder */}
              <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-2xl border border-dashed border-[#60A5FA]/40 bg-[#0B1120]">
                <span className="text-lg text-[#94A3B8]">
                  Profile Image
                </span>
              </div>

              {/* Details */}
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-white">
                  {profile.name}
                </h3>

                <p className="mt-2 text-[#94A3B8]">
                  {profile.college}
                </p>

                <p className="mt-1 text-[#94A3B8]">
                  {profile.location}
                </p>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#1E293B] pt-6">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <h4 className="text-xl font-bold text-[#60A5FA]">
                      {stat.value}
                    </h4>

                    <p className="mt-1 text-sm text-[#94A3B8]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}