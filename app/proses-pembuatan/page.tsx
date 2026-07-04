import { siteContent } from "@/lib/content";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { SectionTitle } from "@/components/sections/section-title";

export default function CraftPage() {
  return (
    <main className="pb-16">
      <PageHero
        eyebrow={siteContent.process.sectionLabel}
        title={siteContent.process.title}
        description={siteContent.process.description}
      />
      <section className="section-spacing pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow={siteContent.process.sectionLabel}
            title={siteContent.process.title}
            description={siteContent.process.description}
          />
          <ProcessTimeline steps={siteContent.process.steps} />
        </div>
      </section>
    </main>
  );
}
