import { siteContent } from "@/lib/content";
import { GalleryMasonry } from "@/components/sections/gallery-masonry";
import { PageHero } from "@/components/sections/page-hero";
import { SectionTitle } from "@/components/sections/section-title";

export default function GalleryPage() {
  return (
    <main className="pb-16">
      <PageHero
        eyebrow={siteContent.gallery.sectionLabel}
        title={siteContent.gallery.title}
        description={siteContent.gallery.description}
      />
      <section className="section-spacing pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow={siteContent.gallery.sectionLabel}
            title={siteContent.gallery.title}
            description={siteContent.gallery.description}
          />
          <GalleryMasonry items={siteContent.gallery.items} />
        </div>
      </section>
    </main>
  );
}
