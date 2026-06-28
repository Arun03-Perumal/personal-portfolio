import SectionContainer from "@/components/common/section-container";
import SectionHeading from "@/components/common/section-heading";

import { education } from "@/data/education";
import { experiences } from "@/data/experience";

export default function Journey() {
  return (
    <SectionContainer id="journey">
      <SectionHeading
        title="Education & Experience"
        subtitle="My Journey"
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        {/* ================= Education ================= */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="h-10 w-1 rounded-full bg-primary" />

            <div>
              <h3 className="text-3xl font-bold">
                Education
              </h3>

              <p className="text-muted-foreground">
                Academic Foundation
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {education.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_45px_rgba(96,165,250,0.15)]"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-[#A78BFA]" />

                <div className="mt-3">
                  <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                    {item.duration}
                  </span>

                  <h4 className="mt-6 text-2xl font-bold">
                    {item.level}
                  </h4>

                  {item.specialization && (
                    <p className="mt-2 text-primary">
                      {item.specialization}
                    </p>
                  )}

                  <p className="mt-3 font-medium">
                    {item.institution}
                  </p>

                  {item.score && (
                    <div className="mt-4 inline-flex rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground">
                      {item.score}
                    </div>
                  )}

                  <p className="mt-6 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Experience ================= */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="h-10 w-1 rounded-full bg-primary" />

            <div>
              <h3 className="text-3xl font-bold">
                Experience
              </h3>

              <p className="text-muted-foreground">
                Practical Development
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {experiences.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_45px_rgba(96,165,250,0.15)]"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-[#A78BFA]" />

                <div className="mt-3">
                  <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                    {item.duration}
                  </span>

                  <h4 className="mt-6 text-2xl font-bold">
                    {item.role}
                  </h4>

                  <p className="mt-2 text-primary">
                    {item.organization}
                  </p>

                  <p className="mt-6 leading-7 text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-4 py-2 text-sm transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}