# ATF Website V2 Design Reference Implementation PRD

## Problem Statement

The current ATF website codebase is a prototype comparison app. It presents multiple visual directions through a version selector, theme context, feedback controls, and version-specific section branches. That structure was useful for design exploration, but it is now a distraction.

The approved design direction is represented by `ATF Website v2.html` in the design reference folder. That reference is intentionally a single-page artifact used to agree on visual direction, content hierarchy, and interaction details. The production app, however, is a multi-page TanStack Router application. The implementation needs to translate the V2 visual system into the existing multi-page app skeleton rather than copying the reference as one large static page.

The goal is to make the repository feel like a clean implementation of one ATF website, not a prototype switchboard.

## Solution

Replace the current theme/version selection experience with a single production design system based on the ATF Website V2 reference.

The implementation should keep the useful skeleton of the existing app: TanStack Router, route-based pages, shared layout, reusable React components, shadcn-style UI primitives where appropriate, Tailwind CSS, public assets, and the current multi-page content structure. It should remove the prototype comparison concepts: A/B/C/D versions, prototype switcher UI, feedback panel, theme selector, and version-specific branching.

The final site should use the V2 design as the canonical source for:

- Brand red, black, white, neutral palette, and restrained gray system
- Montserrat-led typography with DM Sans-style body text
- Sharp/angular surfaces and minimal radii
- Opportunity Triangle hero composition
- Dark fixed/sticky navigation treatment
- Announcement bar behavior
- Strong editorial section layouts
- Dark footer
- Red section accents and triangular graphic details
- Mobile responsive behavior aligned with the V2 reference

The production implementation should distribute that design across the existing routes. The homepage should use the full V2 landing flow. Interior pages should inherit the V2 layout language, header, footer, typography, buttons, cards, page hero treatment, and section rhythm, even where the exact V2 single-page sections are not copied one-to-one.

## Source Precedence

Use this precedence when repo files appear to disagree:

1. This PRD and `Goal Prompt.md` define the implementation target and the prototype concepts to remove.
2. `docs/design-ref/ATF Website v2.html`, `docs/design-ref/README.md`, and `docs/design-ref/colors_and_type.css` define the approved V2 visual direction.
3. Existing app source defines useful route skeleton, content defaults, and reusable component boundaries to preserve where they do not conflict.
4. Starter-app copy, old package names, selectable theme/version behavior, and prototype feedback workflows are historical.

## User Stories

1. As a visitor, I want the website to open directly into the final ATF design, so that I am not asked to choose between prototype versions.
2. As a visitor, I want a polished ATF homepage that matches the approved V2 reference, so that the organization feels established and credible.
3. As a visitor, I want the site navigation to behave like a normal multi-page website, so that I can move between About, Programs, Countries, News, Research, and other pages without losing context.
4. As a visitor, I want the hero to use the V2 billboard-style photo and red Opportunity Triangle composition, so that the brand identity is immediately clear.
5. As a visitor, I want the homepage to retain the major V2 sections, so that I can understand ATF's mission, impact, programs, chapters, student opportunities, news, partners, and calls to action.
6. As a visitor, I want the announcement bar to be visible and dismissible, so that time-sensitive updates can be presented without permanently taking over the page.
7. As a visitor, I want the mobile menu to be clean and usable, so that navigation works well on small screens.
8. As a visitor, I want buttons and links to use consistent ATF styling, so that calls to action are recognizable across the site.
9. As a visitor, I want program cards to feel visually related to the V2 reference, so that Consulting, Challenge, and Chapters read as part of one system.
10. As a visitor, I want the news section to use the V2 editorial layout and filtering interaction where applicable, so that updates are easy to scan.
11. As a visitor, I want the footer to match the V2 dark footer style, so that the site ends with a strong branded moment.
12. As a mobile visitor, I want all V2-inspired sections to reflow cleanly, so that text, buttons, cards, and imagery do not overlap.
13. As a partner or funder, I want the website to clearly surface partnership pathways, so that I can understand how to work with ATF.
14. As a student or young professional, I want the ATF Challenge call-to-action to be prominent, so that I can quickly find application and training information.
15. As a returning user, I want the site to load without development/prototype panels, so that it feels like a real public website.
16. As a content maintainer, I want page data and repeated content to be centralized where practical, so that future edits do not require changing many components.
17. As a developer, I want the final design system to be represented by simple tokens and shared components, so that new pages can match the V2 direction without copying huge blocks of CSS.
18. As a developer, I want version-specific branching removed, so that the codebase no longer carries unused A/B/C/D design paths.
19. As a developer, I want the implementation to keep the route skeleton intact, so that existing route URLs remain available unless intentionally changed.
20. As a developer, I want design-reference-only files to stay out of the production source path, so that future agents do not mistake exported prototype artifacts for active code.
21. As a developer, I want asset usage to be explicit and minimal, so that only the files needed by the final site are copied into public assets.
22. As a developer, I want build and type checks to pass, so that the cleanup does not leave stale imports or generated route errors.

## Implementation Decisions

