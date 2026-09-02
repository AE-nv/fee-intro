import { Skeleton } from "@/components/Skeleton";

/**
 * Placeholder for a SandwichCard while the menu is loading. Mirrors the real
 * card's structure so the grid doesn't jump when the data arrives.
 */
export function SandwichCardSkeleton() {
  return (
    <li className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white">
      <Skeleton className="h-32 w-full rounded-none" />
      <div className="flex flex-1 flex-col gap-2 px-5 pt-4 pb-5">
        <Skeleton className="h-6 w-3/5" />
        <div className="flex flex-1 flex-col gap-1.5">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </div>
        <div className="flex items-center justify-between pt-1">
          <Skeleton className="h-7 w-16" />
          <Skeleton className="h-9 w-28 rounded-full" />
        </div>
      </div>
    </li>
  );
}
