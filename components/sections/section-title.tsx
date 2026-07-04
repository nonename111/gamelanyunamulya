"use client";

import type { LocalizedText } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  align?: "left" | "center";
}) {
  const { language } = useLanguage();

  return (
    <Reveal
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.28em]">
        {pickText(eyebrow, language)}
      </p>
      <h2 className="mt-4 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
        {pickText(title, language)}
      </h2>
      <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-lg">
        {pickText(description, language)}
      </p>
    </Reveal>
  );
}
