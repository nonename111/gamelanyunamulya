"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { siteContent } from "@/lib/content";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";

export function ImageSlider() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % siteContent.museumRooms.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section-spacing pt-8">
      <div className="container-shell">
        <Reveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-primary">
              {language === "id" ? "Ruang Museum" : "Museum Rooms"}
            </p>
            <h2 className="font-serif text-4xl leading-tight text-balance">
              {language === "id"
                ? "Jelajahi pengalaman digital seperti berpindah dari satu ruang kurasi ke ruang berikutnya."
                : "Explore the digital experience as if moving from one curated room to another."}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {siteContent.museumRooms.map((room, index) => (
              <Link
                key={room.href}
                href={room.href}
                className={`rounded-[2rem] border p-6 transition-all duration-500 ${
                  index === activeIndex
                    ? "border-secondary bg-gradient-to-br from-white to-secondary/15 shadow-soft dark:from-card dark:to-secondary/10"
                    : "border-primary/10 bg-card/70"
                }`}
              >
                <div className="mb-5 h-40 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,rgba(200,155,60,0.65),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(79,109,74,0.55),transparent_30%),linear-gradient(135deg,rgba(45,34,25,0.92),rgba(139,94,60,0.72))]" />
                <h3 className="font-serif text-2xl">{pickText(room.title, language)}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {pickText(room.description, language)}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
