import { radiusTokens, spacingTokens, typographyTokens } from './raw';

export const freshNativewindPreset = {
  theme: {
    extend: {
      spacing: spacingTokens,
      borderRadius: radiusTokens,
      fontSize: {
        xs: [typographyTokens.fontSize.xs, { lineHeight: typographyTokens.lineHeight.xs }],
        sm: [typographyTokens.fontSize.sm, { lineHeight: typographyTokens.lineHeight.sm }],
        base: [typographyTokens.fontSize.md, { lineHeight: typographyTokens.lineHeight.md }],
        lg: [typographyTokens.fontSize.lg, { lineHeight: typographyTokens.lineHeight.lg }],
        xl: [typographyTokens.fontSize.xl, { lineHeight: typographyTokens.lineHeight.xl }],
        '2xl': [
          typographyTokens.fontSize['2xl'],
          { lineHeight: typographyTokens.lineHeight['2xl'] },
        ],
        '3xl': [
          typographyTokens.fontSize['3xl'],
          { lineHeight: typographyTokens.lineHeight['3xl'] },
        ],
      },
    },
  },
} as const;

export const nativewindContentGlobs = [
  '../../packages/ui-core/src/**/*.{ts,tsx}',
  '../../packages/ui/src/**/*.{ts,tsx}',
  './App.tsx',
  './.storybook/**/*.{ts,tsx}',
] as const;
