'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navigation } from '../_data/navigation';
import { NavLink } from './NavLink';

export function HamburguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="w-12 h-12 inline-flex justify-center items-center"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={32} strokeWidth={3} className="dark:text-zinc-100" />
      </button>

      <div
        className={`${
          isOpen ? 'flex flex-col' : 'hidden'
        } absolute w-full h-full top-0 left-0 bg-white z-50 p-9 dark:bg-zinc-950`}
      >
        <button
          className="w-12 h-12 inline-flex justify-center items-center self-end"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
        >
          <X className="dark:text-zinc-100" />
        </button>

        <nav className="flex flex-col gap-6 text-xl font-semibold dark:text-zinc-100">
          {navigation.map((nav) => (
            <NavLink
              key={nav.href}
              href={nav.href}
              onClick={() => setIsOpen(false)}
            >
              {nav.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
