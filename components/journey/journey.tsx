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

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {/* Education */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-primary">
            Education
          </h3>

          <div className="space-y-6">
            {education.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-border bg-card p-6"
              >
                <p className="text-sm text-primary">{item.duration}</p>

                <h4 className="mt-2 text-xl font-semibold">
                  {item.level}
                </h4>

                {item.specialization && (
                  <p className="mt-1 text-muted-foreground">
                    {item.specialization}
                  </p>
                )}

                <p className="mt-2">{item.institution}</p>

                <p className="mt-4 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-primary">
            Experience
          </h3>

          <div className="space-y-6">
            {experiences.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-border bg-card p-6"
              >
                <p className="text-sm text-primary">
                  {item.duration}
                </p>

                <h4 className="mt-2 text-xl font-semibold">
                  {item.role}
                </h4>

                <p className="mt-1 text-muted-foreground">
                  {item.organization}
                </p>

                <p className="mt-4 text-sm text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}