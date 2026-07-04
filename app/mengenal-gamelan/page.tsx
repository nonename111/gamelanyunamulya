import { siteContent } from "@/lib/content";
import { PageHero } from "@/components/sections/page-hero";
import { SectionTitle } from "@/components/sections/section-title";
import { InstrumentCatalog } from "@/components/sections/instrument-catalog";
import { VirtualGamelan } from "@/components/sections/virtual-gamelan";

export default function GamelanPage() {
  return (
    <main className="pb-16">
      <PageHero
        eyebrow={siteContent.instruments.sectionLabel}
        title={siteContent.instruments.title}
        description={siteContent.instruments.description}
      />
      <section className="section-spacing pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow={siteContent.instruments.sectionLabel}
            title={siteContent.instruments.title}
            description={siteContent.instruments.description}
          />
          <InstrumentCatalog
            filters={siteContent.instruments.filters}
            items={siteContent.instruments.items}
          />
          <VirtualGamelan />
        </div>
      </section>
    </main>
  );
}
