# Starting Prompt Playbook

## Purpose

This is the easiest way to start a new chat when using Fresh.

The point of the first prompt is not to describe every detail. The point is to force
the agent into the Fresh workflow from the beginning.

## Do People Need To Explicitly Mention The Design System?

Yes.

Do not assume the agent will automatically use Fresh the right way unless the prompt
is explicit.

The first prompt should always say:

- this work is inside the Fresh Design System workflow
- the source screen or approved canvas exists
- the agent must inspect Fresh first
- the agent must use `@fresh/recipes` first, then `@fresh/ui`, then `@fresh/ui-core`
- the agent must not hardcode visual values

## Universal First Prompt

Use this as the default first prompt for almost any new product prototype or screen:

```md
You are helping me build a product prototype using the Fresh Design System workflow.

Workflow:

1. Start from the approved screen or flow on the design canvas.
2. Inspect the Fresh Design System before writing code.
3. Build the app screen in code using Fresh.
4. Keep iterating in code while calling out repeated shared-pattern gaps.

Before writing code:

- inspect `AGENTS.md`
- inspect `docs/how-to-use-fresh.md`
- inspect `docs/canonical-agent-prompt.md`
- inspect the approved screen or canvas context I provide
- inspect existing components in `@fresh/recipes` and `@fresh/ui`
- inspect `@fresh/shadcn-reference` when look, feel, or interaction parity matters

Rules:

- use `@fresh/recipes` first for screen-level composition
- use `@fresh/ui` for reusable shared components
- use `@fresh/ui-core` only when the higher layers do not fit
- do not use raw React Native primitives in product screens when a Fresh wrapper exists
- do not hardcode colors, spacing, radii, font sizes, shadows, or motion values
- keep the implementation mobile-first, but make it work on desktop web too
- support dark mode and accessibility by default
- preserve the approved screen direction; do not invent a new visual system
- do not let spacing collapse or become cramped; follow Fresh spacing guardrails

Task:
[describe the product, screen, or flow]

What I want from you:

1. identify what Fresh already supports
2. identify what should stay product-local for now
3. implement the next useful screen slice
4. call out any missing shared pattern
5. keep the result visually polished and close to the approved screen direction
```

## Minimal First Prompt

If someone wants the shortest version possible, use this:

```md
Inspect Fresh first, then build this screen from the approved canvas using `@fresh/recipes` first, `@fresh/ui` second, and `@fresh/ui-core` only if needed; keep it mobile-first, desktop-web safe, accessible, dark-mode ready, and do not hardcode visual values or collapse spacing.
```

## What To Fill In

After the universal prompt, the person should add:

- the product name
- the exact screen or flow
- the approved canvas or screen reference
- any must-have states
- any constraints on scope

Good examples:

- “Build the Drugbook confirm quantity screen from the approved canvas.”
- “Build the Form Builder list screen from the approved canvas.”
- “Start with the summary/review step only, not the full app.”

## Best Scope For The First Prompt

Do not start by asking for:

- the full app
- every screen
- a complete end-to-end build

Start with:

- one screen
- one step in a flow
- one strong slice of the product

This gets much better results.

## Good Follow-Up Prompts

After the first screen lands, use follow-ups like:

- “Refine the spacing and hierarchy to better match the approved canvas.”
- “Keep the same screen, but promote any repeated local pattern into `@fresh/recipes`
  if justified.”
- “Add loading, empty, and error states without changing the approved visual
  direction.”
- “Now build the next screen in the flow using the same Fresh rules.”

## Anti-Patterns

Avoid first prompts like:

- “Make this look good”
- “Use shadcn but in React Native”
- “Build the whole app”
- “Do whatever feels right”
- “Use inline styles if that is easier”

These prompts produce drift.

## Short Version

Yes, people should be explicit about using the design system.

The safest universal starting instruction is:

- inspect Fresh first
- start from the approved canvas
- use `@fresh/recipes`, then `@fresh/ui`, then `@fresh/ui-core`
- do not hardcode visual values
- keep spacing, accessibility, and dark mode on-system
