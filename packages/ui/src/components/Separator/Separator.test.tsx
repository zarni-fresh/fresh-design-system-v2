import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh-ds/ui-core';
import { Separator } from './Separator';

describe('Separator', () => {
  it('renders a horizontal divider by default', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Separator testID="separator-root" />
        </FreshThemeProvider>
      );
    });

    const separator = tree.root.findAll(
      (node) => node.props.testID === 'separator-root' && Array.isArray(node.props.style)
    )[0];

    expect(separator).toBeDefined();
    if (!separator) {
      throw new Error('Expected Separator host node to exist.');
    }
    expect(separator.props.style[0].height).toBe(1);
    expect(separator.props.style[0].width).toBe('100%');
  });

  it('renders a vertical divider when requested', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Separator orientation="vertical" testID="separator-root" />
        </FreshThemeProvider>
      );
    });

    const separator = tree.root.findAll(
      (node) => node.props.testID === 'separator-root' && Array.isArray(node.props.style)
    )[0];

    expect(separator).toBeDefined();
    if (!separator) {
      throw new Error('Expected Separator host node to exist.');
    }
    expect(separator.props.style[0].width).toBe(1);
  });
});
