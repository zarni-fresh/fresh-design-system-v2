import {
  borderWidthTokens,
  breakpointTokens,
  componentTokens,
  elevationTokens,
  focusRingTokens,
  iconSizeTokens,
  motionTokens,
  opacityTokens,
  radiusTokens,
  rawColorTokens,
  rawTokenNaming,
  spacingTokens,
  textStyleTokens,
  typographyTokens,
  zIndexTokens,
} from './raw';

export type ThemeMode = 'light' | 'dark';

type InteractiveColorTokens = {
  background: string;
  backgroundHover: string;
  backgroundPressed: string;
  border: string;
  foreground: string;
};

type FeedbackColorTokens = {
  background: string;
  backgroundStrong: string;
  border: string;
  foreground: string;
  foregroundStrong: string;
};

export type SemanticColorTokens = {
  canvas: {
    default: string;
    inverse: string;
    overlay: string;
    subtle: string;
  };
  surface: {
    accent: string;
    default: string;
    disabled: string;
    elevated: string;
    subtle: string;
  };
  border: {
    accent: string;
    default: string;
    disabled: string;
    focus: string;
    input: string;
    strong: string;
  };
  content: {
    accent: string;
    danger: string;
    disabled: string;
    inverse: string;
    placeholder: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
  };
  action: {
    destructive: InteractiveColorTokens;
    ghost: InteractiveColorTokens;
    outline: InteractiveColorTokens;
    primary: InteractiveColorTokens;
    secondary: InteractiveColorTokens;
  };
  feedback: {
    accent: FeedbackColorTokens;
    danger: FeedbackColorTokens;
    neutral: FeedbackColorTokens;
    success: FeedbackColorTokens;
    warning: FeedbackColorTokens;
  };
  input: {
    background: string;
    backgroundDisabled: string;
    border: string;
    borderFocus: string;
    borderInvalid: string;
    placeholder: string;
    text: string;
  };
};

export type SemanticTheme = {
  mode: ThemeMode;
  color: SemanticColorTokens;
  spacing: typeof spacingTokens;
  radius: typeof radiusTokens;
  typography: typeof typographyTokens;
  textStyle: typeof textStyleTokens;
  elevation: typeof elevationTokens;
  motion: typeof motionTokens;
  zIndex: typeof zIndexTokens;
  opacity: typeof opacityTokens;
  borderWidth: typeof borderWidthTokens;
  iconSize: typeof iconSizeTokens;
  breakpoint: typeof breakpointTokens;
  focusRing: typeof focusRingTokens;
  component: typeof componentTokens;
};

const toRgba = (hex: string, alpha: number) => {
  const normalized = hex.replace('#', '');
  const offset = normalized.length === 3 ? 1 : 2;
  const values = [0, 1, 2].map((index) => {
    const start = index * offset;
    const segment = normalized.slice(start, start + offset);
    const expanded = offset === 1 ? `${segment}${segment}` : segment;
    return Number.parseInt(expanded, 16);
  });

  return `rgba(${values.join(', ')}, ${alpha})`;
};

export const semanticTokenNaming = {
  raw: rawTokenNaming,
  semantic: {
    action:
      'Use action roles for interactive call-to-action surfaces such as buttons. Choose by hierarchy, not color family.',
    border:
      'Use border roles for separation, fields, and focus treatment. Never reach for raw neutrals in component code.',
    canvas: 'Use canvas roles for full-screen and page-level backgrounds.',
    content:
      'Use content roles for readable text and icon foregrounds. Content names describe purpose, not hue.',
    feedback:
      'Use feedback roles for status communication that can appear in badges, alerts, and validation copy.',
    input:
      'Use input roles for field-specific styling so form states remain stable when brand colors change later.',
    surface: 'Use surface roles for contained UI such as cards, sheets, and grouped sections.',
  },
} as const;

