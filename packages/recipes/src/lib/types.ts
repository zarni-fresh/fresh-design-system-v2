import type { ReactNode } from 'react';
import type { BadgeEmphasis, BadgeSize, BadgeVariant, ButtonSize, ButtonVariant } from '@fresh/ui';
import type { IconName, TextTone } from '@fresh/ui-core';

export type RecipeAction = {
  accessibilityLabel?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  label: string;
  leadingIcon?: IconName;
  loading?: boolean;
  onPress?: () => void;
  size?: ButtonSize;
  trailingIcon?: IconName;
  variant?: ButtonVariant;
};

export type RecipeBadge = {
  emphasis?: BadgeEmphasis;
  label: string;
  size?: BadgeSize;
  variant?: BadgeVariant;
};

export type RecipeMetadataItem = {
  label: string;
  tone?: TextTone;
};

export type RecipeSummaryRow = {
  emphasis?: 'default' | 'strong';
  label: string;
  tone?: TextTone;
  value: string;
};

export type RecipeSlot = ReactNode;
