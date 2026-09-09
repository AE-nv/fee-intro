"use client";

import { useRouter } from "next/navigation";
import { LinkButton } from "@/components/LinkButton";
import { OrderForm } from "@/components/OrderForm";
import { OrderSummary } from "@/components/OrderSummary";
import {
  useShoppingCart,
  type OrderDetails,
} from "@/components/ShoppingCartProvider";
import { useSandwiches } from "@/hooks/useSandwiches";

// Ties the summary's submit button to the form, which sits in a sibling column.
const FORM_ID = "order-form";

export default function CheckoutPage() {
  const router = useRouter();
  const { basket, placeOrder } = useShoppingCart();
  const { data: sandwiches } = useSandwiches();

  const isBasketEmpty = Object.keys(basket).length === 0;

  const lines = Object.entries(basket).flatMap(([id, quantity]) => {
    const sandwich = sandwiches?.find((sandwich) => sandwich.id === id);
    return sandwich ? { sandwich, quantity } : [];
  });

  const total = lines.reduce(
    (sum, line) => sum + line.sandwich.price * line.quantity,
    0,
  );

  function handleOrder(details: OrderDetails) {
    placeOrder(details);
    router.push("/order");
  }

  return (
    <main className="flex flex-1 flex-col">
      {!isBasketEmpty ? (
        <div className="mx-auto grid w-full max-w-6xl items-start gap-8 px-5 py-8 lg:grid-cols-[1fr_360px] lg:px-8 lg:py-10">
          <OrderForm id={FORM_ID} onSubmit={handleOrder} />
          <OrderSummary lines={lines} total={total} formId={FORM_ID} />
        </div>
      ) : (
        <div className="mx-auto w-full max-w-6xl px-5 py-8 lg:px-8 lg:py-10">
          <h1 className="text-3xl font-black lg:text-4xl">Afrekenen</h1>
          <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-8">
            <p className="font-black">Je zakje is leeg.</p>
            <p className="mt-1 text-sm text-stone-500">
              Kies eerst een broodje uit het menu.
            </p>
            <div className="mt-5">
              <LinkButton href="/" variant="ghost">
                Naar het menu
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
