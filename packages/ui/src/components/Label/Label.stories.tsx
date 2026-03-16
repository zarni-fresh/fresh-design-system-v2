import type { ComponentProps } from 'react';
import { LabelExamples } from './Label.examples';
import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  args: {
    children: 'Workspace name',
    size: 'md',
    tone: 'default',
  },
};

export const Default = {
  render: (args: ComponentProps<typeof Label>) => <Label {...args} />,
};

export const Required = {
  args: {
    children: 'Notification email',
    required: true,
  },
};

export const Optional = {
  args: {
    children: 'Slack channel',
    optionalLabel: 'Optional',
    tone: 'muted',
  },
};

export const Gallery = {
  render: () => <LabelExamples />,
};
