import SectionContainer from "@/components/common/section-container";
import SectionHeading from "@/components/common/section-heading";

export default function About() {
  return (
    <SectionContainer id="about">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            title="About Me"
            subtitle="Get to Know Me"
          />

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            I'm Arun Perumal, a Computer Science Engineering student with a
            strong interest in full-stack web development. I enjoy building
            modern applications that are clean, responsive, and focused on
            solving real-world problems.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I believe good software combines thoughtful design with reliable
            engineering. Every project I build is an opportunity to learn,
            improve, and create experiences that are both functional and
            intuitive.
          </p>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Currently, I'm expanding my knowledge in modern web technologies,
            backend development, databases, and cloud-based solutions while
            preparing for software engineering internships.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <h3 className="text-2xl font-bold">
            Quick Information
          </h3>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="mt-1 font-medium">Arun Perumal</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Education</p>
              <p className="mt-1 font-medium">
                B.E. Computer Science & Engineering
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">College</p>
              <p className="mt-1 font-medium">
                Meenakshi College of Engineering
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="mt-1 font-medium">Chennai, Tamil Nadu</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Career Goal</p>
              <p className="mt-1 font-medium">
                Full Stack Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}