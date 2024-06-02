export default function About() {
  return (
    <main className="px-2 md:px-16 lg:px-20 space-y-6 pb-20">
      <section className="flex space-y-6 gap-x-4 items-center justify-evenly">
        <div className="w-[400px]" />

        <div className="w-[600px] space-y-3">
          <h1 className="font-bold text-4xl">Missão</h1>
          <p className="text-muted font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi
            sint aliquam ipsam quia cumque perspiciatis ab dolorum saepe, ex
            corrupti tenetur debitis dolor fuga odio reiciendis autem libero.
            Repudiandae.
          </p>
        </div>
      </section>

      <section className="flex space-y-6 gap-x-4 items-center justify-evenly">
        <div className="w-[600px] space-y-3">
          <h1 className="font-bold text-4xl">História</h1>
          <p className="text-muted font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi
            sint aliquam ipsam quia cumque perspiciatis ab dolorum saepe, ex
            corrupti tenetur debitis dolor fuga odio reiciendis autem libero.
            Repudiandae.
          </p>
        </div>

        <div className="w-[400px]" />
      </section>
    </main>
  );
}
