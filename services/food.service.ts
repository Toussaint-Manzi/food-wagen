import { ApiClient, handleApiError } from "@/api/config";
import type {
  FoodApiResponse,
  CreateFoodPayload,
  UpdateFoodPayload,
  ApiErrorResponse,
} from "@/api/config.types";

/**
 * Food Service
 * Handles all API operations related to food items
 */

export class FoodService {
  private static readonly ENDPOINT = "/Food";

  /**
   * Get all food items
   * @returns Promise with array of food items
   */
  static async getAllFoods(): Promise<FoodApiResponse[]> {
    try {
      const response = await ApiClient.get<FoodApiResponse[]>(this.ENDPOINT);
      return response.data;
    } catch (error) {
      const apiError = handleApiError(error);
      console.error("Error fetching foods:", apiError);
      throw apiError;
    }
  }

  /**
   * Search food items by name
   * @param searchQuery - The name to search for
   * @returns Promise with filtered array of food items
   */
  static async searchFoodByName(
    searchQuery: string
  ): Promise<FoodApiResponse[]> {
    try {
      const encodedQuery = encodeURIComponent(searchQuery);
      const response = await ApiClient.get<FoodApiResponse[]>(
        `${this.ENDPOINT}?name=${encodedQuery}`
      );
      return response.data;
    } catch (error) {
      const apiError = handleApiError(error);
      console.error("Error searching foods:", apiError);
      throw apiError;
    }
  }

  /**
   * Create a new food item
   * @param payload - The food data to create
   * @returns Promise with the created food item
   */
  static async createFood(
    payload: CreateFoodPayload
  ): Promise<FoodApiResponse> {
    try {
      const response = await ApiClient.post<FoodApiResponse>(
        this.ENDPOINT,
        payload
      );
      return response.data;
    } catch (error) {
      const apiError = handleApiError(error);
      console.error("Error creating food:", apiError);
      throw apiError;
    }
  }

  /**
   * Update an existing food item
   * @param id - The ID of the food item to update
   * @param payload - The updated food data
   * @returns Promise with the updated food item
   */
  static async updateFood(
    id: string,
    payload: CreateFoodPayload
  ): Promise<FoodApiResponse> {
    try {
      const response = await ApiClient.put<FoodApiResponse>(
        `${this.ENDPOINT}/${id}`,
        payload
      );
      return response.data;
    } catch (error) {
      const apiError = handleApiError(error);
      console.error("Error updating food:", apiError);
      throw apiError;
    }
  }

  /**
   * Delete a food item
   * @param id - The ID of the food item to delete
   * @returns Promise with the deleted food item data
   */
  static async deleteFood(id: string): Promise<FoodApiResponse> {
    try {
      const response = await ApiClient.delete<FoodApiResponse>(
        `${this.ENDPOINT}/${id}`
      );
      return response.data;
    } catch (error) {
      const apiError = handleApiError(error);
      console.error("Error deleting food:", apiError);
      throw apiError;
    }
  }
}

// Helper function to map API response to application format
export const mapFoodApiToApp = (
  apiFood: FoodApiResponse
): {
  id: string;
  name: string;
  rating: number;
  imageUrl: string;
  restaurantName: string;
  restaurantLogo: string;
  status: "Open Now" | "Closed";
  price: number;
} => {
  return {
    id: apiFood.id,
    name: apiFood.name,
    rating: parseFloat(apiFood.rating) || 0,
    imageUrl: apiFood.avatar,
    restaurantName: apiFood.name, // API doesn't provide separate restaurant name
    restaurantLogo: apiFood.logo,
    status: apiFood.open ? "Open Now" : "Closed",
    price: parseFloat(apiFood.price || apiFood.Price || "0") || 0,
  };
};

// Helper function to map application format to API payload
export const mapAppToFoodApi = (appFood: {
  food_name: string;
  food_rating: number;
  food_image: string;
  restaurant_name: string;
  restaurant_logo: string;
  restaurant_status: "Open Now" | "Closed";
}): CreateFoodPayload => {
  return {
    name: appFood.food_name,
    avatar: appFood.food_image,
    rating: appFood.food_rating.toString(),
    open: appFood.restaurant_status === "Open Now",
    logo: appFood.restaurant_logo,
  };
};

export default FoodService;
