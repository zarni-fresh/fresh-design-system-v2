import type { ComponentProps } from 'react';
import { SectionHeaderExamples } from './SectionHeader.examples';
import { SectionHeader } from './SectionHeader';

export default {
  title: 'Recipes/SectionHeader',
  component: SectionHeader,
  args: {
    title: 'Batch options',
    description: 'Recipe headers keep repeated sections visually consistent during prototyping.',
    eyebrow: 'Section',
  },
};

export const Default = {
  render: (args: ComponentProps<typeof SectionHeader>) => <SectionHeader {...args} />,
};

export const Gallery = {
  render: () => <SectionHeaderExamples />,
};
