import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, tv } from 'tailwind-variants';

export const ButtonVariants = tv({
  base: 'inline-flex items-center justify-center text-sm font-medium',
  variants: {
    variant: {
      primary: 'bg-primary text-foreground hover:bg-primary/80 duration-150'
    },
    size: {
      none: 'px-0 py-0',
      sm: 'px-4 py-2',
      md: 'px-6 py-3',
      lg: 'px-8 py-4',
      xl: 'px-10 py-5',
      '2xl': 'px-12 py-6',
      '3xl': 'px-14 py-7',
      '4xl': 'px-16 py-8',
      '5xl': 'px-20 py-10'
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-[1.25rem]',
      '3xl': 'rounded-[1.5rem]',
      '4xl': 'rounded-[2rem]',
      '5xl': 'rounded-[2.5rem]',
      full: 'rounded-full'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    rounded: 'full'
  }
});

export type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVariants> & {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
  };

export const Button = ({
  children,
  variant,
  size,
  rounded,
  asChild,
  className,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={ButtonVariants({ variant, size, rounded, className })}
      {...props}
    >
      {children}
    </Component>
  );
};
