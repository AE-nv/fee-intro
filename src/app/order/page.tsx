"use client";

import { NoOrder } from "@/components/NoOrder";
import { OrderAgain } from "@/components/OrderAgain";
import { OrderStatus } from "@/components/OrderStatus";
import { OrderedItems } from "@/components/OrderedItems";
import { useShoppingCart } from "@/components/ShoppingCartProvider";

export default function OrderPage() {
  const { lastOrder } = useShoppingCart();

  return (
    <main className="flex flex-1 flex-col">
      {lastOrder ? (
        <>
          <section className="bg-red-500 text-white">
            <div className="mx-auto w-full max-w-6xl px-5 py-10 lg:px-8 lg:py-14">
              <p className="text-xs font-black tracking-widest uppercase opacity-80">
                Bestelling ontvangen
              </p>
              <h1 className="mt-3 max-w-2xl text-3xl leading-tight font-black lg:text-5xl">
                <span className="block">Duivels goed.</span>
                <span className="block">
                  Je broodjes zijn onderweg naar je bureau.
                </span>
              </h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
                Bedankt, {lastOrder.details.name}. We leveren vandaag op
                kantoor.
              </p>
            </div>
          </section>

          <section className="flex-1 bg-stone-50">
            <div className="mx-auto grid w-full max-w-6xl gap-5 px-5 py-8 lg:grid-cols-3 lg:px-8">
              <OrderedItems order={lastOrder} />
              <OrderStatus />
              <OrderAgain />
            </div>
          </section>
        </>
      ) : (
        <NoOrder />
      )}
    </main>
  );
}
