type TagVariant = "accent" | "neutral";

type Props = {
  children: React.ReactNode;
  variant?: TagVariant;
};

const variantClasses: Record<TagVariant, string> = {
  accent: "border-orange-400/30 bg-orange-400/10 text-rose-900",
  neutral: "border-stone-200 bg-stone-50 text-stone-700",
};

export function Tag({ children, variant = "neutral" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs leading-none font-bold whitespace-nowrap ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
