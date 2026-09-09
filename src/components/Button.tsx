import {
  buttonClasses,
  type ButtonSize,
  type ButtonVariant,
} from "@/components/buttonStyles";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  /** Accessible name. Only needed when the children aren't words, e.g. "+". */
  label?: string;
  type?: "button" | "submit";
  /** Associates a submit button with a <form> elsewhere on the page, by its id. */
  form?: string;
};

export function Button({
  children,
  onClick,
  variant,
  size,
  fullWidth,
  label,
  type = "button",
  form,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      form={form}
      aria-label={label}
      className={buttonClasses({ variant, size, fullWidth })}
    >
      {children}
    </button>
  );
}
