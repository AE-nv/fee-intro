"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SandwichCard } from "@/components/SandwichCard";
import { sandwiches } from "@/data/sandwiches";

export default function Home() {
  // The one source of truth: how many of each sandwich is in the basket.
  const [basket, setBasket] = useState<Record<string, number>>({});

  function addToBasket(id: string) {
    setBasket((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }));
  }

  // Derived from the basket, never stored separately.
  const itemCount = Object.values(basket).reduce(
    (total, qty) => total + qty,
    0,
  );

  return (
    <div className="flex flex-1 flex-col bg-stone-50">
      <Header cartCount={itemCount} />

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
                  onAdd={() => addToBasket(sandwich.id)}
                />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
