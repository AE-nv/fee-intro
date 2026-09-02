type Variant = "primary" | "ghost" | "neutral" | "dark";
type Size = "sm" | "md" | "icon";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  /** Accessible name. Only needed when the children aren't words, e.g. "+". */
  label?: string;
};

const variantClasses: Record<Variant, string> = {
  primary: "border-transparent bg-red-500 text-white hover:bg-rose-900",
  ghost:
    "border-black bg-transparent text-black hover:bg-black hover:text-white",
  neutral: "border-stone-200 bg-white text-black hover:bg-stone-100",
  dark: "border-transparent bg-black text-white hover:bg-stone-700",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-3.5 text-sm",
  icon: "grid h-7 w-7 place-items-center",
};

export function Button({
  children,
  onClick,
  variant = "primary",
  size = "sm",
  fullWidth = false,
  label,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`rounded-full border font-black transition active:scale-95 ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </button>
  );
}
