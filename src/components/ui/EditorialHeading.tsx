import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

type EditorialHeadingProps = PropsWithChildren<{
  className?: string;
}>;

export function EditorialHeading({ children, className }: EditorialHeadingProps) {
  return (
    <h1
      className={cn(
        "max-w-5xl font-display text-6xl font-normal leading-[0.92] text-atelier-ivory md:text-8xl lg:text-9xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
