import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FoodCard } from "@/components/molecules/food-card/FoodCard";

/**
 * Test 1: Component Rendering
 * Verifies that the FoodCard component renders correctly with expected props
 */
describe("FoodCard Component - Component Rendering", () => {
  it("should render food name, price, and rating correctly", () => {
    render(
      <FoodCard
        id="1"
        name="Delicious Burger"
        rating={4.5}
        avatar="https://example.com/burger.jpg"
        restaurantName="Best Burgers"
        logo="https://example.com/logo.jpg"
        status="Open Now"
        price={12.99}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );

    // Verify food name is displayed
    expect(screen.getByText("Delicious Burger")).toBeInTheDocument();

    // Verify rating is displayed
    expect(screen.getByText("4.5")).toBeInTheDocument();

    // Verify price is displayed (with space: "$ 12.99")
    expect(screen.getByText(/\$\s*12\.99/)).toBeInTheDocument();

    // Verify status is displayed
    expect(screen.getByText(/open/i)).toBeInTheDocument();

    // Verify food image is rendered with correct alt text
    expect(screen.getByAltText("Delicious Burger")).toBeInTheDocument();
  });
});
