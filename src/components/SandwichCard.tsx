import Image from "next/image";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";

type Props = {
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: "Pikant" | "Veggie";
  onAdd: () => void;
};

export function SandwichCard({
  name,
  description,
  price,
  image,
  tag,
  onAdd,
}: Props) {
  return (
    <li className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <Image
        src={image}
        alt={`Broodje ${name}`}
        width={800}
        height={300}
        className="h-32 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 px-5 pt-4 pb-5">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-black">{name}</h3>
          {!!tag && (
            <Tag variant={tag === "Pikant" ? "accent" : "neutral"}>{tag}</Tag>
          )}
        </div>
        <p className="flex-1 text-sm leading-normal text-stone-700">
          {description}
        </p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-black">
            € {price.toFixed(2).replace(".", ",")}
          </span>
          <Button onClick={onAdd}>Toevoegen</Button>
        </div>
      </div>
    </li>
  );
}
