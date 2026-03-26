import { SummaryCard } from './SummaryCard';

export const SummaryCardExamples = () => (
  <SummaryCard
    description="Use summary cards for compact grouped totals in mobile flows."
    rows={[
      { label: 'Total administered', value: '42 units' },
      { label: 'Current balance', value: '58 units' },
      { emphasis: 'strong', label: 'New balance', value: '16 units' },
    ]}
    title="Summary"
  />
);
