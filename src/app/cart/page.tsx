"use client";

import Link from "next/link";
import { Button } from "@/components/Button";
import { CartLine } from "@/components/CartLine";
import { useShoppingCart } from "@/components/ShoppingCartProvider";
import { sandwiches } from "@/data/sandwiches";
import { formatPrice } from "@/util/formatPrice";

export default function CartPage() {
  const { basket, itemCount, addToBasket, removeFromBasket } =
    useShoppingCart();

  const lines = Object.entries(basket).flatMap(([id, quantity]) => {
    const sandwich = sandwiches.find((sandwich) => sandwich.id === id);
    return sandwich ? { sandwich, quantity } : [];
  });

  const total = lines.reduce(
    (sum, line) => sum + line.sandwich.price * line.quantity,
    0,
  );

  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-6xl px-5 py-8 lg:px-8 lg:py-10">
        <h1 className="text-3xl font-black lg:text-4xl">Jouw zakje</h1>

        {lines.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-8">
            <p className="font-black">Je zakje is nog leeg.</p>
            <p className="mt-1 text-sm text-stone-500">
              Kies een broodje uit het menu en het verschijnt hier.
            </p>
            <Link
              href="/"
              className="mt-5 inline-flex rounded-full border border-black px-5 py-2.5 text-xs font-black text-black transition-colors hover:bg-black hover:text-white"
            >
              Naar het menu
            </Link>
          </div>
        ) : (
          <>
            <p className="mt-1 text-sm text-stone-500">
              {itemCount} {itemCount === 1 ? "broodje" : "broodjes"} · levering
              op kantoor
            </p>

            <div className="mt-5 grid items-start gap-8 lg:grid-cols-[1fr_360px]">
              <div className="flex flex-col gap-4">
                <ul className="divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white">
                  {lines.map((line) => (
                    <CartLine
                      key={line.sandwich.id}
                      sandwich={line.sandwich}
                      quantity={line.quantity}
                      onIncrease={() => addToBasket(line.sandwich.id)}
                      onDecrease={() => removeFromBasket(line.sandwich.id)}
                    />
                  ))}
                </ul>

                <Link
                  href="/"
                  className="inline-flex self-start rounded-full border border-black px-5 py-2.5 text-xs font-black text-black transition-colors hover:bg-black hover:text-white"
                >
                  Verder shoppen
                </Link>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6">
                <h2 className="text-lg font-black">Overzicht</h2>
                <div className="flex items-baseline justify-between">
                  <span className="font-black">Totaal</span>
                  <span className="text-2xl font-black">
                    {formatPrice(total)}
                  </span>
                </div>
                <Button size="md" fullWidth>
                  Naar afrekenen
                </Button>
                <p className="text-xs leading-normal text-stone-400">
                  Bestel voor 10u30, dan leveren we vandaag op kantoor.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
