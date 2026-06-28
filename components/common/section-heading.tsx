interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {subtitle && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}