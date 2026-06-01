# Goal Prompt

Use this prompt in a fresh Codex session from the repository root.

```text
/goal Implement the approved ATF Website V2 design reference as the single production design for this TanStack React app.

Context:
- The repository is the ATF website prototype app.
- The approved visual direction is in docs/design-ref/ATF Website v2.html.
- The current app is a multi-page TanStack Router app, not a single-page static site.
- The V2 reference is a single-page design artifact only. Do not copy it as one giant static page.
- Preserve the useful app skeleton: routing, shared layout, reusable React components, Tailwind/shadcn-style primitives, public assets, and existing page structure.
- Replace the prototype comparison system entirely. Do not add a new Version E.

Primary objective:
Reimplement the site so there is one final ATF design based on V2, with no theme/version selector, no A/B/C/D toggles, no prototype switcher, no accent picker, and no feedback panel.

Reference files to study first:
- docs/design-ref/ATF Website v2.html
- docs/design-ref/colors_and_type.css
- docs/design-ref/README.md
- docs/Design Ref Implementation/PRD.md
- src/routes/__root.tsx
- src/lib/themes.ts
- src/contexts/ThemeContext.tsx
- src/components/switcher/
- src/components/layout/
- src/components/sections/
- public/atf-assets/

Implementation requirements:
- Keep TanStack Router multi-page routing intact.
- Convert the V2 homepage structure into React sections instead of static HTML.
- Make the homepage match the V2 design direction closely: announcement bar, dark nav, billboard hero with Opportunity Triangle, impact stats, about, programs, funder CTA, chapters, student/challenge CTA, news, partners, and dark footer.
- Apply the same V2 design system to interior pages so the whole site feels coherent.
- Remove the public-facing theme selector and prototype UI.
- Remove version search-param behavior and version-specific rendering branches.
- Replace ThemeContext with static ATF design tokens or a simpler design-system module if still useful.
- Remove stale imports and dead code after the version system is removed.
- Copy only the needed V2 assets into production public assets.
- Replace current logo usage with the approved V2 logo/brandmark assets where those are more accurate.
- Do not depend on CDN React/Babel or the design-ref tweaks panel.
- Implement interactions with React state/effects: mobile nav, announcement dismissal, optional news filtering, optional video placeholder behavior.
- Keep accessibility basics: semantic sections, keyboard-operable controls, visible focus states, meaningful alt text, and correct link/button semantics.
- Preserve route URLs unless the current router makes a change unavoidable.
- Keep edits focused on implementing the V2 design and cleaning up obsolete prototype code.

Important non-goals:
- Do not delete docs/design-ref files in this implementation pass unless explicitly asked.
- Do not create a new selectable theme.
- Do not leave TanStack devtools, prototype switchers, or feedback panels visible in the final site.
- Do not perform unrelated refactors.
- Do not introduce a CMS, database, live API, or new content management system.

Suggested workflow:
1. Inspect the design reference and current app structure.
2. Make a short implementation plan.
3. Remove or bypass the version-selector architecture.
4. Establish final ATF tokens, typography, shared button/card/page-section styles, and layout primitives.
5. Rebuild the shared navigation and footer in the V2 style.
6. Rebuild the homepage using V2-inspired React sections.
7. Restyle interior pages to use the same V2 system.
8. Remove obsolete prototype components and dead imports.
9. Run build/type checks and fix failures.
10. Start the dev server and provide the local URL for review.

Acceptance criteria:
- App opens directly to the final V2-inspired ATF site.
- No visible theme selector, version selector, prototype switcher, accent picker, or feedback panel remains.
- URL search params are no longer used for visual theme selection.
- Homepage visually tracks the V2 reference while remaining a proper React route.
- Interior pages share the same V2 header, footer, typography, section rhythm, buttons, cards, colors, and responsive behavior.
- Mobile navigation works.
- Announcement bar can be dismissed if included.
- News filtering works if included.
- Build passes.
- No stale version-system imports remain.
- The final answer summarizes changed files, verification results, and any intentional gaps.
```
