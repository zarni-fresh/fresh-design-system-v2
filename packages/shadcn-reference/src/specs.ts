import type { ShadcnReferenceSpec } from './types';

export const shadcnReferenceSpecs = [
  {
    referenceName: 'Button',
    freshMapping: {
      package: '@fresh/ui',
      component: 'Button',
      layer: 'component',
    },
    status: 'strict',
    visualParityTarget: {
      density: {
        defaultExpectation: 'Compact new-york density with clear action hierarchy.',
        strictOn: ['padding rhythm', 'height proportions', 'label weight'],
      },
      radius: {
        defaultExpectation: 'Use the refined Fresh radius scale to stay close to shadcn new-york.',
        strictOn: ['corner treatment', 'full pill handling'],
      },
      border: {
        defaultExpectation: 'Outline variants should stay crisp and neutral.',
        strictOn: ['outline contrast', 'destructive contrast'],
      },
      shadow: {
        defaultExpectation: 'Elevated variants should use subtle shadows only.',
        strictOn: ['primary action elevation restraint'],
      },
      hierarchy: {
        defaultExpectation: 'Primary should read unmistakably primary without extra decoration.',
        strictOn: ['variant meaning', 'foreground contrast'],
      },
      focus: {
        defaultExpectation: 'Visible focus ring, neutral in tone, never omitted on web.',
        strictOn: ['focus visibility', 'disabled state treatment'],
      },
    },
    interactionParityTarget: {
      requiredStates: ['default', 'hover/web', 'pressed', 'focus', 'disabled', 'loading'],
      allowedPlatformAdaptations: [
        'Pressed feedback may rely on native press states instead of DOM active styles.',
        'Hover is additive on web and should not be required for comprehension.',
      ],
      prohibitedWebAssumptions: [
        'Do not depend on button element defaults.',
        'Do not rely on DOM-only slot patterns or asChild semantics.',
      ],
    },
    intentionalDeviations: [
      'Fresh keeps RN-native accessibility and event handling instead of DOM composition helpers.',
    ],
    notes: [
      'Button parity is a top-level visual benchmark for the whole system.',
    ],
  },
  {
    referenceName: 'Input',
    freshMapping: {
      package: '@fresh/ui',
      component: 'TextField',
      layer: 'component',
    },
    status: 'strict',
    visualParityTarget: {
      density: {
        defaultExpectation: 'Compact but comfortable field height with clear helper and error spacing.',
        strictOn: ['input height', 'label spacing', 'helper rhythm'],
      },
      radius: {
        defaultExpectation: 'Field radius should match the shared control family.',
        strictOn: ['field corner treatment'],
      },
      border: {
        defaultExpectation: 'Inputs should have sharper, calmer border relationships than generic cards.',
        strictOn: ['default border', 'focus border', 'invalid border'],
      },
      shadow: {
        defaultExpectation: 'Use border-led focus rather than heavy elevation.',
        strictOn: ['avoid heavy field shadows'],
      },
      hierarchy: {
        defaultExpectation: 'Labels, helper text, and errors should feel quiet but readable.',
        strictOn: ['text hierarchy', 'placeholder restraint'],
      },
      focus: {
        defaultExpectation: 'Visible focus treatment on web, stable on native.',
        strictOn: ['focus visibility', 'error state visibility'],
      },
    },
    interactionParityTarget: {
      requiredStates: ['default', 'focus', 'disabled', 'error', 'placeholder'],
      allowedPlatformAdaptations: [
        'Use RN-native text input behavior and keyboard handling.',
      ],
      prohibitedWebAssumptions: [
        'Do not depend on HTML input pseudo-selectors.',
      ],
    },
    intentionalDeviations: [
      'Fresh includes a visible label and helper contract by default instead of shipping a bare input element.',
    ],
    notes: [
      'Input parity is about field calmness and clarity, not DOM shape.',
    ],
  },
  {
    referenceName: 'Card',
    freshMapping: {
      package: '@fresh/ui',
      component: 'Card',
      layer: 'component',
    },
    status: 'strict',
    visualParityTarget: {
      density: {
        defaultExpectation: 'Contained surfaces should feel tight and readable.',
        strictOn: ['internal padding', 'header-content spacing'],
      },
      radius: {
        defaultExpectation: 'Cards should use a slightly softer radius than controls while staying in-family.',
        strictOn: ['corner consistency'],
      },
      border: {
        defaultExpectation: 'Most definition should come from border and surface contrast, not decoration.',
        strictOn: ['subtle outline treatment'],
      },
      shadow: {
        defaultExpectation: 'Elevated cards use low, calm elevation only.',
        strictOn: ['shadow subtlety'],
      },
      hierarchy: {
        defaultExpectation: 'Header, description, and body content should read clearly without excess chrome.',
        strictOn: ['header hierarchy'],
      },
      focus: {
        defaultExpectation: 'Only interactive cards should show focus treatment.',
        strictOn: ['avoid fake focus on static cards'],
      },
    },
    interactionParityTarget: {
      requiredStates: ['default', 'elevated', 'outlined'],
      allowedPlatformAdaptations: [
        'Use RN surface and shadow primitives instead of CSS box-shadow behavior.',
      ],
      prohibitedWebAssumptions: [
        'Do not assume hover-only elevation changes for comprehension.',
      ],
    },
    intentionalDeviations: [],
    notes: ['Card parity is mostly visual and structural.'],
  },
  {
    referenceName: 'Badge',
    freshMapping: {
      package: '@fresh/ui',
      component: 'Badge',
      layer: 'component',
    },
    status: 'strict',
    visualParityTarget: {
      density: {
        defaultExpectation: 'Badges should stay compact and quiet.',
        strictOn: ['horizontal padding', 'text size'],
      },
      radius: {
        defaultExpectation: 'Rounded compact metadata treatment.',
        strictOn: ['chip-like proportions'],
      },
      border: {
        defaultExpectation: 'Outline and subtle emphasis should remain crisp.',
        strictOn: ['neutral outline contrast'],
      },
      shadow: {
        defaultExpectation: 'No meaningful shadow.',
        strictOn: ['avoid elevation'],
      },
      hierarchy: {
        defaultExpectation: 'Badges should never compete with primary actions.',
        strictOn: ['information density'],
      },
      focus: {
        defaultExpectation: 'Badges are informational by default and should not behave like buttons.',
        strictOn: ['non-interactive semantics'],
      },
    },
    interactionParityTarget: {
      requiredStates: ['subtle', 'outline', 'solid'],
      allowedPlatformAdaptations: [],
      prohibitedWebAssumptions: ['Do not make badges tappable by default.'],
    },
    intentionalDeviations: [],
    notes: ['Badge parity is about restraint.'],
  },
  {
    referenceName: 'Switch',
    freshMapping: {
      package: '@fresh/ui',
      component: 'Switch',
      layer: 'component',
    },
    status: 'adapted',
    visualParityTarget: {
      density: {
        defaultExpectation: 'Compact control family sizing that still respects touch targets.',
        strictOn: ['track-thumb proportion'],
      },
      radius: {
        defaultExpectation: 'Fully rounded track and thumb treatment.',
        strictOn: ['track pill treatment'],
      },
      border: {
        defaultExpectation: 'Track boundary should remain visible in both themes.',
        strictOn: ['unchecked contrast'],
      },
      shadow: {
        defaultExpectation: 'Very light thumb elevation only.',
        strictOn: ['avoid glossy native chrome'],
      },
      hierarchy: {
        defaultExpectation: 'Switches should read as quiet settings controls.',
        strictOn: ['pairing with visible labels'],
      },
      focus: {
        defaultExpectation: 'Visible focus ring on web, stable pressed feedback on touch.',
        strictOn: ['focus visibility'],
      },
    },
    interactionParityTarget: {
      requiredStates: ['checked', 'unchecked', 'disabled', 'focus'],
      allowedPlatformAdaptations: [
        'RN-native switch behavior is acceptable when the visual shell stays aligned with Fresh.',
      ],
      prohibitedWebAssumptions: [
        'Do not copy DOM-only switch internals or Radix data-state assumptions.',
      ],
    },
    intentionalDeviations: [
      'Switch is native-adapted because platform controls differ more than button or card.',
    ],
    notes: ['Switch should feel close to shadcn without pretending native controls are DOM widgets.'],
  },
  {
    referenceName: 'Avatar',
    freshMapping: {
      package: '@fresh/ui',
      component: 'Avatar',
      layer: 'component',
    },
    status: 'strict',
    visualParityTarget: {
      density: {
        defaultExpectation: 'Compact identity marker with calm fallback styling.',
        strictOn: ['size scale', 'initials balance'],
      },
      radius: {
        defaultExpectation: 'Round by default with optional rounded-square adaptation.',
        strictOn: ['circle treatment'],
      },
      border: {
        defaultExpectation: 'Minimal border treatment unless used on tonal surfaces.',
        strictOn: ['subtle edge clarity'],
      },
      shadow: {
        defaultExpectation: 'No heavy elevation.',
        strictOn: ['avoid decorative shadows'],
      },
      hierarchy: {
        defaultExpectation: 'Avatars support identity, not primary hierarchy.',
        strictOn: ['fallback quietness'],
      },
      focus: {
        defaultExpectation: 'Only interactive avatar patterns should receive focus treatment.',
        strictOn: ['static avatars remain purely informational'],
      },
    },
    interactionParityTarget: {
      requiredStates: ['image', 'fallback'],
      allowedPlatformAdaptations: ['RN image loading and fallback timing are acceptable.'],
      prohibitedWebAssumptions: ['Do not depend on DOM image fallback behavior.'],
    },
    intentionalDeviations: [],
    notes: ['Avatar parity should stay visual, not DOM-dependent.'],
  },
] satisfies ShadcnReferenceSpec[];

export const shadcnReferenceNames = shadcnReferenceSpecs.map((spec) => spec.referenceName);

export const getShadcnReferenceSpec = (referenceName: string) =>
  shadcnReferenceSpecs.find((spec) => spec.referenceName === referenceName);
