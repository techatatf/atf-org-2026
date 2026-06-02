import { createFileRoute } from "@tanstack/react-router";
import { Calendar, FileText, User } from "lucide-react";

import { ContentBand, PageHero, PageShell } from "@/components/site/Page";
import { articles } from "@/lib/site-data";

export const Route = createFileRoute("/articles")({
  component: ArticlesPage,
});

function ArticlesPage() {
  return (
    <PageShell muted>
      <PageHero
        eyebrow="Publications"
        title="Articles"
        icon={FileText}
        description="Insights, analysis, and thought leadership from ATF's network of technology experts, researchers, and innovators."
      />
      <ContentBand>
        <div className="grid gap-4">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-md border border-atf-gray-200 bg-white p-6"
            >
              <p className="font-display text-xs font-bold uppercase text-primary">
                {article.category}
              </p>
              <h2 className="mt-3 font-display text-2xl font-black uppercase leading-tight text-atf-black">
                {article.title}
              </h2>
              <p className="atf-body mt-3 text-sm">{article.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm text-atf-gray-500">
                <span className="inline-flex items-center gap-2">
                  <User className="size-4 text-primary" aria-hidden="true" />
                  {article.author}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="size-4 text-primary" aria-hidden="true" />
                  {article.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </ContentBand>
    </PageShell>
  );
}
