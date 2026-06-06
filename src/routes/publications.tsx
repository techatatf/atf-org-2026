import { createFileRoute } from "@tanstack/react-router";

import { PublicationsLandingPage } from "@/components/site/SectionLandingPages";

export const Route = createFileRoute("/publications")({
  component: PublicationsLandingPage,
});
