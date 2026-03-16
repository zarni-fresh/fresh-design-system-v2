import { useState } from 'react';
import { SafeAreaView, ScrollView, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Label,
  Separator,
  Switch,
  TextField,
} from '@fresh/ui';
import { Box, FreshThemeProvider, Stack, Text, useFreshTheme } from '@fresh/ui-core';

const BulletRow = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useFreshTheme();

  return (
    <Stack align="center" direction="horizontal" gap={2.5}>
      <Box
        style={{
          backgroundColor: theme.color.content.secondary,
          borderRadius: theme.radius.pill,
          height: 6,
          width: 6,
        }}
      />
      <Text style={{ flex: 1 }} tone="muted">
        {children}
      </Text>
    </Stack>
  );
};

const StarterScreen = ({
  mode,
  onToggleMode,
}: {
  mode: 'light' | 'dark';
  onToggleMode: () => void;
}) => {
  const { theme } = useFreshTheme();
  const { width } = useWindowDimensions();
  const [projectName, setProjectName] = useState('Fresh Pilot App');
  const [ownerEmail, setOwnerEmail] = useState('team@fresh.systems');
  const [aiDraftingEnabled, setAiDraftingEnabled] = useState(true);
  const isWide = width >= 960;

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.color.canvas.default,
        flex: 1,
      }}
    >
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      <ScrollView
        contentContainerStyle={{
          padding: theme.spacing[4],
        }}
        style={{
          flex: 1,
        }}
      >
        <Stack
          gap={6}
          style={{
            alignSelf: 'center',
            maxWidth: 1080,
            width: '100%',
          }}
        >
          <Stack gap={4}>
            <Stack direction="horizontal" gap={2} wrap>
              <Badge label="Fresh starter" variant="accent" />
              <Badge label="Expo baseline" variant="neutral" />
              <Badge label="Agent-ready" variant="success" />
              <Badge label="Mobile-first" variant="neutral" />
            </Stack>

            <Stack gap={2}>
              <Text size="3xl" weight="bold">
                Fresh app starter
              </Text>
              <Text tone="muted">
                This is the golden-path reference app for engineers who are vibe coding new
                product surfaces with the Fresh design system.
              </Text>
            </Stack>

            <Stack direction="horizontal" gap={2} wrap>
              <Button
                label={mode === 'dark' ? 'Use light mode' : 'Use dark mode'}
                leadingIcon={mode === 'dark' ? 'sun' : 'moon'}
                onPress={onToggleMode}
                variant="secondary"
              />
              <Button label="Primary action" trailingIcon="chevron-right" />
              <Button label="Secondary action" variant="outline" />
            </Stack>
          </Stack>

          <Stack direction={isWide ? 'horizontal' : 'vertical'} gap={4}>
            <Card
              style={{
                flex: 1.2,
              }}
              variant="elevated"
            >
              <CardHeader>
                <CardTitle>Starter workspace setup</CardTitle>
                <CardDescription>
                  This screen shows the expected quality bar for forms, metadata, boolean settings,
                  and action hierarchy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap={4}>
                  <TextField
                    helperText="Keep the app name short and readable."
                    label="Project name"
                    onChangeText={setProjectName}
                    value={projectName}
                  />
                  <TextField
                    helperText="Use a team-owned mailbox whenever possible."
                    label="Owner email"
                    onChangeText={setOwnerEmail}
                    value={ownerEmail}
                  />

                  <Separator />

                  <Stack align="center" direction="horizontal" justify="space-between">
                    <Stack gap={1} style={{ flex: 1 }}>
                      <Label>AI drafting</Label>
                      <Text size="sm" tone="muted">
                        Keep enabled when you want the assistant to scaffold on-system UI first.
                      </Text>
                    </Stack>
                    <Switch
                      accessibilityLabel="AI drafting"
                      checked={aiDraftingEnabled}
                      onCheckedChange={setAiDraftingEnabled}
                    />
                  </Stack>

                  <Stack direction="horizontal" gap={2} wrap>
                    <Button label="Continue" />
                    <Button label="Save draft" variant="secondary" />
                    <Button label="Cancel" variant="ghost" />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>

            <Stack
              gap={4}
              style={{
                flex: 0.8,
              }}
            >
              <Card variant="subtle">
                <CardHeader>
                  <CardTitle>Rules for generated UI</CardTitle>
                  <CardDescription>
                    These are the default expectations we want engineers and agents to follow.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack gap={3}>
                    <BulletRow>Use `@fresh/ui` first and `@fresh/ui-core` only when needed.</BulletRow>
                    <BulletRow>Do not hardcode visual values in app code.</BulletRow>
                    <BulletRow>Prefer shared patterns over one-off screen inventions.</BulletRow>
                    <BulletRow>Support dark mode and accessibility by default.</BulletRow>
                    <BulletRow>Validate on mobile and desktop web before calling a screen done.</BulletRow>
                  </Stack>
                </CardContent>
              </Card>

              <Card variant="outlined">
                <CardHeader>
                  <CardTitle>Starter composition</CardTitle>
                  <CardDescription>
                    These are good default building blocks for most early app screens.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack direction="horizontal" gap={2} wrap>
                    <Badge label="Button" variant="accent" />
                    <Badge label="TextField" variant="neutral" />
                    <Badge label="Card" variant="neutral" />
                    <Badge label="Badge" variant="neutral" />
                    <Badge label="Label" variant="neutral" />
                    <Badge label="Switch" variant="neutral" />
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Stack>

          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Starter team state</CardTitle>
              <CardDescription>
                Use shared components even on basic dashboard and settings surfaces.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Stack direction={isWide ? 'horizontal' : 'vertical'} gap={4}>
                <Stack
                  gap={3}
                  style={{
                    flex: 1,
                  }}
                >
                  <Text weight="semibold">Active collaborators</Text>
                  <Stack align="center" direction="horizontal" gap={3} wrap>
                    <Avatar fallbackLabel="Zarni Fresh" size="md" tone="accent" />
                    <Avatar fallbackLabel="Product Design" size="md" />
                    <Avatar fallbackLabel="Engineering" shape="rounded" size="md" />
                    <Badge label="3 active" variant="success" />
                  </Stack>
                </Stack>

                <Separator orientation={isWide ? 'vertical' : 'horizontal'} style={{ minHeight: 1 }} />

                <Stack
                  gap={3}
                  style={{
                    flex: 1,
                  }}
                >
                  <Text weight="semibold">Next team step</Text>
                  <Text tone="muted">
                    Start from this app or copy its structure, use the canonical prompt, and keep
                    new UI inside the shared system unless the pattern is clearly product-specific.
                  </Text>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <FreshThemeProvider mode={mode}>
      <StarterScreen
        mode={mode}
        onToggleMode={() => setMode((currentMode) => (currentMode === 'dark' ? 'light' : 'dark'))}
      />
    </FreshThemeProvider>
  );
}
