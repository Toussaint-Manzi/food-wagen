"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FoodModalProps } from "./FoodModal.types";
import { foodFormSchema, FoodFormData } from "@/lib/validators";
import { FoodFormFields } from "../../molecules/food-form-fields/FoodFormFields";
import { Button } from "../../atoms/button/Button";
import { Spinner } from "../../atoms/spinner/spinner";

export const FoodModal = ({
  isOpen,
  onClose,
  onSubmit,
  mode,
  initialData,
  className = "",
}: FoodModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FoodFormData>({
    resolver: zodResolver(foodFormSchema),
    defaultValues: initialData || {
      food_name: "",
      food_rating: 1,
      food_image: "",
      restaurant_name: "",
      restaurant_logo: "",
      restaurant_status: "Open Now",
    },
  });

  // Reset form when modal closes or initial data changes
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset({
        food_name: "",
        food_rating: 1,
        food_image: "",
        restaurant_name: "",
        restaurant_logo: "",
        restaurant_status: "Open Now",
      });
    }
  }, [initialData, reset, isOpen]);

  const handleFormSubmit = async (data: FoodFormData) => {
    try {
      await onSubmit(data);
      reset(); // Reset form after successful submission
      onClose();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const handleCancel = () => {
    reset();
    onClose();
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleCancel();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`food-modal-overlay fixed inset-0 bg-[#C6C2C2]/52 flex items-center justify-center z-50 2xl:py-1 p-4 ${className}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleCancel();
      }}
      data-test-id="food-modal-overlay"
    >
      {/* Modal Container */}
      <div
        className="food-modal bg-white w-full max-w-full sm:max-w-[600px] md:max-w-[750px] lg:max-w-[850px] 2xl:w-[934px] rounded-3xl p-2 md:p-2.5 2xl:py-2.5 2xl:px-0 overflow-y-auto"
        style={{
          boxShadow: "0px 2px 25px 0px rgba(0, 0, 0, 0.15)",
        }}
        data-test-id="food-modal"
      >
        {/* Form Container */}
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="food-modal-form flex flex-col gap-4 md:gap-5 2xl:gap-5 h-full p-4 md:p-6 lg:p-8 2xl:p-10"
        >
          {/* Title */}
          <h2
            className="food-modal-title w-full text-primary text-[40px] md:text-3xl lg:text-4xl 2xl:text-[40px] font-bold leading-[100%] text-center"
            data-test-id="food-modal-title"
          >
            {mode === "add" ? "Add a Meal" : "Edit Meal"}
          </h2>

          {/* Form Fields */}
          <FoodFormFields
            register={register}
            errors={errors}
            isEditMode={mode === "edit"}
          />

          {/* Buttons */}
          <div className="food-modal-buttons flex flex-col sm:flex-row gap-2 md:gap-2.5 2xl:gap-2.5 w-full mt-auto">
            {/* Save Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="food-modal-save-btn flex-1 text-white cursor-pointer text-base md:text-[17px] 2xl:text-[18px] font-bold leading-[100%] h-[50px] md:h-14 2xl:h-[60px] rounded-xl 2xl:rounded-[14px] flex items-center justify-center gap-2"
              style={{
                background: isSubmitting
                  ? "#ccc"
                  : "linear-gradient(90deg, #FFBA26 0%, #FF9A0E 100%)",
                boxShadow: isSubmitting
                  ? "none"
                  : "0px 20px 40px 0px rgba(255, 174, 0, 0.29), 0px 5px 10px 0px rgba(255, 174, 0, 0.26)",
              }}
              data-test-id="food-modal-save-btn"
            >
              {isSubmitting ? (
                <>
                  <Spinner size="small" />
                  {mode === "add" ? "Adding Meal..." : "Updating Meal..."}
                </>
              ) : (
                "Save"
              )}
            </Button>

            {/* Cancel Button */}
            <Button
              type="button"
              onClick={handleCancel}
              disabled={isSubmitting}
              className="food-modal-cancel-btn flex-1 cursor-pointer border border-[#FFBA26] text-black text-base md:text-[17px] 2xl:text-[18px] font-bold leading-[100%] h-[50px] md:h-14 2xl:h-[60px] rounded-xl 2xl:rounded-[14px] hover:bg-[#FFBA26]/10 transition-colors"
              data-test-id="food-modal-cancel-btn"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
