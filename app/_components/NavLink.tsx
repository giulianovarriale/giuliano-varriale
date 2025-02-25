'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEventHandler } from 'react';

type Props = {
  children: React.ReactNode;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function NavLink({ children, href, onClick }: Props) {
  const pathname = usePathname();

  return (
    <Link
      onClick={onClick}
      className={
        pathname === href
          ? 'relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-1 after:bg-green-600'
          : undefined
      }
      href={href}
    >
      {children}
    </Link>
  );
}
