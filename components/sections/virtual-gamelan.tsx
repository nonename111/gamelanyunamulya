"use client";

import { useCallback } from "react";

import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";

const notes = [
  { label: "Do", frequency: 261.63 },
  { label: "Re", frequency: 293.66 },
  { label: "Mi", frequency: 329.63 },
  { label: "Sol", frequency: 392.0 },
  { label: "La", frequency: 440.0 },
  { label: "Do'", frequency: 523.25 }
];

export function VirtualGamelan() {
  const { language } = useLanguage();

  const playTone = useCallback((frequency: number) => {
    const audioWindow = window as Window &
      typeof globalThis & {
        webkitAudioContext?: typeof AudioContext;
      };
    const AudioCtx = audioWindow.AudioContext || audioWindow.webkitAudioContext;

    if (!AudioCtx) {
      return;
    }

    const context = new AudioCtx();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.value = frequency;
    gainNode.gain.setValueAtTime(0.001, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.16, context.currentTime + 0.03);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.85);

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.9);
  }, []);

  return (
    <Reveal className="mt-12 rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(247,243,234,0.96),rgba(200,155,60,0.12))] p-6 shadow-soft dark:bg-[linear-gradient(135deg,rgba(40,33,27,0.96),rgba(79,109,74,0.2))]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-primary">
            {language === "id" ? "Virtual Gamelan" : "Virtual Gamelan"}
          </p>
          <h3 className="mt-4 font-serif text-3xl">
            {language === "id"
              ? "Sentuh nada-nada sederhana untuk merasakan interaksi digital."
              : "Tap the simple tones to feel the digital interaction."}
          </h3>
        </div>
        <p className="max-w-xl text-sm leading-7 text-muted-foreground">
          {language === "id"
            ? "Fitur ini memakai Web Audio API sebagai demo ringan sebelum audio instrumen asli disambungkan dari backend."
            : "This feature uses the Web Audio API as a lightweight demo before authentic instrument audio is connected from a backend."}
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {notes.map((note, index) => (
          <button
            key={note.label}
            type="button"
            onClick={() => playTone(note.frequency)}
            className={`rounded-[1.75rem] border border-primary/10 px-4 py-8 text-center shadow-soft transition hover:-translate-y-1 ${
              index % 2 === 0
                ? "bg-gradient-to-b from-secondary/20 to-white dark:to-card"
                : "bg-gradient-to-b from-accent/20 to-white dark:to-card"
            }`}
          >
            <p className="font-serif text-3xl">{note.label}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              {Math.round(note.frequency)} Hz
            </p>
          </button>
        ))}
      </div>
    </Reveal>
  );
}
