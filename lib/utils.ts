import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type Language = "id" | "en";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pickText(
  value: { id: string; en: string } | undefined,
  language: Language
) {
  if (!value) {
    return "";
  }

  return value[language];
}
