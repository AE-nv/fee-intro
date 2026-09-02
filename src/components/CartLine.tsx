import Image from "next/image";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";
import type { Sandwich } from "@/data/sandwiches";
import { formatPrice } from "@/util/formatPrice";

type Props = {
  sandwich: Sandwich;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function CartLine({
  sandwich,
  quantity,
  onIncrease,
  onDecrease,
}: Props) {
  return (
    <li className="flex flex-wrap items-center gap-4 p-4">
      <Image
        src={sandwich.image}
        alt={`Broodje ${sandwich.name}`}
        width={800}
        height={300}
        className="h-18 w-18 flex-none rounded-xl object-cover"
      />

      <div className="flex min-w-40 flex-1 flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="font-black">{sandwich.name}</span>
          {!!sandwich.tag && (
            <Tag variant={sandwich.tag === "Pikant" ? "accent" : "neutral"}>
              {sandwich.tag}
            </Tag>
          )}
        </div>
        <span className="text-xs text-stone-500">
          {formatPrice(sandwich.price)} per stuk
        </span>
      </div>

      <div className="flex items-center gap-0.5 rounded-full border border-stone-200 bg-stone-50 p-1">
        <Button
          variant="neutral"
          size="icon"
          onClick={onDecrease}
          label={`Eén ${sandwich.name} minder`}
        >
          −
        </Button>
        <span className="min-w-7 text-center text-sm font-black">
          {quantity}
        </span>
        <Button
          variant="dark"
          size="icon"
          onClick={onIncrease}
          label={`Eén ${sandwich.name} meer`}
        >
          +
        </Button>
      </div>

      <span className="w-20 text-right font-black">
        {formatPrice(sandwich.price * quantity)}
      </span>
    </li>
  );
}
