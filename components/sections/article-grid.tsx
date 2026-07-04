"use client";

import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import type { ArticleItem } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { ArticleCard } from "@/components/sections/article-card";
import { Reveal } from "@/components/shared/reveal";

export function ArticleGrid({
  featured,
  items
}: {
  featured: ArticleItem;
  items: ArticleItem[];
}) {
  const { language } = useLanguage();
  const categories = useMemo(
    () => [
      language === "id" ? "Semua" : "All",
      ...Array.from(new Set(items.map((item) => pickText(item.category, language))))
    ],
    [items, language]
  );
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    setActiveCategory(categories[0]);
  }, [categories]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        activeCategory === (language === "id" ? "Semua" : "All")
          ? true
          : pickText(item.category, language) === activeCategory;
      const matchesQuery = [
        pickText(item.title, language),
        pickText(item.excerpt, language)
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, items, language, query]);

  return (
    <div className="mt-12 space-y-8">
      <Reveal className="rounded-[2rem] border border-primary/10 bg-card/85 p-6 shadow-soft">
        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.28em] text-primary">
          <span>{pickText(featured.category, language)}</span>
          <span>{featured.readTime}</span>
        </div>
        <h3 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-balance">
          {pickText(featured.title, language)}
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-8 text-muted-foreground">
          {pickText(featured.excerpt, language)}
        </p>
      </Reveal>

      <Reveal className="flex flex-col gap-4 rounded-[2rem] border border-primary/10 bg-card/70 p-5 shadow-soft lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={language === "id" ? "Cari artikel..." : "Search articles..."}
            className="h-12 w-full rounded-full border border-primary/10 bg-background pl-11 pr-4 outline-none transition focus:border-secondary"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary/10 bg-background hover:border-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {filteredItems.map((item, index) => (
          <Reveal key={item.slug} delay={index * 0.04}>
            <ArticleCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
