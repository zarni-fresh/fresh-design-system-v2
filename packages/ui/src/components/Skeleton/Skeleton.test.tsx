import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh-ds/ui-core';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders a line skeleton by default', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Skeleton testID="skeleton-root" />
        </FreshThemeProvider>
      );
    });

    const skeleton = tree.root.findAll(
      (node) => node.props.testID === 'skeleton-root' && Array.isArray(node.props.style)
    )[0];

    expect(skeleton).toBeDefined();
    if (!skeleton) {
      throw new Error('Expected Skeleton host node to exist.');
    }
    expect(skeleton.props.style[0].height).toBe(12);
  });

  it('renders a circle skeleton with equal dimensions', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Skeleton shape="circle" size="lg" testID="skeleton-root" />
        </FreshThemeProvider>
      );
    });

    const skeleton = tree.root.findAll(
      (node) => node.props.testID === 'skeleton-root' && Array.isArray(node.props.style)
    )[0];

    expect(skeleton).toBeDefined();
    if (!skeleton) {
      throw new Error('Expected Skeleton host node to exist.');
    }
    expect(skeleton.props.style[0].height).toBe(56);
    expect(skeleton.props.style[0].width).toBe(56);
  });
});
