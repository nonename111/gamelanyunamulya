"use client";

import Link from "next/link";

import type { SiteContent } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";

export function RoomLinks({ rooms }: { rooms: SiteContent["museumRooms"] }) {
  const { language } = useLanguage();

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-4">
      {rooms.map((room, index) => (
        <Reveal key={room.href} delay={index * 0.05}>
          <Link
            href={room.href}
            className="group block rounded-[2rem] border border-primary/10 bg-card/85 p-6 shadow-soft transition hover:-translate-y-1 hover:border-secondary"
          >
            <div className="mb-5 h-32 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,rgba(200,155,60,0.65),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(79,109,74,0.55),transparent_30%),linear-gradient(135deg,rgba(45,34,25,0.92),rgba(139,94,60,0.72))]" />
            <h3 className="font-serif text-2xl">{pickText(room.title, language)}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {pickText(room.description, language)}
            </p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
