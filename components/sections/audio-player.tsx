"use client";

export function AudioPlayer({ src }: { src: string }) {
  return (
    <audio
      controls
      preload="none"
      className="mt-4 h-10 w-full opacity-90"
      aria-label="Instrument audio preview"
    >
      <source src={src} type="audio/mpeg" />
    </audio>
  );
}