export const semanticTokens: Record<ThemeMode, SemanticTheme> = {
  light: {
    mode: 'light',
    color: {
      canvas: {
        default: rawColorTokens.neutral[0],
        inverse: rawColorTokens.neutral[950],
        overlay: toRgba(rawColorTokens.neutral[950], 0.46),
        subtle: rawColorTokens.neutral[50],
      },
      surface: {
        accent: rawColorTokens.accent[50],
        default: rawColorTokens.neutral[0],
        disabled: rawColorTokens.neutral[100],
        elevated: rawColorTokens.neutral[0],
        subtle: rawColorTokens.neutral[50],
      },
      border: {
        accent: rawColorTokens.accent[300],
        default: rawColorTokens.neutral[200],
        disabled: rawColorTokens.neutral[200],
        focus: rawColorTokens.neutral[400],
        input: rawColorTokens.neutral[200],
        strong: rawColorTokens.neutral[300],
      },
      content: {
        accent: rawColorTokens.accent[700],
        danger: rawColorTokens.danger[700],
        disabled: rawColorTokens.neutral[400],
        inverse: rawColorTokens.neutral[0],
        placeholder: rawColorTokens.neutral[400],
        primary: rawColorTokens.neutral[900],
        secondary: rawColorTokens.neutral[500],
        success: rawColorTokens.success[700],
        warning: rawColorTokens.warning[700],
      },
      action: {
        primary: {
          background: rawColorTokens.brand[600],
          backgroundHover: rawColorTokens.brand[700],
          backgroundPressed: rawColorTokens.brand[800],
          border: rawColorTokens.brand[600],
          foreground: rawColorTokens.neutral[0],
        },
        secondary: {
          background: rawColorTokens.neutral[100],
          backgroundHover: rawColorTokens.neutral[200],
          backgroundPressed: rawColorTokens.neutral[300],
          border: rawColorTokens.neutral[200],
          foreground: rawColorTokens.neutral[900],
        },
        outline: {
          background: 'transparent',
          backgroundHover: rawColorTokens.neutral[50],
          backgroundPressed: rawColorTokens.neutral[100],
          border: rawColorTokens.neutral[300],
          foreground: rawColorTokens.neutral[900],
        },
        ghost: {
          background: 'transparent',
          backgroundHover: rawColorTokens.neutral[50],
          backgroundPressed: rawColorTokens.neutral[100],
          border: 'transparent',
          foreground: rawColorTokens.neutral[800],
        },
        destructive: {
          background: rawColorTokens.danger[600],
          backgroundHover: rawColorTokens.danger[700],
          backgroundPressed: rawColorTokens.danger[800],
          border: rawColorTokens.danger[600],
          foreground: rawColorTokens.neutral[0],
        },
      },
      feedback: {
        neutral: {
          background: rawColorTokens.neutral[50],
          backgroundStrong: rawColorTokens.neutral[900],
          border: rawColorTokens.neutral[200],
          foreground: rawColorTokens.neutral[600],
          foregroundStrong: rawColorTokens.neutral[0],
        },
        accent: {
          background: rawColorTokens.accent[50],
          backgroundStrong: rawColorTokens.accent[600],
          border: rawColorTokens.accent[200],
          foreground: rawColorTokens.accent[700],
          foregroundStrong: rawColorTokens.neutral[0],
        },
        success: {
          background: rawColorTokens.success[50],
          backgroundStrong: rawColorTokens.success[600],
          border: rawColorTokens.success[200],
          foreground: rawColorTokens.success[700],
          foregroundStrong: rawColorTokens.neutral[0],
        },
        warning: {
          background: rawColorTokens.warning[50],
          backgroundStrong: rawColorTokens.warning[500],
          border: rawColorTokens.warning[200],
          foreground: rawColorTokens.warning[700],
          foregroundStrong: rawColorTokens.neutral[950],
        },
        danger: {
          background: rawColorTokens.danger[50],
          backgroundStrong: rawColorTokens.danger[600],
          border: rawColorTokens.danger[200],
          foreground: rawColorTokens.danger[700],
          foregroundStrong: rawColorTokens.neutral[0],
        },
      },
      input: {
        background: rawColorTokens.neutral[0],
        backgroundDisabled: rawColorTokens.neutral[100],
        border: rawColorTokens.neutral[200],
        borderFocus: rawColorTokens.neutral[400],
        borderInvalid: rawColorTokens.danger[400],
        placeholder: rawColorTokens.neutral[400],
        text: rawColorTokens.neutral[900],
      },
    },
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
  },
  dark: {
    mode: 'dark',
    color: {
      canvas: {
        default: rawColorTokens.neutral[950],
        inverse: rawColorTokens.neutral[0],
        overlay: toRgba(rawColorTokens.neutral[950], 0.72),
        subtle: rawColorTokens.neutral[900],
      },
      surface: {
        accent: toRgba(rawColorTokens.accent[400], 0.16),
        default: rawColorTokens.neutral[950],
        disabled: rawColorTokens.neutral[800],
        elevated: rawColorTokens.neutral[900],
        subtle: rawColorTokens.neutral[900],
      },
      border: {
        accent: toRgba(rawColorTokens.accent[300], 0.48),
        default: rawColorTokens.neutral[800],
        disabled: rawColorTokens.neutral[800],
        focus: rawColorTokens.neutral[500],
        input: rawColorTokens.neutral[800],
        strong: rawColorTokens.neutral[700],
      },
      content: {
        accent: rawColorTokens.accent[300],
        danger: rawColorTokens.danger[200],
        disabled: rawColorTokens.neutral[600],
        inverse: rawColorTokens.neutral[950],
        placeholder: rawColorTokens.neutral[500],
        primary: rawColorTokens.neutral[0],
        secondary: rawColorTokens.neutral[400],
        success: rawColorTokens.success[200],
        warning: rawColorTokens.warning[200],
      },
      action: {
        primary: {
          background: rawColorTokens.brand[500],
          backgroundHover: rawColorTokens.brand[400],
          backgroundPressed: rawColorTokens.brand[300],
          border: rawColorTokens.brand[500],
          foreground: rawColorTokens.neutral[0],
        },
        secondary: {
          background: rawColorTokens.neutral[800],
          backgroundHover: rawColorTokens.neutral[700],
          backgroundPressed: rawColorTokens.neutral[600],
          border: rawColorTokens.neutral[700],
          foreground: rawColorTokens.neutral[0],
        },
        outline: {
          background: 'transparent',
          backgroundHover: toRgba(rawColorTokens.neutral[0], 0.06),
          backgroundPressed: toRgba(rawColorTokens.neutral[0], 0.1),
          border: rawColorTokens.neutral[700],
          foreground: rawColorTokens.neutral[0],
        },
        ghost: {
          background: 'transparent',
          backgroundHover: toRgba(rawColorTokens.neutral[0], 0.06),
          backgroundPressed: toRgba(rawColorTokens.neutral[0], 0.1),
          border: 'transparent',
          foreground: rawColorTokens.neutral[0],
        },
        destructive: {
          background: rawColorTokens.danger[400],
          backgroundHover: rawColorTokens.danger[300],
          backgroundPressed: rawColorTokens.danger[200],
          border: rawColorTokens.danger[400],
          foreground: rawColorTokens.neutral[950],
        },
      },
      feedback: {
        neutral: {
          background: toRgba(rawColorTokens.neutral[0], 0.06),
          backgroundStrong: rawColorTokens.neutral[0],
          border: rawColorTokens.neutral[800],
          foreground: rawColorTokens.neutral[300],
          foregroundStrong: rawColorTokens.neutral[950],
        },
        accent: {
          background: toRgba(rawColorTokens.accent[400], 0.18),
          backgroundStrong: rawColorTokens.accent[400],
          border: toRgba(rawColorTokens.accent[300], 0.42),
          foreground: rawColorTokens.accent[200],
          foregroundStrong: rawColorTokens.neutral[950],
        },
        success: {
          background: toRgba(rawColorTokens.success[400], 0.18),
          backgroundStrong: rawColorTokens.success[400],
          border: toRgba(rawColorTokens.success[300], 0.42),
          foreground: rawColorTokens.success[200],
          foregroundStrong: rawColorTokens.neutral[950],
        },
        warning: {
          background: toRgba(rawColorTokens.warning[300], 0.2),
          backgroundStrong: rawColorTokens.warning[300],
          border: toRgba(rawColorTokens.warning[200], 0.4),
          foreground: rawColorTokens.warning[100],
          foregroundStrong: rawColorTokens.neutral[950],
        },
        danger: {
          background: toRgba(rawColorTokens.danger[400], 0.18),
          backgroundStrong: rawColorTokens.danger[400],
          border: toRgba(rawColorTokens.danger[300], 0.42),
          foreground: rawColorTokens.danger[200],
          foregroundStrong: rawColorTokens.neutral[950],
        },
      },
      input: {
        background: rawColorTokens.neutral[950],
        backgroundDisabled: rawColorTokens.neutral[800],
        border: rawColorTokens.neutral[800],
        borderFocus: rawColorTokens.neutral[500],
        borderInvalid: rawColorTokens.danger[400],
        placeholder: rawColorTokens.neutral[500],
        text: rawColorTokens.neutral[0],
      },
    },
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
  },
} as const;

export const themeModes = Object.keys(semanticTokens) as ThemeMode[];

export const getSemanticTheme = (mode: ThemeMode) => semanticTokens[mode];
