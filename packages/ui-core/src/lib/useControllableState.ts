import { useCallback, useState } from 'react';

type UseControllableStateOptions<T> = {
  defaultValue: T;
  onChange?: (nextValue: T) => void;
  value?: T;
};

export const useControllableState = <T>({
  defaultValue,
  onChange,
  value,
}: UseControllableStateOptions<T>) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const setValue = useCallback(
    (nextValue: T | ((currentValue: T) => T)) => {
      const resolvedValue =
        typeof nextValue === 'function'
          ? (nextValue as (currentValue: T) => T)(currentValue)
          : nextValue;

      if (Object.is(resolvedValue, currentValue)) {
        return;
      }

      if (!isControlled) {
        setInternalValue(resolvedValue);
      }

      onChange?.(resolvedValue);
    },
    [currentValue, isControlled, onChange]
  );

  return [currentValue, setValue] as const;
};
