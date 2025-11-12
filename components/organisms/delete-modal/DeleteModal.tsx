"use client";

import { useEffect, useState } from "react";
import { DeleteModalProps } from "./DeleteModal.types";
import { Button } from "../../atoms/button/button";
import { Spinner } from "../../atoms/spinner/spinner";

export const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  foodName,
  className = "",
}: DeleteModalProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleConfirm = async () => {
    setIsDeleting(true);
    try {
      await onConfirm();
      onClose();
    } catch (error) {
      console.error("Delete error:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancel = () => {
    if (!isDeleting) {
      onClose();
    }
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isDeleting) {
        handleCancel();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, isDeleting]);

  if (!isOpen) return null;

  return (
    <div
      className={`food-delete-modal-overlay fixed inset-0 bg-[#C6C2C2]/52 flex 2xl:items-start justify-center z-50 p-0 md:p-4 2xl:py-20 ${className}`}
      onClick={(e) => {
        if (e.target === e.currentTarget && !isDeleting) handleCancel();
      }}
      data-test-id="food-delete-modal-overlay"
    >
      {/* Modal Container */}
      <div
        className="food-delete-modal bg-white w-full sm:max-w-[500px] md:max-w-[650px] lg:max-w-[750px] 2xl:w-[934px] h-[250px] rounded-2xl 2xl:rounded-3xl p-2 md:p-2.5 2xl:p-2.5 overflow-hidden"
        style={{
          boxShadow: "0px 2px 25px 0px rgba(0, 0, 0, 0.15)",
        }}
        data-test-id="food-delete-modal"
      >
        {/* Content Container */}
        <div className="food-delete-modal-content flex flex-col gap-4 md:gap-5 2xl:gap-5 p-4 md:p-6 lg:p-8 2xl:p-10">
          {/* Title */}
          <h2
            className="food-delete-modal-title text-primary text-2xl md:text-3xl lg:text-4xl 2xl:text-[40px] font-bold leading-[100%] text-center"
            data-test-id="food-delete-modal-title"
          >
            Delete Meal
          </h2>

          {/* Message */}
          <p className="food-delete-modal-message text-base md:text-[17px] 2xl:text-[18px] text-[#9E9E9E] leading-[140%] font-normal">
            Are you sure you want to delete{" "}
            {foodName ? (
              <>
                <span className="font-semibold text-[#424242]">{foodName}</span>
                ?
              </>
            ) : (
              "this meal?"
            )}{" "}
            Actions cannot be reversed.
          </p>

          {/* Buttons */}
          <div className="food-delete-modal-buttons flex flex-col sm:flex-row gap-2 md:gap-2.5 2xl:gap-2.5 w-full">
            {/* Yes Button */}
            <Button
              type="button"
              onClick={handleConfirm}
              disabled={isDeleting}
              className="food-delete-modal-yes-btn flex-1 text-white text-base md:text-[17px] 2xl:text-[18px] font-bold leading-[100%] h-[50px] md:h-14 2xl:h-[60px] rounded-xl 2xl:rounded-[14px] flex items-center justify-center gap-2"
              style={{
                background: isDeleting
                  ? "#ccc"
                  : "linear-gradient(90deg, #FFBA26 0%, #FF9A0E 100%)",
                boxShadow: isDeleting
                  ? "none"
                  : "0px 20px 40px 0px rgba(255, 174, 0, 0.29), 0px 5px 10px 0px rgba(255, 174, 0, 0.26)",
              }}
              data-test-id="food-delete-modal-yes-btn"
            >
              {isDeleting ? (
                <>
                  <Spinner size="small" />
                  Deleting Meal...
                </>
              ) : (
                "Yes"
              )}
            </Button>

            {/* Cancel Button */}
            <Button
              type="button"
              onClick={handleCancel}
              disabled={isDeleting}
              className="food-delete-modal-cancel-btn flex-1 bg-transparent border border-[#FFBA26] text-black text-base md:text-[17px] 2xl:text-[18px] font-bold leading-[100%] h-[50px] md:h-14 2xl:h-[60px] rounded-xl 2xl:rounded-[14px] hover:bg-[#FFBA26]/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              data-test-id="food-delete-modal-cancel-btn"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
