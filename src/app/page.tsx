"use client";

import { Hero } from "@/components/Hero";
import { SandwichCard } from "@/components/SandwichCard";
import { SandwichCardSkeleton } from "@/components/SandwichCardSkeleton";
import { useShoppingCart } from "@/components/ShoppingCartProvider";
import { Spinner } from "@/components/Spinner";
import { useSandwiches } from "@/hooks/useSandwiches";

// How many placeholder cards to show while the menu is loading.
const SKELETON_COUNT = 6;

export default function Home() {
  const { addToBasket } = useShoppingCart();
  const { data: sandwiches, isLoading, isError } = useSandwiches();

  return (
    <main className="flex flex-1 flex-col">
      <Hero />

      <section className="flex-1 bg-stone-50" aria-labelledby="menu-title">
        <div className="mx-auto w-full max-w-6xl px-5 py-6 lg:p-8">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="menu-title" className="text-2xl font-black">
              Onze broodjes
            </h2>
            {isLoading && (
              <Spinner>De oven draait nog… broodjes worden opgehaald</Spinner>
            )}
            {!!sandwiches && (
              <span className="text-xs text-stone-500">
                {sandwiches.length} broodjes
              </span>
            )}
          </div>

          {isError && (
            <div className="rounded-2xl border border-stone-200 bg-white p-8">
              <p className="font-black">De oven is stil gevallen.</p>
              <p className="mt-1 text-sm text-stone-500">
                We konden de broodjes niet ophalen. Probeer het later opnieuw.
              </p>
            </div>
          )}

          {!isError && (
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Index keys are fine here: the placeholders are identical and
                  never reorder. */}
              {isLoading &&
                Array.from({ length: SKELETON_COUNT }, (_, index) => (
                  <SandwichCardSkeleton key={index} />
                ))}

              {sandwiches?.map((sandwich) => (
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
          )}
        </div>
      </section>
    </main>
  );
}
