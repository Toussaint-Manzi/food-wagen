"use client";

import { LabelProps } from "./label.types";

export const Label = ({
  children,
  required,
  className = "",
  ...props
}: LabelProps) => {
  return (
    <label
      className={`food-field-label block text-base md:text-[17px] 2xl:text-[18px] text-[#9E9E9E] leading-[140%] font-normal ${className}`}
      {...props}
    >
      {children}
      {required && <span className="text-error ml-1">*</span>}
    </label>
  );
};
