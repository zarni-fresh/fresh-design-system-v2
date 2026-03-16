import { SummaryCard } from './SummaryCard';

export const SummaryCardExamples = () => (
  <SummaryCard
    badges={[{ label: 'Prototype summary', variant: 'warning' }]}
    description="Use summary cards to show grouped totals and a single clear next step."
    primaryAction={{ label: 'Continue to review', trailingIcon: 'chevron-right' }}
    rows={[
      { label: 'Selected batch', value: 'Batch A41' },
      { label: 'Quantity', value: '2 vials' },
      { label: 'Subtotal', value: '$256' },
      { label: 'Estimated total', emphasis: 'strong', value: '$274' },
    ]}
    title="Review before continuing"
    tone="warning"
  />
);
