import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
}

export default function SecondaryButton({
  children,
}: SecondaryButtonProps) {
  return (
    <Button
      size="lg"
      variant="outline"
      className="rounded-xl px-6"
    >
      {children}
    </Button>
  );
}