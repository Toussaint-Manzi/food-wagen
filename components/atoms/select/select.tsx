"use client";

import { forwardRef } from "react";
import { SelectProps } from "./select.types";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ error, errorId, options, className = "", ...props }, ref) => {
    return (
      <div className="food-select-wrapper w-full">
        <select
          ref={ref}
          className={`food-field w-full h-[50px] md:h-[56px] 2xl:h-[60px] py-1.5 md:py-2 2xl:py-[7px] pl-3 md:pl-4 2xl:pl-[16px] rounded-lg bg-[#F5F5F5] text-[#424242] placeholder:text-[#9E9E9E] text-base md:text-lg 2xl:text-[20px] font-semibold outline-none focus:ring-2 focus:ring-primary transition-all ${
            error ? "ring-2 ring-error" : ""
          } ${className}`}
          aria-describedby={error ? errorId : undefined}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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

Select.displayName = "Select";
