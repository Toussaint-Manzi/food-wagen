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
