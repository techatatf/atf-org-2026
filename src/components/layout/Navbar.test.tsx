/**
 * @vitest-environment jsdom
 */
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Navbar } from "@/components/layout/Navbar";

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
    children: React.ReactNode;
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

describe("Navbar", () => {
  it("keeps the four section parents as dropdown triggers", () => {
    render(<Navbar />);

    const primaryNav = screen.getByRole("navigation", { name: "Primary" });
    const dropdownTriggers = within(primaryNav)
      .getAllByRole("button")
      .map((button) => ({
        label: button.textContent,
        hasMenu: button.getAttribute("aria-haspopup"),
      }));

    expect(dropdownTriggers).toEqual([
      { label: "Who We Are", hasMenu: "menu" },
      { label: "What We Do", hasMenu: "menu" },
      { label: "Where We Work", hasMenu: "menu" },
      { label: "Publications", hasMenu: "menu" },
    ]);
  });

  it("keeps Publications as a dropdown family while Newsroom remains elevated", () => {
    render(<Navbar />);

    fireEvent.pointerDown(screen.getByRole("button", { name: "Publications" }));

    const menu = screen.getByRole("menu");
    const desktopItems = within(menu)
      .getAllByRole("link")
      .map((item) => ({
        label: item.textContent,
        href: item.getAttribute("href"),
      }));

    expect(desktopItems).toEqual([
      { label: "Overview", href: "/publications" },
      { label: "Newsroom", href: "/news" },
      { label: "Articles", href: "/articles" },
      { label: "Research Papers", href: "/research" },
      { label: "Library", href: "/library" },
    ]);

    expect(
      within(screen.getByRole("navigation", { name: "Primary" }))
        .getByRole(
          "link",
          { name: "Newsroom" },
        )
        .getAttribute("href"),
    ).toBe("/news");
  });

  it("omits challenge CTAs and keeps the mobile menu scrollable", () => {
    render(<Navbar />);

    expect(
      screen.queryByRole("link", { name: "Join Challenge" }),
    ).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    const mobileMenu = screen.getByRole("navigation", { name: "Mobile" });

    expect(
      within(mobileMenu).queryByRole("link", { name: "Apply to Challenge" }),
    ).toBeNull();
    expect(mobileMenu.classList.contains("overflow-y-auto")).toBe(true);
    expect(mobileMenu.classList.contains("overscroll-contain")).toBe(true);
    expect([...mobileMenu.classList].some((name) => name.startsWith("max-h-"))).toBe(
      true,
    );
  });

  it("mirrors the section hierarchy in the mobile menu", () => {
    render(<Navbar />);

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    const mobileMenu = screen.getByRole("navigation", { name: "Mobile" });
    const mobileLinks = within(mobileMenu)
      .getAllByRole("link")
      .map((link) => ({
        label: link.textContent,
        href: link.getAttribute("href"),
      }));

    expect(mobileLinks).toEqual([
      { label: "Overview", href: "/who-we-are" },
      { label: "Our Mission, Vision and Story", href: "/about" },
      { label: "The Team And Contributors", href: "/team" },
      { label: "Overview", href: "/what-we-do" },
      { label: "ATF Consulting", href: "/consulting" },
      { label: "ATF Challenge", href: "/challenge" },
      { label: "ATF Chapters", href: "/chapters" },
      { label: "Overview", href: "/where-we-work" },
      { label: "Ghana", href: "/countries/ghana" },
      { label: "Nigeria", href: "/countries/nigeria" },
      { label: "Kenya", href: "/countries/kenya" },
      { label: "South Africa", href: "/countries/south-africa" },
      { label: "Overview", href: "/publications" },
      { label: "Newsroom", href: "/news" },
      { label: "Articles", href: "/articles" },
      { label: "Research Papers", href: "/research" },
      { label: "Library", href: "/library" },
      { label: "Newsroom", href: "/news" },
      { label: "Partner With ATF", href: "/consulting" },
    ]);
  });
});
