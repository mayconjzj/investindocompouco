import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi';

export const Header = () => {
  return (
    <header className="px-2 lg:px-20 h-24 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-green-500">
          Investindo Com Pouco
        </h1>
      </div>

      <nav>
        <ul className="flex gap-x-12 font-bold">
          <li>
            <Link href="/">
              <div className="flex gap-x-[2px] items-center">
                <FiChevronsRight className="text-green-500 text-xl" />{' '}
                <span className="text-zinc-300 hover:text-white duration-150">
                  Início
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <div className="flex gap-x-[2px] items-center">
                <FiChevronsRight className="text-green-500 text-xl" />{' '}
                <span className="text-zinc-300 hover:text-white duration-150">
                  Sobre nós
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <div className="flex gap-x-[2px] items-center">
                <FiChevronsRight className="text-green-500 text-xl" />{' '}
                <span className="text-zinc-300 hover:text-white duration-150">
                  Contato
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
