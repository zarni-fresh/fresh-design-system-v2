import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh-ds/ui-core';
import { SectionHeader } from './SectionHeader';

describe('SectionHeader', () => {
  it('renders section copy', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <SectionHeader description="Choose the best batch for the order." title="Batch options" />
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: 'Batch options' })).not.toThrow();
  });
});
