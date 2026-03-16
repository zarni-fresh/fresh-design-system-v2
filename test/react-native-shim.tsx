import { forwardRef, type PropsWithChildren, type ReactNode } from 'react';

type GenericProps = PropsWithChildren<Record<string, unknown>>;

const createHostComponent = (displayName: string) => {
  const Component = forwardRef<unknown, GenericProps>(({ children, ...props }, ref) => {
    return (
      <host-component ref={ref} data-name={displayName} {...props}>
        {children as ReactNode}
      </host-component>
    );
  });

  Component.displayName = displayName;
  return Component;
};

export const View = createHostComponent('View');
export const Text = createHostComponent('Text');
export const ActivityIndicator = createHostComponent('ActivityIndicator');
export const Image = createHostComponent('Image');
export const SafeAreaView = createHostComponent('SafeAreaView');
export const ScrollView = createHostComponent('ScrollView');
export const Switch = createHostComponent('Switch');

export const TextInput = forwardRef<unknown, GenericProps>((props, ref) => {
  return <host-component ref={ref} data-name="TextInput" {...props} />;
});

TextInput.displayName = 'TextInput';

export const Pressable = forwardRef<unknown, GenericProps>(({ children, style, ...props }, ref) => {
  const resolvedChildren =
    typeof children === 'function'
      ? children({ focused: false, hovered: false, pressed: false })
      : children;
  const resolvedStyle =
    typeof style === 'function' ? style({ focused: false, hovered: false, pressed: false }) : style;

  return (
    <host-component ref={ref} data-name="Pressable" style={resolvedStyle} {...props}>
      {resolvedChildren as ReactNode}
    </host-component>
  );
});

Pressable.displayName = 'Pressable';

export const useColorScheme = () => 'light' as const;

export const StyleSheet = {
  create: <T,>(styles: T) => styles,
};

export const Platform = {
  OS: 'ios',
  select: <T,>(options: { android?: T; default?: T; ios?: T }) => options.ios ?? options.default,
};
