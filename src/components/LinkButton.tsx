import Link from "next/link";
import {
  buttonClasses,
  type ButtonSize,
  type ButtonVariant,
} from "@/components/buttonStyles";

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export function LinkButton({
  children,
  href,
  variant,
  size,
  fullWidth,
}: Props) {
  return (
    <Link href={href} className={buttonClasses({ variant, size, fullWidth })}>
      {children}
    </Link>
  );
}
