import Image from 'next/image';
import Link from 'next/link';

import { MainNav } from './main-nav';

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

      <MainNav />
    </header>
  );
};
