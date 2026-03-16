import TestRenderer from 'react-test-renderer';
import { getSemanticTheme } from '@fresh/tokens';
import { FreshThemeProvider } from '@fresh/ui-core';
import { Button } from './Button';

describe('Button', () => {
  it('renders the action label', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Button label="Continue" />
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: 'Continue' })).not.toThrow();
  });

  it('exposes disabled state to accessibility', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Button disabled label="Archive" />
        </FreshThemeProvider>
      );
    });

    const button = tree.root.findByProps({ accessibilityLabel: 'Archive' });
    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it('uses the semantic primary action palette by default', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Button label="Continue" testID="button-root" />
        </FreshThemeProvider>
      );
    });

    const theme = getSemanticTheme('light');
    const buttonSurface = tree.root.findAll(
      (node) =>
        node.props.style &&
        !Array.isArray(node.props.style) &&
        node.props.style.backgroundColor === theme.color.action.primary.background
    )[0];

    expect(buttonSurface).toBeDefined();
    if (!buttonSurface) {
      throw new Error('Expected Button host node to exist.');
    }
    expect(buttonSurface.props.style.backgroundColor).toBe(theme.color.action.primary.background);
    expect(buttonSurface.props.style.borderColor).toBe(theme.color.action.primary.border);
  });

  it('announces busy state while loading', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Button label="Saving" loading />
        </FreshThemeProvider>
      );
    });

    const button = tree.root.findByProps({ accessibilityLabel: 'Saving' });
    expect(button.props.accessibilityState.busy).toBe(true);
    expect(button.props.accessibilityState.disabled).toBe(true);
  });
});
