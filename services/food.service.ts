import { ApiClient, handleApiError } from "@/api/config";
import type { FoodApiResponse, CreateFoodPayload } from "@/api/config.types";

/**
 * Food Service
 * Handles all API operations related to food items
 */

const ENDPOINT = "/Food";

export async function getAllFoods(): Promise<FoodApiResponse[]> {
  try {
    const response = await ApiClient.get<FoodApiResponse[]>(ENDPOINT);
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
export async function searchFoodByName(
  searchQuery: string
): Promise<FoodApiResponse[]> {
  try {
    const encodedQuery = encodeURIComponent(searchQuery);
    const response = await ApiClient.get<FoodApiResponse[]>(
      `${ENDPOINT}?name=${encodedQuery}`
    );
    return response.data;
  } catch (error) {
    const apiError = handleApiError(error);
    console.error("Error searching foods:", apiError);
    throw apiError;
  }
}

export async function createFood(
  payload: CreateFoodPayload
): Promise<FoodApiResponse> {
  try {
    const response = await ApiClient.post<FoodApiResponse>(ENDPOINT, payload);
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
export async function updateFood(
  id: string,
  payload: CreateFoodPayload
): Promise<FoodApiResponse> {
  try {
    const response = await ApiClient.put<FoodApiResponse>(
      `${ENDPOINT}/${id}`,
      payload
    );
    return response.data;
  } catch (error) {
    const apiError = handleApiError(error);
    console.error("Error updating food:", apiError);
    throw apiError;
  }
}

export async function deleteFood(id: string): Promise<FoodApiResponse> {
  try {
    const response = await ApiClient.delete<FoodApiResponse>(
      `${ENDPOINT}/${id}`
    );
    return response.data;
  } catch (error) {
    const apiError = handleApiError(error);
    console.error("Error deleting food:", apiError);
    throw apiError;
  }
}

// Helper function to map API response to application format
export const mapFoodApiToApp = (
  apiFood: FoodApiResponse
): {
  id: string;
  name: string;
  rating: number;
  avatar: string;
  restaurantName: string;
  logo: string;
  status: "Open Now" | "Closed";
  price: number;
} => {
  return {
    id: apiFood.id,
    name: apiFood.name,
    rating: parseFloat(apiFood.rating) || 0,
    avatar: apiFood.avatar,
    restaurantName: apiFood.name, // API doesn't provide separate restaurant name
    logo: apiFood.logo,
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
