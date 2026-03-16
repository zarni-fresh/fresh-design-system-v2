import { Badge, Button } from '@fresh/ui';
import { Stack } from '@fresh/ui-core';
import type { RecipeAction, RecipeBadge } from './types';

export const renderRecipeBadges = (badges?: RecipeBadge[]) => {
  if (!badges?.length) {
    return null;
  }

  return (
    <Stack direction="horizontal" gap={2} wrap>
      {badges.map((badge) => (
        <Badge
          emphasis={badge.emphasis}
          key={`${badge.label}-${badge.variant ?? 'neutral'}`}
          label={badge.label}
          size={badge.size ?? 'sm'}
          variant={badge.variant ?? 'neutral'}
        />
      ))}
    </Stack>
  );
};

export const renderRecipeActions = (actions: RecipeAction[]) => {
  if (!actions.length) {
    return null;
  }

  return (
    <Stack direction="horizontal" gap={2} wrap>
      {actions.map((action) => (
        <Button
          accessibilityLabel={action.accessibilityLabel}
          disabled={action.disabled}
          fullWidth={action.fullWidth}
          key={`${action.label}-${action.variant ?? 'primary'}`}
          label={action.label}
          leadingIcon={action.leadingIcon}
          loading={action.loading}
          onPress={action.onPress}
          size={action.size ?? 'md'}
          trailingIcon={action.trailingIcon}
          variant={action.variant ?? 'primary'}
        />
      ))}
    </Stack>
  );
};
