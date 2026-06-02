import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Newspaper } from "lucide-react";

import { AppLink } from "@/components/site/AppLink";
import { ContentBand, PageHero, PageShell } from "@/components/site/Page";
import { newsItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/news")({
  component: NewsPage,
});

const categories = ["All", "Press", "Programs", "Research", "Partnerships", "Chapters"];

function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredNews = useMemo(
    () =>
      newsItems.filter(
        (article) =>
          activeCategory === "All" || article.category === activeCategory,
      ),
    [activeCategory],
  );

  return (
    <PageShell>
      <PageHero
        eyebrow="Newsroom"
        title="News & Updates"
        icon={Newspaper}
        description="Stay updated with ATF announcements, events, partnerships, research, chapter activity, and impact stories."
      />
      <ContentBand>
        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter news articles">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={cn(
                "rounded-md border px-3 py-2 font-display text-xs font-bold uppercase transition-colors",
                activeCategory === category
                  ? "border-atf-black bg-atf-black text-white"
                  : "border-atf-gray-200 text-atf-gray-500 hover:border-atf-black hover:text-atf-black",
              )}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredNews.map((article) => (
            <AppLink
              key={article.id}
              href={`/news/${article.id}`}
              className="group block rounded-md border border-atf-gray-200 bg-white p-6 transition-colors hover:bg-atf-gray-50"
            >
              <p className="font-display text-xs font-bold uppercase text-primary">
                {article.category} - {article.date}
              </p>
              <h2 className="mt-4 font-display text-2xl font-black uppercase leading-tight text-atf-black group-hover:text-primary">
                {article.title}
              </h2>
              <p className="atf-body mt-4 text-sm">{article.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase text-atf-ink group-hover:text-primary">
                Read more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </AppLink>
          ))}
        </div>
      </ContentBand>
    </PageShell>
  );
}
