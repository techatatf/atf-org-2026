import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavItem =
  | { label: string; to: string; children?: never }
  | { label: string; to?: never; children: { label: string; to: string }[] };

const navItems: NavItem[] = [
  {
    label: "Who We Are",
    children: [
      { label: "Our Mission, Vision and Story", to: "/about" },
      { label: "The Team And Contributors", to: "/team" },
    ],
  },
  {
    label: "What We Do",
    children: [
      { label: "ATF Consulting", to: "/consulting" },
      { label: "ATF Challenge", to: "/challenge" },
      { label: "ATF Chapters", to: "/chapters" },
    ],
  },
  {
    label: "Where We Work",
    children: [
      { label: "Ghana", to: "/countries/ghana" },
      { label: "Nigeria", to: "/countries/nigeria" },
      { label: "Kenya", to: "/countries/kenya" },
      { label: "South Africa", to: "/countries/south-africa" },
    ],
  },
  {
    label: "Publications",
    children: [
      { label: "Articles", to: "/articles" },
      { label: "Research Papers", to: "/research" },
      { label: "Library", to: "/publications" },
    ],
  },
  { label: "Newsroom", to: "/news" },
];

function SmartLink({
  to,
  children,
  className,
  onClick,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  if (to.startsWith("/countries/")) {
    const country = to.replace("/countries/", "");
    return (
      <Link
        to="/countries/$country"
        params={{ country }}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Navbar() {
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-atf-black text-white shadow-sm">
      {announcementVisible ? (
        <div className="border-b border-white/10 bg-atf-black">
          <div className="atf-container flex min-h-11 items-center gap-3 py-2 text-sm">
            <span className="bg-primary px-2 py-1 font-display text-[10px] font-black uppercase">
              New
            </span>
            <p className="hidden flex-1 text-white/75 sm:block">
              <strong className="font-semibold text-white">
                ATF Challenge 2026 is open
              </strong>{" "}
              - free AI training and mentorship for young Africans.
              Applications close June 30.
            </p>
            <a
              href="https://bit.ly/atf-wf"
              target="_blank"
              rel="noreferrer"
              className="ml-auto font-display text-xs font-bold uppercase text-white underline decoration-primary decoration-2 underline-offset-4 hover:text-atf-red-bright"
            >
              Apply now
            </a>
            <button
              type="button"
              aria-label="Dismiss announcement"
              className="inline-flex size-8 items-center justify-center rounded-md text-white/55 hover:bg-white/10 hover:text-white"
              onClick={() => setAnnouncementVisible(false)}
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}

      <div className="atf-container flex h-20 items-center justify-between gap-6">
        <Link to="/" className="inline-flex items-center">
          <img
            src="/atf-assets/v2/logo-bright.svg"
            alt="African Technology Forum"
            className="h-10 w-auto"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label} modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-1 rounded-md px-3 font-display text-xs font-bold uppercase text-white/75 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="min-w-64 rounded-md border-white/10 bg-atf-black p-2 text-white shadow-xl"
                >
                  {item.children.map((child) => (
                    <DropdownMenuItem
                      key={child.to}
                      asChild
                      className="rounded-md focus:bg-white/10 focus:text-white"
                    >
                      <SmartLink
                        to={child.to}
                        className="block cursor-pointer px-3 py-2 text-sm text-white/75 hover:text-white"
                      >
                        {child.label}
                      </SmartLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <SmartLink
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 font-display text-xs font-bold uppercase text-white/75 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </SmartLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/consulting"
            className="hidden rounded-md border border-white/20 px-4 py-2 font-display text-xs font-bold uppercase text-white/80 transition-colors hover:border-white/60 hover:text-white lg:inline-flex"
          >
            Partner With Us
          </Link>
          <Link to="/challenge" className="hidden atf-button lg:inline-flex">
            Join Challenge
          </Link>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-white hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          aria-label="Mobile"
          className="border-t border-white/10 bg-atf-black px-6 py-6 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-white/10 py-3">
                  <p className="mb-3 font-display text-xs font-bold uppercase text-white/40">
                    {item.label}
                  </p>
                  <div className="grid gap-2">
                    {item.children.map((child) => (
                      <SmartLink
                        key={child.to}
                        to={child.to}
                        onClick={closeMobile}
                        className="py-2 font-display text-base font-bold uppercase text-white hover:text-atf-red-bright"
                      >
                        {child.label}
                      </SmartLink>
                    ))}
                  </div>
                </div>
              ) : (
                <SmartLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMobile}
                  className="border-b border-white/10 py-4 font-display text-base font-bold uppercase text-white hover:text-atf-red-bright"
                >
                  {item.label}
                </SmartLink>
              ),
            )}
          </div>
          <div className="mt-6 grid gap-3">
            <Link
              to="/consulting"
              onClick={closeMobile}
              className="atf-button-outline atf-button-outline-light"
            >
              Partner With ATF
            </Link>
            <a
              href="https://bit.ly/atf-wf"
              target="_blank"
              rel="noreferrer"
              className="atf-button"
              onClick={closeMobile}
            >
              Apply to Challenge
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
