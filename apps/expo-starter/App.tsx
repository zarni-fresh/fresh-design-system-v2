import { type ReactNode, useState } from 'react';
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

const SectionHeading = ({
  description,
  eyebrow,
  title,
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

const SummaryRow = ({
  label,
  value,
  strong = false,
}: {
  label: string;
  strong?: boolean;
  value: string;
}) => (
  <Stack align="center" direction="horizontal" justify="space-between">
    <Text tone={strong ? 'default' : 'muted'} weight={strong ? 'semibold' : 'regular'}>
      {label}
    </Text>
    <Text weight={strong ? 'semibold' : 'medium'}>{value}</Text>
  </Stack>
);

const DrugbookProductSelectionCard = () => {
  const { theme } = useFreshTheme();

  return (
    <Card variant="elevated">
      <CardHeader>
        <Stack align="center" direction="horizontal" gap={3}>
          <Box
            style={{
              alignItems: 'center',
              backgroundColor: theme.color.surface.accent,
              borderColor: theme.color.border.accent,
              borderRadius: theme.radius.lg,
              borderWidth: 1,
              height: 56,
              justifyContent: 'center',
              width: 56,
            }}
          >
            <Avatar fallbackLabel="Drugbook" size="sm" tone="accent" />
          </Box>
          <Stack gap={1} style={{ flex: 1 }}>
            <Stack direction="horizontal" gap={2} wrap>
              <Badge label="Selected product" size="sm" variant="accent" />
              <Badge label="In stock" size="sm" variant="success" />
            </Stack>
            <CardTitle>Botulinum toxin 50U</CardTitle>
            <CardDescription>Injectable vial · SKU DB-204 · Prescriber-only supply</CardDescription>
          </Stack>
        </Stack>
      </CardHeader>
      <CardContent>
        <Stack gap={3}>
          <Text tone="muted">
            This local Drugbook card stays product-specific for now, but it still composes only
            approved Fresh primitives and shared components.
          </Text>
          <Stack direction="horizontal" gap={2} wrap>
            <Badge emphasis="outline" label="Cold chain" size="sm" variant="neutral" />
            <Badge emphasis="outline" label="Batch tracked" size="sm" variant="neutral" />
            <Badge emphasis="outline" label="Clinic ready" size="sm" variant="neutral" />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

const DrugbookQuantityStepper = ({
  onDecrement,
  onIncrement,
  quantity,
}: {
  onDecrement: () => void;
  onIncrement: () => void;
  quantity: number;
}) => (
  <Stack align="center" direction="horizontal" gap={3} justify="space-between">
    <Button
      accessibilityLabel="Decrease quantity"
      disabled={quantity <= 1}
      label="-"
      onPress={onDecrement}
      size="sm"
      variant="outline"
    />
    <Stack align="center" gap={1} style={{ flex: 1 }}>
      <Text size="2xl" weight="bold">
        {quantity}
      </Text>
      <Text size="sm" tone="muted">
        vials selected
      </Text>
    </Stack>
    <Button
      accessibilityLabel="Increase quantity"
      label="+"
      onPress={onIncrement}
      size="sm"
      variant="outline"
    />
  </Stack>
);

const DrugbookBatchOptionCard = ({
  detail,
  onSelect,
  recommended = false,
  selected = false,
  title,
}: {
  detail: string;
  onSelect: () => void;
  recommended?: boolean;
  selected?: boolean;
  title: string;
}) => (
  <Card variant={selected ? 'elevated' : 'outlined'}>
    <CardHeader>
      <Stack direction="horizontal" gap={2} wrap>
        {recommended ? <Badge label="Recommended" size="sm" variant="accent" /> : null}
        {selected ? <Badge label="Selected" size="sm" variant="success" /> : null}
      </Stack>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{detail}</CardDescription>
    </CardHeader>
    <CardContent>
      <Stack align="center" direction="horizontal" gap={3} justify="space-between">
        <Text size="sm" tone="muted" style={{ flex: 1 }}>
          Keep batch selection local to Drugbook until a reusable supply-selection pattern appears
          in another product.
        </Text>
        <Button
          disabled={selected}
          label={selected ? 'Selected' : 'Select batch'}
          onPress={onSelect}
          size="sm"
          variant={selected ? 'secondary' : 'outline'}
        />
      </Stack>
    </CardContent>
  </Card>
);

const DrugbookSummaryCard = ({
  batchLabel,
  quantity,
}: {
  batchLabel: string;
  quantity: number;
}) => {
  const unitPrice = 128;
  const subtotal = quantity * unitPrice;
  const handling = 18;
  const total = subtotal + handling;

  return (
    <Card variant="subtle">
      <CardHeader>
        <Badge label="Product-local summary" size="sm" variant="warning" />
        <CardTitle>Review before continuing</CardTitle>
        <CardDescription>
          The summary stays local today, but it should still look calm, structured, and
          deterministic.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack gap={3}>
          <SummaryRow label="Selected batch" value={batchLabel} />
          <SummaryRow label="Quantity" value={`${quantity} vials`} />
          <SummaryRow label="Subtotal" value={`$${subtotal}`} />
          <SummaryRow label="Cold-chain handling" value={`$${handling}`} />
          <Separator />
          <SummaryRow label="Estimated total" strong value={`$${total}`} />
          <Button fullWidth label="Continue to review" trailingIcon="chevron-right" />
        </Stack>
      </CardContent>
    </Card>
  );
};

const AuditCard = ({
  badges,
  children,
  title,
}: {
  badges?: ReactNode;
  children: ReactNode;
  title: string;
}) => (
  <Card variant="outlined">
    <CardHeader>
      {badges}
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <Stack gap={3}>{children}</Stack>
    </CardContent>
  </Card>
);

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
  const [drugbookQuantity, setDrugbookQuantity] = useState(2);
  const [selectedBatchId, setSelectedBatchId] = useState<'batch-a41' | 'batch-b09'>('batch-a41');
  const isWide = width >= 960;
  const selectedBatchLabel = selectedBatchId === 'batch-a41' ? 'Batch A41' : 'Batch B09';

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

          <Stack gap={4}>
            <SectionHeading
              description="This is a concrete example of how a PM brief and an engineer implementation should flow through Fresh without over-promoting product-specific UI."
              eyebrow="Worked example"
              title="Drugbook pilot using the Fresh starter"
            />

            <Stack direction={isWide ? 'horizontal' : 'vertical'} gap={4}>
              <Stack
                gap={4}
                style={{
                  flex: 1.1,
                }}
              >
                <Card variant="elevated">
                  <CardHeader>
                    <Stack direction="horizontal" gap={2} wrap>
                      <Badge label="Drugbook" variant="accent" />
                      <Badge label="PM brief translated" variant="neutral" />
                      <Badge label="Engineer-ready" variant="success" />
                    </Stack>
                    <CardTitle>Select product and batch</CardTitle>
                    <CardDescription>
                      Review the selected product, adjust quantity, choose a batch, and continue
                      with one clear primary action.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <DrugbookProductSelectionCard />

                <Card variant="outlined">
                  <CardHeader>
                    <CardTitle>Quantity</CardTitle>
                    <CardDescription>
                      This row stays local for now because a generalized stepper pattern is not yet
                      approved.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DrugbookQuantityStepper
                      onDecrement={() =>
                        setDrugbookQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))
                      }
                      onIncrement={() =>
                        setDrugbookQuantity((currentQuantity) => Math.min(9, currentQuantity + 1))
                      }
                      quantity={drugbookQuantity}
                    />
                  </CardContent>
                </Card>

                <Card variant="outlined">
                  <CardHeader>
                    <CardTitle>Batch options</CardTitle>
                    <CardDescription>
                      These options are product-local, but the surrounding composition still uses
                      shared Fresh surfaces and actions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Stack gap={3}>
                      <DrugbookBatchOptionCard
                        detail="Expires Oct 2026 · 12 units available"
                        onSelect={() => setSelectedBatchId('batch-a41')}
                        recommended
                        selected={selectedBatchId === 'batch-a41'}
                        title="Batch A41"
                      />
                      <DrugbookBatchOptionCard
                        detail="Expires Jan 2027 · 8 units available"
                        onSelect={() => setSelectedBatchId('batch-b09')}
                        selected={selectedBatchId === 'batch-b09'}
                        title="Batch B09"
                      />
                    </Stack>
                  </CardContent>
                </Card>

                <DrugbookSummaryCard batchLabel={selectedBatchLabel} quantity={drugbookQuantity} />

                <Stack direction="horizontal" gap={2} wrap>
                  <Button label="Back" variant="ghost" />
                  <Button label="Save draft" variant="secondary" />
                  <Button fullWidth label="Continue to next step" trailingIcon="chevron-right" />
                </Stack>
              </Stack>

              <Stack
                gap={4}
                style={{
                  flex: 0.9,
                }}
              >
                <AuditCard
                  badges={<Badge label="PM view" size="sm" variant="accent" />}
                  title="What the PM is asking for"
                >
                  <BulletRow>Confirm the selected product without rebuilding a custom shell.</BulletRow>
                  <BulletRow>Make quantity changes easy on touch devices.</BulletRow>
                  <BulletRow>Show distinct batch choices and a clear next step.</BulletRow>
                  <BulletRow>Keep summary information grouped and scannable.</BulletRow>
                </AuditCard>

                <AuditCard
                  badges={<Badge label="Engineer view" size="sm" variant="success" />}
                  title="What the engineer should reuse now"
                >
                  <Stack direction="horizontal" gap={2} wrap>
                    <Badge label="Button" variant="neutral" />
                    <Badge label="Card" variant="neutral" />
                    <Badge label="Badge" variant="neutral" />
                    <Badge label="Label" variant="neutral" />
                    <Badge label="Separator" variant="neutral" />
                  </Stack>
                  <Text size="sm" tone="muted">
                    The screen should be composed from existing shared parts first, then filled in
                    with product-local patterns only where the shared catalog does not fit yet.
                  </Text>
                </AuditCard>

                <AuditCard
                  badges={<Badge label="Keep local" size="sm" variant="warning" />}
                  title="What should stay product-specific for now"
                >
                  <Stack direction="horizontal" gap={2} wrap>
                    <Badge emphasis="outline" label="ProductSelectionCard" size="sm" variant="warning" />
                    <Badge emphasis="outline" label="QuantityStepperRow" size="sm" variant="warning" />
                    <Badge emphasis="outline" label="BatchOptionCard" size="sm" variant="warning" />
                    <Badge emphasis="outline" label="SummaryTotalsCard" size="sm" variant="warning" />
                  </Stack>
                  <Text size="sm" tone="muted">
                    These are useful Drugbook patterns, but they should not move into `@fresh/ui`
                    until they are proven reusable or explicitly approved.
                  </Text>
                </AuditCard>

                <AuditCard
                  badges={<Badge label="Shared follow-up" size="sm" variant="accent" />}
                  title="What should likely be promoted next"
                >
                  <Stack direction="horizontal" gap={2} wrap>
                    <Badge label="PageHeader" size="sm" variant="accent" />
                    <Badge label="SectionHeader" size="sm" variant="accent" />
                    <Badge label="IconButton" size="sm" variant="accent" />
                  </Stack>
                  <Text size="sm" tone="muted">
                    These patterns are the real cross-product opportunity exposed by the Drugbook
                    pilot. They belong in the shared backlog, not invented ad hoc in screens.
                  </Text>
                </AuditCard>
              </Stack>
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
      <StarterScreen
        mode={mode}
        onToggleMode={() => setMode((currentMode) => (currentMode === 'dark' ? 'light' : 'dark'))}
      />
    </FreshThemeProvider>
  );
}
