import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createFood as createFoodApi,
  deleteFood as deleteFoodApi,
  getAllFoods,
  mapAppToFoodApi,
  mapFoodApiToApp,
  searchFoodByName,
  updateFood as updateFoodApi,
} from "@/services/food.service";
import type { ApiErrorResponse } from "@/api/config.types";
import type { FoodFormData } from "@/lib/validators";
import type { RootState } from "@/store/store";
import type { Food, FoodState } from "./food.slice.types";

// Re-export Food type for backward compatibility
export type { Food } from "./food.slice.types";

const initialState: FoodState = {
  foods: [],
  filteredFoods: [],
  loading: false,
  error: null,
  searchQuery: "",
  currentPage: 1,
  itemsPerPage: 4,
  hasMore: true,
};

// Async Thunks

/**
 * Fetch all foods from the API
 */
export const fetchFoods = createAsyncThunk<
  Food[],
  void,
  { rejectValue: string }
>("food/fetchFoods", async (_, { rejectWithValue }) => {
  try {
    const response = await getAllFoods();
    return response.map(mapFoodApiToApp);
  } catch (error) {
    const apiError = error as ApiErrorResponse;
    return rejectWithValue(apiError.message || "Failed to fetch foods");
  }
});

/**
 * Search foods by name
 */
export const searchFoods = createAsyncThunk<
  Food[],
  string,
  { rejectValue: string }
>("food/searchFoods", async (searchQuery, { rejectWithValue }) => {
  try {
    if (!searchQuery.trim()) {
      // If search is empty, fetch all foods
      const response = await getAllFoods();
      return response.map(mapFoodApiToApp);
    }
    const response = await searchFoodByName(searchQuery);
    return response.map(mapFoodApiToApp);
  } catch (error) {
    const apiError = error as ApiErrorResponse;
    return rejectWithValue(apiError.message || "Failed to search foods");
  }
});

/**
 * Create a new food item
 */
export const createFood = createAsyncThunk<
  Food,
  FoodFormData,
  { rejectValue: string }
>("food/createFood", async (foodData, { rejectWithValue }) => {
  try {
    const payload = mapAppToFoodApi(foodData);
    const response = await createFoodApi(payload);
    return mapFoodApiToApp(response);
  } catch (error) {
    const apiError = error as ApiErrorResponse;
    return rejectWithValue(apiError.message || "Failed to create food");
  }
});

/**
 * Update an existing food item
 */
export const updateFood = createAsyncThunk<
  Food,
  { id: string; data: FoodFormData },
  { rejectValue: string }
>("food/updateFood", async ({ id, data }, { rejectWithValue }) => {
  try {
    const payload = mapAppToFoodApi(data);
    const response = await updateFoodApi(id, payload);
    return mapFoodApiToApp(response);
  } catch (error) {
    const apiError = error as ApiErrorResponse;
    return rejectWithValue(apiError.message || "Failed to update food");
  }
});

/**
 * Delete a food item
 */
export const deleteFood = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("food/deleteFood", async (id, { rejectWithValue }) => {
  try {
    await deleteFoodApi(id);
    return id;
  } catch (error) {
    const apiError = error as ApiErrorResponse;
    return rejectWithValue(apiError.message || "Failed to delete food");
  }
});

// Slice
const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    loadMore: (state) => {
      state.currentPage += 1;
      const totalItems = state.filteredFoods.length;
      state.hasMore = state.currentPage * state.itemsPerPage < totalItems;
    },
    resetPagination: (state) => {
      state.currentPage = 1;
      state.hasMore = state.filteredFoods.length > state.itemsPerPage;
    },
  },
  extraReducers: (builder) => {
    // Fetch Foods
    builder
      .addCase(fetchFoods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.loading = false;
        state.foods = action.payload;
        state.filteredFoods = action.payload;
        state.hasMore = action.payload.length > state.itemsPerPage;
      })
      .addCase(fetchFoods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
      });

    // Search Foods
    builder
      .addCase(searchFoods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchFoods.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredFoods = action.payload;
        state.currentPage = 1;
        state.hasMore = action.payload.length > state.itemsPerPage;
      })
      .addCase(searchFoods.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
      });

    // Create Food
    builder
      .addCase(createFood.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createFood.fulfilled, (state, action) => {
        state.loading = false;
        state.foods.unshift(action.payload);
        state.filteredFoods.unshift(action.payload);
        state.hasMore = state.filteredFoods.length > state.itemsPerPage;
      })
      .addCase(createFood.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create food";
      });

    // Update Food
    builder
      .addCase(updateFood.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateFood.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateFood.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update food";
      });

    // Delete Food
    builder
      .addCase(deleteFood.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFood.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteFood.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete food";
      });
  },
});

export const { setSearchQuery, clearError, loadMore, resetPagination } =
  foodSlice.actions;

// Selectors
export const selectFoods = (state: RootState) => state.food.foods;
export const selectFilteredFoods = (state: RootState) =>
  state.food.filteredFoods;
export const selectLoading = (state: RootState) => state.food.loading;
export const selectError = (state: RootState) => state.food.error;
export const selectSearchQuery = (state: RootState) => state.food.searchQuery;
export const selectCurrentPage = (state: RootState) => state.food.currentPage;
export const selectHasMore = (state: RootState) => state.food.hasMore;
export const selectPaginatedFoods = (state: RootState) => {
  const { filteredFoods, currentPage, itemsPerPage } = state.food;
  return filteredFoods.slice(0, currentPage * itemsPerPage);
};

export default foodSlice.reducer;
