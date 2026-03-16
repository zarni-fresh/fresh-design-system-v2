export const rawColorTokens = {
  neutral: {
    0: '#FFFFFF',
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#09090B',
  },
  accent: {
    50: '#EEF2FF',
    100: '#E0E7FF',
    200: '#C7D2FE',
    300: '#A5B4FC',
    400: '#818CF8',
    500: '#6366F1',
    600: '#4F46E5',
    700: '#4338CA',
    800: '#3730A3',
    900: '#312E81',
  },
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },
  danger: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
} as const;

export const spacingTokens = {
  0: 0,
  0.5: 2,
  1: 4,
  1.5: 6,
  2: 8,
  2.5: 10,
  3: 12,
  3.5: 14,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
} as const;

export const radiusTokens = {
  none: 0,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  '2xl': 16,
  pill: 999,
} as const;

export const typographyTokens = {
  fontFamily: {
    sans: 'System',
    mono: 'Courier',
  },
  fontSize: {
    xs: 12,
    sm: 13,
    md: 14,
    lg: 16,
    xl: 18,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },
  lineHeight: {
    xs: 16,
    sm: 18,
    md: 20,
    lg: 24,
    xl: 28,
    '2xl': 32,
    '3xl': 38,
    '4xl': 44,
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

export const elevationTokens = {
  0: {
    shadowColor: rawColorTokens.neutral[950],
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  1: {
    shadowColor: rawColorTokens.neutral[950],
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1,
  },
  2: {
    shadowColor: rawColorTokens.neutral[950],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  3: {
    shadowColor: rawColorTokens.neutral[950],
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
} as const;

export const motionTokens = {
  duration: {
    instant: 0,
    fast: 120,
    normal: 200,
    slow: 320,
  },
  easing: {
    standard: [0.2, 0, 0, 1],
    emphasized: [0.2, 0.8, 0.2, 1],
    exit: [0.4, 0, 1, 1],
  },
} as const;

export const rawTokenNaming = {
  color: 'Use family + scale, for example neutral.900 or accent.600.',
  spacing: 'Use numeric steps that map to density-aware space values, for example 4 or 6.',
  radius: 'Use shape intent names from none to pill instead of component-specific corner labels.',
  typography:
    'Use semantic size and weight labels so brand typography can swap in later without renaming callers.',
  elevation:
    'Use shallow numbered layers for reusable surfaces. Do not mint one-off shadow presets in component code.',
  motion: 'Use intent-based duration and easing labels rather than animation-specific names.',
} as const;

export const rawTokens = {
  color: rawColorTokens,
  spacing: spacingTokens,
  radius: radiusTokens,
  typography: typographyTokens,
  elevation: elevationTokens,
  motion: motionTokens,
} as const;

export type RawTokens = typeof rawTokens;
