import { Avatar } from '@fresh/ui';
import { SelectionCard } from './SelectionCard';

export const SelectionCardExamples = () => (
  <SelectionCard
    action={{ label: 'Selected', disabled: true, variant: 'secondary' }}
    badges={[{ label: 'Drugbook', variant: 'accent' }]}
    description="Injectable vial · SKU DB-204 · Prescriber-only supply"
    helperText="Recipe cards give PMs and engineers a higher-level prototype building block without forcing product-specific shared components."
    media={<Avatar fallbackLabel="Drugbook" size="sm" tone="accent" />}
    metadata={[
      { label: 'Cold chain' },
      { label: 'Batch tracked' },
      { label: 'Clinic ready' },
    ]}
    selected
    title="Botulinum toxin 50U"
    tone="accent"
  />
);
