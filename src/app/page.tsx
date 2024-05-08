import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="px-2 md:px-16 lg:px-20 space-y-6 pb-20">
      <section className="flex items-center h-[85vh]">
        <Image
          src="/images/invest.jpeg"
          alt="Investindo Com Pouco"
          width={800}
          height={400}
          className="absolute right-0 -z-10 top-16 h-[600px] object-cover"
        />
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent to-black from-40% to-90%" />
        <div className="absolute -z-10 inset-0 bg-gradient-to-t from-transparent to-black from-40% to-90%" />
        <div className="absolute -z-10 inset-0 bg-gradient-to-tl from-transparent to-black lg:from-40% lg:to-70%" />
        <div className="absolute -z-10 inset-0 bg-gradient-to-l from-transparent to-black lg:from-40% lg:to-55%" />

        <article className="max-w-[540px] space-y-6">
          <span className="text-primary">CONHEÇA NOSSO CANAL NO YOUTUBE</span>
          <h1 className="text-5xl font-black">Investindo Com Pouco</h1>
          <p className="text-muted font-light">
            Conheça nosso canal no youtube, com diversos conteúdos informativos,
            como notícias sobre o mercado de ações, fundos imobiliários,
            indicadores fundamentalistas e conteúdo didático. Venham conhecer
            nosso canal e descubrar como investir.
          </p>

          <div className="flex gap-x-3">
            <Button className="bg-primary text-foreground text-xl w-full py-4 hover:bg-primary/80 duration-150 rounded-sm">
              ACESSAR CANAL
            </Button>
          </div>
        </article>
      </section>

      <section>
        <article className="space-y-6 text-center">
          <span className="text-primary">
            COMEÇE SUA JORNADA ATÉ A LIBERDADE FINANCEIRA POR AQUI
          </span>
          <h1 className="text-3xl font-black">Como Investir em Ações</h1>

          <div className="w-full max-w-[1100px] h-[50vw] max-h-[500px] bg-muted rounded-sm m-auto" />
        </article>
      </section>
    </main>
  );
}
