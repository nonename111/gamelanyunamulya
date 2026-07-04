"use client";

import type { EventItem } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";

export function EventCard({ item }: { item: EventItem }) {
  const { language } = useLanguage();

  return (
    <article className="rounded-[2rem] border border-primary/10 bg-card/85 p-6 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-secondary/15 px-4 py-1 text-xs uppercase tracking-[0.28em] text-primary">
          {pickText(item.type, language)}
        </span>
        <span className="text-sm text-muted-foreground">{item.date}</span>
      </div>
      <h3 className="mt-5 font-serif text-3xl">{pickText(item.title, language)}</h3>
      <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
        {pickText(item.location, language)}
      </p>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        {pickText(item.description, language)}
      </p>
    </article>
  );
}
