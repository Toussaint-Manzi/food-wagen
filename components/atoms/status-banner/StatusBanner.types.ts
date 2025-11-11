export type RestaurantStatus = "Open Now" | "Closed";

export interface StatusBannerProps {
  status: RestaurantStatus;
  className?: string;
}
