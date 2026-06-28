import SectionContainer from "@/components/common/section-container";
import SectionHeading from "@/components/common/section-heading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <SectionContainer id="experience">
      <SectionHeading
        title="Experience"
        subtitle="Hands-on Development"
      />

      <div className="mt-12 space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <p className="text-primary font-semibold">
              {exp.duration}
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              {exp.role}
            </h3>

            <p className="mt-2 font-medium text-muted-foreground">
              {exp.company}
            </p>

            <p className="mt-6 leading-7 text-muted-foreground">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}