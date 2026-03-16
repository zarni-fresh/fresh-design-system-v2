import { Stack } from '@fresh/ui-core';
import { Label } from '../Label/Label';
import { Switch } from './Switch';

export const SwitchExamples = () => {
  return (
    <Stack gap={4}>
      <Stack align="center" direction="horizontal" justify="space-between">
        <Label required>Dark mode sync</Label>
        <Switch accessibilityLabel="Dark mode sync" defaultChecked />
      </Stack>

      <Stack align="center" direction="horizontal" justify="space-between">
        <Label>Notifications</Label>
        <Switch accessibilityLabel="Notifications" defaultChecked tone="success" />
      </Stack>

      <Stack align="center" direction="horizontal" justify="space-between">
        <Label optionalLabel="Optional" tone="muted">
          High-risk actions
        </Label>
        <Switch accessibilityLabel="High-risk actions" tone="warning" />
      </Stack>

      <Stack align="center" direction="horizontal" justify="space-between">
        <Label tone="muted">Workspace lock</Label>
        <Switch accessibilityLabel="Workspace lock" disabled />
      </Stack>
    </Stack>
  );
};
