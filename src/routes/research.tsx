import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, ExternalLink } from "lucide-react";

import { ContentBand, PageHero, PageShell } from "@/components/site/Page";
import { researchPapers } from "@/lib/site-data";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <PageShell muted>
      <PageHero
        eyebrow="Publications"
        title="Research Papers"
        icon={BookOpen}
        description="In-depth research and analysis on technology trends, opportunities, and challenges across the African continent."
      />
      <ContentBand>
        <div className="grid gap-4">
          {researchPapers.map((paper) => (
            <article
              key={paper.title}
              className="flex flex-col gap-5 rounded-md border border-atf-gray-200 bg-white p-6 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="font-display text-xs font-bold uppercase text-primary">
                  {paper.type}
                </p>
                <h2 className="mt-3 font-display text-2xl font-black uppercase leading-tight text-atf-black">
                  {paper.title}
                </h2>
                <p className="mt-2 text-sm text-atf-gray-500">
                  {paper.pages} pages - {paper.year}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-md border border-atf-gray-200 text-atf-gray-500 hover:border-primary hover:text-primary"
                  aria-label={`Download ${paper.title}`}
                >
                  <Download className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-md border border-atf-gray-200 text-atf-gray-500 hover:border-primary hover:text-primary"
                  aria-label={`Open ${paper.title}`}
                >
                  <ExternalLink className="size-5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </ContentBand>
    </PageShell>
  );
}
