import { useState } from 'react';
import { Modal, Platform, Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  AspectRatio,
  Avatar,
  Badge,
  Button,
  Card,
  Label,
  Progress,
  Separator,
  Skeleton,
  Switch,
  TextField,
} from '@fresh-ds/ui';
import { FreshThemeProvider, Icon, Stack, Text, useFreshTheme } from '@fresh-ds/ui-core';
import { PageHeader } from '@fresh-ds/recipes';

type Screen = 'home' | 'components';

type ComponentSection = {
  title: string;
  content: React.ReactNode;
};

type ComponentEntry = {
  name: string;
  description: string;
  category: 'core' | 'primitive' | 'recipe';
  sections?: ComponentSection[];
  render?: () => React.ReactNode;
};

// ── Card showcase helpers ──────────────────────────────────────────────────

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <Stack gap={4}>
      <Text size="xs" tone="muted">{label}</Text>
      <Text size="sm">{value}</Text>
    </Stack>
  );
}

function ProfileSectionCard({
  title,
  action,
  children,
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card variant="outlined">
      <Stack gap={16} style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text size="md" weight="semibold">{title}</Text>
          {action ?? null}
        </View>
        <Separator />
        {children}
      </Stack>
    </Card>
  );
}

function AppointmentTreatmentRow({ type, title, detail }: { type: string; title: string; detail: string }) {
  return (
    <Stack gap={8} style={{ paddingHorizontal: 20, paddingVertical: 16 }}>
      <Text size="xs" tone="muted">{type}</Text>
      <Text size="sm" weight="semibold">{title}</Text>
      <Text size="sm">{detail}</Text>
    </Stack>
  );
}

function AppointmentsFilledCard({ date, items }: { date: string; items: { type: string; title: string; detail: string }[] }) {
  const { theme } = useFreshTheme();
  return (
    <Card variant="outlined" style={{ padding: 0, overflow: 'hidden' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          borderBottomWidth: 1,
          borderBottomColor: theme.color.border.default,
          backgroundColor: theme.color.surface.subtle,
          paddingHorizontal: 20,
          paddingVertical: 12,
        }}
      >
        <Icon icon="calendar-days" size={24} tone="muted" />
        <Text size="sm">Previous appointment ({date})</Text>
      </View>
      {items.map((item, index) => (
        <View key={item.title + index}>
          {index > 0 ? <Separator /> : null}
          <AppointmentTreatmentRow type={item.type} title={item.title} detail={item.detail} />
        </View>
      ))}
    </Card>
  );
}

function AppointmentsEmptyState() {
  const { theme } = useFreshTheme();
  return (
    <View style={{ alignItems: 'center', paddingVertical: 24, gap: 8 }}>
      <View
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          borderWidth: 1,
          borderColor: theme.color.border.default,
          backgroundColor: theme.color.surface.subtle,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 4,
        }}
      >
        <Icon icon="calendar-days" size={20} tone="muted" />
      </View>
      <Text size="sm" weight="semibold">No previous appointments</Text>
      <Text size="xs" tone="muted" style={{ textAlign: 'center', maxWidth: 240, lineHeight: 18 }}>
        Once this patient has a completed appointment, it will appear here.
      </Text>
    </View>
  );
}

// ── Switch showcase helpers ────────────────────────────────────────────────

function SwitchCard({
  title,
  description,
  defaultChecked = false,
  disabled = false,
  invalid = false,
  size,
  tone,
}: {
  title: string;
  description?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  size?: 'sm' | 'md';
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
}) {
  const { theme } = useFreshTheme();
  return (
    <Stack gap={6}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: invalid ? theme.color.feedback.danger.border : theme.color.border.default,
          backgroundColor: theme.color.surface.default,
          paddingHorizontal: 14,
          paddingVertical: 12,
        }}
      >
        <Stack gap={4} style={{ flex: 1, paddingRight: 16 }}>
          <Text size="sm" weight="medium">{title}</Text>
          {description ? (
            <Text size="xs" tone="muted">{description}</Text>
          ) : null}
        </Stack>
        <Switch
          defaultChecked={defaultChecked}
          disabled={disabled}
          size={size ?? 'md'}
          tone={invalid ? 'danger' : (tone ?? 'neutral')}
        />
      </View>
      {invalid ? (
        <Text size="xs" tone="danger">This setting is required to continue.</Text>
      ) : null}
    </Stack>
  );
}

