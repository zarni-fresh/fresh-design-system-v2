import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh/ui-core';
import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
  it('renders the title and description', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <PageHeader description="Review the current selection." title="Select product" />
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: 'Select product' })).not.toThrow();
    expect(() => tree.root.findByProps({ children: 'Review the current selection.' })).not.toThrow();
  });
});
