import type { SemanticTheme } from '@fresh-ds/tokens';
import { getFeedbackPalette } from '@fresh-ds/ui-core';

export const switchSizeOptions = ['sm', 'md'] as const;
export const switchToneOptions = ['neutral', 'accent', 'success', 'warning', 'danger'] as const;

export type SwitchSize = (typeof switchSizeOptions)[number];
export type SwitchTone = (typeof switchToneOptions)[number];

// Dimensions matching the shadcn Switch pill design
const switchDimensionMap = {
  sm: {
    trackWidth: 36,
    trackHeight: 20,
    thumbSize: 14,
    padding: 3,
    get travel() {
      return this.trackWidth - this.thumbSize - this.padding * 2;
    },
  },
  md: {
    trackWidth: 44,
    trackHeight: 24,
    thumbSize: 18,
    padding: 3,
    get travel() {
      return this.trackWidth - this.thumbSize - this.padding * 2;
    },
  },
} as const satisfies Record<
  SwitchSize,
  {
    trackWidth: number;
    trackHeight: number;
    thumbSize: number;
    padding: number;
    travel: number;
  }
>;

export const getSwitchDimensions = (size: SwitchSize) => switchDimensionMap[size];

export const getSwitchPalette = (theme: SemanticTheme, tone: SwitchTone) => {
  if (tone === 'neutral') {
    return {
      thumb: theme.color.surface.default,
      thumbDisabled: theme.color.surface.elevated,
      trackOff: theme.color.surface.disabled,
      trackOn: theme.color.action.primary.background,
    };
  }

  if (tone === 'accent') {
    return {
      thumb: theme.color.surface.default,
      thumbDisabled: theme.color.surface.elevated,
      trackOff: theme.color.surface.disabled,
      trackOn: theme.color.action.primary.background,
    };
  }

  const feedback = getFeedbackPalette(theme, tone);

  return {
    thumb: theme.color.surface.default,
    thumbDisabled: theme.color.surface.elevated,
    trackOff: theme.color.surface.disabled,
    trackOn: feedback.backgroundStrong,
  };
};
