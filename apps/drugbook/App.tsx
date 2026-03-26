import { useState, type ReactNode } from 'react';
import { SafeAreaView, ScrollView, useColorScheme, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  PageHeader,
  SectionHeader,
  SelectionCard,
  StickyActionFooter,
  SummaryCard,
} from '@fresh-ds/recipes';
import { Badge, Button, Card, Progress, Separator } from '@fresh-ds/ui';
import { Box, FreshThemeProvider, Icon, Stack, Text, useFreshTheme } from '@fresh-ds/ui-core';

type TreatmentArea = {
  area: string;
  detail: string;
  id: string;
  units: number;
};

type BatchOption = {
  description: string;
  helperText: string;
  id: string;
  recommended?: boolean;
  title: string;
};

type WorkflowStep = 'select' | 'confirm' | 'review' | 'saved';

const WORKFLOW_STEPS = [
  {
    description: 'Choose the product entry to complete for this visit.',
    id: 'select',
    title: 'Select product',
  },
  {
    description: 'Confirm treatment areas, dose, and tracked batch.',
    id: 'confirm',
    title: 'Confirm quantity',
  },
  {
    description: 'Review chart details before saving the visit record.',
    id: 'review',
    title: 'Review entries',
  },
] as const satisfies ReadonlyArray<{
  description: string;
  id: Exclude<WorkflowStep, 'saved'>;
  title: string;
}>;

const INVENTORY_BEFORE_SAVE = 58;

const INITIAL_TREATMENT_AREAS: TreatmentArea[] = [
  {
    area: 'Frontalis (forehead)',
    detail: '1 treatment area',
    id: 'frontalis',
    units: 12,
  },
  {
    area: 'Glabella',
    detail: '1 treatment area',
    id: 'glabella',
    units: 30,
  },
];

const BATCH_OPTIONS: BatchOption[] = [
  {
    description: '1 remaining vial',
    helperText: 'Expires Oct 2026 - Opened this visit',
    id: 'B7Y-A045',
    recommended: true,
    title: 'B7Y-A045',
  },
  {
    description: '2 vials remaining',
    helperText: 'Expires Jan 2027 - Reserve stock',
    id: 'B7Y-A204',
    title: 'B7Y-A204',
  },
];

const DEFAULT_SELECTED_BATCH_ID = BATCH_OPTIONS[0]?.id ?? 'B7Y-A045';

const formatUnits = (value: number) => `${value} units`;

const clampUnits = (value: number) => Math.max(0, value);

const getStepProgressValue = (step: WorkflowStep) => {
  switch (step) {
    case 'select':
      return 33;
    case 'confirm':
      return 66;
    case 'review':
    case 'saved':
      return 100;
    default:
      return 0;
  }
};

const SelectionIndicator = ({ selected }: { selected?: boolean }) => {
  const { theme } = useFreshTheme();
  const indicatorSize = theme.spacing[8];

  return (
    <Box
      style={{
        alignItems: 'center',
        backgroundColor: selected
          ? theme.color.feedback.accent.background
          : theme.color.surface.default,
        borderColor: selected ? theme.color.border.strong : theme.color.border.default,
        borderRadius: theme.radius.lg,
        borderWidth: 1,
        height: indicatorSize,
        justifyContent: 'center',
        width: indicatorSize,
      }}
    >
      {selected ? (
        <Icon color={theme.color.feedback.accent.foreground} icon="check" size={14} />
      ) : null}
    </Box>
  );
};

const SelectionChevron = () => {
  const { theme } = useFreshTheme();
  const chevronSize = theme.spacing[6];

  return (
    <Box
      style={{
        alignItems: 'center',
        backgroundColor: theme.color.surface.subtle,
        borderColor: theme.color.border.default,
        borderRadius: theme.radius.lg,
        borderWidth: 1,
        height: chevronSize,
        justifyContent: 'center',
        width: chevronSize,
      }}
    >
      <Icon color={theme.color.content.secondary} icon="chevron-right" size={14} />
    </Box>
  );
};

