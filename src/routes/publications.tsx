import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, FileText, Library, Newspaper } from "lucide-react";

import { AppLink } from "@/components/site/AppLink";
import { ContentBand, PageHero, PageShell } from "@/components/site/Page";
import { publicationCategories } from "@/lib/site-data";

export const Route = createFileRoute("/publications")({
  component: PublicationsPage,
});

const icons = {
  Articles: Newspaper,
  "Research Papers": BookOpen,
  Reports: FileText,
  "Case Studies": Library,
} as const;

function PublicationsPage() {
  return (
    <PageShell muted>
      <PageHero
        eyebrow="Resources"
        title="Publications"
        icon={Library}
        description="Explore ATF's library of thought leadership articles, research papers, reports, and implementation case studies."
      />
      <ContentBand>
        <div className="grid gap-6 md:grid-cols-2">
          {publicationCategories.map((category) => {
            const Icon = icons[category.title];
            const card = (
              <article
                key={category.title}
                className="h-full rounded-md border border-atf-gray-200 bg-white p-6 transition-colors hover:bg-atf-gray-50"
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-xl font-black uppercase text-atf-black">
                      {category.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-atf-gray-500">
                      {category.description}
                    </p>
                  </div>
                  <span className="rounded-md bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                    {category.count}
                  </span>
                </div>
              </article>
            );

            if (!("href" in category)) return card;

            return (
              <AppLink key={category.title} href={category.href} className="block h-full">
                {card}
              </AppLink>
            );
          })}
        </div>
      </ContentBand>
    </PageShell>
  );
}
