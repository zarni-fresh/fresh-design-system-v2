import type { ComponentProps } from 'react';
import { SeparatorExamples } from './Separator.examples';
import { Separator } from './Separator';

export default {
  title: 'Components/Separator',
  component: Separator,
  args: {
    emphasis: 'default',
    orientation: 'horizontal',
  },
};

export const Default = {
  render: (args: ComponentProps<typeof Separator>) => <Separator {...args} />,
};

export const Strong = {
  args: {
    emphasis: 'strong',
  },
};

export const Vertical = {
  args: {
    orientation: 'vertical',
    style: {
      minHeight: 32,
    },
  },
};

export const Gallery = {
  render: () => <SeparatorExamples />,
};
