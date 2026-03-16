import { StickyActionFooter } from './StickyActionFooter';

export const StickyActionFooterExamples = () => (
  <StickyActionFooter
    caption="Recipe footers give prototypes a stronger bottom-of-screen action treatment without forcing every app to invent one."
    primaryAction={{ label: 'Continue to next step', trailingIcon: 'chevron-right' }}
    secondaryAction={{ label: 'Save draft', variant: 'secondary' }}
    tertiaryAction={{ label: 'Back', variant: 'ghost' }}
  />
);
