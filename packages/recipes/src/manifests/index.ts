import pageHeaderManifest from '../components/PageHeader/page-header.manifest.json';
import sectionHeaderManifest from '../components/SectionHeader/section-header.manifest.json';
import selectionCardManifest from '../components/SelectionCard/selection-card.manifest.json';
import stickyActionFooterManifest from '../components/StickyActionFooter/sticky-action-footer.manifest.json';
import summaryCardManifest from '../components/SummaryCard/summary-card.manifest.json';

export type RecipeManifest = {
  accessibilityRequirements: string[];
  name: string;
  purpose: string;
  states: string[];
  variants: Record<string, Array<string | boolean>>;
  whenNotToUse: string[];
  whenToUse: string[];
};

export const recipeManifests = {
  PageHeader: pageHeaderManifest,
  SectionHeader: sectionHeaderManifest,
  SelectionCard: selectionCardManifest,
  StickyActionFooter: stickyActionFooterManifest,
  SummaryCard: summaryCardManifest,
} satisfies Record<string, RecipeManifest>;

export const recipeManifestNames = Object.keys(recipeManifests) as Array<
  keyof typeof recipeManifests
>;

export {
  pageHeaderManifest,
  sectionHeaderManifest,
  selectionCardManifest,
  stickyActionFooterManifest,
  summaryCardManifest,
};
