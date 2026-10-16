# DFW opening and handoff

## Essential sequence

1. The custom DFW star appears and shines at the center.
2. It stretches horizontally into a narrow flare.
3. Diamond unfolds in the center.
4. Diamond moves upward while Fountain enters.
5. The first two lines move upward while Works enters, completing the three-line wordmark.
6. Once every word is complete, move the complete mark to the actual website title position.
7. After it lands, reveal the website background and remaining content behind it.

Keep the mark visible through the move and reveal. Use the destination title's size from the beginning so the final transition changes position, without an ending zoom. When the overlay hands off to the page title, match geometry, size and finish to avoid a visible replacement.

The initial three-line reveal is based on the user-selected choreography GIF. Its old ending zoom and dark metallic surface are superseded. The stationary dissolve and right-column descending-star versions are intermediate drafts.

## Current website timing reference

| Time | Action |
| --- | --- |
| 0–800 ms | Star fades in and shines |
| 800–1400 ms | Star stretches horizontally and compresses vertically |
| 950–1600 ms | Diamond enters |
| 1650–2300 ms | Diamond moves up; Fountain enters |
| 2450–3200 ms | First two lines move up; Works enters |
| 3500–4350 ms | Complete wordmark moves into the hero position |
| After landing, 500 ms | Curtain fades; page background/content appear |

These are current implementation values, not mandatory timing for every format. Preserve the order and continuity when adapting the duration.

## Implementation considerations

Measure the real destination after its layout is stable. The current site measures the hero image, uses that width/height for the initial centered SVG, moves only its left/top, updates placement on resize and starts background reveal from the landing animation's completion. Another implementation is acceptable if it preserves the same observable result and crispness.

Keep page interaction unavailable while the visual overlay covers it; restore interaction when it ends. Retain a recovery path if animation APIs fail. Preserve meaningful incoming section links after the intro.

For future accessibility improvements, consider reduced-motion behavior in the context of the user's brief. The current snapshot does not implement a full reduced-motion intro branch; earlier versions had controls and bypasses that are no longer present. Do not copy old behavior or claim support from historical notes.

Check the observable order, landing geometry and absence of duplicate or disappearing marks. An offline SVG/GIF render checks artwork or choreography; real browser/device inspection is a separate verification step.
