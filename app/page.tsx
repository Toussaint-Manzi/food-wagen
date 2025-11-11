"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/organisms/header/header";
import { Hero } from "@/components/organisms/hero/hero";
import { FeaturedMeals } from "@/components/organisms/featured-meals/FeaturedMeals";
import { FoodModal } from "@/components/organisms/food-modal/FoodModal";
import { DeleteModal } from "@/components/organisms/delete-modal/DeleteModal";
import { ToastMessage } from "@/components/atoms/toast-message/ToastMessage";
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
  selectLoading,
  selectHasMore,
  selectFoods,
  Food,
} from "@/store/features/food.slice";
import { hideToast, selectToast, showToast } from "@/store/features/ui.slice";

export default function Home() {
  const dispatch = useAppDispatch();
  const foods = useAppSelector(selectPaginatedFoods);
  const allFoods = useAppSelector(selectFoods);
  const loading = useAppSelector(selectLoading);
  const hasMore = useAppSelector(selectHasMore);
  const toast = useAppSelector(selectToast);

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
      const result = await dispatch(deleteFood(deletingFoodId));
      if (deleteFood.fulfilled.match(result)) {
        dispatch(
          showToast({
            message: "Food item deleted successfully!",
            type: "success",
          })
        );
        await dispatch(fetchFoods()); // Refetch to update UI
      } else {
        dispatch(
          showToast({
            message: result.error.message || "Failed to delete food",
            type: "error",
          })
        );
      }
      setDeletingFoodId(undefined);
      setDeletingFoodName(undefined);
    }
  };

  const handleModalSubmit = async (data: FoodFormData) => {
    if (modalMode === "add") {
      const result = await dispatch(createFood(data));
      if (createFood.fulfilled.match(result)) {
        dispatch(
          showToast({
            message: "Food item created successfully!",
            type: "success",
          })
        );
        await dispatch(fetchFoods()); // Refetch to update UI
      } else {
        dispatch(
          showToast({
            message: result.error.message || "Failed to create food",
            type: "error",
          })
        );
      }
    } else if (editingFoodId) {
      const result = await dispatch(updateFood({ id: editingFoodId, data }));
      if (updateFood.fulfilled.match(result)) {
        dispatch(
          showToast({
            message: "Food item updated successfully!",
            type: "success",
          })
        );
        await dispatch(fetchFoods()); // Refetch to update UI
      } else {
        dispatch(
          showToast({
            message: result.error.message || "Failed to update food",
            type: "error",
          })
        );
      }
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

      {/* Toast Notification */}
      <ToastMessage
        message={toast.message}
        messageType={toast.type}
        showToast={toast.show}
        position="top-right"
        duration={3000}
        onClose={() => dispatch(hideToast())}
      />
    </div>
  );
}
