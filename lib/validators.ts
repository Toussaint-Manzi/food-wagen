import { z } from "zod";

// Validation functions
export const validateFoodName = (name: string): boolean => {
  return name.trim().length > 0;
};

export const validatePrice = (price: number): boolean => {
  return price > 0;
};

export const validateRating = (rating: number, max: number = 5): boolean => {
  return rating >= 0 && rating <= max;
};

// Zod validation schema for food form
export const foodFormSchema = z.object({
  food_name: z
    .string()
    .min(1, "Food Name is required")
    .max(100, "Food Name must be less than 100 characters"),

  food_rating: z
    .number()
    .min(1, "Food Rating must be between 1 and 5")
    .max(5, "Food Rating must be between 1 and 5"),

  food_image: z
    .string()
    .min(1, "Food Image URL is required")
    .url("Food Image URL must be a valid URL"),

  restaurant_name: z
    .string()
    .min(1, "Restaurant Name is required")
    .max(100, "Restaurant Name must be less than 100 characters"),

  restaurant_logo: z
    .string()
    .min(1, "Restaurant Logo URL is required")
    .url("Restaurant Logo URL must be a valid URL"),

  restaurant_status: z.enum(["Open Now", "Closed"]),
});

export type FoodFormData = z.infer<typeof foodFormSchema>;
