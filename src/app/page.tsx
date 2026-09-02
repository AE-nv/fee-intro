import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-stone-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 lg:px-8 lg:py-4">
          <div className="flex items-center gap-2.5">
            <Image src="/icons/logo.svg" alt="" width={22} height={22} />
            <span className="text-base font-black tracking-tight">
              Het Duivels Broodje
            </span>
          </div>

          <nav className="flex items-center gap-7 text-sm font-bold">
            <span className="border-b-2 border-orange-400 pb-1 text-black">
              Menu
            </span>
            <span
              className="relative flex items-center text-black"
              aria-label="Winkelwagen"
            >
              <Image src="/icons/cart.svg" alt="" width={23} height={23} />
              <span className="absolute -top-2 -right-2 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 px-1 text-xs font-black text-white ring-2 ring-white">
                3
              </span>
            </span>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        {/* Hero */}
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
                Duivelse broodjes, één grote verleiding. Bestel voor 10u30 en
                wij leveren op kantoor.
              </p>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="flex-1 bg-stone-50" aria-labelledby="menu-title">
          <div className="mx-auto w-full max-w-6xl px-5 py-6 lg:p-8">
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="menu-title" className="text-2xl font-black">
                Onze broodjes
              </h2>
              <span className="text-xs text-stone-500">6 broodjes</span>
            </div>

            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <li className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <Image
                  src="/broodjes/martino-diabolique.jpg"
                  alt="Broodje Martino Diabolique"
                  width={800}
                  height={300}
                  className="h-32 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-2 px-5 pt-4 pb-5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black">Martino Diabolique</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1.5 text-xs leading-none font-bold whitespace-nowrap text-rose-900">
                      Pikant
                    </span>
                  </div>
                  <p className="flex-1 text-sm leading-normal text-stone-700">
                    Américain, ansjovis, tabasco, augurk. Voor wie het vuur niet
                    vreest.
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-lg font-black">€ 6,20</span>
                    <button
                      type="button"
                      className="rounded-full bg-red-500 px-5 py-2.5 text-xs font-black text-white transition-colors hover:bg-rose-900"
                    >
                      Toevoegen
                    </button>
                  </div>
                </div>
              </li>

              <li className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <Image
                  src="/broodjes/kip-curry.jpg"
                  alt="Broodje kip curry"
                  width={800}
                  height={300}
                  className="h-32 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-2 px-5 pt-4 pb-5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black">Kip curry</h3>
                  </div>
                  <p className="flex-1 text-sm leading-normal text-stone-700">
                    Kipfilet, huisgemaakte curry, ananas, krulsalade.
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-lg font-black">€ 5,40</span>
                    <button
                      type="button"
                      className="rounded-full bg-red-500 px-5 py-2.5 text-xs font-black text-white transition-colors hover:bg-rose-900"
                    >
                      Toevoegen
                    </button>
                  </div>
                </div>
              </li>

              <li className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <Image
                  src="/broodjes/brie-du-diable.jpg"
                  alt="Broodje Brie du diable"
                  width={800}
                  height={300}
                  className="h-32 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-2 px-5 pt-4 pb-5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black">Brie du diable</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs leading-none font-bold whitespace-nowrap text-stone-700">
                      Veggie
                    </span>
                  </div>
                  <p className="flex-1 text-sm leading-normal text-stone-700">
                    Brie, honing, walnoot, rucola. Zoete zonde.
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-lg font-black">€ 5,80</span>
                    <button
                      type="button"
                      className="rounded-full bg-red-500 px-5 py-2.5 text-xs font-black text-white transition-colors hover:bg-rose-900"
                    >
                      Toevoegen
                    </button>
                  </div>
                </div>
              </li>

              <li className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <Image
                  src="/broodjes/krabsalade.jpg"
                  alt="Broodje krabsalade"
                  width={800}
                  height={300}
                  className="h-32 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-2 px-5 pt-4 pb-5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black">Krabsalade</h3>
                  </div>
                  <p className="flex-1 text-sm leading-normal text-stone-700">
                    Krab, mayonaise, tomaat, ei. De klassieker.
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-lg font-black">€ 5,60</span>
                    <button
                      type="button"
                      className="rounded-full bg-red-500 px-5 py-2.5 text-xs font-black text-white transition-colors hover:bg-rose-900"
                    >
                      Toevoegen
                    </button>
                  </div>
                </div>
              </li>

              <li className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <Image
                  src="/broodjes/gezond.jpg"
                  alt="Broodje Gezond (maar net niet)"
                  width={800}
                  height={300}
                  className="h-32 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-2 px-5 pt-4 pb-5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black">
                      Gezond (maar net niet)
                    </h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs leading-none font-bold whitespace-nowrap text-stone-700">
                      Veggie
                    </span>
                  </div>
                  <p className="flex-1 text-sm leading-normal text-stone-700">
                    Kaas, ei, tomaat, komkommer, een flinke lik mayo.
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-lg font-black">€ 4,90</span>
                    <button
                      type="button"
                      className="rounded-full bg-red-500 px-5 py-2.5 text-xs font-black text-white transition-colors hover:bg-rose-900"
                    >
                      Toevoegen
                    </button>
                  </div>
                </div>
              </li>

              <li className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <Image
                  src="/broodjes/tonijn-tartaar.jpg"
                  alt="Broodje tonijn tartaar"
                  width={800}
                  height={300}
                  className="h-32 w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-2 px-5 pt-4 pb-5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black">Tonijn tartaar</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1.5 text-xs leading-none font-bold whitespace-nowrap text-rose-900">
                      Pikant
                    </span>
                  </div>
                  <p className="flex-1 text-sm leading-normal text-stone-700">
                    Tonijn, rode ui, sriracha-mayo, jalapeño.
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-lg font-black">€ 6,00</span>
                    <button
                      type="button"
                      className="rounded-full bg-red-500 px-5 py-2.5 text-xs font-black text-white transition-colors hover:bg-rose-900"
                    >
                      Toevoegen
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
