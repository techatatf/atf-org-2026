import { createFileRoute } from "@tanstack/react-router";
import { Bookmark, Calendar, Share2 } from "lucide-react";

import { AppLink } from "@/components/site/AppLink";
import {
  ContentBand,
  EmptyState,
  IconButton,
  SubpageTemplate,
} from "@/components/site/Page";
import { newsItems } from "@/lib/site-data";

export const Route = createFileRoute("/news/$articleId")({
  component: NewsArticlePage,
});

function NewsArticlePage() {
  const { articleId } = Route.useParams();
  const article = newsItems.find((item) => item.id === articleId);

  if (!article) {
    return (
      <EmptyState
        title="Article Not Found"
        description="This article does not exist or has been removed."
        href="/news"
        action="Back to News"
      />
    );
  }

  return (
    <SubpageTemplate
      hero={{
        eyebrow: article.category,
        title: article.title,
        description: article.excerpt,
      }}
    >
      <ContentBand>
        <article className="mx-auto max-w-3xl">
          <div className="mb-10 flex flex-wrap items-center gap-4 border-b border-atf-gray-200 pb-8 text-sm text-atf-gray-500">
            <span className="inline-flex items-center gap-2">
              <Calendar className="size-4 text-primary" aria-hidden="true" />
              {article.date}
            </span>
            <div className="ml-auto flex gap-2">
              <IconButton
                aria-label="Share article"
              >
                <Share2 className="size-5" aria-hidden="true" />
              </IconButton>
              <IconButton
                aria-label="Bookmark article"
              >
                <Bookmark className="size-5" aria-hidden="true" />
              </IconButton>
            </div>
          </div>

          <p className="text-xl leading-9 text-atf-ink">{article.excerpt}</p>
          <div className="mt-8 space-y-5">
            {article.content.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-atf-gray-500">
                {paragraph}
              </p>
            ))}
          </div>

          <AppLink href="/news" className="atf-link mt-12">
            Back to News
          </AppLink>
        </article>
      </ContentBand>
    </SubpageTemplate>
  );
}
