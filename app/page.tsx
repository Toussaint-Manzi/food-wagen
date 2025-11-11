"use client";

import { useState } from "react";
import { Header } from "@/components/organisms/header/header";
import { Hero } from "@/components/organisms/hero/hero";
import { FeaturedMeals } from "@/components/organisms/featured-meals/FeaturedMeals";
import { FoodModal } from "@/components/organisms/food-modal/FoodModal";
import { DeleteModal } from "@/components/organisms/delete-modal/DeleteModal";
import { FoodFormData } from "@/lib/validators";
import { Footer } from "@/components/organisms/footer/footer";

// Sample data - will be replaced with API data later
const sampleFoods = [
  {
    id: "1",
    name: "Spicy Chicken Burger",
    price: 12.99,
    rating: 4.5,
    imageUrl: "/images/food-1.jpg",
    restaurantName: "Burger House",
    restaurantLogo: "/images/restaurant-1.jpg",
    status: "Open Now" as const,
  },
  {
    id: "2",
    name: "Classic Margherita Pizza",
    price: 15.49,
    rating: 4.8,
    imageUrl: "/images/food-2.jpg",
    restaurantName: "Pizza Palace",
    restaurantLogo: "/images/restaurant-2.jpg",
    status: "Open Now" as const,
  },
  {
    id: "3",
    name: "Grilled Salmon Salad",
    price: 18.99,
    rating: 4.3,
    imageUrl: "/images/food-3.jpg",
    restaurantName: "Fresh & Healthy",
    restaurantLogo: "/images/restaurant-3.jpg",
    status: "Closed" as const,
  },
  {
    id: "4",
    name: "Double Chocolate Cake",
    price: 8.99,
    rating: 4.9,
    imageUrl: "/images/food-4.jpg",
    restaurantName: "Sweet Treats",
    restaurantLogo: "/images/restaurant-4.jpg",
    status: "Open Now" as const,
  },
];

export default function Home() {
  const [foods, setFoods] = useState(sampleFoods);
  const [hasMore, setHasMore] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingFood, setEditingFood] = useState<FoodFormData | undefined>();
  const [deletingFoodId, setDeletingFoodId] = useState<string | undefined>();
  const [deletingFoodName, setDeletingFoodName] = useState<
    string | undefined
  >();

  const handleAddMeal = () => {
    setModalMode("add");
    setEditingFood(undefined);
    setIsModalOpen(true);
  };

  const handleEdit = (id: string) => {
    const food = foods.find((f) => f.id === id);
    if (food) {
      setModalMode("edit");
      setEditingFood({
        food_name: food.name,
        food_rating: food.rating,
        food_image: food.imageUrl,
        restaurant_name: food.restaurantName,
        restaurant_logo: food.restaurantLogo,
        restaurant_status: food.status,
      });
      setIsModalOpen(true);
    }
  };

  const handleDelete = (id: string) => {
    const food = foods.find((f) => f.id === id);
    if (food) {
      setDeletingFoodId(id);
      setDeletingFoodName(food.name);
      setIsDeleteModalOpen(true);
    }
  };

  const handleConfirmDelete = async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (deletingFoodId) {
      setFoods(foods.filter((food) => food.id !== deletingFoodId));
      setDeletingFoodId(undefined);
      setDeletingFoodName(undefined);
    }
  };

  const handleModalSubmit = async (data: FoodFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (modalMode === "add") {
      const newFood = {
        id: String(foods.length + 1),
        name: data.food_name,
        price: Math.random() * 20 + 5, // Random price for demo
        rating: data.food_rating,
        imageUrl: data.food_image,
        restaurantName: data.restaurant_name,
        restaurantLogo: data.restaurant_logo,
        status: data.restaurant_status,
      };
      setFoods([...foods, newFood]);
    } else {
      // Edit mode - find and update the food
      setFoods(
        foods.map((food) =>
          food.name === editingFood?.food_name
            ? {
                ...food,
                name: data.food_name,
                rating: data.food_rating,
                imageUrl: data.food_image,
                restaurantName: data.restaurant_name,
                restaurantLogo: data.restaurant_logo,
                status: data.restaurant_status,
              }
            : food
        )
      );
    }
  };

  const handleLoadMore = () => {
    console.log("Load more foods");
    // TODO: Fetch more foods from API
    setHasMore(false);
  };

  return (
    <div className="food-page min-h-screen flex flex-col">
      <Header onAddMealClick={handleAddMeal} />
      <main className="flex-1">
        <Hero />
        <FeaturedMeals
          foods={foods}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
        />
      </main>
      <Footer />

      {/* Food Modal */}
      <FoodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        mode={modalMode}
        initialData={editingFood}
      />

      {/* Delete Modal */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        foodName={deletingFoodName}
      />
    </div>
  );
}
