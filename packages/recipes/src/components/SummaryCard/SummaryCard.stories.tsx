import type { ComponentProps } from 'react';
import { SummaryCardExamples } from './SummaryCard.examples';
import { SummaryCard } from './SummaryCard';

export default {
  title: 'Recipes/SummaryCard',
  component: SummaryCard,
  args: {
    title: 'Review before continuing',
    description: 'Use summary cards to show grouped totals and a single clear next step.',
    rows: [
      { label: 'Selected batch', value: 'Batch A41' },
      { label: 'Quantity', value: '2 vials' },
      { label: 'Subtotal', value: '$256' },
      { label: 'Estimated total', emphasis: 'strong', value: '$274' },
    ],
  },
};

export const Default = {
  render: (args: ComponentProps<typeof SummaryCard>) => <SummaryCard {...args} />,
};

export const Gallery = {
  render: () => <SummaryCardExamples />,
};
