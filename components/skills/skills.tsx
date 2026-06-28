import SectionContainer from "@/components/common/section-container";
import SectionHeading from "@/components/common/section-heading";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <SectionContainer id="skills">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="What I Work With"
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
          >
            <h3 className="text-xl font-semibold">
              {category.title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}