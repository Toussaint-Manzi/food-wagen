import { SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  errorId?: string;
  options: { value: string; label: string }[];
}
