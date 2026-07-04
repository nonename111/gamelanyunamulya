"use client";

import { FormEvent, useState } from "react";

import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const { language } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitted");
    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-[2rem] border border-primary/10 bg-card/85 p-6 shadow-soft"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          placeholder={language === "id" ? "Nama" : "Name"}
          className="h-12 rounded-full border border-primary/10 bg-background px-5 outline-none transition focus:border-secondary"
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="h-12 rounded-full border border-primary/10 bg-background px-5 outline-none transition focus:border-secondary"
        />
      </div>
      <input
        placeholder={language === "id" ? "Subjek" : "Subject"}
        className="h-12 w-full rounded-full border border-primary/10 bg-background px-5 outline-none transition focus:border-secondary"
      />
      <textarea
        required
        rows={5}
        placeholder={language === "id" ? "Tulis pesan Anda..." : "Write your message..."}
        className="w-full rounded-[1.5rem] border border-primary/10 bg-background px-5 py-4 outline-none transition focus:border-secondary"
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {status === "submitted"
            ? language === "id"
              ? "Pesan demo terkirim. Sambungkan form ini ke backend untuk produksi."
              : "Demo message sent. Connect this form to a backend for production."
            : language === "id"
              ? "Struktur form ini siap dihubungkan ke Supabase."
              : "This form structure is ready to connect to Supabase."}
        </p>
        <Button type="submit">{language === "id" ? "Kirim Pesan" : "Send Message"}</Button>
      </div>
    </form>
  );
}
