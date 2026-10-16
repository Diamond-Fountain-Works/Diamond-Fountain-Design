# DFW design system

Snapshot: 2026-10-16, website version 8. Use current user decisions when they differ from this snapshot.

## Visual direction

Large, confident compositions; saturated cobalt blue; dreamy cyan/green and near-black Gaussian-blurred forms; light grain. Visual richness comes from composition and motion. Text remains sharp and high contrast. Prefer wide project imagery and generous spacing over dense clusters of small cards or ornaments.

| Role | Reference value |
| --- | --- |
| Base / hero / intro blue | `#0032d9` / `#0035ef` / `#0034e8` |
| Text / secondary | `#f2f7ef` / `#d1dcf6` |
| Rule | `#eef5ff45` |
| Cyan-green atmosphere | `#71ffdb`, `#5bf0c4` |
| Dark atmosphere | `#000e13`, `#000d0e` |
| Silver wordmark stops | `0: #f7fcff`, `.42: #c9dfe9`, `.50: #ffffff`, `1: #bfd4e0` |

These colors support reproducing the current site. Do not preserve several nearly identical blues at the expense of a simpler design for another medium.

## Type and marks

| Role | Asset | Usage |
| --- | --- | --- |
| Fixed brand name | `../assets/diamond-wordmark.svg` | Approved current geometry and per-line silver finish; contains three line groups |
| Star | `../assets/dfw-star.svg` | Slender oblique four-point star, stretched horizontally; retain proportions |
| Editable angular title | `../assets/fonts/DFWAfterglowSolid-BoldItalic.ttf` or `.woff2` | Start here when continuity/readability matters |
| Optional display title | `../assets/fonts/DFWAfterglow-BoldItalic.ttf` or `.woff2` | Incisions and speed details; use at sufficient size |
| Condensed headings | `../assets/fonts/Anton-Regular.ttf` | Section names, project names and short subtitles |
| Body | `../assets/fonts/Nunito.ttf` | Readable rounded body; current site commonly uses weight 600 |

Afterglow and Afterglow Solid are version 1.001, Bold Italic, derived from Goldman Bold under SIL OFL 1.1. Each contains 644 glyphs / 596 Unicode mappings, including ASCII and `✧` / `✦`, without Chinese glyphs. Both star characters share the DFW outline. Keep accompanying OFL files with fonts.

The fixed wordmark's historical source record identifies customized Ethnocentric Italic outlines. No Ethnocentric font software is bundled. It is not an exact rendering of the independently built Afterglow fonts, and neither is claimed to be the identified original Dashstar font. Future font software or additional characters should use the supplied OFL-derived Afterglow assets, not a fabricated Ethnocentric font distribution.

The latest website clarity pass changed the SVG artwork, not the Afterglow font files. Version 1.001's font update unified the star. Installing the font does not add a metallic gradient; apply finishes in the authoring tool or CSS.

Licenses: `../assets/fonts/DFW-Afterglow-OFL.txt`, `../assets/fonts/Anton-OFL.txt`, `../assets/fonts/Nunito-OFL.txt`.

## Content and layout

The current portfolio is all English, concise and factual. Project names, capabilities and status carry the content. Keep qualifiers such as prototype, simulated and unverified where they are factually applicable.

Its four current projects are Together, Alto Cloud, GRE Words and MyPixelPet, selected from ProjectsLocal with Blender excluded by the user. This is portfolio-specific scope, not a general constraint for all brand graphics.

The current site uses about 5.5% desktop gutters, 6% on phones, large heading scales and a two-column project grid with selected full-width entries. Adapt those parameters to the content and medium. Retain breathing room and a clear hierarchy; do not simulate “premium” by adding filler copy.

## Current clarity decisions

- Three word contours were normalized/merged without materially changing letter area.
- Crossing speed lines, text strokes and edge filters were removed.
- Deep ten-stop metal shading was replaced by the four light silver stops above.
- Intro and hero share identical paths, line grouping and gradient stops.
- The final title does not float/rotate continuously.

Inspect final appearance at the target size. Darker metallic effects or new ornaments are optional future directions only when the user asks and readability holds.

## Evidence and source navigation

The full design recap and font package remain in the originating workspace's `outputs/` directory. The original website source is `work/blue-hour/dist/`; its main files are `index.html`, `style.css`, `intro.js`, `intro.css`, `assets/diamond-wordmark.svg` and `assets/dfw-star.svg`. Resolve the current workspace rather than assuming that historical absolute path exists on another machine.

Known verification boundary at this snapshot: font parsing/native-loading records, SVG asset comparisons and controlled motion checks exist. Browser visual review and per-application font compatibility were not completed. The current full intro lacks a reduced-motion branch; do not describe it as already implemented.

## Why the display cuts and star exist

The Afterglow display variant translates the reference's speed and segmented lettering into editable glyphs. Two fine horizontal bands are subtracted from Latin letters and digits; these are transparent incisions inside each glyph, not colored lines drawn over a whole sentence. Selected straight-stem letters also receive short, attached speed terminals. The Solid variant omits both interventions and preserves the continuous oblique base contours.

Use those details selectively: display cuts are intended for large lettering where the remaining strokes remain legible. They are not a reason to add crossing bars to the fixed website wordmark or to body copy. The current readability-first default is Solid for newly typed angular titles.

The star provides a consistent brand marker, with a stretched horizontal axis, oblique vertical axis and curved center. Font version 1.001 uses the website star's outline for both `✧` (U+2727) and `✦` (U+2726); the characters intentionally share geometry. They are separately typed ornaments, not automatic swashes, ligatures or decorations inserted into every word. Preserve the outline rather than relying on a fallback font's generic star.
