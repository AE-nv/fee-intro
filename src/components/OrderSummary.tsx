import { Button } from "@/components/Button";
import type { Sandwich } from "@/data/sandwiches";
import { formatPrice } from "@/util/formatPrice";

type Props = {
  lines: { sandwich: Sandwich; quantity: number }[];
  total: number;
  /** id of the <form> this panel's submit button belongs to. */
  formId: string;
};

export function OrderSummary({ lines, total, formId }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6">
      <h2 className="text-lg font-black">Jouw bestelling</h2>

      <ul className="flex flex-col gap-3 text-sm text-stone-700">
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

      <div className="h-px bg-stone-200" />

      <div className="flex items-baseline justify-between">
        <span className="font-black">Totaal</span>
        <span className="text-2xl font-black">{formatPrice(total)}</span>
      </div>

      <Button type="submit" form={formId} size="md" fullWidth>
        Bestelling plaatsen
      </Button>
    </div>
  );
}
