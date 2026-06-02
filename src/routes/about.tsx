import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Eye, Heart } from "lucide-react";

import { ActionCard, ContentBand, StatGrid, SubpageTemplate } from "@/components/site/Page";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Our Mission",
    description:
      "Promote the development of science and technology in Africa through practical programs, advisory work, and community infrastructure.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A technologically empowered Africa leading global innovation and solving the continent's most important development challenges.",
  },
  {
    icon: BookOpen,
    title: "Our Story",
    description:
      "Founded by African technologists and diaspora leaders, ATF grew from a professional forum into a pan-African implementation network.",
  },
];

function AboutPage() {
  return (
    <SubpageTemplate
      hero={{
        eyebrow: "Who We Are",
        title: "Our Mission, Vision and Story",
        description:
          "African Technology Forum is a pan-African institution dedicated to harnessing technology for Africa's development challenges.",
      }}
    >
      <ContentBand>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <ActionCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </ContentBand>
      <ContentBand muted>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="atf-section-title">Built for systemic change.</h2>
            <p className="atf-body mt-6">
              ATF works across consulting, innovation challenges, research, and
              chapters so policy, talent, and implementation reinforce one
              another. The organization connects practitioners, institutions,
              funders, and students into a durable technology network.
            </p>
          </div>
          <StatGrid
            stats={[
              { value: "1987", label: "Established as a professional forum" },
              { value: "30K+", label: "Participants reached through programs" },
              { value: "37+", label: "Active chapters across Africa" },
              { value: "3", label: "Flagship initiatives" },
            ]}
          />
        </div>
      </ContentBand>
    </SubpageTemplate>
  );
}
