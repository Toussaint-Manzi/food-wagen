"use client";

import Image from "next/image";
import { Button } from "../../atoms/button/button";
import Logo from "@/components/utils/logo/Logo";

export const Header = () => {
  const handleAddMealClick = () => {
    // TODO: Open Add Meal modal
    console.log("Add Meal clicked");
  };

  return (
    <header className="food-header w-full px-[220px] py-4 bg-white">
      <div className="food-header-container max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Logo />

        {/* Add Meal Button */}
        <Button
          onClick={handleAddMealClick}
          className="food-add-meal-btn text-white text-[17px] font-bold leading-[100%] w-[150px] h-[42px] rounded-[14px]"
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
