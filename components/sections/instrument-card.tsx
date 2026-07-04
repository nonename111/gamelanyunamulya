"use client";

import type { InstrumentItem } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { AudioPlayer } from "@/components/sections/audio-player";

const categoryTheme: Record<InstrumentItem["category"], string> = {
  nature: "from-emerald-200/70 via-emerald-500/30 to-transparent",
  food: "from-amber-200/70 via-orange-500/30 to-transparent",
  culture: "from-rose-200/60 via-amber-400/30 to-transparent"
};

export function InstrumentCard({ item }: { item: InstrumentItem }) {
  const { language } = useLanguage();

  return (
    <article className="overflow-hidden rounded-[2rem] border border-primary/10 bg-card/80 shadow-soft">
      <div
        className={`h-48 bg-gradient-to-br ${categoryTheme[item.category]} px-6 py-5`}
      >
        <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/30 bg-[linear-gradient(135deg,rgba(45,34,25,0.88),rgba(139,94,60,0.72))] p-5 text-white">
          <p className="text-xs uppercase tracking-[0.28em] text-secondary">
            {pickText(item.family, language)}
          </p>
          <div>
            <h3 className="font-serif text-3xl">{pickText(item.name, language)}</h3>
            <p className="mt-2 text-sm text-white/70">{item.tone}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 px-6 pb-6 pt-5">
        <p className="text-sm leading-7 text-muted-foreground">
          {pickText(item.description, language)}
        </p>
        <div className="rounded-[1.5rem] bg-muted/60 p-4">
          <p className="text-xs uppercase tracking-[0.28em] text-primary">
            {language === "id" ? "Fungsi" : "Function"}
          </p>
          <p className="mt-2 text-sm leading-7">{pickText(item.function, language)}</p>
        </div>
        <p className="text-sm leading-7 text-muted-foreground">
          {pickText(item.detail, language)}
        </p>
        <AudioPlayer src={item.audioSrc} />
      </div>
    </article>
  );
}
