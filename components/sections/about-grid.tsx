"use client";

import type { AboutCard } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";

export function AboutGrid({ items }: { items: AboutCard[] }) {
  const { language } = useLanguage();

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <Reveal key={item.title.id} delay={index * 0.05}>
          <article className="rounded-[2rem] border border-primary/10 bg-card/85 p-6 shadow-soft">
            <p className="text-xs uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.28em]">0{index + 1}</p>
            <h3 className="mt-4 font-serif text-2xl sm:text-3xl">{pickText(item.title, language)}</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {pickText(item.description, language)}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
