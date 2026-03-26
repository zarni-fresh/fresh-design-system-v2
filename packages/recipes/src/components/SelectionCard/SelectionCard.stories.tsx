import type { ComponentProps } from 'react';
import { SelectionCardExamples } from './SelectionCard.examples';
import { SelectionCard } from './SelectionCard';

export default {
  title: 'Recipes/SelectionCard',
  component: SelectionCard,
  args: {
    title: 'Botulinum toxin 50U',
    description: 'Injectable vial · SKU DB-204 · Prescriber-only supply',
    helperText:
      'Use recipe-level selection cards for higher-fidelity prototypes and reusable product sections.',
  },
};

export const Default = {
  render: (args: ComponentProps<typeof SelectionCard>) => <SelectionCard {...args} />,
};

export const Gallery = {
  render: () => <SelectionCardExamples />,
};
