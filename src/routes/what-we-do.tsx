import { createFileRoute } from "@tanstack/react-router";

import { WhatWeDoLandingPage } from "@/components/site/SectionLandingPages";

export const Route = createFileRoute("/what-we-do")({
  component: WhatWeDoLandingPage,
});
