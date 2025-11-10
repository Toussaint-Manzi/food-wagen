"use client";

import { ButtonProps } from "./button.types";
import { Spinner } from "../spinner/spinner";

export const Button = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  icon,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`food-btn flex items-center justify-center gap-2 ${className} ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      {...props}
    >
      {loading && <Spinner size="small" />}
      {!loading && icon && icon}
      {children}
    </button>
  );
};
