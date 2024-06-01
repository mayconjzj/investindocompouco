import Image from 'next/image';
import Link from 'next/link';

import { ActiveLink } from './ui/active-link';
import { Button } from './ui/button';

export const Header = () => {
  return (
    <header className="px-2 md:px-16 lg:px-20 h-24 flex justify-between items-center">
      <div>
        <Link href="/">
          <Image
            src="/images/channelLogo.jpeg"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </Link>
      </div>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-x-12 font-bold">
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
          <li>
            <Button>Contato</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
