"use client";

import Image from "next/image";
import { FoodCardProps } from "./FoodCard.types";
import { PriceBadge } from "../../atoms/price-badge/PriceBadge";
import { RatingStars } from "../../atoms/rating-stars/RatingStars";
import { StatusBanner } from "../../atoms/status-banner/StatusBanner";
import { MenuDropdown } from "../menu-dropdown/MenuDropdown";

export const FoodCard = ({
  id,
  name,
  price,
  rating,
  imageUrl,
  restaurantName,
  restaurantLogo,
  status,
  onEdit,
  onDelete,
  className = "",
}: FoodCardProps) => {
  return (
    <div
      className={`food-card flex flex-col gap-5 md:gap-6 2xl:gap-7 w-full max-w-[300px] md:max-w-[320px] lg:max-w-[340px] 2xl:w-[357px] h-auto 2xl:h-[463px] ${className}`}
      data-test-id={`food-card-${id}`}
    >
      {/* First Section - Food Photo */}
      <div className="food-photo relative w-full h-60 md:h-[270px] lg:h-[290px] 2xl:h-[301px] rounded-xl 2xl:rounded-2xl overflow-hidden">
        {/* Background Image */}
        <Image
          // TODO: Replace with imageUrl when available
          src="/images/test.png"
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 300px, (max-width: 1024px) 320px, (max-width: 1536px) 340px, 357px"
        />

        {/* Price Badge - Top Left Corner */}
        <div className="absolute top-3 left-3 md:top-6 md:left-6 2xl:top-6 2xl:left-6">
          <PriceBadge price={price} />
        </div>
      </div>

      {/* Second Section - Restaurant Info */}
      <div className="food-restaurant-info flex items-start justify-between gap-3">
        {/* Left - Restaurant Logo & Name */}
        <div className="food-restaurant-details flex items-center gap-3 md:gap-4 2xl:gap-7 flex-1 min-w-0">
          {/* Restaurant Logo */}
          <div className="food-restaurant-logo relative w-12 h-12 md:w-14 md:h-14 2xl:w-16 2xl:h-16 rounded-md 2xl:rounded-lg overflow-hidden shrink-0">
            <Image
              //TODO: Replace with restaurantLogo when available
              src="/images/test-2.png"
              alt={restaurantName}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>

          {/* Name & Rating */}
          <div className="food-name-rating flex flex-col gap-1 2xl:gap-1 flex-1 min-w-0">
            <h3
              className="food-name text-base md:text-lg lg:text-xl 2xl:text-[22px] font-bold leading-[120%] text-[#424242] truncate"
              title={name}
            >
              {name}
            </h3>
            <RatingStars rating={rating} className="text-primary" />
          </div>
        </div>

        {/* Right - Menu Dropdown */}
        <MenuDropdown onEdit={() => onEdit(id)} onDelete={() => onDelete(id)} />
      </div>

      {/* Third Section - Status Banner */}
      <StatusBanner status={status} />
    </div>
  );
};
