import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh/ui-core';
import { StickyActionFooter } from './StickyActionFooter';

describe('StickyActionFooter', () => {
  it('renders the primary action label', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <StickyActionFooter primaryAction={{ label: 'Continue to next step' }} />
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: 'Continue to next step' })).not.toThrow();
  });
});
