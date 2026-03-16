import type { ComponentProps } from 'react';
import { ButtonExamples } from './Button.examples';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'Continue',
    variant: 'primary',
    size: 'md',
  },
};

export const Primary = {
  render: (args: ComponentProps<typeof Button>) => <Button {...args} />,
};

export const Destructive = {
  args: {
    label: 'Delete item',
    variant: 'destructive',
  },
};

export const Loading = {
  args: {
    label: 'Saving',
    loading: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
    label: 'Unavailable',
    variant: 'outline',
  },
};

export const Gallery = {
  render: () => <ButtonExamples />,
};
