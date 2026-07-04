import Image from "next/image";

import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
  width = 80
}: {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  width?: number;
}) {
  return (
    <div
      className={cn(
        "relative aspect-square overflow-hidden rounded-full border border-primary/10 bg-white shadow-soft",
        className
      )}
      style={{ width }}
    >
      <Image
        src="/logo-gamelan-yuna-mulya.png"
        alt="Logo Yuna Mulya Gamelan"
        fill
        priority={priority}
        className={cn("object-cover p-1.5", imageClassName)}
      />
    </div>
  );
}
