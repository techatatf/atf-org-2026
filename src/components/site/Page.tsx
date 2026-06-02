import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { AppLink } from "@/components/site/AppLink";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={cn("atf-eyebrow", light && "text-white/65")}>
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  body,
  action,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  action?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
      <div>
        <Eyebrow light={dark}>{eyebrow}</Eyebrow>
        <h2 className={cn("atf-section-title", dark && "text-white")}>{title}</h2>
      </div>
      {(body || action) && (
        <div className="space-y-6">
          {body ? (
            <p className={cn("atf-body", dark && "text-white/60")}>{body}</p>
          ) : null}
          {action}
        </div>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description: ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <section className="bg-atf-black text-white">
      <div className="atf-container py-16 lg:py-24">
        <div className="max-w-4xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          {Icon ? (
            <div className="mb-6 inline-flex size-14 items-center justify-center rounded-md bg-primary text-white">
              <Icon className="size-7" aria-hidden="true" />
            </div>
          ) : null}
          <h1 className="font-display text-4xl font-black uppercase leading-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function PageShell({ children, muted = false }: { children: ReactNode; muted?: boolean }) {
  return (
    <div className={cn("min-h-[70vh]", muted ? "bg-atf-gray-50" : "bg-white")}>
      {children}
    </div>
  );
}

export function ContentBand({
  children,
  dark = false,
  muted = false,
}: {
  children: ReactNode;
  dark?: boolean;
  muted?: boolean;
}) {
  return (
    <section
      className={cn(
        "py-16 lg:py-24",
        dark ? "bg-atf-black text-white" : muted ? "bg-atf-gray-50" : "bg-white",
      )}
    >
      <div className="atf-container">{children}</div>
    </section>
  );
}

export function StatGrid({
  stats,
  dark = false,
}: {
  stats: readonly { value: string; label: string }[];
  dark?: boolean;
}) {
  return (
    <div className={cn("grid gap-px overflow-hidden rounded-md border", dark ? "border-white/10 bg-white/10" : "border-atf-gray-200 bg-atf-gray-200", "sm:grid-cols-2 lg:grid-cols-4")}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn("p-6", dark ? "bg-atf-black" : "bg-white")}
        >
          <div className={cn("font-display text-4xl font-black", dark ? "text-white" : "text-atf-black")}>
            {stat.value}
          </div>
          <p className={cn("mt-2 text-sm leading-6", dark ? "text-white/55" : "text-atf-gray-500")}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function ActionCard({
  title,
  description,
  href,
  icon: Icon,
  dark = false,
}: {
  title: string;
  description: ReactNode;
  href?: string;
  icon?: LucideIcon;
  dark?: boolean;
}) {
  const content = (
    <article
      className={cn(
        "group h-full border p-6 transition-colors",
        dark
          ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
          : "border-atf-gray-200 bg-white text-atf-ink hover:bg-atf-gray-50",
      )}
      style={{ borderRadius: 6 }}
    >
      {Icon ? (
        <div className="mb-5 inline-flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </div>
      ) : null}
      <h3 className="font-display text-xl font-black uppercase leading-tight">
        {title}
      </h3>
      <p className={cn("mt-3 text-sm leading-7", dark ? "text-white/55" : "text-atf-gray-500")}>
        {description}
      </p>
      {href ? (
        <span className={cn("mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase", dark ? "text-white" : "text-atf-ink")}>
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      ) : null}
    </article>
  );

  if (!href) return content;

  return (
    <AppLink href={href} className="block h-full no-underline">
      {content}
    </AppLink>
  );
}

export function EmptyState({
  title,
  description,
  href = "/",
  action = "Back to Home",
}: {
  title: string;
  description: string;
  href?: string;
  action?: string;
}) {
  return (
    <section className="bg-white">
      <div className="atf-container flex min-h-[50vh] items-center justify-center py-16">
        <div className="max-w-xl text-center">
          <h1 className="font-display text-4xl font-black uppercase text-atf-black">
            {title}
          </h1>
          <p className="mt-4 text-atf-gray-500">{description}</p>
          <AppLink href={href} className="atf-button mt-8">
            {action}
          </AppLink>
        </div>
      </div>
    </section>
  );
}
