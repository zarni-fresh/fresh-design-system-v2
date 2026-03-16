import type { ComponentProps } from 'react';
import { SwitchExamples } from './Switch.examples';
import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  args: {
    accessibilityLabel: 'Enable notifications',
    defaultChecked: true,
    size: 'md',
    tone: 'accent',
  },
};

export const Default = {
  render: (args: ComponentProps<typeof Switch>) => <Switch {...args} />,
};

export const Success = {
  args: {
    accessibilityLabel: 'Enable workspace sync',
    tone: 'success',
  },
};

export const Disabled = {
  args: {
    accessibilityLabel: 'Workspace lock',
    disabled: true,
  },
};

export const Gallery = {
  render: () => <SwitchExamples />,
};
