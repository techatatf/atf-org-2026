import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

import { ContentBand, PageHero, PageShell } from "@/components/site/Page";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsOfServicePage,
});

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using ATF services, you agree to be bound by these Terms of Service.",
  },
  {
    title: "Use of Services",
    content:
      "You agree to use ATF services only for lawful purposes and in accordance with these terms.",
  },
  {
    title: "Intellectual Property",
    content:
      "ATF content, trademarks, and intellectual property may not be used without permission.",
  },
  {
    title: "User Content",
    content:
      "You retain ownership of content you submit while granting ATF a license to use it in connection with programs and services.",
  },
  {
    title: "Limitation of Liability",
    content:
      "ATF is not liable for indirect, incidental, or consequential damages arising from use of its services.",
  },
  {
    title: "Changes to Terms",
    content:
      "ATF may update these terms from time to time. Continued use of services constitutes acceptance of updated terms.",
  },
  {
    title: "Governing Law",
    content:
      "These terms are governed by the laws of Ghana. Disputes shall be resolved in Accra, Ghana.",
  },
];

function TermsOfServicePage() {
  return (
    <PageShell muted>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        icon={FileText}
        description="Last updated: January 1, 2026. Please read these terms carefully before using African Technology Forum services."
      />
      <ContentBand>
        <div className="mx-auto grid max-w-3xl gap-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-md border border-atf-gray-200 bg-white p-6"
            >
              <h2 className="font-display text-xl font-black uppercase text-atf-black">
                {section.title}
              </h2>
              <p className="atf-body mt-3">{section.content}</p>
            </section>
          ))}
        </div>
      </ContentBand>
    </PageShell>
  );
}
