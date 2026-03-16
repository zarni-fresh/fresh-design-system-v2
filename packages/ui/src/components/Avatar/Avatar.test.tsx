import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh/ui-core';
import { getSemanticTheme } from '@fresh/tokens';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders fallback initials from the fallback label', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Avatar fallbackLabel="Fresh Design" />
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: 'FD' })).not.toThrow();
  });

  it('uses accent palette tokens when the accent tone is selected', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="dark">
          <Avatar fallbackLabel="Priya Shah" testID="avatar-root" tone="accent" />
        </FreshThemeProvider>
      );
    });

    const avatar = tree.root.findAll(
      (node) => node.props.testID === 'avatar-root' && Array.isArray(node.props.style)
    )[0];
    const theme = getSemanticTheme('dark');

    expect(avatar).toBeDefined();
    if (!avatar) {
      throw new Error('Expected Avatar host node to exist.');
    }
    expect(avatar.props.style[0].backgroundColor).toBe(theme.color.feedback.accent.background);
    expect(avatar.props.style[0].borderColor).toBe(theme.color.feedback.accent.border);
  });
});
