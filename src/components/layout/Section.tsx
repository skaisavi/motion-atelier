import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

type SectionProps = PropsWithChildren<{
  className?: string;
}>;

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("mx-auto w-full max-w-[1060px] px-5 py-20 md:px-8", className)}>
      {children}
    </section>
  );
}
