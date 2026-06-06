/**
 * @vitest-environment jsdom
 */
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ChallengeAnnouncementBanner } from "@/components/layout/ChallengeAnnouncementBanner";

afterEach(() => cleanup());

describe("ChallengeAnnouncementBanner", () => {
  it("renders the New tag as an Opportunity Button link", () => {
    render(<ChallengeAnnouncementBanner />);

    const newLink = screen.getByRole("link", { name: "New" });

    expect(newLink.getAttribute("href")).toBe("https://bit.ly/atf-wf");
    expect(newLink.getAttribute("data-slot")).toBe("opportunity-button");
    expect(newLink.getAttribute("data-variant")).toBe("primary");
    expect(newLink.getAttribute("data-size")).toBe("sm");
    expect(newLink.getAttribute("data-density")).toBe("compact");
  });

  it("can be dismissed", () => {
    render(<ChallengeAnnouncementBanner />);

    fireEvent.click(screen.getByRole("button", { name: "Dismiss announcement" }));

    expect(
      screen.queryByText("ATF Challenge 2026 is open"),
    ).toBeNull();
  });
});
