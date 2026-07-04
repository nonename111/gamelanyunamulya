"use client";

import Link from "next/link";

import type { ContactChannel, LocalizedText } from "@/lib/types";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";

export function ContactSection({
  description,
  address,
  channels,
  mapQuery
}: {
  description: LocalizedText;
  address: LocalizedText;
  channels: ContactChannel[];
  mapQuery: string;
}) {
  const { language } = useLanguage();

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <Reveal className="space-y-6">
        <div className="rounded-[2rem] border border-primary/10 bg-card/85 p-6 shadow-soft">
          <h3 className="font-serif text-2xl sm:text-3xl">
            {language === "id" ? "Temui Kami" : "Find Us"}
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {pickText(description, language)}
          </p>
          <div className="mt-6 rounded-[1.5rem] border border-primary/10 bg-background/90 p-4">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              {language === "id" ? "Alamat" : "Address"}
            </p>
            <p className="mt-2 text-sm leading-7">{pickText(address, language)}</p>
          </div>
          <div className="mt-6 grid gap-4">
            {channels.map((channel) => (
              <Link
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-primary/10 bg-background/90 px-5 py-4 transition hover:border-secondary"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-primary sm:tracking-[0.28em]">
                  {channel.label}
                </p>
                <p className="mt-2 break-words text-sm text-muted-foreground">{channel.value}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-primary/10 shadow-soft">
          <iframe
            title="Museum location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=13&output=embed`}
            className="h-[300px] w-full sm:h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="rounded-[2rem] border border-primary/10 bg-card/85 p-6 shadow-soft sm:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.28em]">
            {language === "id" ? "Informasi Kontak" : "Contact Information"}
          </p>
          <h3 className="mt-4 font-serif text-2xl leading-tight text-balance sm:text-4xl">
            {language === "id"
              ? "Silakan hubungi langsung melalui kanal yang tersedia."
              : "Please reach out directly through the available channels."}
          </h3>
          <p className="mt-4 text-sm leading-8 text-muted-foreground sm:text-base">
            {language === "id"
              ? "Karena website ini tidak menggunakan database, bagian kontak dibuat sederhana tanpa formulir. Pengunjung bisa langsung memakai WhatsApp, Instagram, YouTube, atau membuka Google Maps yang tersedia."
              : "Because this website does not use a database, the contact section stays simple without a form. Visitors can directly use the available WhatsApp, Instagram, YouTube, or Google Maps links."}
          </p>
          <div className="mt-6 rounded-[1.5rem] border border-primary/10 bg-background/90 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-primary sm:tracking-[0.28em]">
              {language === "id" ? "Catatan" : "Note"}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {language === "id"
                ? "Jika nanti dibutuhkan, formulir bisa ditambahkan kembali saat website sudah memakai backend atau layanan database."
                : "If needed later, a form can be added back once the website uses a backend or database service."}
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
