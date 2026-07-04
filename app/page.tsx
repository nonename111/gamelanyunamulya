import { siteContent } from "@/lib/content";
import { Hero } from "@/components/sections/hero";
import { DocumentationGallery } from "@/components/sections/documentation-gallery";
import { SectionTitle } from "@/components/sections/section-title";
import { Timeline } from "@/components/sections/timeline";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { AboutGrid } from "@/components/sections/about-grid";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="pb-16">
      <Hero />

      <section id="tentang" className="section-spacing">
        <div className="container-shell">
          <SectionTitle
            eyebrow={siteContent.about.sectionLabel}
            title={siteContent.about.title}
            description={siteContent.about.description}
          />
          <AboutGrid items={siteContent.about.cards} />
        </div>
      </section>

      <section id="sejarah" className="section-spacing pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow={siteContent.history.sectionLabel}
            title={siteContent.history.title}
            description={siteContent.history.description}
          />
          <Timeline items={siteContent.history.timeline} />
        </div>
      </section>

      <section id="dokumentasi" className="section-spacing pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow={{ id: "Dokumentasi", en: "Documentation" }}
            title={{
              id: "Foto-foto asli alat dan kegiatan di Yuna Mulya Gamelan",
              en: "Authentic photos of the instruments and activities at Yuna Mulya Gamelan"
            }}
            description={{
              id: "Bagian ini menampilkan dokumentasi nyata dari alat gamelan kayu nangka, ruang sanggar yang berada di luar rumah, dan suasana saat alat dimainkan bersama.",
              en: "This section shows real documentation of the jackfruit-wood gamelan, the outdoor studio space, and the atmosphere when the instruments are played together."
            }}
          />
          <DocumentationGallery />
        </div>
      </section>

      <section id="kayu-nangka" className="section-spacing pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow={siteContent.process.sectionLabel}
            title={siteContent.process.title}
            description={siteContent.process.description}
          />
          <ProcessTimeline steps={siteContent.process.steps} />
        </div>
      </section>

      <section id="penutup" className="section-spacing pt-0">
        <div className="container-shell">
          <Reveal>
            <div className="rounded-[2rem] border border-primary/10 bg-card/85 px-6 py-10 shadow-soft sm:px-10">
              <p className="text-xs uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.28em]">
                Penutup
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-balance sm:text-5xl">
                Sanggar ini tumbuh sederhana, tetapi niatnya tetap besar untuk
                menjaga cerita lokal.
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                Website ini sengaja dibuat sederhana agar selaras dengan kondisi
                sanggar yang berada di luar rumah dan dokumentasi yang masih
                terbatas. Fokus utamanya bukan pada tampilan yang ramai, tetapi
                pada cerita berdiri sejak 2014 dan alasan memilih kayu nangka
                sebagai bagian dari identitas budaya Gunung Kidul.
              </p>
              <div className="mt-7">
                <Button asChild>
                  <Link href="/kontak">Buka Halaman Kontak</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
