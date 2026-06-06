/**
 * @vitest-environment jsdom
 */
import { cleanup, render, screen, within } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { HomePage } from "@/components/site/HomePage";

afterEach(() => {
  cleanup();
});

vi.mock("@tanstack/react-router", () => ({
  Link: ({
    to,
    params,
    children,
    ...props
  }: {
    to: string;
    params?: Record<string, string>;
    children: ReactNode;
    [key: string]: unknown;
  }) => {
    const href =
      params && "country" in params ? `/countries/${params.country}` : to;

    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
}));

describe("HomePage hero", () => {
  it("renders separate desktop and compact hero variants", () => {
    render(<HomePage />);

    const desktopHero = screen.getByRole("region", {
      name: "ATF desktop hero",
    });
    const compactHero = screen.getByRole("region", {
      name: "ATF compact hero",
    });

    expect(desktopHero.classList.contains("atf-desktop-hero")).toBe(true);
    expect(desktopHero.classList.contains("hidden")).toBe(true);
    expect(desktopHero.classList.contains("lg:block")).toBe(true);
    expect(compactHero.classList.contains("lg:hidden")).toBe(true);
    expect(compactHero.getAttribute("data-tone")).toBe("light");
  });

  it("puts compact media before a light content panel with CTAs and stats", () => {
    render(<HomePage />);

    const compactHero = screen.getByRole("region", {
      name: "ATF compact hero",
    });
    const media = compactHero.querySelector(".atf-compact-hero-media");
    const panel = compactHero.querySelector(".atf-compact-hero-panel");

    expect(media).not.toBeNull();
    expect(panel).not.toBeNull();
    if (!media || !panel) throw new Error("Compact hero structure is missing");

    const panelElement = panel as HTMLElement;

    expect(
      media.compareDocumentPosition(panel) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(panelElement.classList.contains("bg-white")).toBe(true);
    expect(panelElement.classList.contains("text-atf-ink")).toBe(true);

    const panelQueries = within(panelElement);

    expect(
      panelQueries.getByRole("link", { name: "Partner With ATF" }).getAttribute(
        "href",
      ),
    ).toBe("/consulting");
    expect(
      panelQueries.getByRole("link", { name: "Our Impact" }).getAttribute("href"),
    ).toBe("/about");

    expect(panelQueries.getByText("54")).toBeTruthy();
    expect(panelQueries.getByText("Countries")).toBeTruthy();
    expect(panelQueries.getByText("200+")).toBeTruthy();
    expect(panelQueries.getByText("Programs")).toBeTruthy();
    expect(panelQueries.getByText("10K+")).toBeTruthy();
    expect(panelQueries.getByText("Members")).toBeTruthy();
  });
});
