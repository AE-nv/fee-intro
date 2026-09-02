export function Hero() {
  return (
    <section className="bg-black text-white" aria-labelledby="hero-title">
      <div className="mx-auto w-full max-w-6xl px-5 py-8 lg:px-8 lg:pt-11 lg:pb-10">
        <div className="flex max-w-2xl flex-col gap-3.5">
          <p className="text-xs font-black tracking-widest text-orange-400 uppercase">
            Elke dag vers · Leuven
          </p>
          <h1
            id="hero-title"
            className="text-3xl leading-none font-normal tracking-tight lg:text-5xl"
          >
            Zondig lekker <br />
            <span className="font-black text-orange-400">belegd.</span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-white/70">
            Duivelse broodjes, één grote verleiding. Bestel voor 10u30 en wij
            leveren op kantoor.
          </p>
        </div>
      </div>
    </section>
  );
}
