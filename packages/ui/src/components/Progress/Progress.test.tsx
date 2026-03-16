import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh/ui-core';
import { Progress } from './Progress';

describe('Progress', () => {
  it('renders the fill width from the provided value and max', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Progress testID="progress-root" value={40} />
        </FreshThemeProvider>
      );
    });

    const track = tree.root.findAll(
      (node) =>
        node.props.testID === 'progress-root' &&
        Array.isArray(node.props.style) &&
        node.props.accessibilityRole === 'progressbar'
    )[0];
    const fill = track?.findAll(
      (node) => !Array.isArray(node.props.style) && Boolean(node.props.style?.width)
    )[0];

    expect(track).toBeDefined();
    expect(fill).toBeDefined();
    if (!track || !fill) {
      throw new Error('Expected Progress host nodes to exist.');
    }
    expect(fill.props.style.width).toBe('40%');
  });

  it('exposes accessibility progress values', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Progress max={80} testID="progress-root" value={20} />
        </FreshThemeProvider>
      );
    });

    const track = tree.root.findAll(
      (node) =>
        node.props.testID === 'progress-root' &&
        Array.isArray(node.props.style) &&
        node.props.accessibilityRole === 'progressbar'
    )[0];

    expect(track).toBeDefined();
    if (!track) {
      throw new Error('Expected Progress host node to exist.');
    }
    expect(track.props.accessibilityValue).toEqual({
      max: 80,
      min: 0,
      now: 20,
    });
  });
});
