import clsx from "clsx";

export type ButtonVariant = "primary" | "ghost" | "neutral" | "dark";
export type ButtonSize = "sm" | "md" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-transparent bg-red-500 text-white hover:bg-rose-900",
  ghost:
    "border-black bg-transparent text-black hover:bg-black hover:text-white",
  neutral: "border-stone-200 bg-white text-black hover:bg-stone-100",
  dark: "border-transparent bg-black text-white hover:bg-stone-700",
};

// Each size sets its own display, so exactly one applies at a time.
const sizeClasses: Record<ButtonSize, string> = {
  sm: "inline-flex items-center justify-center px-5 py-2.5 text-xs",
  md: "inline-flex items-center justify-center px-7 py-3.5 text-sm",
  icon: "grid h-7 w-7 place-items-center",
};

type Options = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

/** Shared by Button and LinkButton, so a `<button>` and an `<a>` look alike. */
export function buttonClasses({
  variant = "primary",
  size = "sm",
  fullWidth = false,
}: Options = {}) {
  return clsx(
    "rounded-full border font-black transition active:scale-95",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
  );
}
