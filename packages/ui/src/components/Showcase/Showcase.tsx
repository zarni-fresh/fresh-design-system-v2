import { useState } from 'react';
import { Box, Stack, Text, useFreshTheme } from '@fresh/ui-core';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../Card/Card';
import { Label } from '../Label/Label';
import { Progress } from '../Progress/Progress';
import { Separator } from '../Separator/Separator';
import { Skeleton } from '../Skeleton/Skeleton';
import { Switch } from '../Switch/Switch';
import { TextField } from '../TextField/TextField';

export const Showcase = () => {
  const { theme } = useFreshTheme();
  const [workspaceName, setWorkspaceName] = useState('Fresh design system');

  return (
    <Stack gap={6}>
      <Stack gap={2}>
        <Stack direction="horizontal" gap={2} wrap>
          <Badge label="new-york recipe" variant="neutral" />
          <Badge label="brand neutral" variant="accent" />
          <Badge label="expo web ready" variant="success" />
        </Stack>
        <Text size="2xl" weight="bold">
          Fresh UI showcase
        </Text>
        <Text tone="muted">
          A calmer, tighter, neutral-first baseline for the shared React Native design system.
        </Text>
      </Stack>

      <Card variant="elevated">
        <CardHeader>
          <Stack align="center" direction="horizontal" justify="space-between">
            <Stack align="center" direction="horizontal" gap={3}>
              <Avatar fallbackLabel="Fresh Systems" size="lg" tone="accent" />
              <Stack gap={0.5}>
                <CardTitle>Workspace settings</CardTitle>
                <CardDescription>
                  Shared defaults that feel consistent on mobile and desktop web.
                </CardDescription>
              </Stack>
            </Stack>
            <Badge label="System ready" variant="success" />
          </Stack>
        </CardHeader>

        <CardContent>
          <Stack gap={4}>
            <TextField
              helperText="Use the canonical workspace name."
              label="Workspace name"
              onChangeText={setWorkspaceName}
              value={workspaceName}
            />
            <TextField
              helperText="Keep the address team-owned when possible."
              label="Notification email"
              placeholder="design@fresh.systems"
            />

            <Separator />

            <Stack align="center" direction="horizontal" justify="space-between">
              <Stack gap={0.5}>
                <Label>Release notifications</Label>
                <Text size="sm" tone="muted">
                  Notify the team when component manifests or stories change.
                </Text>
              </Stack>
              <Switch accessibilityLabel="Release notifications" defaultChecked />
            </Stack>

            <Progress label="Migration progress" showValueLabel value={72} />

            <Box
              style={{
                backgroundColor: theme.color.surface.subtle,
                borderColor: theme.color.border.default,
                borderRadius: theme.radius['2xl'],
                borderWidth: 1,
                padding: theme.spacing[4],
              }}
            >
              <Stack gap={3}>
                <Stack align="center" direction="horizontal" gap={3}>
                  <Skeleton shape="circle" />
                  <Stack
                    gap={2}
                    style={{
                      flex: 1,
                    }}
                  >
                    <Skeleton width="48%" />
                    <Skeleton size="sm" tone="subtle" width="34%" />
                  </Stack>
                </Stack>
                <Skeleton shape="block" />
              </Stack>
            </Box>
          </Stack>
        </CardContent>

        <CardFooter>
          <Button label="Save changes" />
          <Button label="Preview tokens" variant="secondary" />
        </CardFooter>
      </Card>
    </Stack>
  );
};
