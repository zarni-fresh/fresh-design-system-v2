import type { ComponentProps } from 'react';
import { TextFieldExamples } from './TextField.examples';
import { TextField } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  args: {
    label: 'Email',
    placeholder: 'name@company.com',
    helperText: 'Use your team email address.',
  },
};

export const Default = {
  render: (args: ComponentProps<typeof TextField>) => <TextField {...args} />,
};

export const Error = {
  args: {
    errorMessage: 'Please enter a valid email address.',
  },
};

export const Disabled = {
  args: {
    editable: false,
    helperText: 'Managed by your workspace administrator.',
  },
};

export const Required = {
  args: {
    description: 'Use the canonical workspace mailbox.',
    required: true,
  },
};

export const Gallery = {
  render: () => <TextFieldExamples />,
};
