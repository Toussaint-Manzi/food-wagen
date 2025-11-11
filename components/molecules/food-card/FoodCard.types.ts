import { RestaurantStatus } from "../../atoms/status-banner/StatusBanner.types";

export interface FoodCardProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
  restaurantName: string;
  restaurantLogo: string;
  status: RestaurantStatus;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  className?: string;
}
