import type { ComponentProps } from 'react';
import { ProgressExamples } from './Progress.examples';
import { Progress } from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
  args: {
    label: 'Migration',
    showValueLabel: true,
    size: 'md',
    value: 64,
    variant: 'accent',
  },
};

export const Default = {
  render: (args: ComponentProps<typeof Progress>) => <Progress {...args} />,
};

export const Success = {
  args: {
    label: 'Accessibility coverage',
    value: 78,
    variant: 'success',
  },
};

export const Warning = {
  args: {
    label: 'Migration risk',
    value: 28,
    variant: 'warning',
  },
};

export const Gallery = {
  render: () => <ProgressExamples />,
};
