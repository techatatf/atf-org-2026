import { createFileRoute } from "@tanstack/react-router";

import { WhereWeWorkLandingPage } from "@/components/site/SectionLandingPages";

export const Route = createFileRoute("/where-we-work")({
  component: WhereWeWorkLandingPage,
});