- Treat V2 as the only canonical visual direction. Do not add another theme version.
- Remove the concept of selectable design versions from user-facing UI and from app state.
- Replace the theme context with static ATF design tokens or a much smaller design-system layer. The app should not depend on URL search params for visual identity.
- Remove prototype switcher, accent picker, version selector, and feedback UI from the rendered app.
- Preserve the multi-page routing model. The V2 reference is a design source, not a routing source.
- Keep shared layout boundaries: global navigation, main route outlet, and global footer remain shared app responsibilities.
- Build a V2-inspired component set rather than copying the entire reference HTML verbatim.
- Convert the V2 homepage into React sections with reusable, typed data where practical.
- Use the current public asset model for production assets. Copy only approved V2 assets needed by the final implementation.
- Use the V2 hero image and AI Challenge billboard image as first-pass visual assets unless better production-approved imagery already exists.
- Use the V2 logo/brandmark assets where they are more accurate than the current public logo.
- Keep the V2 announcement bar behavior, but implement it as React state rather than direct DOM manipulation.
- Keep the V2 mobile menu behavior, but implement it using React state and existing UI primitives where appropriate.
- Keep the V2 news filter interaction on the homepage if the data remains local/static.
- Keep existing route content structure where possible, but restyle pages so they share the V2 brand language.
- Interior pages do not need to be pixel-identical to the V2 homepage. They should feel like the same design system and use shared page headers, cards, CTAs, typography, and footer styling.
- Avoid bringing the V2 inlined tweaks panel into production. It was a design-review helper only.
- Avoid bringing the V2 React/Babel CDN pattern into production. The app already has a normal React/Vite build.
- Avoid adding new runtime dependencies unless an existing V2 interaction cannot be implemented cleanly with current dependencies.
- Maintain accessibility basics: real buttons for actions, links for navigation, useful alt text, keyboard-accessible menus, visible focus states, and semantic sections.
- Prefer plain React/Tailwind components and existing primitives over large inlined CSS blocks.
- Preserve responsive behavior from the V2 reference: stacked mobile hero, simplified mobile navigation, two-column-to-one-column section transitions, and no content overlap.
- Remove generated prototype assumptions from app documentation after implementation, so future contributors understand this is now a single-site implementation.

## Testing Decisions

- Use build and TypeScript checks as the minimum acceptance gate.
- Add focused component or integration tests only where behavior is non-trivial and externally observable.
- Good tests should verify visible behavior, not implementation details. For example, test that announcement dismissal hides the bar, navigation opens on mobile, and news filters affect visible items.
- Add tests for shared data transformation or route-safe navigation helpers if such modules are introduced.
- Do not write tests that lock in exact Tailwind class strings or animation implementation details.
- Manually inspect desktop and mobile viewports after implementation, because this is primarily a visual translation.
- Check that the homepage, at least one interior page, mobile nav, announcement dismissal, and footer all render without console errors.
- Run the production build before considering the one-shot implementation complete.

## Out of Scope

- Do not build a new design selector or theme marketplace.
- Do not keep A/B/C/D visual versions for comparison.
- Do not implement the V2 reference as a single static HTML page inside the React app.
- Do not import the design-reference tweaks panel.
- Do not implement a CMS, database, or live news API.
- Do not redesign ATF's content strategy beyond what is necessary to map existing pages into the V2 visual system.
- Do not delete design-reference files during the implementation unless the user explicitly requests cleanup in that session.
- Do not change route URLs unless required by the current router and confirmed by existing app structure.
- Do not add external network-loaded design dependencies when local assets or current dependencies are sufficient.

## Further Notes

The V2 reference contains a few details that should be translated carefully rather than copied mechanically:

- The reference uses a single-page structure, but the production app should keep route-level pages.
- The reference uses direct DOM scripts; production should use React state and effects.
- The reference includes a feature-video placeholder for a missing file. The production app should either keep this as a non-breaking placeholder or omit the video action until a real video asset exists.
- Country flag emoji are approved for chapter and country cards as compact location labels; decorative emoji remain outside the production visual language.
- The reference has some future-dated/event-specific copy. Confirm copy before launch if accuracy matters.
- The current app includes devtools and prototype feedback surfaces. Those should not remain visible in the final public implementation.

## Design Reference Inventory

The implementation should primarily study:

- `ATF Website v2.html`
- `colors_and_type.css`
- `README.md`
- `assets/Full-color-logo.png`
- `assets/Brand-Mark_White.png`
- `assets/hero-person.jpg`
- `assets/billboard-1.jpg`
- `fonts/Montserrat-*`
- `fonts/clesmont.ttf`

Useful but optional reference files:

- `mobile-preview.html`
- `preview/opportunity-triangle.html`
- `preview/logos.html`
- `preview/type-scale.html`
- `preview/navigation.html`
- `preview/buttons.html`
- `preview/cards.html`
- `preview/colors-primary.html`
- `preview/colors-neutral.html`
- `preview/colors-semantic.html`
- `preview/type-specimens.html`
- `preview/spacing.html`
- `preview/elevation.html`
- `preview/inputs.html`
- `preview/badges.html`
- `preview/brandmark.html`
- `preview/mobile-top.png`

Current cleanup guidance:

- Keep `docs/design-ref/` in place during the V2 implementation. It is reference-only, but it is still the design source.
- No large obsolete export folders are currently present in the repository.
- After production assets are selected, duplicate logo/brandmark variants with different capitalization can be reviewed.
- After the V2 implementation is accepted, `preview/` can be reduced if the team no longer needs component reference pages.

When in doubt, keep the file. The cleanup goal is to reduce distractions for future agents, not to prove that the smallest possible folder can run.
