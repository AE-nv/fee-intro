"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "@/components/ShoppingCartProvider";

export function Header() {
  const pathname = usePathname();
  const { itemCount } = useShoppingCart();

  const active = "border-b-2 border-orange-400 pb-1 text-black";
  const inactive = "pb-1 text-stone-500";

  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 lg:px-8 lg:py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/icons/logo.svg" alt="" width={22} height={22} />
          <span className="text-base font-black tracking-tight">
            Het Duivels Broodje
          </span>
        </Link>

        <nav className="flex items-center gap-7 text-sm font-bold">
          <Link href="/" className={pathname === "/" ? active : inactive}>
            Menu
          </Link>
          <Link
            href="/cart"
            aria-label="Winkelwagen"
            className={`relative flex items-center ${pathname === "/cart" ? active : "pb-1 text-black"}`}
          >
            <Image src="/icons/cart.svg" alt="" width={23} height={23} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 px-1 text-xs font-black text-white ring-2 ring-white">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
