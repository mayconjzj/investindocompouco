// import Image from 'next/image';

export default function Home() {
  return (
    <main className="px-2 md:px-16 lg:px-20">
      <section className="flex items-center h-[85vh]">
        {/* <Image
          src="/images/invest.jpeg"
          alt="Investindo Com Pouco"
          fill
          className="absolute right-0 -z-10 inset-0 w-full h-[100vh] object-cover"
        />
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent to-black from-40% to-90%" />
        <div className="absolute -z-10 inset-0 bg-gradient-to-l from-transparent to-black" /> */}

        <div className="w-[550px] space-y-3">
          <h1 className="text-5xl font-black">Investindo Com Pouco</h1>
          <p className="text-muted font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas
            ea ipsam a alias quas, repellat blanditiis reiciendis corrupti
            tenetur temporibus magnam dolore consequuntur, debitis voluptatem?
            Dolores laudantium aliquam fugit.
          </p>

          <div className="flex gap-x-3">
            <button className="bg-primary text-foreground px-5 hover:bg-primary/90 duration-150 py-2 rounded-full">
              Canal
            </button>
            <button className="bg-foreground text-background px-5 hover:bg-foreground/90 duration-150 py-2 rounded-full">
              Contato
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
