import type { ComponentProps } from 'react';
import { PageHeaderExamples } from './PageHeader.examples';
import { PageHeader } from './PageHeader';

export default {
  title: 'Recipes/PageHeader',
  component: PageHeader,
  args: {
    title: 'Select product and batch',
    description:
      'Use recipe-level headers when a screen needs polished framing faster than raw component composition.',
    eyebrow: 'Recipe',
  },
};

export const Default = {
  render: (args: ComponentProps<typeof PageHeader>) => <PageHeader {...args} />,
};

export const Gallery = {
  render: () => <PageHeaderExamples />,
};
