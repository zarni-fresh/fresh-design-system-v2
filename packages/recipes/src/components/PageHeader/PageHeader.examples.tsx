import { PageHeader } from './PageHeader';

export const PageHeaderExamples = () => (
  <PageHeader
    backLabel="Back to products"
    badges={[
      { label: 'Drugbook', variant: 'accent' },
      { label: 'Prototype lane', variant: 'success' },
    ]}
    description="Use recipe-level headers when a screen needs polished framing closer to an approved product flow."
    title="Confirm quantity"
  />
);
