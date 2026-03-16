import type { ComponentProps } from 'react';
import { BadgeExamples } from './Badge.examples';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    label: 'In review',
    variant: 'neutral',
    emphasis: 'subtle',
  },
};

export const Default = {
  render: (args: ComponentProps<typeof Badge>) => <Badge {...args} />,
};

export const Solid = {
  args: {
    emphasis: 'solid',
    variant: 'accent',
  },
};

export const Outline = {
  args: {
    emphasis: 'outline',
    variant: 'success',
  },
};

export const Gallery = {
  render: () => <BadgeExamples />,
};