// ── Avatar showcase helpers ────────────────────────────────────────────────

function AvatarWithBadge({
  fallbackLabel,
  size = 'md',
  tone = 'neutral',
  badgeColor,
  badgeIcon,
}: {
  fallbackLabel: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
  badgeColor?: string;
  badgeIcon?: React.ReactNode;
}) {
  const { theme } = useFreshTheme();
  const badgeSize = size === 'sm' ? 10 : size === 'xl' ? 16 : 13;
  return (
    <View style={{ position: 'relative', alignSelf: 'flex-start' }}>
      <Avatar fallbackLabel={fallbackLabel} size={size} tone={tone} />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: badgeSize,
          height: badgeSize,
          borderRadius: badgeSize / 2,
          backgroundColor: badgeColor ?? theme.color.feedback.success.backgroundStrong,
          borderWidth: 2,
          borderColor: theme.color.surface.default,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {badgeIcon ?? null}
      </View>
    </View>
  );
}

function AvatarGroupRow({
  avatars,
  suffix,
}: {
  avatars: { fallbackLabel: string; tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger' }[];
  suffix?: React.ReactNode;
}) {
  const { theme } = useFreshTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {avatars.map((a, i) => (
        <View
          key={i}
          style={{
            marginLeft: i === 0 ? 0 : -10,
            zIndex: avatars.length - i,
          }}
        >
          <Avatar
            fallbackLabel={a.fallbackLabel}
            size="md"
            style={{
              borderWidth: 2,
              borderColor: theme.color.surface.default,
            }}
            tone={a.tone ?? 'neutral'}
          />
        </View>
      ))}
      {suffix ? (
        <View style={{ marginLeft: -10, zIndex: 0 }}>{suffix}</View>
      ) : null}
    </View>
  );
}

function AvatarDropdownDemo() {
  const { theme } = useFreshTheme();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: 'Profile', icon: 'user' as const },
    { label: 'Settings', icon: 'settings' as const },
    { label: 'Team', icon: 'users' as const },
  ];

  return (
    <View style={{ alignItems: 'flex-start' }}>
      <Pressable onPress={() => setOpen((v) => !v)}>
        <Stack align="center" direction="horizontal" gap={6}>
          <Avatar fallbackLabel="John Doe" size="md" tone="neutral" />
          <Icon icon={open ? 'chevron-up' : 'chevron-down'} size={16} tone="muted" />
        </Stack>
      </Pressable>

      {open ? (
        <View
          style={{
            marginTop: 8,
            backgroundColor: theme.color.surface.default,
            borderRadius: theme.radius.lg,
            borderWidth: 1,
            borderColor: theme.color.border.default,
            minWidth: 200,
            ...Platform.select({
              web: { boxShadow: '0 4px 12px rgba(0,0,0,0.08)' } as object,
              default: theme.elevation[2],
            }),
          }}
        >
          {/* Header */}
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderBottomWidth: 1,
              borderBottomColor: theme.color.border.default,
            }}
          >
            <Text size="sm" weight="semibold">John Doe</Text>
            <Text size="xs" tone="muted">john.doe@example.com</Text>
          </View>

          {/* Menu items */}
          {menuItems.map((item, i) => (
            <Pressable key={item.label} onPress={() => setOpen(false)}>
              {({ pressed, hovered }: any) => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    backgroundColor: pressed || hovered ? theme.color.surface.subtle : 'transparent',
                    borderTopWidth: i === 0 ? 0 : 0,
                  }}
                >
                  <Icon icon={item.icon} size={15} tone="muted" />
                  <Text size="sm">{item.label}</Text>
                </View>
              )}
            </Pressable>
          ))}

          {/* Sign out */}
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: theme.color.border.default,
            }}
          >
            <Pressable onPress={() => setOpen(false)}>
              {({ pressed, hovered }: any) => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    backgroundColor: pressed || hovered ? theme.color.surface.subtle : 'transparent',
                    borderBottomLeftRadius: theme.radius.lg,
                    borderBottomRightRadius: theme.radius.lg,
                  }}
                >
                  <Icon icon="log-out" size={15} tone="danger" />
                  <Text size="sm" tone="danger">Sign out</Text>
                </View>
              )}
            </Pressable>
          </View>
        </View>
      ) : null}
    </View>
  );
}

