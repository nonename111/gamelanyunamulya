"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { siteContent } from "@/lib/content";
import { cn, pickText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = totalHeight > 0 ? (scrollTop / totalHeight) * 100 : 0;

      setProgress(ratio);
      setIsScrolled(scrollTop > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const themeIcon = mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container-shell">
        <div
          className={cn(
            "relative overflow-hidden rounded-[2rem] border px-3 transition-all duration-300 sm:rounded-full sm:px-4",
            isScrolled
              ? "glass-panel border-primary/10 shadow-soft"
              : "border-white/15 bg-white/10 backdrop-blur-md"
          )}
        >
          <div
            className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-secondary via-primary to-accent"
            style={{ width: `${progress}%` }}
          />
          <div className="flex items-center justify-between gap-3 py-3 sm:gap-4">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label={siteContent.brand.name}
            >
              <BrandLogo className="w-12 shrink-0 sm:w-14" priority />
              <div className="hidden sm:block">
                <p className="font-serif text-lg leading-none">
                  {siteContent.brand.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {pickText(siteContent.brand.tagline, language)}
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 lg:flex">
              {siteContent.navigation.map((item) => {
                const isAnchorLink = item.href.startsWith("/#");
                const isActive = isAnchorLink
                  ? pathname === "/" && item.href === "/#hero"
                  : pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm transition-colors hover:bg-white/60 dark:hover:bg-white/10",
                      isActive && "bg-white/70 text-primary dark:bg-white/10"
                    )}
                  >
                    {pickText(item.label, language)}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant="ghost"
                onClick={toggleLanguage}
                className="rounded-full px-3 sm:px-4"
              >
                <Languages size={18} />
                <span className="ml-2 hidden sm:inline">{language === "id" ? "ID" : "EN"}</span>
              </Button>
              <Button
                variant="ghost"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full px-3 sm:px-4"
                aria-label="Toggle theme"
              >
                {themeIcon}
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsOpen((current) => !current)}
                className="rounded-full px-3 sm:px-4 lg:hidden"
                aria-label="Toggle navigation"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </Button>
            </div>
          </div>

          {isOpen && (
            <div className="border-t border-primary/10 pb-4 pt-2 lg:hidden">
              <div className="grid gap-2">
                {siteContent.navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-3xl px-4 py-3 text-sm hover:bg-white/50 dark:hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {pickText(item.label, language)}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
