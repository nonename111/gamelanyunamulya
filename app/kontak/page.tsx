import { siteContent } from "@/lib/content";
import { ContactSection } from "@/components/sections/contact-section";
import { PageHero } from "@/components/sections/page-hero";
import { SectionTitle } from "@/components/sections/section-title";

export default function ContactPage() {
  const whatsappChannel = siteContent.contact.channels.find(
    (channel) => channel.label === "WhatsApp"
  );

  return (
    <main className="pb-16">
      <PageHero
        eyebrow={siteContent.contact.sectionLabel}
        title={siteContent.contact.title}
        description={siteContent.contact.description}
        titleHref={whatsappChannel?.href}
      />
      <section className="section-spacing pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow={siteContent.contact.sectionLabel}
            title={siteContent.contact.title}
            description={siteContent.contact.description}
          />
          <ContactSection
            description={siteContent.contact.description}
            address={siteContent.contact.address}
            channels={siteContent.contact.channels}
            mapQuery={siteContent.contact.mapQuery}
          />
        </div>
      </section>
    </main>
  );
}
