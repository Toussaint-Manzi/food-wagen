"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../../atoms/button/button";
import { IconWrapper } from "../../atoms/icon-wrapper/IconWrapper";
import { HeroProps, OrderType } from "./hero.types";

export const Hero = ({ className = "" }: HeroProps) => {
  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // TODO: Implement search functionality
  };

  return (
    <section className="food-hero flex flex-col lg:flex-row items-center justify-between bg-primary w-full h-auto lg:h-[500px] xl:h-[580px] 2xl:h-[628px] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-[220px] py-8 lg:py-0">
      {/* Left Section */}
      <div className="food-hero-left flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-7 2xl:gap-[32px] w-full lg:w-[600px] xl:w-[750px] 2xl:w-[856px]">
        {/* Headline */}
        <h1 className="food-hero-title text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[88px] font-bold leading-[100%] tracking-[0]">
          Are you starving?
        </h1>

        {/* Subtitle */}
        <p className="food-hero-subtitle text-white text-base sm:text-lg md:text-xl lg:text-xl 2xl:text-[22px] font-normal leading-[120%] tracking-[0]">
          Within a few clicks, find meals that are accessible near you
        </p>

        {/* Search Bar Card */}
        <div
          className="food-search-card bg-white w-full lg:w-[600px] xl:w-[750px] 2xl:w-[856px] h-auto 2xl:h-[194.44px] rounded-xl 2xl:rounded-[16px] p-4 md:p-5 2xl:p-[24px] flex flex-col gap-3 2xl:gap-0"
          style={{
            boxShadow:
              "0px 20px 40px 0px rgba(255, 174, 0, 0.29), 0px 5px 10px 0px rgba(255, 174, 0, 0.26)",
          }}
        >
          {/* Order Type Selectors */}
          <div className="food-order-type-selector flex gap-2 md:gap-3 2xl:gap-4 mb-2 2xl:mb-0">
            {/* Delivery Button */}
            <button
              onClick={() => setOrderType("delivery")}
              className={`food-order-type-btn flex items-center justify-center gap-1.5 md:gap-2 rounded-lg w-full sm:w-[120px] md:w-[130px] lg:w-[140px] 2xl:w-[148px] h-[44px] md:h-[50px] lg:h-[54px] 2xl:h-[56px] transition-all ${
                orderType === "delivery"
                  ? "bg-[#F172281A] text-selected"
                  : "bg-transparent text-[#757575]"
              }`}
              data-test-id="food-delivery-btn"
            >
              <IconWrapper
                iconName="bike"
                size={18}
                className={`md:w-5 md:h-5 ${
                  orderType === "delivery" ? "text-selected" : "text-[#757575]"
                }`}
              />
              <span className="text-sm md:text-base 2xl:text-[18px] font-medium">
                Delivery
              </span>
            </button>

            {/* Pickup Button */}
            <button
              onClick={() => setOrderType("pickup")}
              className={`food-order-type-btn flex items-center justify-center gap-1.5 md:gap-2 rounded-lg w-full sm:w-[120px] md:w-[130px] lg:w-[140px] 2xl:w-[148px] h-[44px] md:h-[50px] lg:h-[54px] 2xl:h-[56px] transition-all ${
                orderType === "pickup"
                  ? "bg-[#F172281A] text-selected"
                  : "bg-transparent text-[#757575]"
              }`}
              data-test-id="food-pickup-btn"
            >
              <IconWrapper
                iconName="cart"
                size={18}
                className={`md:w-5 md:h-5 ${
                  orderType === "pickup" ? "text-selected" : "text-[#757575]"
                }`}
              />
              <span className="text-sm md:text-base 2xl:text-[18px] font-medium">
                Pickup
              </span>
            </button>
          </div>

          {/* Divider line */}
          <div className="w-full 2xl:w-[808px] h-px bg-[#EEEEEE] my-2"></div>

          {/* Search Input Section */}
          <div className="food-search-section w-full 2xl:w-[808px] h-auto 2xl:h-[108px] flex flex-col sm:flex-row items-stretch sm:items-center gap-2 md:gap-3 2xl:gap-4">
            {/* Search Input */}
            <div className="food-search-input-wrapper flex items-center bg-input-bg w-full sm:flex-1 md:w-auto lg:w-[450px] xl:w-[520px] 2xl:w-[595px] h-[48px] md:h-[54px] lg:h-[58px] 2xl:h-[60px] rounded-lg 2xl:rounded-xl px-3 md:px-4 gap-2 md:gap-3">
              <IconWrapper
                iconName="search-1"
                size={16}
                className="text-selected md:w-[18px] md:h-[18px]"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What do you like to eat today?"
                className="food-search-input flex-1 bg-transparent outline-none text-foreground placeholder:text-placeholder text-sm md:text-base lg:text-[17px] 2xl:text-[18px] font-normal leading-[140%]"
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>

            {/* Find Meal Button */}
            <Button
              onClick={handleSearch}
              className="food-find-meal-btn text-white text-sm md:text-base lg:text-[17px] 2xl:text-[18px] font-bold leading-[100%] h-[48px] md:h-[54px] lg:h-[58px] 2xl:h-[60px] w-full sm:w-auto md:w-[160px] lg:w-[180px] 2xl:w-[197px] rounded-lg 2xl:rounded-xl flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(90deg, #FF7A7A 0%, #F65900 100%)",
              }}
              data-test-id="food-find-meal-btn"
            >
              <IconWrapper
                iconName="search-2"
                size={12}
                className="text-white md:w-[14px] md:h-[14px]"
              />
              Find Meal
            </Button>
          </div>
        </div>
      </div>

      {/* Right Section - Hero Image */}
      <div className="food-hero-right relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:w-[480px] xl:w-[550px] 2xl:w-[604px] h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[470px] 2xl:h-[505px] mt-8 lg:mt-0 rotate-0 self-end z-0 lg:-mb-8 2xl:-mb-10">
        {/* Overlay Layer */}
        <div className="food-hero-overlay absolute w-[300px] sm:w-[330px] md:w-[380px] lg:w-[400px] xl:w-[450px] 2xl:w-[497.14px] h-[300px] sm:h-[330px] md:h-[380px] lg:h-[400px] xl:h-[450px] 2xl:h-[497.14px] 2xl:top-[-3.21px] 2xl:left-[102.51px] top-0 left-[20px] md:left-[30px] lg:left-[60px] -rotate-180">
          {/* Rectangle */}
          <div
            className="food-hero-overlay-rect absolute w-full h-full 2xl:top-[-3px] 2xl:left-[-103px] top-0 left-[-50px] md:left-[-70px] lg:left-[-85px] -rotate-180"
            style={{
              mixBlendMode: "overlay",
            }}
          />

          {/* Layer 1 */}
          <div
            className="food-hero-overlay-layer1 absolute w-full h-full 2xl:top-[-3.21px] 2xl:left-[102.51px] top-0 left-[50px] md:left-[70px] lg:left-[85px] -rotate-180"
            style={{
              mixBlendMode: "overlay",
            }}
          />
        </div>

        {/* Actual Hero Image */}
        <div className="food-hero-image absolute w-[300px] sm:w-[330px] md:w-[380px] lg:w-[400px] xl:w-[450px] 2xl:w-[497.14px] h-[300px] sm:h-[330px] md:h-[380px] lg:h-[400px] xl:h-[450px] 2xl:h-[497.14px] 2xl:top-[-3.21px] 2xl:left-[102.51px] top-0 left-[20px] md:left-[30px] lg:left-[60px] z-10">
          <Image
            src="/images/hero-img.png"
            alt="Delicious food"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Shadow Layer with Ellipses */}
        <div className="food-hero-shadow absolute w-full md:w-[500px] lg:w-[550px] 2xl:w-[619px] h-full md:h-[500px] lg:h-[550px] 2xl:h-[612px] 2xl:left-[-19px] left-[-10px] md:left-[-15px] top-0 -rotate-180">
          {/* Ellipse 1 - Inner glow */}
          <div
            className="food-hero-ellipse-1 absolute w-[350px] sm:w-[380px] md:w-[430px] lg:w-[480px] 2xl:w-[539px] h-[350px] sm:h-[380px] md:h-[430px] lg:h-[480px] 2xl:h-[540px] top-[11px] left-[20px] md:left-[35px] lg:left-[50px] 2xl:left-[61px] rounded-full opacity-80 -rotate-180"
            style={{
              background:
                "radial-gradient(circle, #CDCDCD 0%, rgba(196, 196, 196, 0) 100%)",
              mixBlendMode: "multiply",
              filter: "blur(26.21px)",
            }}
          />

          {/* Ellipse 2 - Outer glow */}
          <div
            className="food-hero-ellipse-2 absolute w-full md:w-[500px] lg:w-[550px] 2xl:w-[611px] h-full md:h-[500px] lg:h-[550px] 2xl:h-[612px] top-[11px] left-[-10px] md:left-[-15px] 2xl:left-[-19px] rounded-full opacity-70 -rotate-180"
            style={{
              background: "rgba(196, 196, 196, 0.7)",
              mixBlendMode: "multiply",
              filter: "blur(81.62px)",
            }}
          />
        </div>
      </div>
    </section>
  );
};
