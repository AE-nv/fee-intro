import Image from "next/image";

type Props = {
  cartCount: number;
};

export function Header({ cartCount }: Props) {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 lg:px-8 lg:py-4">
        <div className="flex items-center gap-2.5">
          <Image src="/icons/logo.svg" alt="" width={22} height={22} />
          <span className="text-base font-black tracking-tight">
            Het Duivels Broodje
          </span>
        </div>

        <nav className="flex items-center gap-7 text-sm font-bold">
          <span className="border-b-2 border-orange-400 pb-1 text-black">
            Menu
          </span>
          <span
            className="relative flex items-center text-black"
            aria-label="Winkelwagen"
          >
            <Image src="/icons/cart.svg" alt="" width={23} height={23} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 grid h-4 min-w-4 place-items-center rounded-full bg-red-500 px-1 text-xs font-black text-white ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </span>
        </nav>
      </div>
    </header>
  );
}
