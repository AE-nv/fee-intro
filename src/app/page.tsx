import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SandwichCard } from "@/components/SandwichCard";
import { sandwiches } from "@/data/sandwiches";

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
              <span className="text-xs text-stone-500">
                {sandwiches.length} broodjes
              </span>
            </div>

            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sandwiches.map((sandwich) => (
                <SandwichCard
                  key={sandwich.id}
                  name={sandwich.name}
                  description={sandwich.description}
                  price={sandwich.price}
                  image={sandwich.image}
                  tag={sandwich.tag}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
