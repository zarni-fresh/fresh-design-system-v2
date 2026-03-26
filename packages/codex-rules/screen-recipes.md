# Screen Recipes

## Product Extraction Recipe

- Start from approved or in-review design boards, not from screenshots alone.
- Start from the approved canvas screen first, then build the app surface from it.
- Check `@fresh/recipes` before rebuilding a polished section from raw components.
- Identify which parts of the screen are already shared components.
- Separate product-specific shells from cross-product structure before implementing.
- Prefer extracting one stable shared pattern at a time rather than porting a whole
  screen wholesale into `@fresh/ui`.
- Keep product flow logic outside the shared component layer unless it is clearly
  reusable.
- Preserve the approved visual and interaction craft of the source screen while
  extracting its shared seam.
- Keep third-party UI choices behind the shared system instead of introducing them in
  product screens.

## Spacing Rules

- Mobile screens should usually begin with `16px` to `20px` edge padding.
- Major sections should usually be separated by `16px` to `24px`.
- Cards and grouped surfaces should usually have `16px` to `20px` internal padding.
- Dense card content should still keep `12px` to `16px` vertical rhythm between rows.
- If a screen feels squashed, increase spacing and regroup content before adding more
  visual treatment.
- On desktop web, keep the mobile-safe internal rhythm but add more outer breathing
  room around the overall screen.

## Form Screen

- Start with page structure built from `Stack`, `Card`, `Text`, and `Button`.
- Group related fields in a `Card`.
- Use `Label` and `TextField` for single-line input and surface validation inline
  through `errorMessage`.
- Use `Switch` for boolean settings instead of building custom toggle rows.
- Keep the primary submit action at the end of the section and use `secondary` or
  `ghost` buttons for non-primary exits.

## Dashboard Summary

- Use a vertical `Stack` for sections.
- Use `Card` as the primary information surface.
- Use `Badge` for compact status metadata.
- Use `Avatar` for owner identity and `Progress` for measurable rollout or migration
  state.
- Reserve `Button` for obvious next actions, not every row.
- On desktop web, let cards breathe with wider layout, but keep the internal component
  density mobile-safe.

## Review Flow

- Lead with status and context in a `CardHeader`.
- Use `Badge` to communicate state changes.
- Put confirm and cancel actions in `CardFooter`.
- Keep destructive actions visually separated from confirm actions.

## Loading State

- Start with the final card or screen structure, then replace unknown content with
  `Skeleton`.
- Keep loading identity rows stable with `Avatar` plus line skeletons.
- Use `Progress` instead of skeletons when the system can measure completion.

## Validation Checklist

- Confirm the screen reads clearly in both light and dark themes.
- Confirm every action has an explicit label and every field has a visible label or
  accessibility label.
- Confirm spacing and hierarchy are built from `Stack`, `Card`, and shared components
  instead of one-off wrappers.
- Confirm the layout is not compressed at the screen edge, section level, or card
  level.
- Confirm a boundary cleanup or promotion change did not quietly restyle the source
  screen.
