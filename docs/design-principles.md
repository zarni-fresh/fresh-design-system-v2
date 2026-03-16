# Design Principles

## Code Is The Source Of Truth

Tokens, primitives, components, manifests, and examples define the system. Visual tools
may support exploration, but they do not overrule code.

## Pencil For Review, Code For Contract

Pencil is the preferred surface for visual review, product extraction, and component
anatomy alignment. Once the team approves a direction, the repo must codify it in
tokens, components, manifests, docs, stories, and tests.

## Semantic First

Design intent should be expressed through semantic roles such as background, surface,
accent, danger, and text. Product code should never depend on raw palette values.

## Native By Default

Build for React Native interaction, layout, and accessibility semantics. Avoid
web-specific mental models and DOM-centric abstractions.

## Mobile First, Web Capable

Design and implement for mobile ergonomics first, then ensure the same primitives and
components scale cleanly to desktop web through Expo.

## Crisp And Neutral

The initial tone should feel like a modern SaaS system: structured, crisp, and
brand-neutral. Placeholder tokens should stay generic until official brand direction is
available.

## Composable Before Custom

Prefer small, reliable building blocks that can be combined into new flows over large
opaque widgets or screen-specific clones.

## Promote Patterns By Evidence

Do not move a product pattern into the shared library just because it looks polished on
one screen. Promote patterns when they are:

- repeated across products,
- approved as canonical by design and engineering, or
- clearly foundational enough to belong in `ui-core` or the shared component layer.

## Agent Readable

Examples, stories, manifests, file names, and docs should all be structured so an LLM
or codegen pipeline can discover the intended pattern quickly and safely.
