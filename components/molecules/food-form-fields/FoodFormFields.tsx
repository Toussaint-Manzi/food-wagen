"use client";

import { FoodFormFieldsProps } from "./FoodFormFields.types";

export const FoodFormFields = ({
  register,
  errors,
  isEditMode = false,
  className = "",
}: FoodFormFieldsProps) => {
  const fieldClasses =
    "food-field w-full h-[50px] md:h-[56px] 2xl:h-[60px] py-1.5 md:py-2 2xl:py-[7px] pl-3 md:pl-4 2xl:pl-[16px] rounded-lg bg-[#F5F5F5] text-[#424242] placeholder:text-[#9E9E9E] placeholder:font-[400] text-base md:text-lg 2xl:text-[20px] font-semibold outline-none focus:ring-2 focus:ring-primary transition-all";

  const labelClasses =
    "food-field-label block text-base md:text-[17px] 2xl:text-[18px] text-[#9E9E9E] leading-[140%] font-[400] mb-1.5 md:mb-2";

  const errorClasses =
    "food-field-error text-sm md:text-[17px] 2xl:text-[18px] text-[#FF6868] leading-[140%] font-[400] mt-1.5 md:mt-2";

  return (
    <div
      className={`food-form-fields flex flex-col gap-4 md:gap-5 2xl:gap-6 ${className}`}
    >
      {/* Food Name */}
      <div className="food-field-wrapper">
        {isEditMode && (
          <label htmlFor="food_name" className={labelClasses}>
            Food Name
          </label>
        )}
        <input
          id="food_name"
          type="text"
          {...register("food_name")}
          placeholder="Food name"
          className={fieldClasses}
          aria-describedby={errors.food_name ? "food-name-error" : undefined}
          data-test-id="food-name-input"
        />
        {errors.food_name && (
          <p id="food-name-error" className={errorClasses} role="alert">
            {errors.food_name.message}
          </p>
        )}
      </div>

      {/* Food Rating */}
      <div className="food-field-wrapper">
        {isEditMode && (
          <label htmlFor="food_rating" className={labelClasses}>
            Food Rating
          </label>
        )}
        <input
          id="food_rating"
          type="number"
          step="0.1"
          min="1"
          max="5"
          {...register("food_rating", { valueAsNumber: true })}
          placeholder="Food rating"
          className={fieldClasses}
          aria-describedby={
            errors.food_rating ? "food-rating-error" : undefined
          }
          data-test-id="food-rating-input"
        />
        {errors.food_rating && (
          <p id="food-rating-error" className={errorClasses} role="alert">
            {errors.food_rating.message}
          </p>
        )}
      </div>

      {/* Food Image */}
      <div className="food-field-wrapper">
        {isEditMode && (
          <label htmlFor="food_image" className={labelClasses}>
            Food Image URL
          </label>
        )}
        <input
          id="food_image"
          type="url"
          {...register("food_image")}
          placeholder="Food image (link)"
          className={fieldClasses}
          aria-describedby={errors.food_image ? "food-image-error" : undefined}
          data-test-id="food-image-input"
        />
        {errors.food_image && (
          <p id="food-image-error" className={errorClasses} role="alert">
            {errors.food_image.message}
          </p>
        )}
      </div>

      {/* Restaurant Name */}
      <div className="food-field-wrapper">
        {isEditMode && (
          <label htmlFor="restaurant_name" className={labelClasses}>
            Restaurant Name
          </label>
        )}
        <input
          id="restaurant_name"
          type="text"
          {...register("restaurant_name")}
          placeholder="Restaurant name"
          className={fieldClasses}
          aria-describedby={
            errors.restaurant_name ? "restaurant-name-error" : undefined
          }
          data-test-id="restaurant-name-input"
        />
        {errors.restaurant_name && (
          <p id="restaurant-name-error" className={errorClasses} role="alert">
            {errors.restaurant_name.message}
          </p>
        )}
      </div>

      {/* Restaurant Logo */}
      <div className="food-field-wrapper">
        {isEditMode && (
          <label htmlFor="restaurant_logo" className={labelClasses}>
            Restaurant Logo URL
          </label>
        )}
        <input
          id="restaurant_logo"
          type="url"
          {...register("restaurant_logo")}
          placeholder="Restaurant logo (link)"
          className={fieldClasses}
          aria-describedby={
            errors.restaurant_logo ? "restaurant-logo-error" : undefined
          }
          data-test-id="restaurant-logo-input"
        />
        {errors.restaurant_logo && (
          <p id="restaurant-logo-error" className={errorClasses} role="alert">
            {errors.restaurant_logo.message}
          </p>
        )}
      </div>

      {/* Restaurant Status */}
      <div className="food-field-wrapper">
        {isEditMode && (
          <label htmlFor="restaurant_status" className={labelClasses}>
            Restaurant Status
          </label>
        )}
        <select
          id="restaurant_status"
          {...register("restaurant_status")}
          className={fieldClasses}
          aria-describedby={
            errors.restaurant_status ? "restaurant-status-error" : undefined
          }
          data-test-id="restaurant-status-input"
        >
          <option value="Open Now">Open Now</option>
          <option value="Closed">Closed</option>
        </select>
        {errors.restaurant_status && (
          <p id="restaurant-status-error" className={errorClasses} role="alert">
            {errors.restaurant_status.message}
          </p>
        )}
      </div>
    </div>
  );
};
