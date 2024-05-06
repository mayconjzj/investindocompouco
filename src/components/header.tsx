import { ActiveLink } from './ui/active-link';

export const Header = () => {
  return (
    <header className="px-2 md:px-16 lg:px-20 h-24 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-primary">
          Investindo Com Pouco
        </h1>
      </div>

      <nav className="hidden md:block">
        <ul className="flex gap-x-12 font-bold">
          <li>
            <ActiveLink href="/" icon>
              Início
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/sobre" icon>
              Sobre
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/contato" icon>
              Contato
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
