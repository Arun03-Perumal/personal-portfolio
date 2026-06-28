import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/20 bg-white/70 p-6 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5 ${className}`}
    >
      {children}
    </div>
  );
}