import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";

import { IconButton, OpportunityLink, SiteLogo } from "@/components/site/Page";
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
    <header className="sticky top-0 z-50 border-b border-atf-gray-200 bg-white text-atf-ink shadow-sm">
      {announcementVisible ? (
        <div className="border-b border-white/10 bg-atf-black text-white">
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
            <IconButton
              aria-label="Dismiss announcement"
              variant="ghost"
              className="size-8 text-white/55 hover:text-white"
              onClick={() => setAnnouncementVisible(false)}
            >
              <X className="size-4" aria-hidden="true" />
            </IconButton>
          </div>
        </div>
      ) : null}

      <div className="atf-container flex h-20 items-center justify-between gap-6">
        <Link to="/" className="inline-flex items-center">
          <SiteLogo variant="fullColor" className="h-10 max-w-[220px]" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label} modal={false}>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 px-3 py-2 font-display text-xs font-bold uppercase text-atf-gray-700 transition-colors hover:text-atf-black"
                  >
                    {item.label}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="min-w-64 rounded-none border-atf-gray-200 bg-white p-2 text-atf-ink shadow-xl"
                >
                  {item.children.map((child) => (
                    <DropdownMenuItem
                      key={child.to}
                      asChild
                      className="rounded-none focus:bg-atf-gray-100 focus:text-atf-black"
                    >
                      <SmartLink
                        to={child.to}
                        className="block cursor-pointer px-3 py-2 text-sm text-atf-gray-700 hover:text-atf-black"
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
                className="px-3 py-2 font-display text-xs font-bold uppercase text-atf-gray-700 transition-colors hover:text-atf-black"
              >
                {item.label}
              </SmartLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <OpportunityLink
            href="/consulting"
            variant="outline"
            size="sm"
            corner={false}
            className="hidden lg:inline-flex"
          >
            Partner With Us
          </OpportunityLink>
          <OpportunityLink
            href="/challenge"
            variant="primary"
            size="sm"
            className="hidden lg:inline-flex"
          >
            Join Challenge
          </OpportunityLink>
          <IconButton
            variant="ghost"
            className="text-atf-ink lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </IconButton>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          aria-label="Mobile"
          className="border-t border-atf-gray-200 bg-white px-6 py-6 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-atf-gray-200 py-3">
                  <p className="mb-3 font-display text-xs font-bold uppercase text-atf-gray-500">
                    {item.label}
                  </p>
                  <div className="grid gap-2">
                    {item.children.map((child) => (
                      <SmartLink
                        key={child.to}
                        to={child.to}
                        onClick={closeMobile}
                        className="py-2 font-display text-base font-bold uppercase text-atf-ink hover:text-primary"
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
                  className="border-b border-atf-gray-200 py-4 font-display text-base font-bold uppercase text-atf-ink hover:text-primary"
                >
                  {item.label}
                </SmartLink>
              ),
            )}
          </div>
          <div className="mt-6 grid gap-3">
            <OpportunityLink
              href="/consulting"
              variant="outline"
              corner={false}
              onClick={closeMobile}
            >
              Partner With ATF
            </OpportunityLink>
            <OpportunityLink
              href="https://bit.ly/atf-wf"
              variant="primary"
              onClick={closeMobile}
            >
              Apply to Challenge
            </OpportunityLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
