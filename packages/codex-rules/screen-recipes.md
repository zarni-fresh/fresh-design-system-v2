# Screen Recipes

## Product Extraction Recipe

- Start from approved or in-review design boards, not from screenshots alone.
- Check `@fresh/recipes` before rebuilding a polished section from raw components.
- Identify which parts of the screen are already shared components.
- Separate product-specific shells from cross-product structure before implementing.
- Prefer extracting one stable shared pattern at a time rather than porting a whole
  screen wholesale into `@fresh/ui`.
- Keep product flow logic outside the shared component layer unless it is clearly
  reusable.

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
