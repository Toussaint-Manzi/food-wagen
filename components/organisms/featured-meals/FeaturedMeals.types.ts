import { FoodCardProps } from "../../molecules/food-card/FoodCard.types";

export interface FeaturedMealsProps {
  foods: Omit<FoodCardProps, "onEdit" | "onDelete">[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onLoadMore: () => void;
  hasMore?: boolean;
  loading?: boolean;
  className?: string;
}
