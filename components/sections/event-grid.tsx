"use client";

import type { EventItem } from "@/lib/types";
import { EventCard } from "@/components/sections/event-card";
import { Reveal } from "@/components/shared/reveal";

export function EventGrid({ items }: { items: EventItem[] }) {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={`${item.title.id}-${item.date}`} delay={index * 0.05}>
          <EventCard item={item} />
        </Reveal>
      ))}
    </div>
  );
}
