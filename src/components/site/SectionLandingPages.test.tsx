/**
 * @vitest-environment jsdom
 */
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  PublicationsLandingPage,
  WhatWeDoLandingPage,
  WhereWeWorkLandingPage,
  WhoWeAreLandingPage,
} from "@/components/site/SectionLandingPages";

vi.mock("@tanstack/react-router", () => ({
  Link: ({
    to,
    children,
    ...props
  }: {
    to: string;
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe("PublicationsLandingPage", () => {
  it("presents Publications as a content-family overview with prominent detail destinations", () => {
    render(<PublicationsLandingPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Insights, news, and research from across the ATF network.",
      }),
    ).toBeTruthy();

    const detailPages = screen.getByRole("navigation", {
      name: "Publications detail pages",
    });

    const detailLinks = within(detailPages).getAllByRole("link").map((link) => ({
      label: within(link).getByRole("heading").textContent,
      href: link.getAttribute("href"),
    }));

    expect(detailLinks).toEqual([
      { label: "Newsroom", href: "/news" },
      { label: "Articles", href: "/articles" },
      { label: "Research Papers", href: "/research" },
      { label: "Library", href: "/library" },
    ]);
  });
});

describe("WhoWeAreLandingPage", () => {
  it("expands the homepage Who We Are section and links to its detail pages", () => {
    render(<WhoWeAreLandingPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "A pan-African technology forum built for systemic change.",
      }),
    ).toBeTruthy();

    const detailPages = screen.getByRole("navigation", {
      name: "Who We Are detail pages",
    });
    const detailLinks = within(detailPages).getAllByRole("link").map((link) => ({
      label: within(link).getByRole("heading").textContent,
      href: link.getAttribute("href"),
    }));

    expect(detailLinks).toEqual([
      { label: "Our Mission, Vision and Story", href: "/about" },
      { label: "The Team And Contributors", href: "/team" },
    ]);
  });
});

describe("WhatWeDoLandingPage", () => {
  it("expands the homepage What We Do section and links to its detail pages", () => {
    render(<WhatWeDoLandingPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Programs that connect strategy, talent, and implementation.",
      }),
    ).toBeTruthy();

    const detailPages = screen.getByRole("navigation", {
      name: "What We Do detail pages",
    });
    const detailLinks = within(detailPages).getAllByRole("link").map((link) => ({
      label: within(link).getByRole("heading").textContent,
      href: link.getAttribute("href"),
    }));

    expect(detailLinks).toEqual([
      { label: "ATF Consulting", href: "/consulting" },
      { label: "ATF Challenge", href: "/challenge" },
      { label: "ATF Chapters", href: "/chapters" },
    ]);
  });
});

describe("WhereWeWorkLandingPage", () => {
  it("expands the homepage Where We Work section and links to its country detail pages", () => {
    render(<WhereWeWorkLandingPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "A chapter network rooted across Africa.",
      }),
    ).toBeTruthy();

    const detailPages = screen.getByRole("navigation", {
      name: "Where We Work detail pages",
    });
    const detailLinks = within(detailPages).getAllByRole("link").map((link) => ({
      label: within(link).getByRole("heading").textContent,
      href: link.getAttribute("href"),
    }));

    expect(detailLinks).toEqual([
      { label: "Ghana", href: "/countries/ghana" },
      { label: "Nigeria", href: "/countries/nigeria" },
      { label: "Kenya", href: "/countries/kenya" },
      { label: "South Africa", href: "/countries/south-africa" },
    ]);
  });
});
