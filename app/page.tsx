"use client";

import { useState } from "react";
import { Header } from "@/components/organisms/header/Header";
import { Hero } from "@/components/organisms/hero/hero";
import { FeaturedMeals } from "@/components/organisms/featured-meals/FeaturedMeals";
import { Footer } from "@/components/organisms/footer/Footer";

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

  const handleEdit = (id: string) => {
    console.log("Edit food:", id);
    // TODO: Open edit modal
  };

  const handleDelete = (id: string) => {
    console.log("Delete food:", id);
    // TODO: Open delete confirmation modal
  };

  const handleLoadMore = () => {
    console.log("Load more foods");
    // TODO: Fetch more foods from API
    setHasMore(false);
  };

  return (
    <main className="food-page min-h-screen flex flex-col">
      <Hero />
      <FeaturedMeals
        foods={foods}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onLoadMore={handleLoadMore}
        hasMore={hasMore}
      />
    </main>
  );
}
