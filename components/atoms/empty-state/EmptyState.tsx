"use client";

import { IconWrapper } from "../icon-wrapper/IconWrapper";
import { EmptyStateProps } from "./EmptyState.types";

export const EmptyState = ({ className = "" }: EmptyStateProps) => {
  return (
    <div
      className={`empty-state-message flex flex-col items-center justify-center py-16 md:py-20 2xl:py-24 ${className}`}
      data-test-id="empty-state"
    >
      {/* Icon */}
      <div className="empty-state-icon mb-6 md:mb-8 2xl:mb-10">
        <IconWrapper
          iconName="food"
          size={120}
          className="text-[#E0E0E0] md:w-[140px] md:h-[140px] 2xl:w-40 2xl:h-40"
        />
      </div>

      {/* Heading */}
      <h3 className="empty-state-heading text-2xl md:text-3xl 2xl:text-4xl font-bold text-[#424242] mb-3 md:mb-4 2xl:mb-5">
        No items available
      </h3>

      {/* Description */}
      <p className="empty-state-description text-base md:text-lg 2xl:text-xl text-[#9E9E9E] text-center max-w-md">
        Start adding meals to see them here
      </p>
    </div>
  );
};
