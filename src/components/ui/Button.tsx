import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "highlight" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm leading-6 font-bold transition-colors duration-200 motion-reduce:transition-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand px-7 py-3.5 text-white hover:bg-brand-dark",
  secondary:
    "border border-line bg-white px-7 py-3.5 text-ink hover:border-ink/30 hover:bg-cream",
  highlight: "bg-sun px-7 py-3.5 text-ink hover:bg-sun-dark",
  ghost: "px-4 py-3.5 text-white hover:underline hover:underline-offset-4",
};

export function buttonClassName(variant: ButtonVariant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}

type ButtonLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "className"> & {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClassName(variant, className)} {...props} />;
}
