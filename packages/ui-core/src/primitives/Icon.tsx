import {
  AlertCircle,
  Check,
  ChevronRight,
  LoaderCircle,
  MoonStar,
  Search,
  Sun,
  X,
  type LucideIcon,
} from 'lucide-react-native';
import { getTextColor, type TextTone } from '../theme/theme-helpers';
import { useFreshTheme } from '../theme/useFreshTheme';

const iconMap = {
  'alert-circle': AlertCircle,
  check: Check,
  'chevron-right': ChevronRight,
  'loader-circle': LoaderCircle,
  moon: MoonStar,
  search: Search,
  sun: Sun,
  x: X,
} as const;

type IconName = keyof typeof iconMap;
export const iconNames = Object.keys(iconMap) as IconName[];

export type IconProps = {
  accessibilityLabel?: string;
  color?: string;
  decorative?: boolean;
  icon: IconName | LucideIcon;
  size?: number;
  strokeWidth?: number;
  tone?: TextTone;
};

export const Icon = ({
  accessibilityLabel,
  color,
  decorative = true,
  icon,
  size = 16,
  strokeWidth = 2,
  tone = 'default',
}: IconProps) => {
  const { theme } = useFreshTheme();
  const Component = typeof icon === 'string' ? iconMap[icon] : icon;

  return (
    <Component
      accessibilityElementsHidden={decorative}
      accessibilityLabel={decorative ? undefined : accessibilityLabel}
      accessibilityRole={decorative ? undefined : 'image'}
      color={color ?? getTextColor(theme, tone)}
      importantForAccessibility={decorative ? 'no-hide-descendants' : 'auto'}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
};

export type { IconName, LucideIcon };
export { iconMap };
