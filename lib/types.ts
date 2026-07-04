import type { Language } from "@/lib/utils";

export type LocalizedText = Record<Language, string>;

export interface NavigationItem {
  href: string;
  route: string;
  label: LocalizedText;
}

export interface CTAItem {
  label: LocalizedText;
  href: string;
  variant?: "default" | "outline";
}

export interface HeroContent {
  eyebrow: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  primaryCta: CTAItem;
  secondaryCta: CTAItem;
}

export interface AboutCard {
  title: LocalizedText;
  description: LocalizedText;
}

export interface TimelineEntry {
  year: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface InstrumentItem {
  name: LocalizedText;
  category: "nature" | "food" | "culture";
  family: LocalizedText;
  function: LocalizedText;
  description: LocalizedText;
  detail: LocalizedText;
  audioSrc: string;
  tone: string;
}

export interface ProcessStep {
  step: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface GalleryItem {
  title: LocalizedText;
  category: string;
  caption: LocalizedText;
  palette: string;
}

export interface ArticleItem {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  excerpt: LocalizedText;
  readTime: string;
}

export interface EventItem {
  title: LocalizedText;
  type: LocalizedText;
  date: string;
  location: LocalizedText;
  description: LocalizedText;
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
}

export interface SiteContent {
  brand: {
    name: string;
    tagline: LocalizedText;
  };
  navigation: NavigationItem[];
  museumRooms: Array<{
    title: LocalizedText;
    description: LocalizedText;
    href: string;
  }>;
  hero: HeroContent;
  about: {
    sectionLabel: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    cards: AboutCard[];
  };
  history: {
    sectionLabel: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    timeline: TimelineEntry[];
  };
  instruments: {
    sectionLabel: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    filters: LocalizedText[];
    items: InstrumentItem[];
  };
  process: {
    sectionLabel: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    steps: ProcessStep[];
  };
  gallery: {
    sectionLabel: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    items: GalleryItem[];
  };
  articles: {
    sectionLabel: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    featured: ArticleItem;
    items: ArticleItem[];
  };
  events: {
    sectionLabel: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    items: EventItem[];
  };
  contact: {
    sectionLabel: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    address: LocalizedText;
    mapQuery: string;
    channels: ContactChannel[];
  };
}
