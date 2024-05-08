import { cn } from '@/lib/tailwind-merge';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-4 py-2 bg-foreground text-background hover:bg-foreground/80 duration-150 rounded-sm',
        className
      )}
    >
      {children}
    </button>
  );
};
