import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import foodReducer from "./features/food.slice";

export const store = configureStore({
  reducer: {
    food: foodReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for serializability warnings
        ignoredActions: [
          "food/fetchFoods/fulfilled",
          "food/createFood/fulfilled",
        ],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

// Infer types from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks for use throughout the app
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
