# Fresh Brand Reference

This page distills the Fresh visual identity into a single reference. For the full
specification, see [`visual-recipe.md`](visual-recipe.md) and
[`design-principles.md`](design-principles.md).

## Brand Character

Fresh is **neutral-first, crisp, and structured**. It should feel like a modern SaaS
system — not a playful consumer app. The aesthetic is inspired by shadcn's `new-york`
style, reinterpreted for React Native.

## Core Principles

1. **Code is the source of truth** — tokens, components, and manifests define the system
2. **Semantic first** — use roles (surface, accent, danger) not raw palette values
3. **Native by default** — React Native interaction and layout semantics
4. **Mobile first, web capable** — design for mobile, scale to desktop via Expo
5. **Crisp and neutral** — structured, restrained, brand-neutral by default
6. **Composable before custom** — small reliable blocks over large opaque widgets

## Visual Identity

### Spacing Rhythm

`4 / 6 / 8 / 12 / 16 / 20 / 24` — this is the dominant scale. Screen edge padding
starts at 16px. Card padding is 16–20px. Label-to-control gaps are 6–8px.

### Radius

Base is 10px (`lg`). Inputs and buttons: 8–10px. Cards: 12–16px. Pill rounding only for
switches, circular avatars, and capsule shapes.

### Typography

Body copy at 14px. Labels are compact and medium weight. Titles use spacing and weight,
not oversized type. Muted text stays readable.

### Palette

Near-white in light mode, near-black in dark mode. Muted surfaces from neutral layers,
not tinted fills. Accent color is present but sparingly used. Primary action contrast
comes from foreground/background inversion first.

### Borders and Shadows

Borders are visible and crisp. Focus uses a stronger border plus a soft neutral ring.
Elevation stays subtle — `shadow-xs` and `shadow-sm` energy.

### Icons

16px default. 15px for small controls. 18px for hero or status moments. Icons should
never outweigh labels.

### Controls

Most controls sit between 40–44px tall. Hit slop preserves mobile tap comfort without
inflating visual height.

## What Fresh Is Not

If a screen or component feels any of these, it has drifted:

- **Soft or oversized** — rounded corners too large, padding too generous
- **Overly colorful** — accent color used broadly instead of sparingly
- **Floating** — heavy drop shadows, disconnected cards
- **Playful** — consumer-app energy, decorative flourishes
- **Cramped** — fix spacing before adding decoration
