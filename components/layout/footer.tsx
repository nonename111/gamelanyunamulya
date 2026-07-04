"use client";

import Link from "next/link";

import { siteContent } from "@/lib/content";
import { pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { BrandLogo } from "@/components/shared/brand-logo";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-primary/10 bg-card/70 py-12">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <BrandLogo className="w-28 sm:w-36" />
          <div>
            <h2 className="font-serif text-2xl">{siteContent.brand.name}</h2>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              {pickText(siteContent.brand.tagline, language)}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl">
            {language === "id" ? "Navigasi" : "Navigation"}
          </h3>
          <div className="mt-4 grid gap-3 text-sm">
            {siteContent.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary"
              >
                {pickText(item.label, language)}
              </Link>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Copyright {new Date().getFullYear()} {siteContent.brand.name} | KKNT UDB 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
