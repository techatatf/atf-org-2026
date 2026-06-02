import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Newspaper } from "lucide-react";

import {
  ArticleCard,
  ContentBand,
  FilterChip,
  SubpageTemplate,
} from "@/components/site/Page";
import { newsItems } from "@/lib/site-data";

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
    <SubpageTemplate
      hero={{
        eyebrow: "Newsroom",
        title: "News & Updates",
        icon: Newspaper,
        description:
          "Stay updated with ATF announcements, events, partnerships, research, chapter activity, and impact stories.",
      }}
    >
      <ContentBand>
        <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter news articles">
          {categories.map((category) => (
            <FilterChip
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterChip>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredNews.map((article) => (
            <ArticleCard
              key={article.id}
              href={`/news/${article.id}`}
              eyebrow={`${article.category} - ${article.date}`}
              title={article.title}
              description={article.excerpt}
            >
              <span className="mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase text-atf-ink group-hover:text-primary">
                Read more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </ArticleCard>
          ))}
        </div>
      </ContentBand>
    </SubpageTemplate>
  );
}
