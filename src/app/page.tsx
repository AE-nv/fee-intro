import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SandwichCard } from "@/components/SandwichCard";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-stone-50">
      <Header cartCount={3} />

      <main className="flex flex-1 flex-col">
        <Hero />

        <section className="flex-1 bg-stone-50" aria-labelledby="menu-title">
          <div className="mx-auto w-full max-w-6xl px-5 py-6 lg:p-8">
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="menu-title" className="text-2xl font-black">
                Onze broodjes
              </h2>
              <span className="text-xs text-stone-500">6 broodjes</span>
            </div>

            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <SandwichCard
                name="Martino Diabolique"
                description="Américain, ansjovis, tabasco, augurk. Voor wie het vuur niet vreest."
                price="€ 6,20"
                image="/broodjes/martino-diabolique.jpg"
                tag="Pikant"
              />
              <SandwichCard
                name="Kip curry"
                description="Kipfilet, huisgemaakte curry, ananas, krulsalade."
                price="€ 5,40"
                image="/broodjes/kip-curry.jpg"
              />
              <SandwichCard
                name="Brie du diable"
                description="Brie, honing, walnoot, rucola. Zoete zonde."
                price="€ 5,80"
                image="/broodjes/brie-du-diable.jpg"
                tag="Veggie"
              />
              <SandwichCard
                name="Krabsalade"
                description="Krab, mayonaise, tomaat, ei. De klassieker."
                price="€ 5,60"
                image="/broodjes/krabsalade.jpg"
              />
              <SandwichCard
                name="Gezond (maar net niet)"
                description="Kaas, ei, tomaat, komkommer, een flinke lik mayo."
                price="€ 4,90"
                image="/broodjes/gezond.jpg"
                tag="Veggie"
              />
              <SandwichCard
                name="Tonijn tartaar"
                description="Tonijn, rode ui, sriracha-mayo, jalapeño."
                price="€ 6,00"
                image="/broodjes/tonijn-tartaar.jpg"
                tag="Pikant"
              />
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
