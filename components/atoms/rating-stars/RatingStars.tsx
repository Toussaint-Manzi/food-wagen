"use client";

import { IconWrapper } from "../icon-wrapper/IconWrapper";
import { RatingStarsProps } from "./RatingStars.types";

export const RatingStars = ({
  rating,
  showRating = true,
  className = "",
  iconSize = 24,
}: RatingStarsProps) => {
  return (
    <div className={`food-rating flex items-center gap-2 ${className}`}>
      <IconWrapper iconName="star" size={iconSize} className="text-[#FFB800]" />
      {showRating && (
        <span className="food-rating-text text-sm md:text-[22px] font-medium">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};
