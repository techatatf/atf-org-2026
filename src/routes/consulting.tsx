import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Briefcase, CheckCircle, Target, Users } from "lucide-react";

import { AppLink } from "@/components/site/AppLink";
import { ActionCard, ContentBand, PageHero, PageShell } from "@/components/site/Page";

export const Route = createFileRoute("/consulting")({
  component: ConsultingPage,
});

const services = [
  "Digital transformation strategy",
  "Technology assessment and advisory",
  "Capacity building programs",
  "Innovation ecosystem development",
];

function ConsultingPage() {
  return (
    <PageShell muted>
      <PageHero
        eyebrow="What We Do"
        title="ATF Consulting"
        icon={Briefcase}
        description="Strategic technology consulting for governments, NGOs, enterprises, and development partners driving digital transformation across Africa."
      />
      <ContentBand>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="atf-section-title">Advisory that moves into implementation.</h2>
            <p className="atf-body mt-6">
              ATF consulting engagements combine continental context, technical
              fluency, and a network of practitioners who can support delivery
              beyond the strategy document.
            </p>
            <AppLink href="mailto:info@atfglobal.org" className="atf-button mt-8">
              Start a partnership inquiry
              <ArrowRight className="size-4" aria-hidden="true" />
            </AppLink>
          </div>
          <div className="rounded-md border border-atf-gray-200 bg-white p-6">
            <h3 className="font-display text-xl font-black uppercase text-atf-black">
              Core Services
            </h3>
            <ul className="mt-6 grid gap-4">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3 text-atf-ink">
                  <CheckCircle className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentBand>
      <ContentBand muted>
        <div className="grid gap-6 md:grid-cols-2">
          <ActionCard
            icon={Users}
            title="Expert Team"
            description="Consultants and contributors bring decades of experience in African technology development, program design, and public-sector delivery."
          />
          <ActionCard
            icon={Target}
            title="Tailored Solutions"
            description="Every engagement is shaped around the organization's context, constraints, local partners, and long-term operating capacity."
          />
        </div>
      </ContentBand>
    </PageShell>
  );
}
