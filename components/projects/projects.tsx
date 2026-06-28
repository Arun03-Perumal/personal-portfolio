import { ExternalLink, GitBranch } from "lucide-react";

import SectionContainer from "@/components/common/section-container";
import SectionHeading from "@/components/common/section-heading";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="My Recent Work"
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary"
          >
            {/* Project Image */}
            <div className="flex h-56 items-center justify-center border-b border-border bg-background">
              <span className="text-muted-foreground">
                Project Preview
              </span>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-8 flex items-center gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary transition hover:text-secondary"
                >
                  <GitBranch className="h-5 w-5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary transition hover:text-secondary"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}