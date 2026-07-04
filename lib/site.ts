const DEFAULT_SITE_URL = "https://your-domain.vercel.app";

export function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!envUrl) {
    return DEFAULT_SITE_URL;
  }

  return envUrl.replace(/\/+$/, "");
}
