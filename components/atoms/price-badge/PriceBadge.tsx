"use client";

import { IconWrapper } from "../icon-wrapper/IconWrapper";
import { PriceBadgeProps } from "./PriceBadge.types";

export const PriceBadge = ({ price, className = "" }: PriceBadgeProps) => {
  return (
    <div
      className={`food-price-badge flex items-center justify-center gap-2 md:gap-2.5 bg-selected w-[90px] md:w-[100px] 2xl:w-[114px] h-9 md:h-10 2xl:h-[42px] rounded-md 2xl:rounded-lg ${className}`}
      data-test-id="food-price-badge"
    >
      <IconWrapper iconName="tag" size={18} className="text-white" />

      {/* Price */}
      <span className="text-white text-sm md:text-base 2xl:text-[17px] font-bold">
        ${price.toFixed(2)}
      </span>
    </div>
  );
};
