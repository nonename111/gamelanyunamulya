"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import type { GalleryItem } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";

export function GalleryMasonry({ items }: { items: GalleryItem[] }) {
  const { language } = useLanguage();
  const categories = useMemo(
    () => [
      language === "id" ? "Semua" : "All",
      ...Array.from(new Set(items.map((item) => item.category)))
    ],
    [items, language]
  );
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    setActiveCategory(categories[0]);
  }, [categories]);

  const filteredItems = items.filter((item) =>
    activeCategory === (language === "id" ? "Semua" : "All")
      ? true
      : item.category === activeCategory
  );

  return (
    <div className="mt-12 space-y-6">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm transition ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "border border-primary/10 bg-card hover:border-secondary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filteredItems.map((item, index) => (
          <Reveal key={item.title.id} delay={index * 0.03} className="mb-5 break-inside-avoid">
            <button
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group w-full overflow-hidden rounded-[2rem] border border-primary/10 bg-card text-left shadow-soft transition hover:-translate-y-1"
            >
              <div
                className={`${index % 3 === 0 ? "h-80" : index % 3 === 1 ? "h-64" : "h-96"} bg-gradient-to-br ${item.palette} p-5`}
              >
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/20 bg-[linear-gradient(145deg,rgba(45,34,25,0.18),rgba(247,243,234,0.08))] p-5 backdrop-blur-sm">
                  <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white">
                    {item.category}
                  </span>
                  <h3 className="max-w-xs font-serif text-3xl text-white">{pickText(item.title, language)}</h3>
                </div>
              </div>
              <div className="px-5 pb-5 pt-4">
                <p className="text-sm leading-7 text-muted-foreground">
                  {pickText(item.caption, language)}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-card"
              initial={{ y: 30, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white"
              >
                <X size={18} />
              </button>
              <div className={`h-[24rem] bg-gradient-to-br ${selectedItem.palette} p-8`}>
                <div className="flex h-full flex-col justify-end rounded-[1.5rem] border border-white/25 bg-black/15 p-8 text-white backdrop-blur-sm">
                  <span className="mb-4 inline-flex w-fit rounded-full bg-white/15 px-4 py-1 text-xs uppercase tracking-[0.28em]">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-serif text-4xl">{pickText(selectedItem.title, language)}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">
                    {pickText(selectedItem.caption, language)}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
