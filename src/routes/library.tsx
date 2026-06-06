import { createFileRoute } from "@tanstack/react-router";

import { LibraryPage } from "@/components/site/LibraryPage";

export const Route = createFileRoute("/library")({
  component: LibraryPage,
});
