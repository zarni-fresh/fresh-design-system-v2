# `@fresh/tokens`

`@fresh/tokens` is the authority for all reusable visual values in Fresh.

The intended visual character is documented in
[`docs/visual-recipe.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/visual-recipe.md).

## Naming Model

There are two token layers, and they should never be mixed casually:

1. Raw tokens
   Use these only when defining semantic roles.
   Raw names are neutral building blocks such as `neutral.900`, `accent.600`, `4`,
   `md`, or `normal`.

2. Semantic tokens
   Use these everywhere else.
   Semantic names describe UI intent instead of color families or one-off styling
   choices.

## Semantic Color Roles

- `canvas`: app and page backgrounds
- `surface`: contained UI such as cards, grouped sections, and disabled fills
- `border`: separators, field outlines, strong edges, and focus treatment
- `content`: text and icon foregrounds
- `action`: interactive surfaces such as buttons
- `feedback`: status communication for success, warning, danger, accent, and neutral
- `input`: field-specific text, placeholder, border, and background roles

## Rules

- Product code should never import raw palettes to make styling decisions.
- Component code should choose semantic intent first, then map variants to that intent.
- If a new brand arrives later, raw token values can change without renaming semantic
  callers.
- If a new component needs a visual role that does not fit the current semantic model,
  add a new semantic role instead of bypassing the system with inline values.
