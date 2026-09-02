"use client";

import { createContext, useContext, useState } from "react";

type ShoppingCart = {
  basket: Record<string, number>;
  itemCount: number;
  addToBasket: (id: string) => void;
  removeFromBasket: (id: string) => void;
};

const ShoppingCartContext = createContext<ShoppingCart | null>(null);

type Props = {
  children: React.ReactNode;
};

export function ShoppingCartProvider({ children }: Props) {
  // The one source of truth. It lives in the layout, so it survives
  // navigating between / and /cart.
  const [basket, setBasket] = useState<Record<string, number>>({});

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

  const itemCount = Object.values(basket).reduce(
    (total, quantity) => total + quantity,
    0,
  );

  return (
    <ShoppingCartContext
      value={{ basket, itemCount, addToBasket, removeFromBasket }}
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
