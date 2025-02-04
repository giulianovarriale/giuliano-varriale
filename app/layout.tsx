import type { Metadata } from 'next';
import { Afacad_Flux } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { HamburguerMenu } from './_components/HamburguerMenu';
import Image from 'next/image';
import { NavLink } from './_components/NavLink';

const afacadFlux = Afacad_Flux({
  variable: '--font-afacad_flux',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Giuliano Varriale',
  description: 'Frontend developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacadFlux.variable} antialiased font-sans grid grid-rows-[auto_1fr_auto] min-h-screen dark:bg-zinc-950`}
      >
        <Header />

        <main className="max-w-screen-xl mx-auto py-12 px-6 md:py-20 md:px-9">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

function Logo() {
  return (
    <span className="w-28 h-28 bg-black flex items-center justify-center">
      <Image
        width={46}
        height={50}
        src="/logo.svg"
        alt=""
        className="-translate-x-0.5"
      />
    </span>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between pr-9">
      <Link aria-label="giuliano varriale homepage" href="/">
        <Logo />
      </Link>

      <div className="md:hidden">
        <HamburguerMenu
          navigation={
            <nav className="flex flex-col gap-6 text-xl font-semibold dark:text-zinc-100">
              <NavLinks />
            </nav>
          }
        />
      </div>

      <nav className="hidden md:flex justify-center gap-6 text-2xl font-semibold dark:text-zinc-100">
        <NavLinks />
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-black p-4">
      <p className="text-white text-center text-lg">
        Made with{' '}
        <span aria-label="love" role="img">
          ❤️
        </span>{' '}
        by <Link href="/">Giuliano Varriale</Link>
      </p>
    </footer>
  );
}

function NavLinks() {
  return (
    <>
      <NavLink href="/">home</NavLink>
      <NavLink href="/about">about</NavLink>
      <NavLink href="/blog">blog</NavLink>
      <NavLink href="/experiments">experiments</NavLink>
      <NavLink href="/contact">contact</NavLink>
    </>
  );
}
