"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/organisms/header/header";
import { Hero } from "@/components/organisms/hero/hero";
import { FeaturedMeals } from "@/components/organisms/featured-meals/FeaturedMeals";
import { FoodModal } from "@/components/organisms/food-modal/FoodModal";
import { DeleteModal } from "@/components/organisms/delete-modal/DeleteModal";
import { FoodFormData } from "@/lib/validators";
import { Footer } from "@/components/organisms/footer/footer";
import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  fetchFoods,
  createFood,
  updateFood,
  deleteFood,
  loadMore,
  selectPaginatedFoods,
  selectFoodLoading,
  selectHasMore,
  selectAllFoods,
} from "@/store/features/food.slice";

export default function Home() {
  const dispatch = useAppDispatch();
  const foods = useAppSelector(selectPaginatedFoods);
  const allFoods = useAppSelector(selectAllFoods);
  const loading = useAppSelector(selectFoodLoading);
  const hasMore = useAppSelector(selectHasMore);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingFood, setEditingFood] = useState<FoodFormData | undefined>();
  const [editingFoodId, setEditingFoodId] = useState<string | undefined>();
  const [deletingFoodId, setDeletingFoodId] = useState<string | undefined>();
  const [deletingFoodName, setDeletingFoodName] = useState<
    string | undefined
  >();

  // Fetch foods on mount
  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  const handleAddMeal = () => {
    setModalMode("add");
    setEditingFood(undefined);
    setEditingFoodId(undefined);
    setIsModalOpen(true);
  };

  const handleEdit = (id: string) => {
    const food = allFoods.find((f) => f.id === id);
    if (food) {
      setModalMode("edit");
      setEditingFoodId(id);
      setEditingFood({
        food_name: food.name,
        food_rating: food.rating,
        food_image: food.avatar,
        restaurant_name: food.restaurantName,
        restaurant_logo: food.logo,
        restaurant_status: food.status,
      });
      setIsModalOpen(true);
    }
  };

  const handleDelete = (id: string) => {
    const food = allFoods.find((f) => f.id === id);
    if (food) {
      setDeletingFoodId(id);
      setDeletingFoodName(food.name);
      setIsDeleteModalOpen(true);
    }
  };

  const handleConfirmDelete = async () => {
    if (deletingFoodId) {
      await dispatch(deleteFood(deletingFoodId));
      await dispatch(fetchFoods()); // Refetch to update UI
      setDeletingFoodId(undefined);
      setDeletingFoodName(undefined);
    }
  };

  const handleModalSubmit = async (data: FoodFormData) => {
    if (modalMode === "add") {
      await dispatch(createFood(data));
    } else if (editingFoodId) {
      await dispatch(updateFood({ id: editingFoodId, data }));
      await dispatch(fetchFoods()); // Refetch to update UI
    }
  };

  const handleLoadMore = () => {
    dispatch(loadMore());
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
          loading={loading}
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
