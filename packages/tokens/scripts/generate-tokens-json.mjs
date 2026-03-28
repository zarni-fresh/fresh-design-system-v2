/**
 * Generates tokens.json (W3C Design Tokens format) from the TypeScript token source.
 *
 * Output lives at the repo root so it's visible on GitHub and consumable by:
 *   - Figma Token Studio / Variables Import
 *   - Style Dictionary
 *   - Tailwind / CSS variable generators
 *   - Any non-JS platform (iOS, Android, web)
 *
 * Run: node packages/tokens/scripts/generate-tokens-json.mjs
 * Or:  npm run generate:tokens (from repo root)
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '../../..');

// ─── Primitive values (mirrors raw.ts) ────────────────────────────────────────

const color = {
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
};

const spacing = {
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
};
const radius = { none: 0, xs: 4, sm: 6, md: 8, lg: 10, xl: 12, '2xl': 16, pill: 999 };

const fontSize = { xs: 12, sm: 13, md: 14, lg: 16, xl: 18, '2xl': 24, '3xl': 30, '4xl': 36 };
const lineHeight = { xs: 16, sm: 18, md: 20, lg: 24, xl: 28, '2xl': 32, '3xl': 38, '4xl': 44 };
const fontWeight = { regular: '400', medium: '500', semibold: '600', bold: '700' };

const motion = {
  duration: { instant: 0, fast: 120, normal: 200, slow: 320 },
};

const iconSize = { xs: 14, sm: 16, md: 20, lg: 24, xl: 32 };
const zIndex = { base: 0, dropdown: 1000, sticky: 1100, overlay: 1200, modal: 1300, toast: 1400 };
const opacity = { disabled: 0.38, hover: 0.08, pressed: 0.12, overlay: 0.46, overlayDark: 0.72 };

// ─── Semantic tokens — light mode ─────────────────────────────────────────────

const semantic = {
  light: {
    canvas: {
      default: color.neutral[0],
      subtle: color.neutral[50],
      warm: color.warm[50],
      inverse: color.neutral[950],
    },
    surface: {
      default: color.neutral[0],
      subtle: color.neutral[50],
      elevated: color.neutral[0],
      disabled: color.neutral[100],
      accent: color.accent[50],
    },
    border: {
      default: color.neutral[200],
      strong: color.neutral[300],
      input: color.neutral[200],
      focus: color.neutral[400],
      disabled: color.neutral[200],
      accent: color.accent[300],
    },
    content: {
      primary: color.neutral[950],
      secondary: color.neutral[500],
      disabled: color.neutral[400],
      placeholder: color.neutral[400],
      inverse: color.neutral[0],
      accent: color.accent[700],
      danger: color.danger[700],
      success: color.success[700],
      warning: color.warning[600],
    },
    action: {
      primary: {
        background: color.brand[600],
        backgroundHover: color.brand[700],
        backgroundPressed: color.brand[800],
        border: color.brand[600],
        foreground: color.neutral[0],
      },
      secondary: {
        background: color.neutral[0],
        backgroundHover: color.neutral[50],
        backgroundPressed: color.neutral[100],
        border: color.neutral[300],
        foreground: color.neutral[900],
      },
      outline: {
        background: 'transparent',
        backgroundHover: color.neutral[50],
        backgroundPressed: color.neutral[100],
        border: color.neutral[300],
        foreground: color.neutral[900],
      },
      ghost: {
        background: 'transparent',
        backgroundHover: color.neutral[50],
        backgroundPressed: color.neutral[100],
        border: 'transparent',
        foreground: color.neutral[800],
      },
      destructive: {
        background: color.danger[600],
        backgroundHover: color.danger[700],
        backgroundPressed: color.danger[800],
        border: color.danger[600],
        foreground: color.neutral[0],
      },
    },
  },
  dark: {
    canvas: {
      default: color.neutral[950],
      subtle: color.neutral[900],
      warm: color.neutral[900],
      inverse: color.neutral[0],
    },
    surface: {
      default: color.neutral[950],
      subtle: color.neutral[900],
      elevated: color.neutral[900],
      disabled: color.neutral[800],
      accent: 'rgba(129,140,248,0.16)',
    },
    border: {
      default: color.neutral[800],
      strong: color.neutral[700],
      input: color.neutral[700],
      focus: color.neutral[500],
      disabled: color.neutral[800],
      accent: 'rgba(165,180,252,0.48)',
    },
    content: {
      primary: color.neutral[50],
      secondary: color.neutral[400],
      disabled: color.neutral[600],
      placeholder: color.neutral[600],
      inverse: color.neutral[950],
      accent: color.accent[300],
      danger: color.danger[400],
      success: color.success[400],
      warning: color.warning[400],
    },
  },
};

// ─── W3C Design Tokens builder ────────────────────────────────────────────────

function token(value, type, description) {
  const t = { $value: value, $type: type };
  if (description) t.$description = description;
  return t;
}

function colorRamp(ramp) {
  return Object.fromEntries(
    Object.entries(ramp).map(([scale, value]) => [scale, token(value, 'color')])
  );
}

function dimensionRamp(ramp, unit = 'px') {
  return Object.fromEntries(
    Object.entries(ramp).map(([key, value]) => [
      key,
      token(typeof value === 'number' ? `${value}${unit}` : value, 'dimension'),
    ])
  );
}

function semanticColorGroup(group) {
  return Object.fromEntries(
    Object.entries(group).map(([key, value]) => [key, token(value, 'color')])
  );
}

function semanticSection(section) {
  return Object.fromEntries(
    Object.entries(section).map(([group, values]) => [
      group,
      typeof values === 'object' && !values.$value
        ? semanticColorGroup(values)
        : token(values, 'color'),
    ])
  );
}

// ─── Assemble output ──────────────────────────────────────────────────────────

const output = {
  $schema: 'https://design-tokens.org/schema.json',
  $description:
    'Fresh Design System — generated from packages/tokens/src/raw.ts and semantic.ts. Do not edit manually.',

  primitive: {
    $description: 'Raw color ramps. Prefer semantic tokens in product code.',
    color: Object.fromEntries(
      Object.entries(color).map(([family, ramp]) => [family, colorRamp(ramp)])
    ),
    spacing: dimensionRamp(spacing),
    radius: dimensionRamp(radius),
    fontSize: dimensionRamp(fontSize),
    lineHeight: dimensionRamp(lineHeight),
    fontWeight: Object.fromEntries(
      Object.entries(fontWeight).map(([key, val]) => [key, token(val, 'fontWeight')])
    ),
    iconSize: dimensionRamp(iconSize),
    opacity: Object.fromEntries(
      Object.entries(opacity).map(([key, val]) => [key, token(val, 'number')])
    ),
    zIndex: Object.fromEntries(
      Object.entries(zIndex).map(([key, val]) => [key, token(val, 'number')])
    ),
    motion: {
      duration: Object.fromEntries(
        Object.entries(motion.duration).map(([key, val]) => [key, token(`${val}ms`, 'duration')])
      ),
    },
  },

  semantic: {
    $description: 'Role-based tokens. Use these in all product and component code.',
    light: {
      $description: 'Light mode semantic tokens.',
      ...Object.fromEntries(
        Object.entries(semantic.light).map(([section, values]) => [
          section,
          semanticSection(values),
        ])
      ),
    },
    dark: {
      $description: 'Dark mode semantic tokens.',
      ...Object.fromEntries(
        Object.entries(semantic.dark).map(([section, values]) => [section, semanticSection(values)])
      ),
    },
  },
};

// ─── Write files ──────────────────────────────────────────────────────────────

const json = JSON.stringify(output, null, 2);

// Repo root — visible on GitHub
writeFileSync(resolve(repoRoot, 'tokens.json'), json);

// Also inside the package for consumers who install @fresh-ds/tokens
writeFileSync(resolve(__dirname, '../tokens.json'), json);

console.log(`✓ tokens.json written (${(json.length / 1024).toFixed(1)} KB)`);