// ──────────────────────────────────────────────────────────────────────────

const componentRegistry: ComponentEntry[] = [
  {
    name: 'Button',
    description:
      'Primary interactive element for actions. Supports 6 variants, 3 sizes, icons, and loading state.',
    category: 'core',
    sections: [
      {
        title: 'Primary',
        content: <Button label="Primary" onPress={() => {}} variant="primary" />,
      },
      {
        title: 'Secondary',
        content: <Button label="Secondary" onPress={() => {}} variant="secondary" />,
      },
      {
        title: 'Outline',
        content: <Button label="Outline" onPress={() => {}} variant="outline" />,
      },
      {
        title: 'Ghost',
        content: <Button label="Ghost" onPress={() => {}} variant="ghost" />,
      },
      {
        title: 'Destructive',
        content: <Button label="Destructive" onPress={() => {}} variant="destructive" />,
      },
      {
        title: 'Link',
        content: <Button label="Link" onPress={() => {}} variant="link" />,
      },
      {
        title: 'Small',
        content: <Button label="Small" onPress={() => {}} size="sm" variant="primary" />,
      },
      {
        title: 'Medium',
        content: <Button label="Medium" onPress={() => {}} size="md" variant="primary" />,
      },
      {
        title: 'Large',
        content: <Button label="Large" onPress={() => {}} size="lg" variant="primary" />,
      },
      {
        title: 'With Spinner',
        content: <Button label="Loading..." loading onPress={() => {}} variant="primary" />,
      },
      {
        title: 'With Leading Icon',
        content: <Button label="Add Item" leadingIcon="plus" onPress={() => {}} variant="primary" />,
      },
      {
        title: 'With Trailing Icon',
        content: <Button label="Next" onPress={() => {}} trailingIcon="arrow-right" variant="primary" />,
      },
    ],
  },
  {
    name: 'TextField',
    description:
      'Single-line text input with label, helper text, error, and success states.',
    category: 'core',
    sections: [
      {
        title: 'Default',
        content: <TextField label="Form name" placeholder="Enter a name..." />,
      },
      {
        title: 'With Helper Text',
        content: <TextField helperText="This will be shown to patients" label="Form name" placeholder="Enter a name..." />,
      },
      {
        title: 'Error',
        content: <TextField errorMessage="This field is required" label="Form name" placeholder="Enter a name..." />,
      },
      {
        title: 'Valid',
        content: <TextField label="Form name" placeholder="Enter a name..." valid value="Weight Loss Intake" />,
      },
      {
        title: 'Disabled',
        content: <TextField editable={false} label="Form name" placeholder="Enter a name..." value="Weight Loss Intake" />,
      },
    ],
  },
  {
    name: 'Card',
    description:
      'Section cards used across patient profile screens. Combines title, optional action, separator, and body content. Supports filled and empty states.',
    category: 'core',
    sections: [
      {
        title: 'Personal — Filled',
        content: (
          <ProfileSectionCard
            title="Personal"
            action={
              <Button
                label="Edit"
                onPress={() => {}}
                size="sm"
                variant="ghost"
              />
            }
          >
            <Stack gap={16}>
              <DetailRow label="First Name" value="James" />
              <DetailRow label="Last Name" value="Wilson" />
              <DetailRow label="Date of Birth" value="12 Jan 1985" />
              <DetailRow label="Gender" value="Male" />
              <DetailRow label="Address" value="42 Harbour St, Sydney NSW 2000" />
              <DetailRow label="Email" value="james.wilson@email.com" />
              <DetailRow label="Phone" value="0412 345 678" />
            </Stack>
          </ProfileSectionCard>
        ),
      },
      {
        title: 'Medicare & IHI — Filled',
        content: (
          <ProfileSectionCard title="Medicare & IHI">
            <Stack gap={16}>
              <DetailRow label="Medicare Number" value="2345 67890 1  /  Ref: 1" />
              <DetailRow label="IHI Number" value="8003 6088 3456 7890" />
            </Stack>
          </ProfileSectionCard>
        ),
      },
      {
        title: 'Appointments — Filled',
        content: (
          <ProfileSectionCard
            title="Appointments"
            action={
              <Button
                label="View all"
                onPress={() => {}}
                shadow
                size="sm"
                variant="outline"
              />
            }
          >
            <AppointmentsFilledCard
              date="10/17/2025"
              items={[
                { type: 'Anti-Wrinkle', title: 'Botox', detail: 'Forehead - 20 units' },
                { type: 'Fractional CO2 Laser', title: 'Lumenis UltraPulse', detail: 'Periorbital - 50 mJ\nCheeks - 90 mJ' },
                { type: 'Anti-Wrinkle', title: 'Botox', detail: 'Glabella - 15 units' },
              ]}
            />
          </ProfileSectionCard>
        ),
      },
      {
        title: 'Appointments — Empty',
        content: (
          <ProfileSectionCard
            title="Appointments"
            action={
              <Button
                label="View all"
                onPress={() => {}}
                shadow
                size="sm"
                variant="outline"
              />
            }
          >
            <AppointmentsEmptyState />
          </ProfileSectionCard>
        ),
      },
    ],
  },
  {
    name: 'Badge',
    description:
      'Compact semantic label for status and categorization. 5 variants, 3 emphasis levels, 3 sizes.',
    category: 'core',
    sections: [
      {
        title: 'Neutral',
        content: <Badge label="Neutral" variant="neutral" />,
      },
      {
        title: 'Accent',
        content: <Badge label="Accent" variant="accent" />,
      },
      {
        title: 'Success',
        content: <Badge label="Success" variant="success" />,
      },
      {
        title: 'Warning',
        content: <Badge label="Warning" variant="warning" />,
      },
      {
        title: 'Danger',
        content: <Badge label="Danger" variant="danger" />,
      },
      {
        title: 'Emphasis — Solid',
        content: <Badge emphasis="solid" label="Solid" variant="accent" />,
      },
      {
        title: 'Emphasis — Outline',
        content: <Badge emphasis="outline" label="Outline" variant="accent" />,
      },
      {
        title: 'Emphasis — Subtle',
        content: <Badge emphasis="subtle" label="Subtle" variant="accent" />,
      },
      {
        title: 'Size — Small',
        content: <Badge label="Small" size="sm" variant="neutral" />,
      },
      {
        title: 'Size — Medium',
        content: <Badge label="Medium" size="md" variant="neutral" />,
      },
      {
        title: 'Size — Large',
        content: <Badge label="Large" size="lg" variant="neutral" />,
      },
    ],
  },
  {
    name: 'Switch',
    description:
      'Toggle control for binary settings. Used in form behaviour rows with label, description, and validation states.',
    category: 'core',
    sections: [
      {
        title: 'Default',
        content: <Switch defaultChecked tone="neutral" />,
      },
      {
        title: 'With Label',
        content: (
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text size="sm" weight="medium">Required question</Text>
            <Switch defaultChecked tone="neutral" />
          </View>
        ),
      },
      {
        title: 'Card',
        content: (
          <SwitchCard
            defaultChecked
            title="Required question"
          />
        ),
      },
      {
        title: 'With Description',
        content: (
          <SwitchCard
            defaultChecked
            description='Patients must answer before they can continue.'
            title="Required question"
          />
        ),
      },
      {
        title: 'Allow Other Option',
        content: (
          <SwitchCard
            description='Adds a dedicated free-text response paired with the Other option.'
            title='Allow "Other" option'
          />
        ),
      },
      {
        title: 'Disabled — Off',
        content: (
          <SwitchCard
            description="This setting cannot be changed for this question type."
            disabled
            title="Required question"
          />
        ),
      },
      {
        title: 'Disabled — On',
        content: (
          <SwitchCard
            defaultChecked
            description="This setting cannot be changed for this question type."
            disabled
            title="Required question"
          />
        ),
      },
      {
        title: 'Invalid',
        content: (
          <SwitchCard
            description="Patients must answer before they can continue."
            invalid
            title="Required question"
          />
        ),
      },
      {
        title: 'Size — Small',
        content: (
          <SwitchCard
            defaultChecked
            description="Patients must answer before they can continue."
            size="sm"
            title="Required question"
          />
        ),
      },
      {
        title: 'Size — Default',
        content: (
          <SwitchCard
            defaultChecked
            description="Patients must answer before they can continue."
            size="md"
            title="Required question"
          />
        ),
      },
    ],
  },
  {
    name: 'Avatar',
    description:
      'User representation with image or initials fallback. Supports badges, groups, sizes, and dropdown trigger patterns.',
    category: 'core',
    sections: [
      {
        title: 'Basic',
        content: <Avatar fallbackLabel="John Doe" size="md" tone="neutral" />,
      },
      {
        title: 'Badge',
        content: (
          <AvatarWithBadge fallbackLabel="Alice Smith" size="md" tone="accent" />
        ),
      },
      {
        title: 'Badge with Icon',
        content: (
          <AvatarWithBadge
            badgeColor="#0E4233"
            badgeIcon={<Icon color="#fff" icon="check" size={7} strokeWidth={3} />}
            fallbackLabel="Bob Jones"
            size="md"
            tone="success"
          />
        ),
      },
      {
        title: 'Avatar Group',
        content: (
          <AvatarGroupRow
            avatars={[
              { fallbackLabel: 'Alice Smith', tone: 'accent' },
              { fallbackLabel: 'Bob Jones', tone: 'success' },
              { fallbackLabel: 'Carol White', tone: 'warning' },
            ]}
          />
        ),
      },
      {
        title: 'Avatar Group Count',
        content: (() => {
          const CountBubble = () => {
            const { theme } = useFreshTheme();
            return (
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: theme.color.surface.subtle,
                  borderWidth: 2,
                  borderColor: theme.color.surface.default,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text size="xs" weight="semibold">+3</Text>
              </View>
            );
          };
          return (
            <AvatarGroupRow
              avatars={[
                { fallbackLabel: 'Alice Smith', tone: 'accent' },
                { fallbackLabel: 'Bob Jones', tone: 'success' },
                { fallbackLabel: 'Carol White', tone: 'warning' },
              ]}
              suffix={<CountBubble />}
            />
          );
        })(),
      },
      {
        title: 'Avatar Group with Icon',
        content: (() => {
          const IconBubble = () => {
            const { theme } = useFreshTheme();
            return (
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: theme.color.surface.subtle,
                  borderWidth: 2,
                  borderColor: theme.color.surface.default,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon icon="users" size={16} tone="muted" />
              </View>
            );
          };
          return (
            <AvatarGroupRow
              avatars={[
                { fallbackLabel: 'Alice Smith', tone: 'accent' },
                { fallbackLabel: 'Bob Jones', tone: 'success' },
                { fallbackLabel: 'Carol White', tone: 'warning' },
              ]}
              suffix={<IconBubble />}
            />
          );
        })(),
      },
      {
        title: 'Sizes',
        content: (
          <Stack align="center" direction="horizontal" gap={12}>
            <Avatar fallbackLabel="JS" size="sm" tone="neutral" />
            <Avatar fallbackLabel="JS" size="md" tone="neutral" />
            <Avatar fallbackLabel="JS" size="lg" tone="neutral" />
            <Avatar fallbackLabel="JS" size="xl" tone="neutral" />
          </Stack>
        ),
      },
      {
        title: 'Dropdown',
        content: <AvatarDropdownDemo />,
      },
    ],
  },
  {
    name: 'Progress',
    description:
      'Determinate and indeterminate progress indicator. 5 variants, 3 sizes, optional label.',
    category: 'core',
    render: () => (
      <Stack gap={4}>
        <Progress label="Uploading" showValueLabel size="md" value={65} variant="accent" />
        <Progress label="Processing" showValueLabel size="md" value={30} variant="success" />
        <Progress indeterminate label="Loading..." size="md" variant="accent" />
      </Stack>
    ),
  },
  {
    name: 'Separator',
    description:
      'Visual divider for content sections. Horizontal or vertical orientation, 3 emphasis levels.',
    category: 'core',
    render: () => (
      <Stack gap={3}>
        <Text size="sm">Above subtle separator</Text>
        <Separator emphasis="subtle" />
        <Text size="sm">Between default separator</Text>
        <Separator emphasis="default" />
        <Text size="sm">Below strong separator</Text>
        <Separator emphasis="strong" />
        <Text size="sm">After strong separator</Text>
      </Stack>
    ),
  },
  {
    name: 'Skeleton',
    description:
      'Loading placeholder in 3 shapes: line, block, and circle. 3 sizes, 2 tones.',
    category: 'core',
    render: () => (
      <Stack gap={3}>
        <Skeleton shape="line" size="sm" />
        <Skeleton shape="line" size="md" />
        <Skeleton shape="line" size="lg" />
        <Stack direction="horizontal" gap={3}>
          <Skeleton shape="circle" size="md" />
          <Stack gap={2} style={{ flex: 1 }}>
            <Skeleton shape="line" size="md" />
            <Skeleton shape="line" size="sm" />
          </Stack>
        </Stack>
        <Skeleton shape="block" size="md" />
      </Stack>
    ),
  },
  {
    name: 'Label',
    description:
      'Form field label with optional required indicator and tone support.',
    category: 'core',
    render: () => (
      <Stack gap={2}>
        <Label>Default Label</Label>
        <Label required>Required Label</Label>
        <Label tone="muted">Muted Label</Label>
        <Label tone="danger">Danger Label</Label>
      </Stack>
    ),
  },
  {
    name: 'AspectRatio',
    description:
      'Container that maintains a fixed aspect ratio. Useful for images and media.',
    category: 'core',
    render: () => (
      <AspectRatio ratio={16 / 9}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#F5F5F5',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
          }}
        >
          <Text size="sm" tone="muted">
            16:9
          </Text>
        </View>
      </AspectRatio>
    ),
  },
];

