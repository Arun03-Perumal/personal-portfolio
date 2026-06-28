import { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  id,
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`w-full py-20 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}