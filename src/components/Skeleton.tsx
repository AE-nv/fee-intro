type Props = {
  /** Size and shape come from the caller, e.g. "h-4 w-3/5". */
  className?: string;
};

export function Skeleton({ className = "" }: Props) {
  return <div className={`animate-pulse rounded bg-stone-200 ${className}`} />;
}
