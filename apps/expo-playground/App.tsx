import { useState } from 'react';
import { SafeAreaView, ScrollView, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  AspectRatio,
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Label,
  Progress,
  Separator,
  Skeleton,
  Switch,
  TextField,
  componentManifests,
} from '@fresh-ds/ui';
import { Box, FreshThemeProvider, Stack, Text, useFreshTheme } from '@fresh-ds/ui-core';

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  description: string;
  eyebrow: string;
  title: string;
}) => (
  <Stack gap={1.5}>
    <Text size="sm" tone="muted" weight="medium">
      {eyebrow}
    </Text>
    <Text size="2xl" weight="bold">
      {title}
    </Text>
    <Text tone="muted">{description}</Text>
  </Stack>
);

const ManifestCallout = ({ componentName }: { componentName: keyof typeof componentManifests }) => {
  const manifest = componentManifests[componentName];

  return (
    <Stack gap={1.5}>
      <Text size="sm" tone="muted" weight="medium">
        {componentName} contract
      </Text>
      <Text weight="semibold">{manifest.purpose}</Text>
      <Text size="sm" tone="muted">
        {manifest.whenToUse[0]}
      </Text>
    </Stack>
  );
};

const SpacingScale = () => {
  const { theme } = useFreshTheme();
  const spacingKeys = [1, 2, 3, 4, 6, 8] as const;

  return (
    <Stack gap={3}>
      {spacingKeys.map((key) => (
        <Stack align="center" direction="horizontal" gap={3} key={key}>
          <Text
            style={{
              minWidth: 24,
            }}
            size="sm"
            tone="muted"
          >
            {key}
          </Text>
          <Box
            style={{
              backgroundColor: theme.color.action.primary.background,
              borderRadius: theme.radius.pill,
              height: theme.spacing[2],
              width: theme.spacing[key],
            }}
          />
          <Text size="sm" tone="muted">
            {theme.spacing[key]} px
          </Text>
        </Stack>
      ))}
    </Stack>
  );
};

