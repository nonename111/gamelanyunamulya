"use client";

import Link from "next/link";

import type { LocalizedText } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export function PageHero({
  eyebrow,
  title,
  description,
  titleHref
}: {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  titleHref?: string;
}) {
  const { language } = useLanguage();
  const titleText = pickText(title, language);

  return (
    <section className="relative overflow-hidden pb-12 pt-10">
      <div className="container-shell">
        <div className="glass-panel relative rounded-[2rem] border-primary/10 px-5 py-12 shadow-soft sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
          <p className="relative text-xs font-medium uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.28em]">
            {pickText(eyebrow, language)}
          </p>
          {titleHref ? (
            <Link
              href={titleHref}
              target="_blank"
              rel="noreferrer"
              className="relative mt-5 block max-w-4xl font-serif text-3xl leading-tight text-balance transition hover:text-secondary sm:text-5xl lg:text-6xl"
            >
              {titleText}
            </Link>
          ) : (
            <h1 className="relative mt-5 max-w-4xl font-serif text-3xl leading-tight text-balance sm:text-5xl lg:text-6xl">
              {titleText}
            </h1>
          )}
          <p className="relative mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-lg">
            {pickText(description, language)}
          </p>
          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/#hero">{language === "id" ? "Kembali ke Beranda" : "Back Home"}</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/kontak">{language === "id" ? "Hubungi Sanggar" : "Contact the Studio"}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
