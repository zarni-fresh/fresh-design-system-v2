# Architecture Baseline

## Final Decisions

- Repo name: `fresh-design-system`
- Official baseline: Expo
- Serious device workflow: Expo development builds
- Platform support: mobile and desktop web
- Implementation posture: mobile-first
- Language: TypeScript only
- Styling ergonomics: NativeWind
- Tokens: neutral placeholder values for v1
- Visual tone: modern SaaS, crisp, brand-neutral
- Storybook: light scaffold from day one
- Primary runtime: `apps/expo-playground`
- Pencil: primary visual review surface, never implementation authority
- Package namespaces: `@fresh/tokens`, `@fresh/ui-core`, `@fresh/ui`

## Monorepo Intent

The repo is designed around one source of truth:

1. `@fresh/tokens` defines raw and semantic values.
2. `@fresh/ui-core` defines React Native primitives and theme plumbing.
3. `@fresh/ui` defines branded shared components and manifests.
4. `apps/expo-playground` is where components are exercised as real UI.
5. `apps/storybook-native` exists for light component browsing, not as the primary
   authority.

## Cross-Functional Operating Model

1. Visual foundations and shared component anatomy are reviewed in Pencil first.
2. Approved boards are tracked in `design/board-index.md`.
3. Code then becomes the contract for anything that is approved:
   tokens, primitives, components, manifests, stories, docs, and tests.
4. Product-specific patterns can stay outside the shared library until they are
   repeated enough to justify promotion.

## Validation Model

- Build components for React Native first.
- Validate them in Expo dev builds on device or simulator.
- Confirm that the same components behave acceptably on desktop web via Expo web.
- Keep visual and behavioral authority in code, docs, tests, and manifests.
