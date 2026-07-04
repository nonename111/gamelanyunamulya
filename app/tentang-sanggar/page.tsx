import { siteContent } from "@/lib/content";
import { AboutGrid } from "@/components/sections/about-grid";
import { PageHero } from "@/components/sections/page-hero";
import { SectionTitle } from "@/components/sections/section-title";

export default function AboutPage() {
  return (
    <main className="pb-16">
      <PageHero
        eyebrow={siteContent.about.sectionLabel}
        title={siteContent.about.title}
        description={siteContent.about.description}
      />
      <section className="section-spacing pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow={siteContent.about.sectionLabel}
            title={siteContent.about.title}
            description={siteContent.about.description}
          />
          <AboutGrid items={siteContent.about.cards} />
        </div>
      </section>
    </main>
  );
}