function SidebarItem({
  active,
  label,
  onPress,
}: {
  active: boolean;
  label: string;
  onPress: () => void;
}) {
  const { theme } = useFreshTheme();

  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          backgroundColor: active ? theme.color.surface.subtle : 'transparent',
          borderRadius: theme.radius.md,
          paddingHorizontal: 12,
          paddingVertical: 8,
        }}
      >
        <Text
          size="sm"
          weight={active ? 'semibold' : 'regular'}
          style={{ color: active ? theme.color.content.primary : theme.color.content.secondary }}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

function ComponentsSidebar({
  components,
  selectedIndex,
  onSelect,
}: {
  components: ComponentEntry[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}) {
  const { theme } = useFreshTheme();

  return (
    <View
      style={{
        width: 240,
        borderRightWidth: 1,
        borderRightColor: theme.color.border.default,
        backgroundColor: theme.color.surface.default,
      }}
    >
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 14,
          borderBottomWidth: 1,
          borderBottomColor: theme.color.border.default,
        }}
      >
        <Text size="md" weight="semibold">
          Components
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: 8, gap: 2 }}>
        {components.map((component, index) => (
          <SidebarItem
            key={component.name}
            active={index === selectedIndex}
            label={component.name}
            onPress={() => onSelect(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  const { theme } = useFreshTheme();

  return (
    <View
      style={{
        backgroundColor: theme.color.surface.default,
        borderRadius: theme.radius.xl,
        borderWidth: 1,
        borderColor: theme.color.border.default,
        padding: 20,
        gap: 16,
      }}
    >
      <Text size="sm" weight="semibold" style={{ color: theme.color.content.secondary }}>
        {title}
      </Text>
      {children}
    </View>
  );
}

function ComponentDetail({ component }: { component: ComponentEntry }) {
  const { theme } = useFreshTheme();
  const hasSections = component.sections && component.sections.length > 0;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.color.canvas.subtle }}
      contentContainerStyle={{
        alignItems: 'center',
        padding: 48,
        paddingBottom: 96,
      }}
    >
      <View
        style={{
          backgroundColor: theme.color.surface.default,
          borderRadius: theme.radius['2xl'],
          borderWidth: 1,
          borderColor: theme.color.border.default,
          padding: 24,
          width: '100%',
          maxWidth: 560,
          gap: 20,
        }}
      >
        <Text size="lg" weight="semibold">
          {component.name}
        </Text>
        <Text size="sm" tone="muted" style={{ lineHeight: 20 }}>
          {component.description}
        </Text>
        {hasSections ? (
          component.sections!.map((section) => (
            <SectionCard key={section.title} title={section.title}>
              {section.content}
            </SectionCard>
          ))
        ) : component.render ? (
          <SectionCard title="Preview">
            {component.render()}
          </SectionCard>
        ) : null}
      </View>
    </ScrollView>
  );
}

function ComponentsScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = componentRegistry[selectedIndex];

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <ComponentsSidebar
        components={componentRegistry}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
      />
      <ComponentDetail component={selected} />
    </View>
  );
}

