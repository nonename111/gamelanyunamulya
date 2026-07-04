import { siteContent } from "@/lib/content";
import { PageHero } from "@/components/sections/page-hero";
import { SectionTitle } from "@/components/sections/section-title";
import { Timeline } from "@/components/sections/timeline";

export default function HistoryPage() {
  return (
    <main className="pb-16">
      <PageHero
        eyebrow={siteContent.history.sectionLabel}
        title={siteContent.history.title}
        description={siteContent.history.description}
      />
      <section className="section-spacing pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow={siteContent.history.sectionLabel}
            title={siteContent.history.title}
            description={siteContent.history.description}
          />
          <Timeline items={siteContent.history.timeline} />
        </div>
      </section>
    </main>
  );
}
