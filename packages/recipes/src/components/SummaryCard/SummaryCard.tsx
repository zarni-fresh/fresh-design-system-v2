import { Button, Card, Separator } from '@fresh/ui';
import { Stack, Text } from '@fresh/ui-core';
import { renderRecipeBadges } from '../../lib/render';
import type { RecipeAction, RecipeBadge, RecipeSummaryRow } from '../../lib/types';

export const summaryCardToneOptions = ['default', 'accent', 'warning'] as const;

export type SummaryCardTone = (typeof summaryCardToneOptions)[number];

export type SummaryCardProps = {
  badges?: RecipeBadge[];
  description?: string;
  primaryAction?: RecipeAction;
  rows: RecipeSummaryRow[];
  secondaryAction?: RecipeAction;
  title: string;
  tone?: SummaryCardTone;
};

export const SummaryCard = ({
  badges,
  description,
  primaryAction,
  rows,
  secondaryAction,
  title,
  tone = 'default',
}: SummaryCardProps) => {
  const variant = tone === 'default' ? 'subtle' : 'outlined';

  return (
    <Card padding="sm" variant={variant}>
      <Stack gap={3}>
        {badges?.length ? renderRecipeBadges(badges) : null}
        <Stack gap={0.5}>
          <Text size="sm" weight="semibold">
            {title}
          </Text>
          {description ? (
            <Text size="sm" tone="muted">
              {description}
            </Text>
          ) : null}
        </Stack>
        {rows.map((row, index) => (
          <Stack gap={3} key={`${row.label}-${index}`}>
            <Stack align="center" direction="horizontal" justify="space-between">
              <Text
                size="sm"
                tone={row.tone ?? (row.emphasis === 'strong' ? 'default' : 'muted')}
                weight={row.emphasis === 'strong' ? 'semibold' : 'regular'}
              >
                {row.label}
              </Text>
              <Text size="sm" weight={row.emphasis === 'strong' ? 'semibold' : 'medium'}>
                {row.value}
              </Text>
            </Stack>
            {index < rows.length - 1 ? <Separator /> : null}
          </Stack>
        ))}
        {primaryAction || secondaryAction ? (
          <Stack gap={2}>
            {primaryAction ? (
              <Button
                accessibilityLabel={primaryAction.accessibilityLabel}
                disabled={primaryAction.disabled}
                fullWidth={primaryAction.fullWidth ?? true}
                label={primaryAction.label}
                onPress={primaryAction.onPress}
                size={primaryAction.size ?? 'md'}
                trailingIcon={primaryAction.trailingIcon}
                variant={primaryAction.variant ?? 'primary'}
              />
            ) : null}
            {secondaryAction ? (
              <Button
                accessibilityLabel={secondaryAction.accessibilityLabel}
                disabled={secondaryAction.disabled}
                label={secondaryAction.label}
                onPress={secondaryAction.onPress}
                size={secondaryAction.size ?? 'md'}
                variant={secondaryAction.variant ?? 'secondary'}
              />
            ) : null}
          </Stack>
        ) : null}
      </Stack>
    </Card>
  );
};
