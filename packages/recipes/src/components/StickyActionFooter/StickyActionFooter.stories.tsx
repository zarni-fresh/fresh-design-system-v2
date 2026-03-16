import type { ComponentProps } from 'react';
import { StickyActionFooterExamples } from './StickyActionFooter.examples';
import { StickyActionFooter } from './StickyActionFooter';

export default {
  title: 'Recipes/StickyActionFooter',
  component: StickyActionFooter,
  args: {
    caption: 'Use this recipe when a prototype needs a strong bottom action area.',
    primaryAction: { label: 'Continue to next step', trailingIcon: 'chevron-right' },
    secondaryAction: { label: 'Save draft', variant: 'secondary' },
  },
};

export const Default = {
  render: (args: ComponentProps<typeof StickyActionFooter>) => <StickyActionFooter {...args} />,
};

export const Gallery = {
  render: () => <StickyActionFooterExamples />,
};
