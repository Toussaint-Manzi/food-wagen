export interface Food {
  id: string;
  name: string;
  rating: number;
  avatar: string;
  restaurantName: string;
  logo: string;
  status: "Open Now" | "Closed";
  price: number;
}

export interface FoodState {
  foods: Food[];
  filteredFoods: Food[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  currentPage: number;
  itemsPerPage: number;
  hasMore: boolean;
}
