import type { ComponentProps } from 'react';
import { SkeletonExamples } from './Skeleton.examples';
import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  args: {
    shape: 'line',
    size: 'md',
    tone: 'default',
    width: '100%',
  },
};

export const Default = {
  render: (args: ComponentProps<typeof Skeleton>) => <Skeleton {...args} />,
};

export const Circle = {
  args: {
    shape: 'circle',
  },
};

export const Block = {
  args: {
    shape: 'block',
  },
};

export const Gallery = {
  render: () => <SkeletonExamples />,
};
