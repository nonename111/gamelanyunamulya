"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

import { siteContent } from "@/lib/content";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { language } = useLanguage();
  const hero = siteContent.hero;

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-3 pb-10 pt-3 sm:px-6 sm:pb-14 sm:pt-5 lg:px-8"
    >
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-[radial-gradient(circle_at_top_left,rgba(200,155,60,0.32),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(79,109,74,0.24),transparent_30%),linear-gradient(135deg,rgba(45,34,25,0.92),rgba(92,63,42,0.76),rgba(20,20,20,0.88))] px-5 py-10 text-white shadow-soft sm:rounded-[2.5rem] sm:px-8 sm:py-12 lg:px-16 lg:py-14">
          <div className="absolute inset-0 bg-[url('/motif-jawa.svg')] bg-[size:260px] opacity-10 mix-blend-screen" />
          <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />

          <div className="relative grid items-start gap-8 sm:gap-10 lg:min-h-[58vh] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs tracking-[0.16em] text-white/80 backdrop-blur">
                {language === "id"
                  ? "Pelestarian budaya dari Gunungkidul"
                  : "Cultural preservation from Gunungkidul"}
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-secondary sm:text-sm sm:tracking-[0.35em]">
                {pickText(hero.eyebrow, language)}
              </p>
              <h1 className="mt-5 font-serif text-4xl leading-tight text-balance sm:mt-6 sm:text-5xl lg:text-7xl">
                {pickText(hero.title, language)}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
                {pickText(hero.subtitle, language)}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button asChild className="w-full sm:w-auto">
                  <Link href={hero.primaryCta.href}>
                    {pickText(hero.primaryCta.label, language)}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white/20 bg-white/10 text-white hover:bg-white/15 sm:w-auto"
                >
                  <Link href={hero.secondaryCta.href}>
                    {pickText(hero.secondaryCta.label, language)}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 lg:self-center">
              {[
                {
                  label: language === "id" ? "Berdiri" : "Founded",
                  text:
                    language === "id"
                      ? "Sanggar ini mulai berdiri pada tahun 2014 dengan bentuk yang sederhana dan dekat dengan kehidupan rumah sehari-hari."
                      : "The studio was founded in 2014 in a simple form, closely connected to everyday home life."
                },
                {
                  label: language === "id" ? "Tempat" : "Place",
                  text:
                    language === "id"
                      ? "Ruang sanggar berada di luar rumah, sehingga tampil apa adanya dan terasa sangat dekat dengan lingkungan sekitar."
                      : "The studio space sits outside the house, making it feel honest, grounded, and close to its surroundings."
                },
                {
                  label: language === "id" ? "Kayu Nangka" : "Jackfruit Wood",
                  text:
                    language === "id"
                      ? "Pemilihan kayu nangka berangkat dari kedekatan material ini dengan cerita lokal dan akar sejarah Gunung Kidul."
                      : "Jackfruit wood was chosen for its closeness to local stories and the historical roots of Gunung Kidul."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass-panel rounded-[1.5rem] border-white/10 p-4 sm:rounded-[1.75rem] sm:p-5"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-secondary sm:text-sm sm:tracking-[0.25em]">{item.label}</p>
                  <p className="mt-3 text-sm leading-7 text-white/75">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <Link
            href="/#tentang"
            className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm text-white/75 transition hover:text-white sm:flex"
          >
            <span>{language === "id" ? "Gulir ke bawah" : "Scroll down"}</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={18} />
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}
