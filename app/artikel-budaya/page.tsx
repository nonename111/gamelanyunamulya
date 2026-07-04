import { siteContent } from "@/lib/content";
import { ArticleGrid } from "@/components/sections/article-grid";
import { PageHero } from "@/components/sections/page-hero";
import { SectionTitle } from "@/components/sections/section-title";

export default function ArticlesPage() {
  return (
    <main className="pb-16">
      <PageHero
        eyebrow={siteContent.articles.sectionLabel}
        title={siteContent.articles.title}
        description={siteContent.articles.description}
      />
      <section className="section-spacing pt-0">
        <div className="container-shell">
          <SectionTitle
            eyebrow={siteContent.articles.sectionLabel}
            title={siteContent.articles.title}
            description={siteContent.articles.description}
          />
          <ArticleGrid
            featured={siteContent.articles.featured}
            items={siteContent.articles.items}
          />
        </div>
      </section>
    </main>
  );
}
