"use client";

import Logo from "@/components/utils/logo/Logo";
import Button from "@/components/atoms/button/Button";
import { HeaderProps } from "./Header.types";

export const Header = ({ onAddMealClick, className = "" }: HeaderProps) => {
  const handleAddMealClick = () => {
    if (onAddMealClick) {
      onAddMealClick();
    } else {
      console.log("Add Meal clicked");
    }
  };

  return (
    <header
      className={`food-header w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-[220px] py-3 md:py-4 bg-white ${className}`}
    >
      <div className="food-header-container max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Logo />

        {/* Add Meal Button */}
        <Button
          onClick={handleAddMealClick}
          className="food-add-meal-btn text-white text-sm md:text-[17px] font-bold leading-[100%] w-[120px] md:w-[150px] h-[38px] md:h-[42px] rounded-[14px]"
          style={{
            background: "linear-gradient(90deg, #FFBA26 0%, #FF9A0E 100%)",
            boxShadow:
              "0px 20px 40px 0px rgba(255, 174, 0, 0.29), 0px 5px 10px 0px rgba(255, 174, 0, 0.26)",
          }}
          data-test-id="food-add-meal-btn"
        >
          Add Meal
        </Button>
      </div>
    </header>
  );
};