const PlaygroundScreen = ({
  mode,
  onToggleMode,
}: {
  mode: 'light' | 'dark';
  onToggleMode: () => void;
}) => {
  const { theme } = useFreshTheme();
  const [email, setEmail] = useState('design@fresh.systems');
  const [workspaceName, setWorkspaceName] = useState('Fresh design system');
  const { width } = useWindowDimensions();
  const isWide = width >= 860;
  const isDesktop = width >= 1120;

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
          rowGap: theme.spacing[8],
        }}
        style={{
          flex: 1,
        }}
      >
        <Stack
          gap={8}
          style={{
            alignSelf: 'center',
            maxWidth: 1180,
            width: '100%',
          }}
        >
          <Stack gap={4}>
            <Stack direction="horizontal" gap={2} wrap>
              <Badge label="Expo baseline" variant="accent" />
              <Badge label="Mobile-first" variant="neutral" />
              <Badge label="Desktop web checked" variant="success" />
              <Badge label="Shadcn taxonomy tracked" variant="neutral" />
              <Badge label="new-york recipe" variant="accent" />
            </Stack>

            <Stack gap={2}>
              <Text size="3xl" weight="bold">
                Fresh design system validation surface
              </Text>
              <Text tone="muted">
                This playground is the main working environment for verifying the canonical token
                contract, the refined visual recipe, and the way shared components behave across
                mobile and desktop web.
              </Text>
            </Stack>

            <Stack direction="horizontal" gap={2} wrap>
              <Button
                label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                leadingIcon={mode === 'dark' ? 'sun' : 'moon'}
                onPress={onToggleMode}
                variant="secondary"
              />
              <Button label="Primary action" trailingIcon="chevron-right" />
              <Button label="Open review flow" variant="outline" />
            </Stack>
          </Stack>

          <Stack direction={isDesktop ? 'horizontal' : 'vertical'} gap={4}>
            <Card
              style={{
                flex: 1,
              }}
              variant="elevated"
            >
              <CardHeader>
                <CardTitle>System summary</CardTitle>
                <CardDescription>
                  A good v1 should make the right UI easy to generate before any product branding
                  arrives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Stack gap={4}>
                  <ManifestCallout componentName="Button" />
                  <ManifestCallout componentName="TextField" />
                  <ManifestCallout componentName="Switch" />
                </Stack>
              </CardContent>
            </Card>

            <Card
              style={{
                flex: 1,
              }}
              variant="subtle"
            >
              <CardHeader>
                <CardTitle>Spacing scale</CardTitle>
                <CardDescription>
                  Shared spacing should remain visible and predictable instead of being re-invented
                  inside each screen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SpacingScale />
              </CardContent>
            </Card>
          </Stack>

          <Stack gap={4}>
            <SectionHeading
              description="Validate hierarchy, size, disabled treatment, and loading behavior in one place."
              eyebrow="Buttons"
              title="Action hierarchy and interaction states"
            />

            <Stack direction={isWide ? 'horizontal' : 'vertical'} gap={4}>
              <Card
                style={{
                  flex: 1,
                }}
                variant="outlined"
              >
                <CardHeader>
                  <CardTitle>Variants</CardTitle>
                  <CardDescription>
                    Primary stays singular. Secondary, outline, and ghost support it.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack gap={3}>
                    <Stack direction="horizontal" gap={2} wrap>
                      <Button label="Save changes" variant="primary" />
                      <Button label="Review draft" variant="secondary" />
                    </Stack>
                    <Stack direction="horizontal" gap={2} wrap>
                      <Button label="More options" variant="outline" />
                      <Button label="Dismiss" variant="ghost" />
                      <Button label="Delete" variant="destructive" />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

              <Card
                style={{
                  flex: 1,
                }}
                variant="outlined"
              >
                <CardHeader>
                  <CardTitle>Sizes and states</CardTitle>
                  <CardDescription>
                    Keep the same contract on touch devices and wider desktop web.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack gap={3}>
                    <Stack direction="horizontal" gap={2} wrap>
                      <Button label="Small" size="sm" variant="secondary" />
                      <Button label="Medium" size="md" variant="secondary" />
                      <Button label="Large" size="lg" variant="secondary" />
                    </Stack>
                    <Stack direction="horizontal" gap={2} wrap>
                      <Button label="Saving" loading />
                      <Button disabled label="Unavailable" variant="outline" />
                    </Stack>
                    <Button fullWidth label="Continue to next step" />
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <SectionHeading
              description="Fields should cover label, helper, error, disabled, and accessory needs without extra wrappers."
              eyebrow="Text fields"
              title="Form validation and field ergonomics"
            />

            <Stack direction={isWide ? 'horizontal' : 'vertical'} gap={4}>
              <Card
                style={{
                  flex: 1,
                }}
              >
                <CardHeader>
                  <CardTitle>Live inputs</CardTitle>
                  <CardDescription>
                    These examples double as a visual regression surface for focus, spacing, and
                    helper text treatment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack gap={4}>
                    <TextField
                      description="Use a team-owned mailbox when possible."
                      helperText="This field should look calm in light and dark themes."
                      label="Notification email"
                      onChangeText={setEmail}
                      placeholder="name@company.com"
                      required
                      value={email}
                    />
                    <TextField
                      helperText="Use the canonical workspace name."
                      label="Workspace name"
                      onChangeText={setWorkspaceName}
                      value={workspaceName}
                    />
                  </Stack>
                </CardContent>
              </Card>

              <Card
                style={{
                  flex: 1,
                }}
              >
                <CardHeader>
                  <CardTitle>States</CardTitle>
                  <CardDescription>
                    Error and disabled handling should be obvious without custom screen code.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack gap={4}>
                    <TextField
                      errorMessage="A canonical component should expose validation states."
                      label="System name"
                      placeholder="fresh-design-system"
                    />
                    <TextField
                      editable={false}
                      helperText="Managed by your workspace administrator."
                      label="Workspace slug"
                      value="fresh-design"
                    />
                    <TextField label="Compact field" placeholder="fresh-core" size="sm" />
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <SectionHeading
              description="Cards and badges should handle grouping and status communication without slipping into ad hoc layout wrappers."
              eyebrow="Surfaces and status"
              title="Composable grouping and compact metadata"
            />

            <Stack direction={isWide ? 'horizontal' : 'vertical'} gap={4}>
              <Card
                style={{
                  flex: 1,
                }}
                variant="elevated"
              >
                <CardHeader>
                  <Badge label="Canonical pattern" size="sm" variant="accent" />
                  <CardTitle>Manifest review checklist</CardTitle>
                  <CardDescription>
                    Keep APIs, stories, examples, tests, and manifests aligned before expanding the
                    component set.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack gap={3}>
                    <Stack direction="horizontal" gap={2} wrap>
                      <Badge label="Typed props" variant="success" />
                      <Badge label="Dark mode" variant="neutral" />
                      <Badge label="Stories" variant="neutral" />
                      <Badge label="Manifest" variant="accent" />
                    </Stack>
                    <Text tone="muted">
                      Cards should create durable, readable surfaces. Badges should stay compact and
                      informational.
                    </Text>
                  </Stack>
                </CardContent>
              </Card>

              <Card
                style={{
                  flex: 1,
                }}
                variant="subtle"
              >
                <CardHeader>
                  <CardTitle>Badge emphasis</CardTitle>
                  <CardDescription>
                    The same semantic meaning can adapt across subtle, outline, and strong emphasis
                    without leaving the token system.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack gap={3}>
                    <Stack direction="horizontal" gap={2} wrap>
                      <Badge label="Draft" variant="neutral" />
                      <Badge label="Primary" variant="accent" />
                      <Badge label="Success" variant="success" />
                      <Badge label="Warning" variant="warning" />
                    </Stack>
                    <Stack direction="horizontal" gap={2} wrap>
                      <Badge emphasis="outline" label="Outline" variant="neutral" />
                      <Badge emphasis="outline" label="Queued" variant="accent" />
                      <Badge emphasis="solid" label="Blocked" variant="danger" />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Stack>

          <Stack gap={4}>
            <SectionHeading
              description="Wave 1 focuses on native-ready building blocks that later forms, navigation, and overlay patterns can reuse."
              eyebrow="Wave 1 foundation"
              title="Identity, loading, progress, and fixed media"
            />

            <Stack direction={isWide ? 'horizontal' : 'vertical'} gap={4}>
              <Card
                style={{
                  flex: 1,
                }}
              >
                <CardHeader>
                  <CardTitle>Identity and media framing</CardTitle>
                  <CardDescription>
                    Avatars, aspect ratios, and separators keep structure stable without custom
                    wrappers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack gap={4}>
                    <Stack align="center" direction="horizontal" gap={3} wrap>
                      <Avatar fallbackLabel="Fresh Systems" size="sm" />
                      <Avatar fallbackLabel="Product Design" size="md" tone="accent" />
                      <Avatar fallbackLabel="System Bot" shape="rounded" size="lg" tone="accent" />
                    </Stack>

                    <AspectRatio ratio={16 / 9}>
                      <Box
                        style={{
                          alignItems: 'center',
                          backgroundColor: theme.color.surface.accent,
                          flex: 1,
                          justifyContent: 'center',
                        }}
                      >
                        <Text tone="accent" weight="semibold">
                          Stable media frame
                        </Text>
                      </Box>
                    </AspectRatio>

                    <Stack gap={3}>
                      <Separator />
                      <Stack align="center" direction="horizontal" gap={3}>
                        <Text>Left panel</Text>
                        <Separator orientation="vertical" style={{ minHeight: 28 }} />
                        <Text>Right panel</Text>
                      </Stack>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

              <Card
                style={{
                  flex: 1,
                }}
                variant="subtle"
              >
                <CardHeader>
                  <CardTitle>Loading and progress states</CardTitle>
                  <CardDescription>
                    The system should show structure when loading and measurable progress when it
                    can.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack gap={4}>
                    <Stack gap={3}>
                      <Progress label="Catalog migration" showValueLabel value={64} />
                      <Progress
                        label="Accessibility coverage"
                        showValueLabel
                        value={81}
                        variant="success"
                      />
                    </Stack>

                    <Separator />

                    <Stack gap={3}>
                      <Stack align="center" direction="horizontal" gap={3}>
                        <Skeleton shape="circle" />
                        <Stack
                          style={{
                            flex: 1,
                          }}
                          gap={2}
                        >
                          <Skeleton width="52%" />
                          <Skeleton size="sm" tone="subtle" width="36%" />
                        </Stack>
                      </Stack>
                      <Skeleton shape="block" />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>

            <Stack direction={isWide ? 'horizontal' : 'vertical'} gap={4}>
              <Card
                style={{
                  flex: 1,
                }}
                variant="outlined"
              >
                <CardHeader>
                  <CardTitle>Boolean settings</CardTitle>
                  <CardDescription>
                    Use a visible label plus a tokenized switch instead of one-off setting rows.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack gap={4}>
                    <Stack align="center" direction="horizontal" justify="space-between">
                      <Label required>Dark mode sync</Label>
                      <Switch accessibilityLabel="Dark mode sync" defaultChecked />
                    </Stack>
                    <Stack align="center" direction="horizontal" justify="space-between">
                      <Label>Release notifications</Label>
                      <Switch
                        accessibilityLabel="Release notifications"
                        defaultChecked
                        tone="success"
                      />
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
                </CardContent>
              </Card>

              <Card
                style={{
                  flex: 1,
                }}
                variant="outlined"
              >
                <CardHeader>
                  <CardTitle>Manifest-backed defaults</CardTitle>
                  <CardDescription>
                    These new building blocks now participate in the same examples, stories, tests,
                    and manifest contract as the original four components.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Stack gap={4}>
                    <ManifestCallout componentName="Avatar" />
                    <ManifestCallout componentName="Progress" />
                    <ManifestCallout componentName="Skeleton" />
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Stack>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <FreshThemeProvider mode={mode}>
      <PlaygroundScreen
        mode={mode}
        onToggleMode={() => setMode((currentMode) => (currentMode === 'dark' ? 'light' : 'dark'))}
      />
    </FreshThemeProvider>
  );
}
