"use client";

import { StatusBannerProps } from "./StatusBanner.types";

export const StatusBanner = ({ status, className = "" }: StatusBannerProps) => {
  const isOpen = status === "Open Now";

  return (
    <div
      className={`food-status-banner flex items-center justify-center w-20 md:w-[90px] 2xl:w-[97px] h-9 md:h-10 2xl:h-[42px] rounded-2xl ${
        isOpen
          ? "bg-[#79B93C33] text-[#79B93C]"
          : "bg-[#F1722833] text-selected"
      } ${className}`}
      data-test-id="food-status-banner"
    >
      <span className="text-xs md:text-sm 2xl:text-[22px] font-bold capitalize">
        {status === "Open Now" ? "open" : "closed"}
      </span>
    </div>
  );
};
