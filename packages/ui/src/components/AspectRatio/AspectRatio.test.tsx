import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh/ui-core';
import { AspectRatio } from './AspectRatio';

describe('AspectRatio', () => {
  it('applies the configured aspect ratio to the wrapper', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <AspectRatio ratio={4 / 3} testID="aspect-ratio-root" />
        </FreshThemeProvider>
      );
    });

    const wrapper = tree.root.findAll(
      (node) => node.props.testID === 'aspect-ratio-root' && Array.isArray(node.props.style)
    )[0];

    expect(wrapper).toBeDefined();
    if (!wrapper) {
      throw new Error('Expected AspectRatio host node to exist.');
    }
    expect(wrapper.props.style[0].aspectRatio).toBe(4 / 3);
  });
});
