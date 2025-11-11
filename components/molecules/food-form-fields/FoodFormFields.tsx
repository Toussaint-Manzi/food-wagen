"use client";

import { FoodFormFieldsProps } from "./FoodFormFields.types";
import { Label } from "../../atoms/label/label";
import { Input } from "../../atoms/input/input";
import { Select } from "../../atoms/select/select";

export const FoodFormFields = ({
  register,
  errors,
  isEditMode = false,
  className = "",
}: FoodFormFieldsProps) => {
  const statusOptions = [
    { value: "Open Now", label: "Open Now" },
    { value: "Closed", label: "Closed" },
  ];

  return (
    <div
      className={`food-form-fields flex flex-col gap-4 md:gap-5 2xl:gap-6 ${className}`}
    >
      {/* Food Name */}
      <div className="food-field-wrapper">
        {isEditMode && <Label htmlFor="food_name">Food Name</Label>}
        <Input
          id="food_name"
          type="text"
          {...register("food_name")}
          placeholder="Food name"
          error={errors.food_name?.message}
          errorId="food-name-error"
          data-test-id="food-name-input"
        />
      </div>

      {/* Food Rating */}
      <div className="food-field-wrapper">
        {isEditMode && <Label htmlFor="food_rating">Food Rating</Label>}
        <Input
          id="food_rating"
          type="number"
          step="0.1"
          min="1"
          max="5"
          {...register("food_rating", { valueAsNumber: true })}
          placeholder="Food rating"
          error={errors.food_rating?.message}
          errorId="food-rating-error"
          data-test-id="food-rating-input"
        />
      </div>

      {/* Food Image */}
      <div className="food-field-wrapper">
        {isEditMode && <Label htmlFor="food_image">Food Image URL</Label>}
        <Input
          id="food_image"
          type="url"
          {...register("food_image")}
          placeholder="Food image (link)"
          error={errors.food_image?.message}
          errorId="food-image-error"
          data-test-id="food-image-input"
        />
      </div>

      {/* Restaurant Name */}
      <div className="food-field-wrapper">
        {isEditMode && <Label htmlFor="restaurant_name">Restaurant Name</Label>}
        <Input
          id="restaurant_name"
          type="text"
          {...register("restaurant_name")}
          placeholder="Restaurant name"
          error={errors.restaurant_name?.message}
          errorId="restaurant-name-error"
          data-test-id="restaurant-name-input"
        />
      </div>

      {/* Restaurant Logo */}
      <div className="food-field-wrapper">
        {isEditMode && (
          <Label htmlFor="restaurant_logo">Restaurant Logo URL</Label>
        )}
        <Input
          id="restaurant_logo"
          type="url"
          {...register("restaurant_logo")}
          placeholder="Restaurant logo (link)"
          error={errors.restaurant_logo?.message}
          errorId="restaurant-logo-error"
          data-test-id="restaurant-logo-input"
        />
      </div>

      {/* Restaurant Status */}
      <div className="food-field-wrapper">
        {isEditMode && (
          <Label htmlFor="restaurant_status">Restaurant Status</Label>
        )}
        <Select
          id="restaurant_status"
          {...register("restaurant_status")}
          options={statusOptions}
          error={errors.restaurant_status?.message}
          errorId="restaurant-status-error"
          data-test-id="restaurant-status-input"
        />
      </div>
    </div>
  );
};
