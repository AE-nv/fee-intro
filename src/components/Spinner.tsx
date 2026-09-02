type Props = {
  /** Optional text shown next to the ring, e.g. "Broodjes worden opgehaald". */
  children?: React.ReactNode;
};

export function Spinner({ children }: Props) {
  return (
    <span
      role="status"
      className="inline-flex items-center gap-2 text-xs text-stone-500"
    >
      <span
        aria-hidden="true"
        className="inline-block h-3 w-3 flex-none animate-spin rounded-full border-2 border-stone-200 border-t-orange-400"
      />
      {children}
    </span>
  );
}
