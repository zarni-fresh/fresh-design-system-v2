# Screen Patterns

Common screen compositions using Fresh components. Each pattern shows the component
hierarchy and a working JSX example.

## Pattern 1: Form Screen

A data entry screen with labeled inputs and a submit action.

**Components:** `PageHeader`, `Card`, `Label`, `TextField`, `Stack`, `StickyActionFooter`

```tsx
import { Button, Card, Label, TextField } from '@fresh-ds/ui';
import { Stack } from '@fresh-ds/ui-core';
import { PageHeader, StickyActionFooter } from '@fresh-ds/recipes';

function FormScreen() {
  return (
    <Stack gap={4} style={{ flex: 1, padding: 16 }}>
      <PageHeader
        backLabel="Back"
        description="Fill in the details below"
        onBackPress={() => {}}
        title="New Patient"
      />
      <Card>
        <Stack gap={4} style={{ padding: 16 }}>
          <TextField label="Full Name" placeholder="Enter full name" />
          <TextField label="Email" placeholder="email@example.com" />
          <TextField label="Phone" placeholder="04XX XXX XXX" />
        </Stack>
      </Card>
      <StickyActionFooter primaryAction={{ label: 'Save Patient', onPress: () => {} }} />
    </Stack>
  );
}
```

## Pattern 2: Selection Screen

A screen where the user picks from a list of options.

**Components:** `PageHeader`, `SelectionCard`, `Stack`, `StickyActionFooter`

```tsx
import { Stack } from '@fresh-ds/ui-core';
import { PageHeader, SelectionCard, StickyActionFooter } from '@fresh-ds/recipes';

function SelectionScreen() {
  return (
    <Stack gap={4} style={{ flex: 1, padding: 16 }}>
      <PageHeader description="Choose the product to dispense" title="Select Product" />
      <Stack gap={3}>
        <SelectionCard
          description="500mg, 100 tablets"
          metadata={[{ label: 'PBS Listed' }]}
          selected={true}
          title="Paracetamol"
        />
        <SelectionCard description="200mg, 50 capsules" title="Ibuprofen" />
        <SelectionCard description="10mg, 30 tablets" title="Cetirizine" />
      </Stack>
      <StickyActionFooter
        primaryAction={{ label: 'Confirm Selection', onPress: () => {} }}
        secondaryAction={{ label: 'Cancel', onPress: () => {} }}
      />
    </Stack>
  );
}
```

## Pattern 3: Detail/Summary Screen

A read-only screen showing structured data about an entity.

**Components:** `PageHeader`, `Badge`, `SummaryCard`, `SectionHeader`, `Card`, `Text`,
`Separator`

```tsx
import { Badge, Card, Separator } from '@fresh-ds/ui';
import { Stack, Text } from '@fresh-ds/ui-core';
import { PageHeader, SectionHeader, SummaryCard } from '@fresh-ds/recipes';

function DetailScreen() {
  return (
    <Stack gap={4} style={{ flex: 1, padding: 16 }}>
      <PageHeader
        backLabel="Orders"
        badges={[{ label: 'Completed', variant: 'success' }]}
        onBackPress={() => {}}
        title="Order #1042"
      />
      <SummaryCard
        rows={[
          { label: 'Patient', value: 'Jane Smith' },
          { label: 'Items', value: '3 products' },
          { label: 'Total', value: '$42.50', emphasis: 'strong' },
        ]}
        title="Order Summary"
      />
      <SectionHeader title="Items" />
      <Card>
        <Stack gap={3} style={{ padding: 16 }}>
          <Stack align="center" direction="horizontal" justify="space-between">
            <Text size="sm">Paracetamol 500mg</Text>
            <Text size="sm" weight="medium">
              $12.00
            </Text>
          </Stack>
          <Separator />
          <Stack align="center" direction="horizontal" justify="space-between">
            <Text size="sm">Ibuprofen 200mg</Text>
            <Text size="sm" weight="medium">
              $15.50
            </Text>
          </Stack>
          <Separator />
          <Stack align="center" direction="horizontal" justify="space-between">
            <Text size="sm">Cetirizine 10mg</Text>
            <Text size="sm" weight="medium">
              $15.00
            </Text>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}
```

## Pattern 4: Dashboard/Overview Screen

A top-level screen with KPI summaries and grouped content sections.

**Components:** `PageHeader`, `SummaryCard`, `SectionHeader`, `Card`, `Progress`, `Badge`

```tsx
import { Badge, Card, Progress } from '@fresh-ds/ui';
import { Stack, Text } from '@fresh-ds/ui-core';
import { PageHeader, SectionHeader, SummaryCard } from '@fresh-ds/recipes';

function DashboardScreen() {
  return (
    <Stack gap={4} style={{ flex: 1, padding: 16 }}>
      <PageHeader title="Dashboard" description="Today's overview" />
      <Stack direction="horizontal" gap={3}>
        <SummaryCard
          rows={[{ label: 'Pending', value: '12' }]}
          style={{ flex: 1 }}
          title="Orders"
        />
        <SummaryCard
          rows={[{ label: 'Dispensed', value: '48' }]}
          style={{ flex: 1 }}
          title="Today"
        />
      </Stack>
      <SectionHeader title="Active Tasks" />
      <Card>
        <Stack gap={4} style={{ padding: 16 }}>
          <Stack gap={2}>
            <Stack align="center" direction="horizontal" justify="space-between">
              <Text size="sm" weight="medium">
                Stock Check
              </Text>
              <Badge label="In Progress" variant="accent" size="sm" />
            </Stack>
            <Progress value={65} max={100} variant="accent" size="sm" />
          </Stack>
          <Stack gap={2}>
            <Stack align="center" direction="horizontal" justify="space-between">
              <Text size="sm" weight="medium">
                Daily Reconciliation
              </Text>
              <Badge label="Pending" variant="neutral" size="sm" />
            </Stack>
            <Progress value={0} max={100} variant="neutral" size="sm" />
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}
```

## Composition Rules

- **Screen edge padding:** 16px on mobile, wider on desktop
- **Section gaps:** 16–24px between major blocks
- **Card internals:** 16px padding, 12–16px row gaps
- **Use recipes first** (`PageHeader`, `StickyActionFooter`, etc.) before building custom
  layouts from primitives
- **Dark mode works automatically** when using semantic tokens through Fresh components
