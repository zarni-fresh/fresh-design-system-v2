import aspectRatioManifest from '../components/AspectRatio/aspect-ratio.manifest.json';
import avatarManifest from '../components/Avatar/avatar.manifest.json';
import badgeManifest from '../components/Badge/badge.manifest.json';
import buttonManifest from '../components/Button/button.manifest.json';
import cardManifest from '../components/Card/card.manifest.json';
import labelManifest from '../components/Label/label.manifest.json';
import progressManifest from '../components/Progress/progress.manifest.json';
import separatorManifest from '../components/Separator/separator.manifest.json';
import skeletonManifest from '../components/Skeleton/skeleton.manifest.json';
import switchManifest from '../components/Switch/switch.manifest.json';
import textFieldManifest from '../components/TextField/text-field.manifest.json';

export type ComponentManifest = {
  accessibilityRequirements: string[];
  name: string;
  purpose: string;
  states: string[];
  variants: Record<string, Array<string | boolean>>;
  whenNotToUse: string[];
  whenToUse: string[];
};

export const componentManifests = {
  AspectRatio: aspectRatioManifest,
  Avatar: avatarManifest,
  Badge: badgeManifest,
  Button: buttonManifest,
  Card: cardManifest,
  Label: labelManifest,
  Progress: progressManifest,
  Separator: separatorManifest,
  Skeleton: skeletonManifest,
  Switch: switchManifest,
  TextField: textFieldManifest,
} satisfies Record<string, ComponentManifest>;

export const componentManifestNames = Object.keys(componentManifests) as Array<
  keyof typeof componentManifests
>;

export {
  aspectRatioManifest,
  avatarManifest,
  badgeManifest,
  buttonManifest,
  cardManifest,
  labelManifest,
  progressManifest,
  separatorManifest,
  skeletonManifest,
  switchManifest,
  textFieldManifest,
};
