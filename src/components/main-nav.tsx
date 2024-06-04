'use client';

import { RiCloseLargeFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';

import { useIsOpen } from '@/hooks/use-is-open';

import { ActiveLink } from './ui/active-link';
import { Button } from './ui/button';

export const MainNav = () => {
  const { isOpen, handleClick } = useIsOpen({ id: 'main-nav' });

  return (
    <>
      <nav className="md:flex items-center justify-between hidden">
        <ul className="flex gap-x-6 font-bold">
          <li>
            <ActiveLink href="/" icon>
              Início
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about" icon>
              Sobre
            </ActiveLink>
          </li>
        </ul>
      </nav>

      <Button
        onClick={handleClick}
        className="md:hidden bg-transparent hover:bg-transparent"
      >
        {isOpen && <RiCloseLargeFill className="size-7" />}
        {isOpen || <RxHamburgerMenu className="size-7" />}
      </Button>

      <nav
        id="main-nav"
        className={`md:hidden fixed top-[70px] right-2 shadow-lg bg-background/90 p-4 w-44 h-44 duration-300 rounded-xl ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <ul className="flex flex-col gap-2 font-bold">
          <li>
            <ActiveLink href="/" icon>
              Início
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about" icon>
              Sobre
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
