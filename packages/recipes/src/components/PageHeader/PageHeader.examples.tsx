import { PageHeader } from './PageHeader';

export const PageHeaderExamples = () => (
  <PageHeader
    actions={[
      { label: 'Save draft', variant: 'secondary' },
      { label: 'Continue', trailingIcon: 'chevron-right' },
    ]}
    badges={[
      { label: 'Drugbook', variant: 'accent' },
      { label: 'Prototype lane', variant: 'success' },
    ]}
    description="Use recipe-level headers when a screen needs polished framing faster than raw component composition."
    eyebrow="Recipe"
    title="Select product and batch"
  />
);
