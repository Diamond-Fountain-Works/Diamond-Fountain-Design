# Diamond Fountain Design

A reusable AI design skill for **Diamond Fountain Works**: cobalt blue atmosphere, clear angular typography, a custom four-point star and a staged brand intro.

## Use the skill

The skill entry point is [SKILL.md](SKILL.md). Its invocation name is **`diamond-fountain-works-design`**.

You can also request it naturally as “用 DFW 设计 skill 做……” (use the DFW design skill to make …).

For Codex, place this repository in your skills directory under that name. For example, if the destination does not already exist:

```bash
git clone https://github.com/Diamond-Fountain-Works/Diamond-Fountain-Design.git "$HOME/.agents/skills/diamond-fountain-works-design"
```

Example requests:

- “Use $diamond-fountain-works-design to design a project announcement graphic.”
- “Use $diamond-fountain-works-design to apply the established identity to this portfolio.”
- “Use $diamond-fountain-works-design to connect the opening title animation to the homepage.”

The repository contains the reusable skill, portable design assets and the existing Diamond Fountain Works portfolio source. The static website is in [`dist/`](dist/); the reusable skill still reads assets from `assets/` and references from `references/`.

## Design language

- Saturated cobalt blue, cyan-green and near-black blurred atmosphere, with restrained grain.
- Large compositions, generous spacing and factual, concise English website copy.
- Crisp text and light silver wordmark finishes; avoid dark bands or ornaments that break letter recognition.
- The same slender, oblique four-point star across the mark, motion and editable fonts.
- Intro order: star flare → three-line title unfolds → completed title moves to its real hero position → background and remaining content appear. Keep the title visible and avoid an ending zoom.

See [design-system.md](references/design-system.md) for colors, type and asset provenance, and [motion.md](references/motion.md) for choreography and implementation boundaries.

## Typography and assets

| Item | Purpose |
| --- | --- |
| [diamond-wordmark.svg](assets/diamond-wordmark.svg) | Fixed Diamond Fountain Works wordmark |
| [dfw-star.svg](assets/dfw-star.svg) | Shared brand star |
| [DFW Afterglow Solid TTF](assets/fonts/DFWAfterglowSolid-BoldItalic.ttf) | Editable, continuous-outline angular titles |
| [DFW Afterglow TTF](assets/fonts/DFWAfterglow-BoldItalic.ttf) | Large display titles with fine cuts and speed terminals |
| [fonts/](assets/fonts/) | Both Afterglow families in TTF/OTF/WOFF2, plus Anton and Nunito |

**Afterglow fonts are version 1.001, Bold Italic**, derived from Goldman Bold. The fixed SVG wordmark is separate outlined artwork; it is not Afterglow typesetting. No original Dashstar typeface identification is claimed.

The display variant's thin lines are transparent cuts inside individual letters and digits, with short attached terminals on selected letters. Solid omits those details for continuity. The star can be typed independently as `✧` or `✦`; both use the same DFW outline. Metallic rendering is a separate visual finish, not a feature automatically added by installing a font.

## Font licenses and provenance

Keep the included font licenses with their assets:

- [DFW Afterglow / Goldman SIL OFL](assets/fonts/DFW-Afterglow-OFL.txt)
- [Anton SIL OFL](assets/fonts/Anton-OFL.txt)
- [Nunito SIL OFL](assets/fonts/Nunito-OFL.txt)

Wordmark provenance and the distinction between fixed artwork and editable font software are documented in [design-system.md](references/design-system.md). No Ethnocentric font software is included.

## Verification scope

The skill's structure, local references, font versions and two representative use cases were checked. Font parsing, shaping and native-loading records exist in the originating font project. Browser appearance and per-application font compatibility require verification for each new output.

## Portfolio source

The existing Diamond Fountain Works portfolio is preserved in `dist/`, including its star-led intro, project copy, JavaScript, styles and licensed font resources. Serve `dist/` as a static directory; `.openai/hosting.json` records the original Sites project and static-directory mapping.

This source archive does not claim a new online deployment. JavaScript syntax, local asset references and copy integrity are checked during migration; no new browser visual acceptance is implied.

Historical export packages and working records are local archives excluded by `.gitignore`. GitHub draft release assets hold the portable delivery files separately from the source tree.
