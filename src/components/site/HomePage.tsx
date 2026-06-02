import { useMemo, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Globe2,
  Network,
  Play,
  Trophy,
  X,
} from "lucide-react";

import { AppLink } from "@/components/site/AppLink";
import { ContentBand, Eyebrow, SectionHeader, StatGrid } from "@/components/site/Page";
import { chapters, impactStats, newsItems, programs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const programIcons = {
  consulting: Briefcase,
  challenge: Trophy,
  chapters: Network,
} as const;

const newsCategories = ["All", "Press", "Programs", "Research", "Partnerships", "Chapters"];

export function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredNews = newsItems.find((item) => item.featured) ?? newsItems[0];
  const filteredNews = useMemo(
    () =>
      newsItems.filter(
        (item) =>
          !item.featured &&
          (activeCategory === "All" || item.category === activeCategory),
      ),
    [activeCategory],
  );

  return (
    <>
      <section className="relative overflow-hidden bg-atf-black">
        <div className="grid min-h-[680px] lg:grid-cols-[55%_45%]">
          <div className="relative min-h-[360px]">
            <img
              src="/atf-assets/v2/hero-person.jpg"
              alt="Young African technologist working at a computer"
              className="absolute inset-0 size-full object-cover object-[22%_22%]"
            />
            <button
              type="button"
              className="absolute bottom-8 left-6 inline-flex items-center gap-4 rounded-md bg-atf-black/55 p-3 pr-5 text-left text-white backdrop-blur-sm transition-colors hover:bg-atf-black/75 lg:left-10"
              aria-label="Play ATF feature video"
              onClick={() => setVideoOpen(true)}
            >
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-white">
                <Play className="ml-1 size-6 fill-current" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-xs font-black uppercase">
                  Watch the film
                </span>
                <span className="mt-1 block text-xs text-white/65">
                  Our work, 2026
                </span>
              </span>
            </button>
          </div>

          <div className="relative bg-primary px-6 py-14 text-white md:px-10 lg:opportunity-cut lg:px-16 lg:py-20">
            <div className="relative z-10 flex h-full max-w-xl flex-col justify-center lg:ml-8">
              <p className="mb-6 font-display text-xs font-bold uppercase text-white/85">
                Established 1987 - Pan-African Science & Technology Network
              </p>
              <h1 className="font-display text-4xl font-black uppercase leading-none md:text-6xl">
                Promoting the development of science & technology across Africa.
              </h1>
              <p className="mt-7 text-base leading-8 text-white/90">
                For over three decades, the African Technology Forum has
                partnered with governments, institutions, and enterprises to
                build Africa's scientific and technological capacity.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <AppLink href="/consulting" className="atf-button-light">
                  Partner With ATF
                </AppLink>
                <AppLink
                  href="/about"
                  className="atf-button-outline atf-button-outline-light"
                >
                  Our Impact
                </AppLink>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
                {[
                  { value: "54", label: "Countries" },
                  { value: "200+", label: "Programs" },
                  { value: "10K+", label: "Members" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-3xl font-black">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase text-white/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {videoOpen ? (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-atf-black/95 p-6">
            <div className="relative w-full max-w-3xl border border-white/15 bg-white/5 p-10 text-center text-white">
              <button
                type="button"
                className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-md text-white/60 hover:bg-white/10 hover:text-white"
                aria-label="Close video"
                onClick={() => setVideoOpen(false)}
              >
                <X className="size-5" aria-hidden="true" />
              </button>
              <div className="mx-auto mb-5 inline-flex size-16 items-center justify-center rounded-full border border-white/30">
                <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-black uppercase">
                Feature Video
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/60">
                ATF's feature film is being prepared for publication.
              </p>
            </div>
          </div>
        ) : null}
      </section>

      <div className="border-b border-atf-gray-200 bg-atf-gray-50">
        <div className="atf-container flex flex-wrap items-center gap-6 py-5">
          <p className="font-display text-xs font-bold uppercase text-atf-gray-500">
            Supported and trusted by
          </p>
          <div className="flex flex-wrap items-center gap-6 font-display text-sm font-bold uppercase text-atf-gray-500/65">
            <span>Google.org</span>
            <span>UNDP</span>
            <span>African Union</span>
            <span>World Bank</span>
            <span>UNESCO</span>
          </div>
        </div>
      </div>

      <ContentBand dark>
        <StatGrid stats={impactStats} dark />
      </ContentBand>

      <ContentBand>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="atf-section-title">
              Three decades at the forefront of African technology.
            </h2>
            <p className="atf-body mt-7">
              The African Technology Forum is a pan-African institution
              dedicated to harnessing technology for Africa's development
              challenges. Since 1987, ATF has built one of the continent's most
              trusted networks of technology practitioners, policymakers, and
              innovators.
            </p>
            <p className="atf-body mt-4">
              We work at the intersection of consulting, innovation, and
              capacity building to create systemic change across sectors and
              borders.
            </p>
            <AppLink href="/about" className="atf-link mt-8">
              Explore our story
              <ArrowRight className="size-4" aria-hidden="true" />
            </AppLink>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md bg-atf-gray-200">
            {[
              { value: "30+", label: "Years partnering with institutions" },
              { value: "12", label: "Countries with active programs" },
              { value: "3", label: "Flagship initiatives" },
              { value: "1K+", label: "Research publications and briefs" },
            ].map((fact, index) => (
              <div
                key={fact.label}
                className={cn(
                  "p-7",
                  index === 0 ? "bg-primary text-white" : "bg-atf-gray-50",
                )}
              >
                <div className="font-display text-4xl font-black">
                  {fact.value}
                </div>
                <p
                  className={cn(
                    "mt-2 text-xs font-bold uppercase leading-5",
                    index === 0 ? "text-white/75" : "text-atf-gray-500",
                  )}
                >
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContentBand>

      <ContentBand muted>
        <SectionHeader
          eyebrow="What We Do"
          title="Three flagship initiatives driving technology innovation."
          body="Our work spans expert advisory services, grassroots innovation, and community-led capacity building."
        />
        <div className="grid gap-px overflow-hidden rounded-md bg-atf-gray-200 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = programIcons[program.slug];
            return (
              <AppLink
                key={program.slug}
                href={program.href}
                className="group bg-white p-8 transition-colors hover:bg-atf-gray-50"
              >
                <div className="font-display text-xs font-bold text-atf-gray-500">
                  {program.index}
                </div>
                <Icon className="mt-8 size-11 text-atf-black" aria-hidden="true" />
                <h3 className="mt-7 font-display text-2xl font-black uppercase leading-tight text-atf-black">
                  {program.title}
                </h3>
                <p className="atf-body mt-4 text-sm">{program.summary}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-display text-xs font-bold uppercase text-atf-ink group-hover:text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </AppLink>
            );
          })}
        </div>
      </ContentBand>

      <ContentBand dark>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <Eyebrow light>For Partners & Funders</Eyebrow>
            <h2 className="atf-section-title text-white">
              Invest in Africa's digital future with us.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/60">
              ATF has a 30+ year track record of delivering measurable
              technology impact across Africa. We work with governments,
              development institutions, and private sector partners to design,
              fund, and implement programs at scale.
            </p>
          </div>
          <div className="grid gap-2">
            {[
              {
                title: "Submit a Partnership Inquiry",
                body: "Tell us about your organization and goals.",
                href: "/consulting",
              },
              {
                title: "Download Our Impact Report",
                body: "Three decades of data, case studies, and results.",
                href: "/research",
              },
              {
                title: "Book a Meeting",
                body: "Speak with our partnerships team in Accra, Ghana.",
                href: "/consulting",
              },
            ].map((item) => (
              <AppLink
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between gap-6 rounded-md border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
              >
                <span>
                  <span className="block font-display text-base font-black uppercase text-white">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-white/50">
                    {item.body}
                  </span>
                </span>
                <ArrowRight className="size-5 shrink-0 text-white transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </AppLink>
            ))}
          </div>
        </div>
      </ContentBand>

      <ContentBand>
        <SectionHeader
          eyebrow="Where We Work"
          title="Our chapters span across Africa."
          action={
            <AppLink href="/chapters" className="atf-link">
              View all chapters
              <ArrowRight className="size-4" aria-hidden="true" />
            </AppLink>
          }
        />
        <div className="grid gap-px overflow-hidden rounded-md bg-atf-gray-200 md:grid-cols-2 lg:grid-cols-4">
          {chapters.map((chapter) => (
            <AppLink
              key={chapter.slug}
              href={`/countries/${chapter.slug}`}
              className="group bg-atf-gray-50 p-7 transition-colors hover:bg-white"
            >
              <div className="inline-flex size-12 items-center justify-center rounded-md bg-primary text-sm font-black text-white">
                {chapter.code}
              </div>
              <h3 className="mt-6 font-display text-xl font-black uppercase text-atf-black">
                {chapter.country}
              </h3>
              <p className="mt-1 font-display text-xs font-bold uppercase text-primary">
                {chapter.count} Chapters
              </p>
              <p className="mt-4 text-sm leading-7 text-atf-gray-500">
                {chapter.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase text-atf-ink group-hover:text-primary">
                View country
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </AppLink>
          ))}
        </div>
      </ContentBand>

      <section className="grid bg-primary text-white lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 md:px-10 lg:px-20 lg:py-24">
          <p className="mb-6 font-display text-xs font-bold uppercase text-white/70">
            For Students & Young Professionals
          </p>
          <h2 className="font-display text-5xl font-black uppercase leading-none md:text-7xl">
            Don't just watch the AI revolution, build it.
          </h2>
          <ul className="mt-8 grid gap-3 font-display text-sm font-bold uppercase text-white/90">
            <li>Get free AI training</li>
            <li>Build real-world solutions</li>
            <li>Launch your career</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://bit.ly/atf-wf"
              target="_blank"
              rel="noreferrer"
              className="atf-button-light"
            >
              Apply to ATF Challenge
            </a>
            <AppLink
              href="/chapters"
              className="atf-button-outline atf-button-outline-light"
            >
              Join a Chapter
            </AppLink>
          </div>
        </div>
        <div className="relative min-h-[340px] bg-atf-black">
          <img
            src="/atf-assets/v2/billboard-1.jpg"
            alt="ATF AI Challenge billboard"
            className="absolute inset-0 size-full object-cover opacity-80"
          />
          <div className="absolute bottom-0 left-0 h-0 w-0 border-b-[56px] border-r-[56px] border-b-atf-black border-r-transparent" />
        </div>
      </section>

      <ContentBand>
        <SectionHeader
          eyebrow="Newsroom"
          title={
            <>
              The latest from across the <span className="text-primary">network</span>.
            </>
          }
          action={
            <AppLink href="/news" className="atf-link">
              View all news
              <ArrowRight className="size-4" aria-hidden="true" />
            </AppLink>
          }
        />
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          <AppLink href={`/news/${featuredNews.id}`} className="group block">
            <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-atf-gray-100">
              <img
                src="/atf-assets/atf-award-ceremony-2024.jpg"
                alt="ATF award ceremony audience and presenters"
                className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute left-0 top-0 bg-primary px-3 py-2 font-display text-xs font-bold uppercase text-white">
                Featured
              </span>
            </div>
            <p className="mt-7 font-display text-xs font-bold uppercase text-primary">
              {featuredNews.category} - {featuredNews.date}
            </p>
            <h3 className="mt-3 font-display text-2xl font-black uppercase leading-tight text-atf-black group-hover:text-primary md:text-3xl">
              {featuredNews.title}
            </h3>
            <p className="atf-body mt-4">{featuredNews.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-display text-xs font-bold uppercase text-atf-ink group-hover:text-primary">
              Read the story
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </AppLink>

          <div>
            <div className="mb-4 flex flex-wrap gap-2" aria-label="Filter news">
              {newsCategories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={cn(
                    "rounded-md border px-3 py-2 font-display text-xs font-bold uppercase transition-colors",
                    activeCategory === category
                      ? "border-atf-black bg-atf-black text-white"
                      : "border-atf-gray-200 text-atf-gray-500 hover:border-atf-black hover:text-atf-black",
                  )}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="border-t border-atf-gray-200">
              {filteredNews.map((item) => (
                <AppLink
                  href={`/news/${item.id}`}
                  key={item.id}
                  className="group block border-b border-atf-gray-200 py-5"
                >
                  <p className="font-display text-xs font-bold uppercase text-primary">
                    {item.category} - {item.date}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-atf-ink group-hover:text-primary">
                    {item.title}
                  </h3>
                </AppLink>
              ))}
              {filteredNews.length === 0 ? (
                <p className="py-8 text-sm text-atf-gray-500">
                  No updates in this category yet.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </ContentBand>

      <ContentBand muted>
        <div className="text-center">
          <Globe2 className="mx-auto mb-5 size-10 text-primary" aria-hidden="true" />
          <p className="font-display text-xs font-bold uppercase text-atf-gray-500">
            Trusted by leading organizations across Africa and beyond
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 font-display text-base font-bold uppercase text-atf-gray-500/65">
            <span>Google.org</span>
            <span>UNDP</span>
            <span>African Union</span>
            <span>World Bank</span>
            <span>ECOWAS</span>
            <span>UNESCO</span>
          </div>
        </div>
      </ContentBand>
    </>
  );
}
