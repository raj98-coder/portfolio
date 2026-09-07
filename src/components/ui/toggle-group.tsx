'use client';

import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { toggleVariants } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';
import { type VariantProps } from 'class-variance-authority';

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
  variant: 'default',
});

type ToggleGroupProps =
  | (Omit<ToggleGroupPrimitive.ToggleGroupSingleProps, 'type'> &
      VariantProps<typeof toggleVariants> & {
        type?: 'single';
      })
  | (Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps, 'type'> &
      VariantProps<typeof toggleVariants> & {
        type: 'multiple';
      });

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupProps
>(({ className, variant, size, children, type = 'single', ...props }, ref) => {
  const content = (
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  );
  const classNameWithLayout = cn(
    'flex items-center justify-center gap-1',
    className,
  );

  if (type === 'multiple') {
    return (
      <ToggleGroupPrimitive.Root
        ref={ref}
        type="multiple"
        className={classNameWithLayout}
        {...(props as Omit<
          ToggleGroupPrimitive.ToggleGroupMultipleProps,
          'type'
        >)}
      >
        {content}
      </ToggleGroupPrimitive.Root>
    );
  }

  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      type="single"
      className={classNameWithLayout}
      {...(props as Omit<ToggleGroupPrimitive.ToggleGroupSingleProps, 'type'>)}
    >
      {content}
    </ToggleGroupPrimitive.Root>
  );
});

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  Omit<
    React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
    'value'
  > &
    VariantProps<typeof toggleVariants> & {
      value: string;
    }
>(({ className, children, variant, size, value, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      value={value}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
