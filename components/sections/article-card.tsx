"use client";

import type { ArticleItem } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";

export function ArticleCard({ item }: { item: ArticleItem }) {
  const { language } = useLanguage();

  return (
    <article className="rounded-[2rem] border border-primary/10 bg-card/80 p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.28em] text-primary">
        <span>{pickText(item.category, language)}</span>
        <span>{item.readTime}</span>
      </div>
      <h3 className="mt-5 font-serif text-3xl leading-tight text-balance">
        {pickText(item.title, language)}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        {pickText(item.excerpt, language)}
      </p>
    </article>
  );
}
