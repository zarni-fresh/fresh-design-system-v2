import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from '@fresh/ui';
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
  const variant = tone === 'default' ? 'subtle' : 'elevated';

  return (
    <Card variant={variant}>
      <CardHeader>
        {renderRecipeBadges(badges)}
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <Stack gap={3}>
          {rows.map((row, index) => (
            <Stack gap={3} key={`${row.label}-${index}`}>
              <Stack align="center" direction="horizontal" justify="space-between">
                <Text tone={row.tone ?? (row.emphasis === 'strong' ? 'default' : 'muted')} weight={row.emphasis === 'strong' ? 'semibold' : 'regular'}>
                  {row.label}
                </Text>
                <Text weight={row.emphasis === 'strong' ? 'semibold' : 'medium'}>{row.value}</Text>
              </Stack>
              {index === rows.length - 2 ? <Separator /> : null}
            </Stack>
          ))}
          {primaryAction || secondaryAction ? (
            <Stack direction="horizontal" gap={2} wrap>
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
              {primaryAction ? (
                <Button
                  accessibilityLabel={primaryAction.accessibilityLabel}
                  disabled={primaryAction.disabled}
                  fullWidth={primaryAction.fullWidth}
                  label={primaryAction.label}
                  onPress={primaryAction.onPress}
                  size={primaryAction.size ?? 'md'}
                  trailingIcon={primaryAction.trailingIcon}
                  variant={primaryAction.variant ?? 'primary'}
                />
              ) : null}
            </Stack>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
};
