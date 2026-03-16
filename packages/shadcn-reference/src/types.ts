export type ParityStatus = 'strict' | 'adapted' | 'defer';

export type ParityAxis = {
  defaultExpectation: string;
  strictOn: string[];
};

export type InteractionParity = {
  allowedPlatformAdaptations: string[];
  prohibitedWebAssumptions: string[];
  requiredStates: string[];
};

export type FreshMapping = {
  package: '@fresh/ui' | '@fresh/recipes' | '@fresh/ui-core';
  component: string;
  layer: 'component' | 'recipe' | 'primitive';
};

export type ShadcnReferenceSpec = {
  freshMapping: FreshMapping;
  interactionParityTarget: InteractionParity;
  intentionalDeviations: string[];
  notes: string[];
  referenceName: string;
  status: ParityStatus;
  visualParityTarget: {
    border: ParityAxis;
    density: ParityAxis;
    focus: ParityAxis;
    hierarchy: ParityAxis;
    radius: ParityAxis;
    shadow: ParityAxis;
  };
};
