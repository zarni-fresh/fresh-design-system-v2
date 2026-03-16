import type { ComponentProps } from 'react';
import { AvatarExamples } from './Avatar.examples';
import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    alt: 'Alex Johnson',
    fallbackLabel: 'Alex Johnson',
    shape: 'circle',
    size: 'md',
    tone: 'neutral',
  },
};

export const Default = {
  render: (args: ComponentProps<typeof Avatar>) => <Avatar {...args} />,
};

export const Accent = {
  args: {
    fallbackLabel: 'Priya Shah',
    tone: 'accent',
  },
};

export const Rounded = {
  args: {
    fallbackLabel: 'System Bot',
    shape: 'rounded',
    size: 'lg',
    tone: 'accent',
  },
};

export const Gallery = {
  render: () => <AvatarExamples />,
};
