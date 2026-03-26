import type { SemanticTheme } from '@fresh-ds/tokens';

export const separatorEmphasisOptions = ['subtle', 'default', 'strong'] as const;
export const separatorOrientationOptions = ['horizontal', 'vertical'] as const;

export type SeparatorEmphasis = (typeof separatorEmphasisOptions)[number];
export type SeparatorOrientation = (typeof separatorOrientationOptions)[number];

export const getSeparatorColor = (theme: SemanticTheme, emphasis: SeparatorEmphasis) => {
  switch (emphasis) {
    case 'subtle':
      return theme.color.border.default;
    case 'strong':
      return theme.color.border.strong;
    case 'default':
    default:
      return theme.color.border.input;
  }
};
