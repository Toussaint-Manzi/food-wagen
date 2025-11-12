import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { FeaturedMeals } from "@/components/organisms/featured-meals/FeaturedMeals";
import foodReducer, { fetchFoods } from "@/store/features/food.slice";
import uiReducer from "@/store/features/ui.slice";
import * as foodService from "@/services/food.service";

// Mock the food service
jest.mock("@/services/food.service");

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />;
  },
}));

/**
 * Test 3: API Mocking
 * Tests API-related behaviors with mocked network requests
 */
describe("FeaturedMeals Component - API Mocking", () => {
  const mockFoods = [
    {
      id: "1",
      name: "Burger Deluxe",
      rating: 4.5,
      avatar: "https://example.com/burger.jpg",
      restaurantName: "Burger House",
      logo: "https://example.com/logo.jpg",
      status: "Open Now" as const,
      price: 12.99,
    },
    {
      id: "2",
      name: "Pizza Supreme",
      rating: 4.8,
      avatar: "https://example.com/pizza.jpg",
      restaurantName: "Pizza Palace",
      logo: "https://example.com/logo2.jpg",
      status: "Open Now" as const,
      price: 15.99,
    },
  ];

  const mockApiResponse = mockFoods.map((food) => ({
    id: food.id,
    food_name: food.name,
    food_rating: food.rating,
    food_image: food.avatar,
    restaurant_name: food.restaurantName,
    restaurant_logo: food.logo,
    restaurant_status: food.status,
    food_price: food.price,
  }));

  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        food: foodReducer,
        ui: uiReducer,
      },
    });
    jest.clearAllMocks();
  });

  it("should successfully fetch and display food data", async () => {
    // Mock successful API response
    (foodService.getAllFoods as jest.Mock).mockResolvedValue(mockApiResponse);

    render(
      <Provider store={store}>
        <FeaturedMeals
          foods={mockFoods}
          onEdit={jest.fn()}
          onDelete={jest.fn()}
          onLoadMore={jest.fn()}
          hasMore={false}
          loading={false}
        />
      </Provider>
    );

    // Verify food names are displayed
    expect(screen.getByText("Burger Deluxe")).toBeInTheDocument();
    expect(screen.getByText("Pizza Supreme")).toBeInTheDocument();

    // Verify ratings are displayed
    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("4.8")).toBeInTheDocument();
  });

  it("should handle API error correctly", async () => {
    // Mock API error
    const errorMessage = "Failed to fetch foods";
    (foodService.getAllFoods as jest.Mock).mockRejectedValue(
      new Error(errorMessage)
    );

    // Dispatch the async action
    await store.dispatch(fetchFoods() as any);

    // Get the state with proper typing
    const state = store.getState() as {
      food: {
        error: string | null;
        loading: boolean;
        foods: any[];
      };
    };

    // Verify error state is set and foods array is empty
    expect(state.food.error).toBe(errorMessage);
    expect(state.food.loading).toBe(false);
    expect(state.food.foods).toEqual([]);
  });
});
