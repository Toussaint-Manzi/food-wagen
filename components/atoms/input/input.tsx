"use client";

import { forwardRef } from "react";
import { InputProps } from "./input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, errorId, className = "", ...props }, ref) => {
    return (
      <div className="food-input-wrapper w-full">
        <input
          ref={ref}
          className={`food-field w-full h-[50px] md:h-14 2xl:h-[60px] py-1.5 md:py-2 2xl:py-[7px] pl-3 md:pl-4 2xl:pl-4 rounded-lg bg-[#F5F5F5] text-[#424242] placeholder:text-[#9E9E9E] text-base md:text-lg 2xl:text-[20px] font-semibold outline-none focus:ring-2 focus:ring-primary transition-all ${
            error ? "ring-2 ring-error" : ""
          } ${className}`}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && errorId && (
          <p
            id={errorId}
            className="food-field-error text-sm md:text-[17px] 2xl:text-[18px] text-error leading-[140%] font-normal mt-1.5 md:mt-2"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
