import TestRenderer from 'react-test-renderer';
import { getSemanticTheme } from '@fresh/tokens';
import { FreshThemeProvider } from '@fresh/ui-core';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card';

describe('Card', () => {
  it('renders slot content', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Card>
            <CardHeader>
              <CardTitle>Review manifests</CardTitle>
              <CardDescription>Keep AI-readable metadata in sync.</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: 'Review manifests' })).not.toThrow();
    expect(() =>
      tree.root.findByProps({ children: 'Keep AI-readable metadata in sync.' })
    ).not.toThrow();
  });

  it('uses token-driven surface styles for elevated cards', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Card testID="card-root" variant="elevated">
            <CardContent />
          </Card>
        </FreshThemeProvider>
      );
    });

    const card = tree.root.findAll(
      (node) => node.props.testID === 'card-root' && Array.isArray(node.props.style)
    )[0];
    const theme = getSemanticTheme('light');

    expect(card).toBeDefined();
    if (!card) {
      throw new Error('Expected Card host node to exist.');
    }
    expect(card.props.style[0].backgroundColor).toBe(theme.color.surface.elevated);
    expect(card.props.style[0].borderColor).toBe(theme.color.border.default);
  });
});
