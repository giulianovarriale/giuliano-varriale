'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  href: string;
};

export function NavLink({ children, href }: Props) {
  const pathname = usePathname();

  return (
    <Link
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
