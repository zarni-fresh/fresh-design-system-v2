import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Calendar,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleCheck,
  CircleDashed,
  CirclePlus,
  Clock,
  Copy,
  Download,
  Edit,
  ExternalLink,
  Eye,
  EyeOff,
  FileCheck,
  FilePenLine,
  FileText,
  Filter,
  FlaskConical,
  Folder,
  GripVertical,
  Heart,
  Home,
  Info,
  LayoutGrid,
  LayoutList,
  LayoutTemplate,
  List,
  LoaderCircle,
  LockKeyhole,
  LogOut,
  Mail,
  MapPin,
  Menu,
  Minus,
  Monitor,
  MoonStar,
  MoreHorizontal,
  MoreVertical,
  Package,
  Phone,
  Pill,
  Plus,
  Search,
  Send,
  Settings,
  Share,
  Smartphone,
  Sparkles,
  SquarePen,
  Star,
  Stethoscope,
  Sun,
  Trash,
  TriangleAlert,
  Upload,
  User,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react-native';
import { getTextColor, type TextTone } from '../theme/theme-helpers';
import { useFreshTheme } from '../theme/useFreshTheme';

const iconMap = {
  'alert-circle': AlertCircle,
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  calendar: Calendar,
  'calendar-days': CalendarDays,
  check: Check,
  'check-circle-2': CheckCircle2,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  'circle-check': CircleCheck,
  'circle-dashed': CircleDashed,
  'circle-plus': CirclePlus,
  clock: Clock,
  copy: Copy,
  download: Download,
  edit: Edit,
  'external-link': ExternalLink,
  eye: Eye,
  'eye-off': EyeOff,
  'file-check': FileCheck,
  'file-pen-line': FilePenLine,
  'file-text': FileText,
  filter: Filter,
  'flask-conical': FlaskConical,
  folder: Folder,
  'grip-vertical': GripVertical,
  heart: Heart,
  home: Home,
  info: Info,
  'layout-grid': LayoutGrid,
  'layout-list': LayoutList,
  'layout-template': LayoutTemplate,
  list: List,
  'loader-circle': LoaderCircle,
  'lock-keyhole': LockKeyhole,
  'log-out': LogOut,
  mail: Mail,
  'map-pin': MapPin,
  menu: Menu,
  minus: Minus,
  monitor: Monitor,
  moon: MoonStar,
  'more-horizontal': MoreHorizontal,
  'more-vertical': MoreVertical,
  package: Package,
  phone: Phone,
  pill: Pill,
  plus: Plus,
  search: Search,
  send: Send,
  settings: Settings,
  share: Share,
  smartphone: Smartphone,
  sparkles: Sparkles,
  'square-pen': SquarePen,
  star: Star,
  stethoscope: Stethoscope,
  sun: Sun,
  trash: Trash,
  'triangle-alert': TriangleAlert,
  upload: Upload,
  user: User,
  users: Users,
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
