import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

import { OpportunityButton } from "@/components/site/OpportunityButton";

const announcement = {
  label: "New",
  title: "ATF Challenge 2026 is open",
  body: "free AI training and mentorship for young Africans. Applications close June 30.",
  href: "https://bit.ly/atf-wf",
  action: "Apply now",
};

export function ChallengeAnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative border-b border-white/10 bg-atf-black text-white">
      <div className="flex min-h-[46px] items-center justify-start gap-3 py-2 pl-4 pr-12 sm:justify-center sm:gap-[18px] sm:px-14 sm:py-0">
        <OpportunityButton
          href={announcement.href}
          variant="primary"
          size="sm"
          density="compact"
          target="_blank"
          rel="noreferrer"
          className="shrink-0"
        >
          {announcement.label}
        </OpportunityButton>
        <p className="hidden text-[13.5px] leading-5 text-white/80 sm:block">
          <strong className="font-semibold text-white">{announcement.title}</strong>{" "}
          - {announcement.body}
        </p>
        <a
          href={announcement.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 border-b-2 border-primary pb-0.5 font-display text-[11px] font-bold uppercase text-white transition-colors hover:text-atf-red-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-atf-black"
        >
          {announcement.action}
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
      <button
        type="button"
        className="absolute right-4 top-1/2 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-atf-black"
        aria-label="Dismiss announcement"
        onClick={() => setVisible(false)}
      >
        <X className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}
