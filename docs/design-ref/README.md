# ATF Design System
## African Technology Forum

**Mission:** To promote the development of science and technology in Africa.

---

## Sources

This folder is a reference package, not production source code. The current
repository stores normalized reference assets in `assets/`, fonts in `fonts/`,
and component previews in `preview/`.

The original brand package included:

- Master logo PDF
- Color codes PDF
- Full color logo variants
- Bright/white logo variants
- Dark/monochrome logo variants
- Red and white Africa continent brandmarks

No Figma link was provided. Production implementation guidance lives in
`../Design Ref Implementation/`.

---

## Company / Product Context

**African Technology Forum (ATF)** is a professional organization dedicated to promoting science and technology development across Africa. The brand positions itself at the intersection of continental pride, modernity, and technological progress.

**Products / Surfaces identified:**
- Primary website / landing presence
- Event and conference materials
- Printed and digital collateral

---

## CONTENT FUNDAMENTALS

This section is tone and brand guidance. The V2 implementation PRD controls how
that guidance should be mapped into the React app.

**Tone:** Authoritative, forward-looking, inclusive. ATF speaks with confidence about Africa's technological future — neither defensive nor nostalgic, but proudly progressive.

**Voice:**
- Third-person institutional for official communications; first-person plural ("we", "our") for community-facing copy
- No emoji in formal materials
- Titles and headings in Title Case or ALL CAPS (consistent with logo wordmark)
- Short, declarative sentences preferred

**Examples (inferred from brand):**
- "Advancing Science. Building Africa."
- "African Technology Forum brings together innovators, researchers, and leaders across the continent."
- "Join us at the forefront of African innovation."

**Casing:** ALL CAPS for logotype and primary display headlines; Title Case for subheadings and body section titles; sentence case for body copy.

**Unicode / Emoji:** Not used. No decorative characters. Emoji flags in any
prototype or reference copy should be treated as informal placeholders, not core
brand elements.

---

## VISUAL FOUNDATIONS

### Colors
| Role | Value | Notes |
|---|---|---|
| Brand Red (Primary) | `#F90036` | Vivid, high-energy red — extracted from all logo SVGs |
| Black | `#0A0A0A` | Near-black for text and dark backgrounds |
| White | `#FFFFFF` | Backgrounds, reversed type |
| Red Dark | `#C0002A` | Hover/pressed state for red |
| Red Light | `#FF4D6D` | Tint for backgrounds or tags |
| Gray 100 | `#F5F5F5` | Subtle page backgrounds |
| Gray 200 | `#E5E5E5` | Dividers, borders |
| Gray 500 | `#737373` | Secondary text |
| Gray 800 | `#262626` | Body text on light bg |

### Typography
- **Display / Wordmark:** Montserrat ExtraBold / Bold, ALL CAPS, tracked
- **Headings:** Montserrat Bold / SemiBold
- **Body:** DM Sans Regular / Medium
- **Captions / Meta:** DM Sans Regular, Gray 500

Font sources found in `ATF_Logo_Final.pdf`:
- `DMSans-9ptRegular`
- `Montserrat-Regular`, `Montserrat-Medium`, `Montserrat-Bold`

**Font files supplied:** All Montserrat weights (Thin → Black, including italics) are loaded from local `.ttf`/`.otf` files. DM Sans still uses Google Fonts (no local file provided). `Clesmont` is also loaded as `--font-accent` but its usage role is not yet defined — available for future brand decisions (e.g. certificates, decorative headings, event branding). **Montserrat is the active go-to font for all display and heading needs.** The Clesmont usage in the type specimens (large display sizes, brand red accent, event/conference titling) has been noted as a promising direction — to be formalized when the team decides on its role.

### Spacing & Layout
- Base unit: 8px
- Standard spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- Max content width: 1280px
- Section padding: 96px vertical (desktop), 48px (mobile)

### Brand Mark
The **low-poly geometric Africa silhouette** is the core visual identity symbol. It appears:
- As a standalone icon (red or white)
- Combined with the "AFRICAN TECHNOLOGY FORUM" wordmark
- The geometric facets suggest precision, modernity, and structural strength

### The Opportunity Triangle

The **Opportunity Triangle** is ATF's core graphic device — a **polygon geometry** that divides any composition along a diagonal axis into two or more zones. The triangle is not decorative; it is the polygon itself.

**Core principle:** A diagonal line cuts the frame into geometric zones — photo, red, or dark. The same polygon can be rendered in two ways:
- **Outline (wireframe)** — the polygon as a stroke over full-bleed photography; the subject shows through
- **Filled** — the polygon flooded with `#F90036`, creating a solid brand red zone that carries text, logo, and CTA

**Orientations:**
- **Portrait** — diagonal runs horizontally across the frame, photo above, red below
- **Landscape** — diagonal runs vertically, photo left, red right (billboard/banner format)
- **Multi-polygon** — several triangular zones created by multiple diagonal intersections; accent triangles (small, red/white/black) mark the vertices and add rhythm

- **Photo zone** — full-bleed photography of African technologists in action; the image is clipped by the diagonal
- **Brand zone** — solid `#F90036` with white Montserrat headline, DM Sans body copy, and white logo

The angled cut creates a triangular red shape that "pushes" into the image — symbolizing ATF's forward momentum into Africa's technological future.

**Variations:**
- **Horizontal** — photo on the left, red on the right (billboard/banner format)
- **Vertical** — photo on top, red on the bottom (portrait/social format)

