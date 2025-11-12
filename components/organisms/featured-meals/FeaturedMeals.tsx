"use client";

import { FeaturedMealsProps } from "./FeaturedMeals.types";
import { FoodCard } from "../../molecules/food-card/FoodCard";
import { Button } from "../../atoms/button/button";
import { IconWrapper } from "@/components/atoms/icon-wrapper/IconWrapper";
import { EmptyState } from "@/components/atoms/empty-state/EmptyState";
import { FoodSkeleton } from "@/components/atoms/food-skeleton/FoodSkeleton";

export const FeaturedMeals = ({
  foods,
  onEdit,
  onDelete,
  onLoadMore,
  hasMore = false,
  loading = false,
  className = "",
}: FeaturedMealsProps) => {
  return (
    <section
      className={`food-featured-meals w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-[220px] py-8 md:py-12 lg:py-16 2xl:py-20 ${className}`}
    >
      {/* Section Title */}
      <h2 className="food-featured-meals-title text-2xl md:text-3xl lg:text-4xl 2xl:text-[43px] font-bold leading-[112%] text-[#212121] text-center mb-8 md:mb-12 2xl:mb-16">
        Featured Meals
      </h2>

      {/* Loading State */}
      {loading && (
        <div className="food-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 2xl:gap-12 justify-items-center mb-8 md:mb-12 2xl:mb-16">
          <FoodSkeleton count={4} />
        </div>
      )}

      {/* Empty State */}
      {!loading && foods.length === 0 && <EmptyState />}

      {/* Food Cards Grid */}
      {!loading && foods.length > 0 && (
        <div className="food-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 2xl:gap-12 justify-items-center mb-8 md:mb-12 2xl:mb-16">
          {foods.map((food) => (
            <FoodCard
              key={food.id}
              {...food}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}

      {/* Load More Button */}
      {hasMore && !loading && (
        <div className="food-load-more-container flex justify-center">
          <Button
            onClick={onLoadMore}
            className="food-load-more-btn text-white text-sm cursor-pointer md:text-base 2xl:text-[17px] font-bold leading-[100%] w-40 md:w-[180px] 2xl:w-[200px] h-[50px] md:h-14 2xl:h-[60px] rounded-xl 2xl:rounded-[14px] flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(90deg, #FFBA26 0%, #FF9A0E 100%)",
              boxShadow:
                "0px 20px 40px 0px rgba(255, 174, 0, 0.29), 0px 5px 10px 0px rgba(255, 174, 0, 0.26)",
            }}
            data-test-id="food-load-more-btn"
          >
            Load More
            <IconWrapper iconName="arrow" size={14} className="text-white" />
          </Button>
        </div>
      )}
    </section>
  );
};
