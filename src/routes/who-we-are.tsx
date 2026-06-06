import { createFileRoute } from "@tanstack/react-router";

import { WhoWeAreLandingPage } from "@/components/site/SectionLandingPages";

export const Route = createFileRoute("/who-we-are")({
  component: WhoWeAreLandingPage,
});
