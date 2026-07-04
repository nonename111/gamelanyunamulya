import type { Metadata } from "next";

import "@/app/globals.css";

import { BackToTop } from "@/components/layout/back-to-top";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { LanguageProvider } from "@/components/providers/language-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yuna Mulya Gamelan",
    template: "%s | Yuna Mulya Gamelan"
  },
  description:
    "Museum digital modern untuk mengenalkan, melestarikan, dan mendokumentasikan seni gamelan berbahan kayu nangka.",
  keywords: [
    "gamelan kayu nangka",
    "museum digital budaya",
    "sanggar yuna mulya",
    "budaya jawa",
    "warisan nusantara"
  ],
  openGraph: {
    title: "Yuna Mulya Gamelan",
    description:
      "Pengalaman museum digital yang elegan untuk menjelajahi gamelan kayu nangka, sejarah, proses kriya, dan kegiatan budaya.",
    url: siteUrl,
    siteName: "Yuna Mulya Gamelan",
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuna Mulya Gamelan",
    description:
      "Museum digital budaya Jawa dengan nuansa premium, hangat, dan interaktif."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <LoadingScreen />
            <Navbar />
            {children}
            <Footer />
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
