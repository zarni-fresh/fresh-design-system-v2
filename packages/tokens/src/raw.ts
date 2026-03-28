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
  warm: {
    50: '#F8F7F2',
  },
  brand: {
    50: '#EBF7ED',
    100: '#D1EED6',
    200: '#A2CEC0',
    300: '#6BAA93',
    400: '#3D8A6E',
    500: '#256A54',
    600: '#0E4233',
    700: '#0B3529',
    800: '#082820',
    900: '#051B15',
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
    700: '#8B5C14',
    800: '#92400E',
    900: '#78350F',
  },
  danger: {
    50: '#FEF2F2',
    100: '#FFF1F1',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#B53535',
    700: '#B42318',
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

export const zIndexTokens = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  toast: 1400,
} as const;

export const opacityTokens = {
  disabled: 0.38,
  hover: 0.08,
  pressed: 0.12,
  overlay: 0.46,
  overlayDark: 0.72,
} as const;

export const borderWidthTokens = {
  none: 0,
  thin: 1,
  default: 1,
  thick: 2,
} as const;

export const iconSizeTokens = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

export const breakpointTokens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  content: 720,
} as const;

export const textStyleTokens = {
  display: {
    fontSize: 36,
    lineHeight: 44,
    fontWeight: '700' as const,
  },
  heading1: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '700' as const,
  },
  heading2: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600' as const,
  },
  heading3: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600' as const,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400' as const,
  },
  bodyLarge: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400' as const,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400' as const,
  },
  label: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '500' as const,
  },
  labelLarge: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500' as const,
  },
  button: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600' as const,
  },
  overline: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600' as const,
  },
} as const;

export const focusRingTokens = {
  width: 2,
  offset: 2,
} as const;

export const componentTokens = {
  button: {
    height: { sm: 36, md: 40, lg: 48 },
    paddingX: { sm: 12, md: 16, lg: 18 },
    paddingY: { sm: 8, md: 10, lg: 12 },
    iconSize: { sm: 15, md: 16, lg: 18 },
    gap: { sm: 6, md: 8, lg: 8 },
    radius: { sm: 'md' as const, md: 'lg' as const, lg: 'lg' as const },
  },
  input: {
    height: { sm: 36, md: 40, lg: 48 },
    paddingX: { sm: 10, md: 12, lg: 14 },
    paddingY: { sm: 8, md: 10, lg: 12 },
    radius: 'lg' as const,
  },
  card: {
    padding: { sm: 12, md: 16, lg: 20 },
    radius: 'xl' as const,
    gap: 12,
  },
  badge: {
    height: { sm: 20, md: 24, lg: 28 },
    paddingX: { sm: 6, md: 8, lg: 10 },
    radius: 'pill' as const,
  },
  avatar: {
    size: { sm: 28, md: 36, lg: 48, xl: 64 },
    radius: 'pill' as const,
  },
  switch: {
    width: 44,
    height: 24,
    thumbSize: 20,
  },
} as const;

export const rawTokenNaming = {
  color: 'Use family + scale, for example neutral.900 or accent.600.',
  spacing: 'Use numeric steps that map to density-aware space values, for example 4 or 6.',
  radius: 'Use shape intent names from none to pill instead of component-specific corner labels.',
  typography:
    'Use semantic size and weight labels so brand typography can swap in later without renaming callers.',
  textStyle:
    'Use named text styles (heading1, body, label) instead of assembling fontSize + lineHeight + fontWeight individually.',
  elevation:
    'Use shallow numbered layers for reusable surfaces. Do not mint one-off shadow presets in component code.',
  motion: 'Use intent-based duration and easing labels rather than animation-specific names.',
  zIndex:
    'Use named layers (dropdown, modal, toast) to prevent z-index conflicts between unrelated components.',
  opacity:
    'Use named opacity values for consistent disabled, hover, and overlay treatments across components.',
  borderWidth: 'Use named border widths instead of hardcoding pixel values in component code.',
  iconSize:
    'Use named icon sizes (xs through xl) so icons scale consistently with their surrounding context.',
  breakpoint:
    'Use named breakpoints for responsive layout decisions. Use content for readable text containers.',
  focusRing:
    'Use focus ring tokens for consistent keyboard navigation indicators across all interactive components.',
  component:
    'Use component tokens for sizing, padding, and radius so all instances of a component type stay in sync.',
} as const;

export const rawTokens = {
  color: rawColorTokens,
  spacing: spacingTokens,
  radius: radiusTokens,
  typography: typographyTokens,
  textStyle: textStyleTokens,
  elevation: elevationTokens,
  motion: motionTokens,
  zIndex: zIndexTokens,
  opacity: opacityTokens,
  borderWidth: borderWidthTokens,
  iconSize: iconSizeTokens,
  breakpoint: breakpointTokens,
  focusRing: focusRingTokens,
  component: componentTokens,
} as const;

export type RawTokens = typeof rawTokens;
