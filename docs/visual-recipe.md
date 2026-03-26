# Visual Recipe

Fresh should feel close to shadcn's neutral `new-york` style while still behaving like
a React Native system.

## Core Feel

- Neutral-first, not color-first
- Tighter and cleaner than default mobile kits
- Crisp borders with restrained shadows
- Calm surfaces with strong foreground contrast
- Small, consistent radii instead of oversized rounding

## Density And Rhythm

- Use `4 / 6 / 8 / 12 / 16 / 20 / 24` as the dominant spacing rhythm.
- Keep most controls visually between `40px` and `44px` tall, then rely on hit slop to
  preserve mobile tap comfort.
- Default card padding should feel compact and editorial, not roomy by default.
- Compact should never mean cramped. The system should read calm and intentional, not
  compressed.

## Spacing Guardrails

- Mobile screen edge padding should usually start at `16px` and often land at `20px`.
  Avoid dropping below `16px` unless the screen is intentionally edge-to-edge.
- Vertical gaps between major sections should usually be `16px` to `24px`.
- Internal card padding should usually be `16px` to `20px`.
- Gaps between stacked rows inside a card should usually be `12px` to `16px`.
- Label-to-control spacing should usually be `6px` to `8px`.
- Dense list items can use `10px` to `12px` vertical rhythm, but should still breathe.
- Sticky footers should have enough top separation to feel anchored, not jammed into
  the last section.
- On desktop web, keep mobile-safe internals but give the overall screen more outer
  breathing room.

## Anti-Compression Rule

If a screen feels squished, fix spacing before adding new visual decoration.

The first things to check are:

- screen edge padding
- section-to-section gaps
- card internal padding
- title/body/action spacing
- whether too many elements were forced into a single card

## Radius Language

- Base radius is `10px` (`lg`).
- Inputs and buttons should usually sit at `8px` to `10px`.
- Cards should usually sit at `12px` to `16px`.
- Reserve pill rounding for switches, fully circular avatars, and true capsule shapes.

## Neutral Palette Balance

- Canvas and cards should stay very close to white in light mode and very close to
  near-black in dark mode.
- Muted surfaces should come from neutral layers, not tinted gray-blue fills.
- Primary action contrast should come from foreground/background inversion before it
  comes from accent color.
- Accent color should be present, but sparingly and intentionally.

## Borders, Rings, And Shadows

- Default borders should be visible and crisp.
- Input borders should be slightly sharper than generic separators.
- Focus should use a stronger border plus a soft neutral ring.
- Elevation should stay subtle:
  `shadow-xs` and `shadow-sm` energy, not floating marketing-card shadows.

## Typography

- Default body copy should feel close to `14px`.
- Labels should be compact and medium weight.
- Card titles and section titles should rely on spacing and weight, not oversized type.
- Muted text should remain readable; do not wash it out.

## Disabled And Loading Treatment

- Disabled controls should lower contrast and interactivity, but remain readable.
- Loading states should preserve layout and label hierarchy.
- Skeletons should be calm neutral placeholders, not dominant visual blocks.

## Icons

- Default icon size is `16px`.
- Small controls can drop to `15px`; larger hero or status moments can go to `18px`.
- Icons should align to text rhythm and never visually outweigh labels by default.

## Component Heuristics

- `Button`: compact height, medium-weight label, crisp radius, restrained shadow
- `TextField`: clean neutral background, sharper border, stronger focus state
- `Card`: clean border, subtle shadow, compact padding, editorial hierarchy, enough
  internal breathing room to avoid visual crowding
- `Badge`: small radius, short height, compact text
- `Avatar`: quiet neutral shell, simple fallback initials
- `Progress`: thin track, strong fill
- `Switch`: small, clean, and neutral by default

## Guardrail

If a new component feels soft, oversized, or overly colorful, it is probably drifting
away from the recipe.