const InlineField = ({ detail, title }: { detail: string; title: string }) => (
  <Card padding="sm" variant="outlined">
    <Stack gap={0.5}>
      <Text size="sm" weight="medium">
        {title}
      </Text>
      <Text size="xs" tone="muted">
        {detail}
      </Text>
    </Stack>
  </Card>
);

const QuantityPill = ({ value }: { value: string }) => {
  const { theme } = useFreshTheme();

  return (
    <Box
      style={{
        backgroundColor: theme.color.surface.subtle,
        borderColor: theme.color.border.default,
        borderRadius: theme.radius.lg,
        borderWidth: 1,
        paddingHorizontal: theme.spacing[2],
        paddingVertical: theme.spacing[1],
      }}
    >
      <Text size="xs" weight="medium">
        {value}
      </Text>
    </Box>
  );
};

const StepAdjustButton = ({
  delta,
  disabled,
  onPress,
}: {
  delta: number;
  disabled?: boolean;
  onPress?: () => void;
}) => {
  const label = `${delta > 0 ? '+' : ''}${delta}`;
  const actionLabel = delta > 0 ? 'Increase' : 'Decrease';

  return (
    <Button
      accessibilityLabel={`${actionLabel} by ${Math.abs(delta)} units`}
      disabled={disabled}
      label={label}
      onPress={onPress}
      size="sm"
      style={{ flex: 1 }}
      variant="outline"
    />
  );
};

const TreatmentAreaCard = ({
  area,
  detail,
  onAdjust,
  units,
}: {
  area: string;
  detail: string;
  onAdjust: (delta: number) => void;
  units: number;
}) => (
  <Card padding="sm" variant="outlined">
    <Stack gap={3}>
      <Stack align="center" direction="horizontal" justify="space-between">
        <Stack gap={0.5}>
          <Text size="sm" weight="medium">
            {area}
          </Text>
          <Text size="xs" tone="muted">
            {detail}
          </Text>
        </Stack>
        <QuantityPill value={formatUnits(units)} />
      </Stack>
      <Stack direction="horizontal" gap={2}>
        {[-4, -1, 1, 4].map((delta) => (
          <StepAdjustButton
            delta={delta}
            disabled={units + delta < 0}
            key={delta}
            onPress={() => onAdjust(delta)}
          />
        ))}
      </Stack>
    </Stack>
  </Card>
);

const ReviewDetailRow = ({ label, value }: { label: string; value: string }) => (
  <Stack align="center" direction="horizontal" gap={3} justify="space-between">
    <Text size="xs" style={{ flex: 1 }} tone="muted" weight="medium">
      {label}
    </Text>
    <Text size="sm" style={{ flex: 1, textAlign: 'right' }} weight="medium">
      {value}
    </Text>
  </Stack>
);

const ReviewEntryCard = ({
  amount,
  batch,
  detail,
  label,
  note,
}: {
  amount: string;
  batch: string;
  detail: string;
  label: string;
  note: string;
}) => (
  <Card padding="sm" variant="outlined">
    <Stack gap={3}>
      <Stack align="center" direction="horizontal" gap={3} justify="space-between">
        <Stack gap={0.5} style={{ flex: 1 }}>
          <Text size="sm" weight="semibold">
            {label}
          </Text>
          <Text size="xs" tone="muted">
            {detail}
          </Text>
        </Stack>
        <Badge label="Ready" size="sm" variant="success" />
      </Stack>

      <Stack direction="horizontal" gap={1.5} wrap>
        <Badge emphasis="outline" label="Lot tracked" size="sm" variant="neutral" />
        <Badge emphasis="outline" label="Inventory ready" size="sm" variant="neutral" />
        <Badge emphasis="outline" label="Charted" size="sm" variant="neutral" />
      </Stack>

      <Separator />

      <Stack gap={2}>
        <ReviewDetailRow label="Batch" value={batch} />
        <ReviewDetailRow label="Amount" value={amount} />
        <ReviewDetailRow label="Note" value={note} />
      </Stack>
    </Stack>
  </Card>
);

