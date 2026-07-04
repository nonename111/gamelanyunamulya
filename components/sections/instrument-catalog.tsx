"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import type { InstrumentItem, LocalizedText } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { InstrumentCard } from "@/components/sections/instrument-card";
import { Reveal } from "@/components/shared/reveal";

type FilterKey = "all" | InstrumentItem["category"];

function getFilterKey(label: string): FilterKey {
  const normalized = label.toLowerCase();
  if (normalized === "nature") return "nature";
  if (normalized === "food") return "food";
  if (normalized === "culture") return "culture";
  return "all";
}

export function InstrumentCatalog({
  filters,
  items
}: {
  filters: LocalizedText[];
  items: InstrumentItem[];
}) {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesFilter =
        activeFilter === "all" ? true : item.category === activeFilter;
      const content = [
        pickText(item.name, language),
        pickText(item.family, language),
        pickText(item.description, language)
      ]
        .join(" ")
        .toLowerCase();

      return matchesFilter && content.includes(query.toLowerCase());
    });
  }, [activeFilter, items, language, query]);

  return (
    <div className="mt-12 space-y-8">
      <Reveal className="flex flex-col gap-4 rounded-[2rem] border border-primary/10 bg-card/70 p-5 shadow-soft lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={
              language === "id"
                ? "Cari instrumen, fungsi, atau cerita..."
                : "Search instruments, functions, or stories..."
            }
            className="h-12 w-full rounded-full border border-primary/10 bg-background pl-11 pr-4 outline-none transition focus:border-secondary"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const label = pickText(filter, language);
            const value = getFilterKey(label);
            const active = value === activeFilter;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(value)}
                className={`rounded-full px-5 py-2 text-sm transition ${
                  active
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "border border-primary/10 bg-background hover:border-secondary"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredItems.map((item, index) => (
          <Reveal key={item.name.id} delay={index * 0.04}>
            <InstrumentCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
