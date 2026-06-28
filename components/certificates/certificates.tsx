import SectionContainer from "@/components/common/section-container";
import SectionHeading from "@/components/common/section-heading";

import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <SectionContainer id="certificates">
      <SectionHeading
        title="Certificates"
        subtitle="Learning & Achievements"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"
          >
            <h3 className="text-xl font-semibold">
              {certificate.title}
            </h3>

            <p className="mt-3 text-muted-foreground">
              {certificate.issuer}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}