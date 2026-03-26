import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Copy,
  Download,
  Edit,
  ExternalLink,
  Eye,
  EyeOff,
  Filter,
  Heart,
  Home,
  Info,
  LoaderCircle,
  LogOut,
  Mail,
  Menu,
  Minus,
  MoonStar,
  MoreHorizontal,
  MoreVertical,
  Phone,
  Plus,
  Search,
  Settings,
  Share,
  Star,
  Sun,
  Trash,
  Upload,
  User,
  X,
  type LucideIcon,
} from 'lucide-react-native';
import { getTextColor, type TextTone } from '../theme/theme-helpers';
import { useFreshTheme } from '../theme/useFreshTheme';

const iconMap = {
  'alert-circle': AlertCircle,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  check: Check,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  copy: Copy,
  download: Download,
  edit: Edit,
  'external-link': ExternalLink,
  eye: Eye,
  'eye-off': EyeOff,
  filter: Filter,
  heart: Heart,
  home: Home,
  info: Info,
  'loader-circle': LoaderCircle,
  'log-out': LogOut,
  mail: Mail,
  menu: Menu,
  minus: Minus,
  moon: MoonStar,
  'more-horizontal': MoreHorizontal,
  'more-vertical': MoreVertical,
  phone: Phone,
  plus: Plus,
  search: Search,
  settings: Settings,
  share: Share,
  star: Star,
  sun: Sun,
  trash: Trash,
  upload: Upload,
  user: User,
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