**Three usage modes:**
1. **Outline triangle** — a thin white stroke triangle overlaid on a full-bleed photo; the subject appears behind/through it; headline text sits within the triangle zone
2. **Compositional triangles** — multiple solid red triangles frame the subject from the sides and bottom, pushing the eye toward a solid red text zone below; small white and black accent triangles provide detail
3. **Accent triangles** — standalone small triangles (red, white, black) scattered as graphic ornaments; can point in any direction

**Triangle accent colors:**
- Red `#F90036` — primary, large compositional blocks
- White — secondary small accents on red/dark backgrounds
- Black `#0A0A0A` — inverted detail accents, often pointing down
- White outline — wireframe overlay on full-bleed photography

**Reference examples in `assets/`:**
- `example-challenge-wf.png` — outline triangle on photo
- `example-challenge-wf2.png` — multi-triangle with accent triangles
- `example-a2-poster.jpg` — full poster with header strip + compositional triangles + red text zone

### Backgrounds
- Primarily white or near-black
- No gradients in the core brand
- Red can be used as a full-bleed section background with white type
- No textures or patterns defined; clean, flat surfaces preferred

### Imagery
- Photography: Not specified. Likely warm-toned, high-contrast images of African people, technology, and landscapes
- Illustrations: The polygonal Africa mark is the only illustration; no hand-drawn style
- No background image patterns or full-bleed illustrative backgrounds defined

### Cards & Surfaces
- Clean white cards, no visible shadow by default
- Thin `1px` borders using Gray 200 or a subtle `box-shadow`
- Corner radius: `4px` or sharp (consistent with the logo's angular, geometric aesthetic)

### Iconography
- No custom icon set provided
- Brand relies on the Africa brandmark as primary iconographic element
- Lucide Icons used as a substitute for UI icons in references; production should use the installed `lucide-react` package.
- No emoji in UI

### Animation
- Minimal; no animation defined in brand materials
- If used: subtle fade-in, 200–300ms ease-out
- No bounces or spring animations

### Hover / Press States
- Red elements: darken to `#C0002A` on hover, `#9A0022` on press
- Links: underline on hover
- Buttons: slight darkening, no scale transform

### Borders & Shadows
- Borders: 1px solid Gray 200 for cards/inputs
- Focus ring: 2px solid `#F90036`
- Shadow: Very subtle — `0 1px 3px rgba(0,0,0,0.08)` for cards; no heavy elevation

### Corner Radii
- Sharp/minimal: `4px` for cards, buttons, inputs
- Round: `9999px` for pill/tag elements only
- The brand aesthetic is geometric and angular; avoid large rounded corners

---

## ICONOGRAPHY

**Approach:** No proprietary icon set provided. The brand mark (geometric Africa continent) serves as the primary visual icon. For static reference previews, **Lucide Icons** may be loaded via CDN (`https://unpkg.com/lucide@latest`). In the production React app, use the installed `lucide-react` package instead of a CDN.

**Assets in `assets/`:**
- `logo-full-color.png` / `.svg` — Full horizontal logo (red + black)
- `logo-bright.png` / `.svg` — White logo for dark backgrounds
- `logo-dark.png` / `.svg` — Monochrome black logo
- `brandmark-red.png` — Africa silhouette in `#F90036`
- `brandmark-white.png` — Africa silhouette in white

---

## File Index

```
README.md                     - This file
colors_and_type.css           - CSS custom properties for colors, type, spacing
ATF Website v2.html           - Primary single-page design reference
mobile-preview.html           - Mobile viewport wrapper around the V2 reference

assets/
  logo-full-color.{png,svg}        - Primary logo
  logo-bright.{png,svg}            - White logo for dark backgrounds
  logo-dark.{png,svg}              - Dark/monochrome logo
  brandmark-red.png                - Africa mark in red
  brandmark-white.png              - Africa mark in white
  Full-color-logo.png              - Original-cased primary logo export
  Bright-color-logo.png            - Original-cased bright logo export
  Dark-color-logo.png              - Original-cased dark logo export
  Brand-Mark_Red.png               - Original-cased red brandmark export
  Brand-Mark_White.png             - Original-cased white brandmark export
  hero-person.jpg                  - Hero/person reference image
  billboard-1.jpg                  - Billboard/challenge reference image
  example-challenge-wf*.png        - Opportunity Triangle examples
  example-a2-poster.jpg            - Poster-style triangle reference
  mockup-billboard-*.jpg           - Billboard mockup references
  photo-tech-professional.jpg      - Additional photography reference

fonts/
  Montserrat-*                - Brand-supplied Montserrat weights/styles
  clesmont.ttf                - Accent/display font, usage still TBD

preview/
  colors-primary.html         - Primary and brand color swatches
  colors-neutral.html         - Neutral gray scale
  colors-semantic.html        - Semantic color usage
  type-scale.html             - Typographic scale
  type-specimens.html         - Typeface specimens
  spacing.html                - Spacing tokens
  elevation.html              - Shadow/elevation system
  logos.html                  - Logo variants
  brandmark.html              - Brandmark usage
  buttons.html                - Button components
  inputs.html                 - Form inputs
  cards.html                  - Card components
  badges.html                 - Tags and badges
  navigation.html             - Nav and header components
  opportunity-triangle.html   - Opportunity Triangle reference
  mobile-top.png              - Mobile preview screenshot
```
