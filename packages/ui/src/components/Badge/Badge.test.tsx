import TestRenderer from 'react-test-renderer';
import { getSemanticTheme } from '@fresh-ds/tokens';
import { FreshThemeProvider } from '@fresh-ds/ui-core';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders the badge label', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Badge label="Ready" />
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: 'Ready' })).not.toThrow();
  });

  it('uses strong feedback colors for solid badges', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="dark">
          <Badge emphasis="solid" label="Review" testID="badge-root" variant="accent" />
        </FreshThemeProvider>
      );
    });

    const badge = tree.root.findAll(
      (node) => node.props.testID === 'badge-root' && Array.isArray(node.props.style)
    )[0];
    const theme = getSemanticTheme('dark');

    expect(badge).toBeDefined();
    if (!badge) {
      throw new Error('Expected Badge host node to exist.');
    }
    expect(badge.props.style[0].backgroundColor).toBe(theme.color.feedback.accent.backgroundStrong);
    expect(badge.props.style[0].borderColor).toBe(theme.color.feedback.accent.backgroundStrong);
  });
});
