"use client";

import { createContext, useContext, useState } from "react";

export type Cut = "half" | "whole";

export type OrderDetails = {
  name: string;
  phone: string;
  email: string;
  remark: string;
  cut: Cut;
};

export type PlacedOrder = {
  items: Record<string, number>;
  details: OrderDetails;
};

type ShoppingCart = {
  basket: Record<string, number>;
  itemCount: number;
  addToBasket: (id: string) => void;
  removeFromBasket: (id: string) => void;
  /** Kept after the basket is emptied, so the confirmation page can show it. */
  lastOrder: PlacedOrder | null;
  placeOrder: (details: OrderDetails) => void;
};

const ShoppingCartContext = createContext<ShoppingCart | null>(null);

type Props = {
  children: React.ReactNode;
};

export function ShoppingCartProvider({ children }: Props) {
  // The one source of truth. It lives in the layout, so it survives
  // navigating between / and /cart.
  const [basket, setBasket] = useState<Record<string, number>>({});
  const [lastOrder, setLastOrder] = useState<PlacedOrder | null>(null);

  function addToBasket(id: string) {
    setBasket((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }));
  }

  function removeFromBasket(id: string) {
    setBasket((current) => {
      const quantity = (current[id] ?? 0) - 1;
      const next = { ...current };
      if (quantity > 0) {
        next[id] = quantity;
      } else {
        delete next[id];
      }
      return next;
    });
  }

  // Snapshot the basket into the order before emptying it, otherwise the
  // confirmation page would have nothing left to show.
  function placeOrder(details: OrderDetails) {
    setLastOrder({ items: basket, details });
    setBasket({});
  }

  const itemCount = Object.values(basket).reduce(
    (total, quantity) => total + quantity,
    0,
  );

  return (
    <ShoppingCartContext
      value={{
        basket,
        itemCount,
        addToBasket,
        removeFromBasket,
        lastOrder,
        placeOrder,
      }}
    >
      {children}
    </ShoppingCartContext>
  );
}

export function useShoppingCart() {
  const cart = useContext(ShoppingCartContext);
  if (!cart) {
    throw new Error(
      "useShoppingCart must be used inside a ShoppingCartProvider",
    );
  }
  return cart;
}
