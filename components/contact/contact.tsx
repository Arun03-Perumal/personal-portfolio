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
  return (
    <SectionContainer id="contact">
      <SectionHeading
        title="Let's Work Together"
        subtitle="Contact"
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* LEFT PANEL */}
        <div className="rounded-3xl border border-border bg-card p-8">
          <h3 className="text-3xl font-bold">
            Get In Touch
          </h3>

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
                <p className="font-semibold">
                  Email
                </p>

                <p className="text-sm text-muted-foreground">
                  {profile.email}
                </p>
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
                <p className="font-semibold">
                  Phone
                </p>

                <p className="text-sm text-muted-foreground">
                  {profile.phone}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-5 rounded-2xl border border-border bg-background p-5">
              <div className="rounded-xl bg-primary/10 p-4">
                <FaMapMarkerAlt className="text-xl text-primary" />
              </div>

              <div>
                <p className="font-semibold">
                  Location
                </p>

                <p className="text-sm text-muted-foreground">
                  {profile.location}
                </p>
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
          <h3 className="text-3xl font-bold">
            Send a Message
          </h3>

          <p className="mt-5 text-muted-foreground">
            Fill in the details below and I'll respond as soon as possible.
          </p>

          <form className="mt-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full resize-none rounded-xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-semibold text-background transition-all duration-300 hover:scale-105"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
}