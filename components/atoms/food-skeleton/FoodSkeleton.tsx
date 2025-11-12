"use client";

import { FoodSkeletonProps } from "./FoodSkeleton.types";

export const FoodSkeleton = ({
  count = 4,
  className = "",
}: FoodSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`food-card-skeleton bg-white rounded-xl 2xl:rounded-2xl overflow-hidden w-full max-w-[280px] md:max-w-[300px] 2xl:w-[302px] h-auto 2xl:h-[377px] ${className}`}
          style={{
            boxShadow: "0px 3px 20px 0px rgba(0, 0, 0, 0.1)",
          }}
          data-test-id="food-skeleton"
        >
          {/* Image Skeleton */}
          <div className="skeleton-image-wrapper w-full h-[180px] md:h-[200px] 2xl:h-[212px] bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 bg-size-[200%_100%] animate-skeleton relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </div>

          {/* Content Skeleton */}
          <div className="skeleton-content p-3 md:p-4 2xl:p-[18px] flex flex-col gap-2 md:gap-2.5 2xl:gap-3">
            {/* Title Skeleton */}
            <div className="skeleton-title h-5 md:h-6 2xl:h-7 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 bg-size-[200%_100%] animate-skeleton rounded w-3/4 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>

            {/* Rating Skeleton */}
            <div className="skeleton-rating h-4 md:h-5 2xl:h-5 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 bg-size-[200%_100%] animate-skeleton rounded w-1/2 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>

            {/* Restaurant Info Skeleton */}
            <div className="skeleton-restaurant flex items-center gap-2 mt-1">
              {/* Logo Skeleton */}
              <div className="skeleton-logo w-8 h-8 md:w-10 md:h-10 2xl:w-11 2xl:h-11 rounded-full bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 bg-size-[200%_100%] animate-skeleton relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
              </div>

              <div className="flex-1">
                {/* Restaurant Name Skeleton */}
                <div className="skeleton-name h-4 md:h-4 2xl:h-5 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 bg-size-[200%_100%] animate-skeleton rounded w-2/3 mb-1.5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                </div>

                {/* Status Skeleton */}
                <div className="skeleton-status h-3 md:h-3 2xl:h-4 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 bg-size-[200%_100%] animate-skeleton rounded w-1/2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                </div>
              </div>
            </div>

            {/* Price Skeleton */}
            <div className="skeleton-price h-9 md:h-10 2xl:h-11 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 bg-size-[200%_100%] animate-skeleton rounded-lg w-1/3 mt-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
