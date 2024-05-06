'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronsRight } from 'react-icons/fi';

import { cn } from '@/lib/tailwind-merge';

export type ActiveLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  icon?: boolean;
};

export const ActiveLink = ({
  children,
  href,
  className,
  icon = false
}: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="flex gap-x-[2px] items-center">
      {icon && <FiChevronsRight className="text-primary text-xl" />}
      <span
        className={cn(
          `text-muted hover:text-foreground duration-150 ${isActive && 'text-foreground'}`,
          className
        )}
      >
        {children}
      </span>
    </Link>
  );
};