const VisitContextCard = ({
  selectedBatchId,
  totalAdministered,
}: {
  selectedBatchId: string;
  totalAdministered: number;
}) => (
  <Card padding="sm" variant="subtle">
    <Stack gap={3}>
      <Stack align="center" direction="horizontal" gap={3} justify="space-between">
        <Stack gap={0.5} style={{ flex: 1 }}>
          <Text size="xs" tone="muted" weight="medium">
            Current visit
          </Text>
          <Text size="sm" weight="semibold">
            Amelia K. - Cosmetic review
          </Text>
          <Text size="xs" tone="muted">
            Dr. Carmen Rivera - 17 March 2026 - Room 04
          </Text>
        </Stack>
        <Badge label="Visit open" size="sm" variant="accent" />
      </Stack>

      <Stack direction="horizontal" gap={1.5} wrap>
        <Badge emphasis="outline" label="Botox 100U" size="sm" variant="neutral" />
        <Badge
          emphasis="outline"
          label={formatUnits(totalAdministered)}
          size="sm"
          variant="neutral"
        />
        <Badge emphasis="outline" label={`Batch ${selectedBatchId}`} size="sm" variant="neutral" />
      </Stack>
    </Stack>
  </Card>
);

const WorkflowProgressCard = ({ currentStep }: { currentStep: WorkflowStep }) => {
  const currentIndex = WORKFLOW_STEPS.findIndex((step) => step.id === currentStep);

  return (
    <Card padding="sm" variant="outlined">
      <Stack gap={3}>
        <Stack gap={0.5}>
          <Text size="sm" weight="semibold">
            Entry progress
          </Text>
          <Text size="xs" tone="muted">
            Move through the same flow a clinician would follow during the visit.
          </Text>
        </Stack>

        <Progress
          showValueLabel
          size="sm"
          value={getStepProgressValue(currentStep)}
          variant="accent"
        />

        <Stack gap={2}>
          {WORKFLOW_STEPS.map((step, index) => {
            const status =
              currentStep === 'saved' || index < currentIndex
                ? 'Done'
                : index === currentIndex
                  ? 'In progress'
                  : 'Up next';

            const variant =
              status === 'Done' ? 'success' : status === 'In progress' ? 'accent' : 'neutral';

            return (
              <Stack
                align="center"
                direction="horizontal"
                gap={3}
                justify="space-between"
                key={step.id}
              >
                <Stack gap={0.5} style={{ flex: 1 }}>
                  <Text size="sm" weight="medium">
                    {step.title}
                  </Text>
                  <Text size="xs" tone="muted">
                    {step.description}
                  </Text>
                </Stack>
                <Badge label={status} size="sm" variant={variant} />
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Card>
  );
};

const ChartNotePreviewCard = ({ note }: { note: string }) => (
  <Card padding="sm" variant="subtle">
    <Stack gap={3}>
      <Stack align="center" direction="horizontal" gap={3} justify="space-between">
        <Stack gap={0.5} style={{ flex: 1 }}>
          <Text size="sm" weight="semibold">
            Draft chart note
          </Text>
          <Text size="xs" tone="muted">
            Auto-generated from the confirmed drugbook entries
          </Text>
        </Stack>
        <Badge label="Draft ready" size="sm" variant="success" />
      </Stack>
      <Text size="sm" tone="muted">
        {note}
      </Text>
    </Stack>
  </Card>
);

const MainSurface = ({ children }: { children: ReactNode }) => (
  <Card padding="lg" variant="elevated">
    <Stack gap={5}>{children}</Stack>
  </Card>
);

const ProductSelectionStep = ({ onContinue }: { onContinue: () => void }) => (
  <MainSurface>
    <PageHeader
      description="Choose the next product entry to complete for this visit. Botox is ready for confirmation now."
      eyebrow="Drugbook"
      title="Select product"
    />

    <Stack gap={2.5}>
      <SectionHeader
        density="sm"
        title="Products documented for this appointment"
        trailingContent={<Badge label="3 products" size="sm" variant="neutral" />}
      />

      <Stack gap={3}>
        <SelectionCard
          action={{
            disabled: true,
            label: 'Selected',
            size: 'sm',
            variant: 'secondary',
          }}
          badges={[{ label: 'Current entry', size: 'sm', variant: 'accent' }]}
          density="compact"
          description="2 areas - 42 units planned"
          helperText="This is the next product that needs a completed drugbook entry."
          leadingAccessory={<SelectionIndicator selected />}
          metadata={[{ label: 'Batch tracked' }, { label: 'Clinician confirmed' }]}
          selected
          title="Botox"
          trailingAccessory={<SelectionChevron />}
        />
        <SelectionCard
          density="compact"
          description="Upper and lower lip - 1.0 mL"
          helperText="This entry follows after the Botox record is saved."
          leadingAccessory={<SelectionIndicator />}
          metadata={[{ label: 'Cold chain' }, { label: 'Queued next' }]}
          title="Juvederm Ultra XC"
          trailingAccessory={<SelectionChevron />}
        />
        <SelectionCard
          density="compact"
          description="Temple restoration - 10 mL"
          helperText="This product is present on the visit but is not the current entry."
          leadingAccessory={<SelectionIndicator />}
          metadata={[{ label: 'Reconstitution required' }, { label: 'Queued next' }]}
          title="Sculptra 150mg vial"
          trailingAccessory={<SelectionChevron />}
        />
      </Stack>
    </Stack>

    <SummaryCard
      badges={[{ label: 'Ready now', variant: 'success' }]}
      rows={[
        { label: 'Current product', value: 'Botox' },
        { label: 'Treatment areas', value: '2' },
        { emphasis: 'strong', label: 'Planned total', value: '42 units' },
      ]}
      title="Current entry"
    />

    <StickyActionFooter
      caption="Continue into the Botox entry to confirm quantity and tracked stock."
      primaryAction={{
        label: 'Continue to quantity',
        onPress: onContinue,
        trailingIcon: 'chevron-right',
      }}
      secondaryAction={{ label: 'Save draft', variant: 'secondary' }}
      surface="card"
    />
  </MainSurface>
);

const ConfirmQuantityStep = ({
  onAdjustArea,
  onBack,
  onContinue,
  onSelectBatch,
  selectedBatchId,
  totalAdministered,
  treatmentAreas,
}: {
  onAdjustArea: (id: string, delta: number) => void;
  onBack: () => void;
  onContinue: () => void;
  onSelectBatch: (id: string) => void;
  selectedBatchId: string;
  totalAdministered: number;
  treatmentAreas: TreatmentArea[];
}) => {
  const remainingAfterSave = clampUnits(INVENTORY_BEFORE_SAVE - totalAdministered);

  return (
    <MainSurface>
      <PageHeader
        backLabel="Back to products"
        density="compact"
        description="Lock the treatment areas, confirm the total dose, and select the tracked batch."
        eyebrow="Drugbook"
        onBackPress={onBack}
        title="Confirm quantity"
      />

      <Stack gap={2.5}>
        <SectionHeader density="sm" leadingIcon="check" title="Product" />
        <InlineField detail="100 units vial" title="Botox" />
      </Stack>

      <Stack gap={2.5}>
        <SectionHeader
          density="sm"
          leadingIcon="check"
          title="Treatment areas"
          trailingContent={
            <Badge label={formatUnits(totalAdministered)} size="sm" variant="accent" />
          }
        />
        {treatmentAreas.map((treatmentArea) => (
          <TreatmentAreaCard
            area={treatmentArea.area}
            detail={treatmentArea.detail}
            key={treatmentArea.id}
            onAdjust={(delta) => onAdjustArea(treatmentArea.id, delta)}
            units={treatmentArea.units}
          />
        ))}
      </Stack>

      <Stack gap={2.5}>
        <SectionHeader
          density="sm"
          leadingIcon="check"
          title="Batch number"
          trailingContent={<Badge label="1 selected" size="sm" variant="neutral" />}
        />
        <Stack gap={3}>
          {BATCH_OPTIONS.map((batchOption) => {
            const selected = batchOption.id === selectedBatchId;

            return (
              <SelectionCard
                action={{
                  disabled: selected,
                  label: selected ? 'Selected' : 'Use batch',
                  onPress: () => onSelectBatch(batchOption.id),
                  size: 'sm',
                  variant: selected ? 'secondary' : 'outline',
                }}
                density="compact"
                description={batchOption.description}
                helperText={batchOption.helperText}
                key={batchOption.id}
                recommended={batchOption.recommended}
                selected={selected}
                title={batchOption.title}
                trailingAccessory={<SelectionIndicator selected={selected} />}
              />
            );
          })}
        </Stack>
      </Stack>

      <SummaryCard
        badges={[{ label: 'Inventory preview', variant: 'neutral' }]}
        rows={[
          { label: 'Total administered', value: formatUnits(totalAdministered) },
          { label: 'Balance before save', value: formatUnits(INVENTORY_BEFORE_SAVE) },
          {
            emphasis: 'strong',
            label: 'Balance after save',
            value: formatUnits(remainingAfterSave),
          },
        ]}
        title="Quantity summary"
      />

      <StickyActionFooter
        caption={`${selectedBatchId} is selected and the Botox dose is ready for review.`}
        primaryAction={{
          label: 'Review entry',
          onPress: onContinue,
          trailingIcon: 'chevron-right',
        }}
        secondaryAction={{ label: 'Save draft', variant: 'secondary' }}
        tertiaryAction={{ label: 'Back', onPress: onBack, variant: 'ghost' }}
        surface="card"
      />
    </MainSurface>
  );
};

const ReviewEntriesStep = ({
  onBack,
  onSave,
  selectedBatchId,
  totalAdministered,
  treatmentAreas,
}: {
  onBack: () => void;
  onSave: () => void;
  selectedBatchId: string;
  totalAdministered: number;
  treatmentAreas: TreatmentArea[];
}) => {
  const remainingAfterSave = clampUnits(INVENTORY_BEFORE_SAVE - totalAdministered);
  const areaSummary = treatmentAreas
    .map((treatmentArea) => treatmentArea.area.split(' (')[0])
    .join(', ');
  const notePreview = `Botox ${formatUnits(totalAdministered)} administered across ${areaSummary} from batch ${selectedBatchId}. Juvederm Ultra XC 1.0 mL documented separately for lip volume restoration.`;

  return (
    <MainSurface>
      <PageHeader
        backLabel="Back to quantity"
        density="compact"
        description="Check inventory movement and the generated chart note before saving the visit record."
        eyebrow="Drugbook"
        meta={
          <Stack gap={2}>
            <Stack align="center" direction="horizontal" gap={3} justify="space-between">
              <Text size="sm" weight="medium">
                Submission readiness
              </Text>
              <Badge label="Ready to save" size="sm" variant="success" />
            </Stack>
            <Progress showValueLabel size="sm" value={100} variant="success" />
          </Stack>
        }
        onBackPress={onBack}
        title="Review entries"
      />

      <Stack gap={2.5}>
        <SectionHeader
          density="sm"
          leadingIcon="check"
          title="Confirmed entries"
          trailingContent={<Badge label="2 entries" size="sm" variant="accent" />}
        />
        <ReviewEntryCard
          amount={formatUnits(totalAdministered)}
          batch={selectedBatchId}
          detail={`${treatmentAreas.length} treatment areas - Botox`}
          label="Botox"
          note="Clinician confirmed"
        />
        <ReviewEntryCard
          amount="1.0 mL"
          batch="J9X-204"
          detail="Upper and lower lip - Juvederm Ultra XC"
          label="Juvederm Ultra XC"
          note="Template note ready"
        />
      </Stack>

      <Stack gap={2.5}>
        <SectionHeader
          density="sm"
          leadingIcon="check"
          title="Chart note"
          trailingContent={<Badge label="Draft ready" size="sm" variant="neutral" />}
        />
        <ChartNotePreviewCard note={notePreview} />
      </Stack>

      <SummaryCard
        badges={[{ label: 'Final review', variant: 'accent' }]}
        rows={[
          { label: 'Drugbook entries', value: '2' },
          { label: 'Tracked batches', value: '2' },
          { label: 'Botox balance after save', value: formatUnits(remainingAfterSave) },
          { emphasis: 'strong', label: 'Submission status', value: 'Ready' },
        ]}
        title="Submission summary"
        tone="accent"
      />

      <StickyActionFooter
        caption="Saving will post the chart note and record lot usage for the confirmed entries."
        primaryAction={{ label: 'Save drugbook', onPress: onSave, trailingIcon: 'chevron-right' }}
        secondaryAction={{ label: 'Save draft', variant: 'secondary' }}
        tertiaryAction={{ label: 'Back', onPress: onBack, variant: 'ghost' }}
        surface="card"
      />
    </MainSurface>
  );
};

const SaveCompleteStep = ({
  onRestart,
  selectedBatchId,
  totalAdministered,
}: {
  onRestart: () => void;
  selectedBatchId: string;
  totalAdministered: number;
}) => {
  const remainingAfterSave = clampUnits(INVENTORY_BEFORE_SAVE - totalAdministered);

  return (
    <MainSurface>
      <PageHeader
        description="The visit note and inventory movement have been recorded successfully."
        eyebrow="Drugbook"
        meta={<Badge label="Saved" size="sm" variant="success" />}
        title="Drugbook saved"
      />

      <SummaryCard
        badges={[{ label: 'Completed', variant: 'success' }]}
        rows={[
          { label: 'Saved entry', value: 'Botox' },
          { label: 'Tracked batch', value: selectedBatchId },
          { label: 'Quantity posted', value: formatUnits(totalAdministered) },
          {
            emphasis: 'strong',
            label: 'Balance remaining',
            value: formatUnits(remainingAfterSave),
          },
        ]}
        title="Saved summary"
      />

      <Card padding="sm" variant="subtle">
        <Stack gap={3}>
          <Stack gap={0.5}>
            <Text size="sm" weight="semibold">
              What happened
            </Text>
            <Text size="sm" tone="muted">
              The clinician note is attached to the visit, the lot usage is recorded against stock,
              and the next queued product can be documented when ready.
            </Text>
          </Stack>
          <Stack direction="horizontal" gap={1.5} wrap>
            <Badge label="Visit updated" size="sm" variant="success" />
            <Badge label="Inventory synced" size="sm" variant="success" />
            <Badge label="Chart note attached" size="sm" variant="success" />
          </Stack>
        </Stack>
      </Card>

      <StickyActionFooter
        caption="Use this stakeholder preview to continue with the next product entry or restart the flow."
        primaryAction={{
          label: 'Record another product',
          onPress: onRestart,
          trailingIcon: 'chevron-right',
        }}
        secondaryAction={{ label: 'Back to visit', variant: 'secondary' }}
        surface="card"
      />
    </MainSurface>
  );
};

const DrugbookApp = () => {
  const { theme } = useFreshTheme();
  const { width } = useWindowDimensions();
  const [currentStep, setCurrentStep] = useState<WorkflowStep>('select');
  const [treatmentAreas, setTreatmentAreas] = useState(INITIAL_TREATMENT_AREAS);
  const [selectedBatchId, setSelectedBatchId] = useState(DEFAULT_SELECTED_BATCH_ID);
  const showDesktopRail = width >= 1100;
  const totalAdministered = treatmentAreas.reduce(
    (currentTotal, treatmentArea) => currentTotal + treatmentArea.units,
    0
  );

  const handleAdjustArea = (id: string, delta: number) => {
    setTreatmentAreas((currentAreas) =>
      currentAreas.map((treatmentArea) =>
        treatmentArea.id === id
          ? {
              ...treatmentArea,
              units: clampUnits(treatmentArea.units + delta),
            }
          : treatmentArea
      )
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'confirm':
        return (
          <ConfirmQuantityStep
            onAdjustArea={handleAdjustArea}
            onBack={() => setCurrentStep('select')}
            onContinue={() => setCurrentStep('review')}
            onSelectBatch={setSelectedBatchId}
            selectedBatchId={selectedBatchId}
            totalAdministered={totalAdministered}
            treatmentAreas={treatmentAreas}
          />
        );
      case 'review':
        return (
          <ReviewEntriesStep
            onBack={() => setCurrentStep('confirm')}
            onSave={() => setCurrentStep('saved')}
            selectedBatchId={selectedBatchId}
            totalAdministered={totalAdministered}
            treatmentAreas={treatmentAreas}
          />
        );
      case 'saved':
        return (
          <SaveCompleteStep
            onRestart={() => setCurrentStep('select')}
            selectedBatchId={selectedBatchId}
            totalAdministered={totalAdministered}
          />
        );
      case 'select':
      default:
        return <ProductSelectionStep onContinue={() => setCurrentStep('confirm')} />;
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.color.canvas.subtle,
        flex: 1,
      }}
    >
      <StatusBar style={theme.mode === 'dark' ? 'light' : 'dark'} />

      <Box
        style={[
          {
            backgroundColor: theme.color.surface.default,
            borderBottomColor: theme.color.border.default,
            borderBottomWidth: 1,
          },
          theme.elevation[1],
        ]}
      >
        <Stack
          gap={3}
          style={{
            alignSelf: 'center',
            maxWidth: 1320,
            paddingHorizontal: theme.spacing[4],
            paddingVertical: theme.spacing[4],
            width: '100%',
          }}
        >
          <Stack
            direction={width >= 900 ? 'horizontal' : 'vertical'}
            gap={3}
            justify="space-between"
          >
            <Stack gap={1}>
              <Stack direction="horizontal" gap={2} wrap>
                <Badge label="Drugbook" variant="accent" />
                <Badge label="Stakeholder preview" variant="neutral" />
              </Stack>
              <Text size="2xl" weight="bold">
                Drugbook
              </Text>
              <Text size="sm" tone="muted">
                Record administered medication before the visit is closed.
              </Text>
            </Stack>

            <Stack gap={1}>
              <Text size="xs" tone="muted" weight="medium">
                Visit owner
              </Text>
              <Text size="sm" weight="semibold">
                Dr. Carmen Rivera
              </Text>
              <Text size="xs" tone="muted">
                Cosmetic review - Amelia K.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <ScrollView
        contentContainerStyle={{
          padding: theme.spacing[4],
        }}
        style={{ flex: 1 }}
      >
        <Stack
          direction={showDesktopRail ? 'horizontal' : 'vertical'}
          gap={4}
          style={{
            alignSelf: 'center',
            maxWidth: 1320,
            width: '100%',
          }}
        >
          <Stack
            gap={4}
            style={{
              flex: 1,
            }}
          >
            {!showDesktopRail ? (
              <Stack gap={4}>
                <VisitContextCard
                  selectedBatchId={selectedBatchId}
                  totalAdministered={totalAdministered}
                />
                <WorkflowProgressCard currentStep={currentStep} />
              </Stack>
            ) : null}

            {renderCurrentStep()}
          </Stack>

          {showDesktopRail ? (
            <Stack
              gap={4}
              style={{
                flex: 0.34,
              }}
            >
              <VisitContextCard
                selectedBatchId={selectedBatchId}
                totalAdministered={totalAdministered}
              />
              <WorkflowProgressCard currentStep={currentStep} />
            </Stack>
          ) : null}
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  const systemColorScheme = useColorScheme();
  const mode = systemColorScheme === 'dark' ? 'dark' : 'light';

  return (
    <FreshThemeProvider mode={mode}>
      <DrugbookApp />
    </FreshThemeProvider>
  );
}
