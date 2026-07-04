"use client";

import type { TimelineEntry } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";

export function Timeline({ items }: { items: TimelineEntry[] }) {
  const { language } = useLanguage();

  return (
    <div className="relative mt-14">
      <div className="absolute left-4 top-0 hidden h-full w-px bg-primary/15 lg:left-1/2 lg:block" />
      <div className="grid gap-6">
        {items.map((item, index) => (
          <Reveal key={`${item.year}-${item.title.id}`} delay={index * 0.05}>
            <article
              className={`grid gap-5 lg:grid-cols-2 ${
                index % 2 === 0 ? "lg:[&>*:first-child]:order-1" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              <div className="hidden lg:block" />
              <div className="relative rounded-[2rem] border border-primary/10 bg-card/80 p-6 shadow-soft">
                <span className="absolute -left-3 top-8 hidden h-6 w-6 rounded-full border-4 border-background bg-secondary lg:block" />
                <p className="text-xs uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.28em]">{item.year}</p>
                <h3 className="mt-4 font-serif text-2xl sm:text-3xl">
                  {pickText(item.title, language)}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  {pickText(item.description, language)}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
