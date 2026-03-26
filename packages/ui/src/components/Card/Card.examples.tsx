import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card';
import { Stack, Text } from '@fresh-ds/ui-core';

export const CardExamples = () => {
  return (
    <Stack gap={4}>
      <Card variant="elevated">
        <CardHeader>
          <Badge label="Canonical pattern" size="sm" variant="accent" />
          <CardTitle>Component manifest review</CardTitle>
          <CardDescription>
            Keep the API, docs, tests, and stories aligned before shipping.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Text tone="muted">
            This card shows the preferred composition model for grouped content and actions.
          </Text>
        </CardContent>
        <CardFooter>
          <Button label="Open checklist" variant="secondary" />
          <Button label="Ship changes" />
        </CardFooter>
      </Card>

      <Card variant="subtle">
        <CardHeader>
          <CardTitle>Usage reminder</CardTitle>
          <CardDescription>
            Avoid turning Card into a generic padding wrapper when Stack or Box is enough.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card variant="outlined">
        <CardHeader>
          <CardTitle>Desktop-friendly density</CardTitle>
          <CardDescription>
            The same card should remain readable on narrow mobile screens and wider desktop web
            layouts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Stack direction="horizontal" gap={2} wrap>
            <Badge emphasis="outline" label="Outlined" size="sm" />
            <Badge label="Token-driven" size="sm" variant="success" />
            <Badge label="Composable" size="sm" variant="accent" />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
