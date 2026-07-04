"use client";

import Image from "next/image";

import { useLanguage } from "@/components/providers/language-provider";
import { Reveal } from "@/components/shared/reveal";

const documentationItems = [
  {
    src: "/documentation/doc-01.jpeg",
    title: {
      id: "Tampilan depan alat gamelan kayu nangka",
      en: "Front view of the jackfruit-wood gamelan"
    },
    description: {
      id: "Dokumentasi alat yang digunakan di sanggar dengan bentuk sederhana dan warna kayu yang masih sangat terasa.",
      en: "Documentation of the instruments used in the studio, showing their simple form and strong wooden character."
    },
    size: "large"
  },
  {
    src: "/documentation/doc-02.jpeg",
    title: {
      id: "Sudut alat dan susunan bilah",
      en: "Angles of the instrument and bar layout"
    },
    description: {
      id: "Foto ini memperlihatkan susunan alat dari jarak dekat dan kondisi nyata di ruang sanggar.",
      en: "This photo shows a close look at the instrument arrangement and the real condition of the studio space."
    },
    size: "portrait"
  },
  {
    src: "/documentation/doc-03.jpeg",
    title: {
      id: "Detail alat dari depan",
      en: "Instrument detail from the front"
    },
    description: {
      id: "Bilah kayu dan rangka alat terlihat apa adanya sebagai bagian dari dokumentasi lapangan.",
      en: "The wooden bars and frame are shown as they are, as part of this field documentation."
    },
    size: "medium"
  },
  {
    src: "/documentation/doc-04.jpeg",
    title: {
      id: "Susunan beberapa alat di area sanggar",
      en: "Several instruments arranged in the studio area"
    },
    description: {
      id: "Dokumentasi ini memperlihatkan bahwa sanggar tumbuh di ruang yang sederhana, terbuka, dan dekat dengan rumah.",
      en: "This documentation shows that the studio grows within a simple, open space close to the home."
    },
    size: "medium"
  },
  {
    src: "/documentation/doc-05.jpeg",
    title: {
      id: "Kegiatan memainkan gamelan bersama",
      en: "A shared gamelan playing session"
    },
    description: {
      id: "Foto kegiatan bersama ini menjadi bukti bahwa sanggar bukan hanya tempat alat disimpan, tetapi juga ruang belajar dan merasakan bunyi secara langsung.",
      en: "This shared activity shows that the studio is not only a place where instruments are kept, but also a space to learn and experience the sound directly."
    },
    size: "large"
  },
  {
    src: "/documentation/doc-06.jpeg",
    title: {
      id: "Proses mencoba alat di ruang sanggar",
      en: "Trying the instruments in the studio"
    },
    description: {
      id: "Dokumentasi ini memperlihatkan interaksi langsung dengan alat gamelan kayu nangka di tempat yang sederhana.",
      en: "This documentation captures direct interaction with the jackfruit-wood gamelan in a simple setting."
    },
    size: "medium"
  },
  {
    src: "/documentation/doc-07.jpeg",
    title: {
      id: "Suasana belajar yang dekat dan jujur",
      en: "A close and honest learning atmosphere"
    },
    description: {
      id: "Suasana yang tampak sederhana ini justru menunjukkan kedekatan sanggar dengan kehidupan sehari-hari masyarakat.",
      en: "This simple atmosphere shows how close the studio is to everyday community life."
    },
    size: "medium"
  },
  {
    src: "/documentation/doc-08.png",
    title: {
      id: "Pembuat dan anggota Sanggar Yuna Mulya",
      en: "The maker and members of Yuna Mulya Studio"
    },
    description: {
      id: "Foto ini menampilkan Hadi Mulyanto sebagai pemilik sekaligus pembuat gamelan bersama anggota Sanggar Yuna Mulya. Dokumentasi ini memperlihatkan bahwa sanggar tumbuh dari kebersamaan, pembelajaran, dan semangat pelestarian budaya di tengah masyarakat.",
      en: "This photo shows Hadi Mulyanto as the owner and gamelan maker together with members of Sanggar Yuna Mulya. It reflects how the studio grows through togetherness, learning, and a shared commitment to cultural preservation."
    },
    size: "large"
  }
] as const;

function getAspectClass(size: (typeof documentationItems)[number]["size"]) {
  if (size === "portrait") {
    return "aspect-[3/4]";
  }

  if (size === "large") {
    return "aspect-[16/10]";
  }

  return "aspect-[4/3]";
}

export function DocumentationGallery() {
  const { language } = useLanguage();

  return (
    <div className="mt-12 space-y-5 sm:space-y-6">
      <Reveal>
        <article className="overflow-hidden rounded-[2rem] border border-primary/10 bg-card/85 shadow-soft">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative aspect-[16/10]">
              <Image
                src={documentationItems[0].src}
                alt={documentationItems[0].title[language]}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex items-center p-6 sm:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.28em]">
                  {language === "id" ? "Dokumentasi Asli" : "Real Documentation"}
                </p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-balance sm:text-4xl">
                  {documentationItems[0].title[language]}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {documentationItems[0].description[language]}
                </p>
              </div>
            </div>
          </div>
        </article>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {documentationItems.slice(1).map((item, index) => (
          <Reveal key={item.src} delay={index * 0.04}>
            <article className="overflow-hidden rounded-[2rem] border border-primary/10 bg-card/85 shadow-soft">
              <div className={`relative ${getAspectClass(item.size)}`}>
                <Image
                  src={item.src}
                  alt={item.title[language]}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl leading-tight text-balance sm:text-2xl">
                  {item.title[language]}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description[language]}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
