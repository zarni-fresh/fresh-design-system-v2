import { Badge } from '@fresh/ui';
import { SectionHeader } from './SectionHeader';

export const SectionHeaderExamples = () => (
  <SectionHeader
    badges={[{ label: 'Shared candidate', variant: 'accent' }]}
    description="Recipe headers keep repeated sections visually consistent during prototyping."
    eyebrow="Section"
    title="Batch options"
    trailingContent={<Badge label="2 choices" size="sm" variant="neutral" />}
  />
);
