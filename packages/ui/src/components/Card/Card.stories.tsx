import type { ComponentProps } from 'react';
import { CardExamples } from './Card.examples';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card';
import { Text } from '@fresh-ds/ui-core';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Default = {
  render: (args: ComponentProps<typeof Card>) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Design system surface</CardTitle>
        <CardDescription>Use Card to group related content into a durable surface.</CardDescription>
      </CardHeader>
      <CardContent>
        <Text tone="muted">The default card emphasizes legibility and structure.</Text>
      </CardContent>
    </Card>
  ),
};

export const Elevated = {
  args: {
    variant: 'elevated',
  },
  render: (args: ComponentProps<typeof Card>) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Elevated card</CardTitle>
        <CardDescription>
          Use elevated surfaces when the section needs a little more prominence.
        </CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const Gallery = {
  render: () => <CardExamples />,
};
