import SectionContainer from "@/components/common/section-container";
import SectionHeading from "@/components/common/section-heading";

export default function Home() {
  return (
    <main>
      <SectionContainer>
        <SectionHeading
          title="Portfolio Under Construction"
          subtitle="Phase 2"
        />

        <p className="mt-6 max-w-2xl text-muted-foreground">
          Welcome! This confirms that our reusable layout components are working.
          We'll begin building the Hero section in the next phase.
        </p>
      </SectionContainer>
    </main>
  );
}