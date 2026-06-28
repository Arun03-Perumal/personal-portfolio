import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
}

export default function PrimaryButton({
  children,
}: PrimaryButtonProps) {
  return (
    <Button
      size="lg"
      className="rounded-xl bg-emerald-600 px-6 hover:bg-emerald-700"
    >
      {children}
    </Button>
  );
}