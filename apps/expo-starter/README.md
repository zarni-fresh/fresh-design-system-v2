# Expo Starter

This app is the recommended starting point for engineers who want to build a new Expo
surface with the Fresh design system.

It also includes a worked Drugbook pilot example so the team can see how a real
product surface should use shared components first while keeping product-specific
patterns local.

The pilot now uses `@fresh/recipes` as the prototype lane above `@fresh/ui`, which is
the intended workflow for higher-fidelity prompting and faster design-to-code
alignment.

## What It Is For

- a clean baseline app structure
- canonical imports from `@fresh/tokens`, `@fresh/ui-core`, and `@fresh/ui`
- a reference screen that shows the expected quality bar for product scaffolding
- a safer starting point than copying arbitrary product code

## How To Use It

1. Start here before creating a new app flow or app shell.
2. Read the root [`AGENTS.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/AGENTS.md).
3. Read the
   [`vibe-coding-playbook.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/vibe-coding-playbook.md).
4. Use the
   [`canonical-agent-prompt.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/canonical-agent-prompt.md)
   when you hand work to Codex or another coding agent.

## Commands

```bash
cd /Users/zarnim/Documents/FCXD/fresh-design-system
npm run dev:starter
```

For desktop web review:

```bash
npm run dev:starter:web
```
