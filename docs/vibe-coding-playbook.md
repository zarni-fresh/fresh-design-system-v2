# Vibe Coding Playbook

## Purpose

This playbook is for Fresh engineers who want to move quickly in a new app or feature
without falling off-system.

Use this repo as the canonical contract for:

- approved tokens
- shared primitives
- shared components
- agent rules
- examples, stories, and manifests

See the worked example in
[`drugbook-simulation.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/drugbook-simulation.md)
for a concrete PM-to-engineering flow.

## Golden Path

1. Start from the Expo starter app in
   [`apps/expo-starter`](/Users/zarnim/Documents/FCXD/fresh-design-system/apps/expo-starter).
2. Read the root [`AGENTS.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/AGENTS.md).
3. Start with the universal first prompt in
   [`starting-prompt-playbook.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/starting-prompt-playbook.md).
4. Then use the fuller copy-paste prompt in
   [`canonical-agent-prompt.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/canonical-agent-prompt.md).
5. Prefer `@fresh-ds/recipes` for prototype screens and polished screen blocks.
6. Prefer `@fresh-ds/ui` for reusable shared components.
7. Only drop to `@fresh-ds/ui-core` when the higher layers do not fit.
8. If a pattern is missing and repeated, propose it as shared work instead of
   improvising it inline.

## Recommended Default Stack

- Expo
- React Native
- TypeScript
- NativeWind
- `@fresh-ds/tokens`
- `@fresh-ds/ui-core`
- `@fresh-ds/ui`

## Default Team Workflow

1. Start from a known screen or starter surface.
2. Ask the coding agent to inspect existing Fresh components before writing code.
3. Keep the first pass small: one screen, one flow, or one layout slice.
4. Review the result in Expo on mobile and desktop web.
5. If the work exposed a repeated missing pattern, capture it in Pencil and then
   promote it through the shared workflow.

## Rules That Matter Most

- Use only approved shared components or primitives.
- Do not hardcode colors, spacing, radii, shadows, or font sizes.
- Keep the implementation mobile-first even when validating on desktop web.
- Support dark mode and accessibility by default.
- Do not invent product-specific variants in the shared library.
- Prefer one strong primary action per surface.

## Good Prompts

Good prompts are:

- explicit about the user goal
- narrow in scope
- clear about using Fresh components first
- clear about accessibility and dark mode expectations

Use the canonical prompt and then add only the product-specific context you actually
need.

## Bad Prompts

Avoid prompts like:

- "Make this look good"
- "Build a modern screen however you want"
- "Use shadcn but in React Native"
- "Just style it quickly"

Those prompts create drift because they encourage the model to invent patterns instead
of following the repo contract.

## Review Checklist

Before sharing or merging generated UI:

- the screen uses `@fresh-ds/ui` where possible
- no hardcoded visual values were introduced
- the layout works on mobile and desktop web
- the copy is concise and in sentence case
- focus, disabled, and error states are visible
- any missing shared pattern is called out explicitly instead of silently improvised

## When To Leave The Golden Path

Leave the starter path only when:

- the product genuinely needs a new pattern
- the pattern has been reviewed in Pencil
- the repo backlog or approved boards now justify promotion

If not, stay inside the approved starter and shared component set.