function NavBar({ screen, onNavigate }: { screen: Screen; onNavigate: (s: Screen) => void }) {
  const { theme } = useFreshTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: theme.color.border.default,
        backgroundColor: theme.color.surface.default,
        paddingHorizontal: 16,
        gap: 4,
      }}
    >
      {(['home', 'components'] as Screen[]).map((s) => (
        <Pressable key={s} onPress={() => onNavigate(s)}>
          <View
            style={{
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderBottomWidth: 2,
              borderBottomColor: screen === s ? theme.color.action.primary.background : 'transparent',
            }}
          >
            <Text
              size="sm"
              weight={screen === s ? 'semibold' : 'regular'}
              style={{
                color: screen === s ? theme.color.content.primary : theme.color.content.secondary,
              }}
            >
              {s === 'home' ? 'Starter' : 'Components'}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

function ScreenContainer({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fafafa',
      }}
    >
      <View
        style={{
          width: '100%',
          maxWidth: Platform.OS === 'web' ? 480 : undefined,
        }}
      >
        {children}
      </View>
    </View>
  );
}

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 48 }}>
      <Stack gap={4}>
        <PageHeader description="Start building your app with Fresh components" title="Fresh App" />
        <Card>
          <Stack gap={4} style={{ padding: 16 }}>
            <Text size="lg" weight="semibold">
              Getting Started
            </Text>
            <Text size="sm" tone="muted">
              Edit App.tsx to start building. This template includes all Fresh design system
              packages ready to use.
            </Text>
            <TextField label="Example Input" placeholder="Type something..." />
            <Button label="Get Started" onPress={() => {}} variant="primary" />
          </Stack>
        </Card>
      </Stack>
    </ScrollView>
  );
}

export default function App() {
  return (
    <FreshThemeProvider mode="light">
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <ComponentsScreen />
      </SafeAreaView>
    </FreshThemeProvider>
  );
}
