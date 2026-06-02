import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";

import { ContentBand, SubpageTemplate, SurfaceCard } from "@/components/site/Page";

export const Route = createFileRoute("/team")({
  component: TeamPage,
});

const teamGroups = [
  { name: "Leadership Team", count: "5" },
  { name: "Advisory Board", count: "8" },
  { name: "Regional Directors", count: "12" },
  { name: "Program Managers", count: "15" },
  { name: "Community Contributors", count: "100+" },
];

function TeamPage() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Who We Are",
        title: "The Team & Contributors",
        icon: Users,
        description:
          "Meet the people and contributor groups driving ATF's mission to transform Africa through science and technology.",
      }}
    >
      <ContentBand>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="atf-section-title">A distributed network of builders.</h2>
            <p className="atf-body mt-6">
              ATF combines a central leadership team with regional directors,
              advisors, program managers, and local contributors who keep
              programs relevant to their communities.
            </p>
          </div>
          <SurfaceCard hover={false}>
            <h3 className="font-display text-xl font-black uppercase text-atf-black">
              Team Structure
            </h3>
            <div className="mt-6 divide-y divide-atf-gray-200">
              {teamGroups.map((group) => (
                <div
                  key={group.name}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <span className="font-medium text-atf-ink">{group.name}</span>
                  <span className="bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                    {group.count}
                  </span>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </ContentBand>
    </SubpageTemplate>
  );
}
