import { siteContent } from "@/lib/content";
import { EventGrid } from "@/components/sections/event-grid";
import { PageHero } from "@/components/sections/page-hero";
import { SectionTitle } from "@/components/sections/section-title";

export default function EventsPage() {
  return (
    <main className="pb-16">
      <PageHero
        eyebrow={siteContent.events.sectionLabel}
        title={siteContent.events.title}
        description={siteContent.events.description}
      />
      <section className="section-spacing pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow={siteContent.events.sectionLabel}
            title={siteContent.events.title}
            description={siteContent.events.description}
          />
          <EventGrid items={siteContent.events.items} />
        </div>
      </section>
    </main>
  );
}
