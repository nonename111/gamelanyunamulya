import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const routes = [
  "",
  "/tentang-sanggar",
  "/sejarah",
  "/mengenal-gamelan",
  "/proses-pembuatan",
  "/galeri",
  "/artikel-budaya",
  "/kegiatan",
  "/kontak"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const siteUrl = getSiteUrl();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
