"use client";

import Image from "next/image";

import type { ProcessStep } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const { language } = useLanguage();

  return (
    <div className="mt-12 grid gap-6">
      <Reveal>
        <article className="overflow-hidden rounded-[2rem] border border-primary/10 bg-card/85 shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative aspect-square min-h-[240px] sm:min-h-[320px]">
              <Image
                src="/kayu-nangka.png"
                alt={
                  language === "id"
                    ? "Kayu nangka sebagai bahan utama gamelan"
                    : "Jackfruit wood as the main material of the gamelan"
                }
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex items-center p-6 sm:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.28em]">
                  {language === "id" ? "Bahan Utama" : "Main Material"}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-balance sm:text-4xl">
                  {language === "id"
                    ? "Inilah kayu nangka yang menjadi dasar cerita dan bahan utama alat."
                    : "This is the jackfruit wood that becomes both the story base and the main instrument material."}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {language === "id"
                    ? "Foto ini menunjukkan kayu nangka yang digunakan sebagai bahan penting dalam pembuatan alat. Warna, serat, dan kesan alaminya mendukung alasan mengapa material ini dipilih dan dijaga maknanya di Yuna Mulya Gamelan."
                    : "This photo shows the jackfruit wood used as an important material in making the instruments. Its color, grain, and natural feel support why this material was chosen and why its meaning is preserved at Yuna Mulya Gamelan."}
                </p>
              </div>
            </div>
          </div>
        </article>
      </Reveal>

      {steps.map((step, index) => (
        <Reveal key={step.step} delay={index * 0.04}>
          <article className="grid gap-5 rounded-[2rem] border border-primary/10 bg-card/80 p-6 shadow-soft lg:grid-cols-[160px_1fr]">
            <div className="flex items-start gap-4 lg:block">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-primary text-xl font-semibold text-primary-foreground">
                {step.step}
              </div>
              <div className="mt-4 hidden h-28 rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,rgba(200,155,60,0.55),transparent_30%),linear-gradient(135deg,rgba(45,34,25,0.9),rgba(79,109,74,0.8))] lg:block" />
            </div>
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl">{pickText(step.title, language)}</h3>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-muted-foreground sm:text-base">
                {pickText(step.description, language)}
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
