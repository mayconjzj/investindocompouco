import Link from 'next/link';
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';

import { ActiveLink } from './ui/active-link';
import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className="bg-secundary">
      <section className="space-y-6 py-12">
        <div>
          <ul className="flex gap-x-3 items-center justify-center">
            <li>
              <Button size="none" className="size-12" asChild>
                <Link
                  href="https://www.youtube.com/@investindocompouco_oficial"
                  target="_blank"
                >
                  <FaYoutube size={28} />
                </Link>
              </Button>
            </li>
            <li>
              <Button size="none" className="size-12" asChild>
                <Link href="/" target="_blank">
                  <FaFacebook size={28} />
                </Link>
              </Button>
            </li>
            <li>
              <Button size="none" className="size-12" asChild>
                <Link
                  href="https://www.instagram.com/investindocompoucobr/"
                  target="_blank"
                >
                  <FaInstagram size={28} />
                </Link>
              </Button>
            </li>
            <li>
              <Button size="none" className="size-12" asChild>
                <Link href="/" target="_blank">
                  <FaTwitter size={28} />
                </Link>
              </Button>
            </li>
            <li>
              <Button size="none" className="size-12" asChild>
                <Link href="/" target="_blank">
                  <FaGooglePlusG size={28} />
                </Link>
              </Button>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex items-center justify-center gap-x-6">
            <li className="font-medium text-muted hover:text-foreground">
              <ActiveLink href="/">Início</ActiveLink>
            </li>
            <li className="font-medium text-muted hover:text-foreground">
              <ActiveLink href="/about">Sobre</ActiveLink>
            </li>
            <li className="font-medium text-muted hover:text-foreground">
              Contato
            </li>
            <li className="font-medium text-muted hover:text-foreground">
              News
            </li>
            <li className="font-medium text-muted hover:text-foreground">
              Outros
            </li>
          </ul>
        </div>
      </section>

      <section className="flex justify-center bg-background py-4">
        <div>
          &copy; {new Date().getFullYear()} Copyright:
          InvestindoComPouco.vercel.app
        </div>
      </section>
    </footer>
  );
};
