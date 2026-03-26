import type { SemanticTheme } from '@fresh-ds/tokens';
import { getFeedbackPalette } from '@fresh-ds/ui-core';

export const switchSizeOptions = ['sm', 'md'] as const;
export const switchToneOptions = ['accent', 'success', 'warning', 'danger'] as const;

export type SwitchSize = (typeof switchSizeOptions)[number];
export type SwitchTone = (typeof switchToneOptions)[number];

const switchScaleMap = {
  sm: 0.76,
  md: 0.88,
} as const;

export const getSwitchScale = (size: SwitchSize) => switchScaleMap[size];

export const getSwitchPalette = (theme: SemanticTheme, tone: SwitchTone) => {
  if (tone === 'accent') {
    return {
      thumb: theme.color.surface.default,
      thumbDisabled: theme.color.surface.subtle,
      trackOff: theme.color.surface.disabled,
      trackOn: theme.color.action.primary.background,
    };
  }

  const feedback = getFeedbackPalette(theme, tone);

  return {
    thumb: theme.color.surface.default,
    thumbDisabled: theme.color.surface.subtle,
    trackOff: theme.color.surface.disabled,
    trackOn: feedback.backgroundStrong,
  };
};
