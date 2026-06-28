"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

import SectionContainer from "@/components/common/section-container";
import SectionHeading from "@/components/common/section-heading";

import { profile } from "@/data/profile";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess("Your message has been sent successfully.");

      setTimeout(() => {
        setSuccess("");
      }, 4000);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SectionContainer id="contact">
      <SectionHeading title="Let's Work Together" subtitle="Contact" />

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* LEFT PANEL */}
        <div className="rounded-3xl border border-border bg-card p-8">
          <h3 className="text-3xl font-bold">Get In Touch</h3>

          <p className="mt-5 leading-8 text-muted-foreground">
            I'm currently looking for internship opportunities,
            freelance work and exciting software projects.
            Feel free to contact me anytime.
          </p>

          <div className="mt-10 space-y-5">
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_15px_35px_rgba(96,165,250,.15)]"
            >
              <div className="rounded-xl bg-primary/10 p-4">
                <FaEnvelope className="text-xl text-primary" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-muted-foreground">{profile.email}</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${profile.phone}`}
              className="group flex items-center gap-5 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_15px_35px_rgba(96,165,250,.15)]"
            >
              <div className="rounded-xl bg-primary/10 p-4">
                <FaPhoneAlt className="text-xl text-primary" />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm text-muted-foreground">{profile.phone}</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-5 rounded-2xl border border-border bg-background p-5">
              <div className="rounded-xl bg-primary/10 p-4">
                <FaMapMarkerAlt className="text-xl text-primary" />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-sm text-muted-foreground">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-border transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background"
            >
              <FaGithub className="text-2xl" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-border transition-all duration-300 hover:border-primary hover:bg-primary hover:text-background"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="rounded-3xl border border-border bg-card p-8">
          <h3 className="text-3xl font-bold">Send a Message</h3>

          <p className="mt-5 text-muted-foreground">
            Fill in the details below and I'll respond as soon as possible.
          </p>

          {/* Success */}
          {success && (
            <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-500">
              {success}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="rounded-xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="rounded-xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
              />
            </div>

            <input
              name="subject"
              type="text"
              required
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
            />

            <textarea
              name="message"
              rows={6}
              required
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-semibold text-background transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FaPaperPlane />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
}
