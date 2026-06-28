import SectionContainer from "@/components/common/section-container";
import SectionHeading from "@/components/common/section-heading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <SectionContainer id="education">
      <SectionHeading
        title="Education"
        subtitle="Academic Journey"
      />

      <div className="mt-12 space-y-8">
        {education.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-border bg-card p-8 transition hover:border-primary"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <h3 className="text-2xl font-bold">
                  {item.level}
                </h3>

                {item.specialization && (
                  <p className="mt-2 text-lg text-muted-foreground">
                    {item.specialization}
                  </p>
                )}

                <p className="mt-2 font-medium">
                  {item.institution}
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="font-semibold text-primary">
                  {item.duration}
                </p>

                <p className="mt-2 text-muted-foreground">
                  {item.score}
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}