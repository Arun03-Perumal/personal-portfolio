import { Mail, Phone, MapPin } from "lucide-react";

import SectionContainer from "@/components/common/section-container";
import SectionHeading from "@/components/common/section-heading";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <SectionContainer id="contact">
      <SectionHeading
        title="Let's Connect"
        subtitle="Contact"
      />

      <div className="mt-12 rounded-3xl border border-border bg-card p-8">
        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
          I'm always open to internship opportunities, collaborations, and
          software development projects. Feel free to reach out.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-2xl border border-border p-5 transition hover:border-primary"
          >
            <Mail className="h-6 w-6 text-primary" />

            <div>
              <p className="font-semibold">Email</p>
              <p className="text-muted-foreground">{profile.email}</p>
            </div>
          </a>

          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-4 rounded-2xl border border-border p-5 transition hover:border-primary"
          >
            <Phone className="h-6 w-6 text-primary" />

            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-muted-foreground">{profile.phone}</p>
            </div>
          </a>

          <div className="rounded-2xl border border-border p-5">
            <p className="font-semibold">GitHub</p>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block break-all text-primary hover:underline"
            >
              {profile.github}
            </a>
          </div>

          <div className="rounded-2xl border border-border p-5">
            <p className="font-semibold">LinkedIn</p>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block break-all text-primary hover:underline"
            >
              {profile.linkedin}
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <MapPin className="h-5 w-5 text-primary" />
          <span>{profile.location}</span>
        </div>
      </div>
    </SectionContainer>
  );
}