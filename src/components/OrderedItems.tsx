import type { PlacedOrder } from "@/components/ShoppingCartProvider";
import { useSandwiches } from "@/hooks/useSandwiches";
import { formatPrice } from "@/util/formatPrice";

type Props = {
  order: PlacedOrder;
};

export function OrderedItems({ order }: Props) {
  const { data: sandwiches } = useSandwiches();

  // The order only stores ids and quantities, so the menu supplies the rest.
  const lines = Object.entries(order.items).flatMap(([id, quantity]) => {
    const sandwich = sandwiches?.find((sandwich) => sandwich.id === id);
    return sandwich ? { sandwich, quantity } : [];
  });

  const total = lines.reduce(
    (sum, line) => sum + line.sandwich.price * line.quantity,
    0,
  );

  return (
    <div className="flex flex-col gap-2.5 rounded-2xl border border-stone-200 bg-white p-6">
      <h2 className="text-xs font-black tracking-wider text-stone-500 uppercase">
        Wat je krijgt
      </h2>
      <ul className="flex flex-col gap-2.5 text-sm text-stone-700">
        {lines.map((line) => (
          <li key={line.sandwich.id} className="flex justify-between gap-3">
            <span>
              {line.quantity} × {line.sandwich.name}
            </span>
            <span className="font-bold text-black">
              {formatPrice(line.sandwich.price * line.quantity)}
            </span>
          </li>
        ))}
      </ul>
      <div className="my-1 h-px bg-stone-200" />
      <div className="flex justify-between font-black">
        <span>Totaal</span>
        <span>{formatPrice(total)}</span>
      </div>
      {!!order.details.remark && (
        <p className="mt-1 text-xs text-stone-500">
          Opmerking: {order.details.remark}
        </p>
      )}
      <p className="text-xs text-stone-500">
        {order.details.cut === "half" ? "In twee gesneden." : "Heel gelaten."}
      </p>
    </div>
  );
}
