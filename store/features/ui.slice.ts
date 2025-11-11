import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ToastType, UiState } from "./ui.slice.types";

const initialState: UiState = {
  toast: {
    show: false,
    message: "",
    type: "info",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showToast: (
      state,
      action: PayloadAction<{ message: string; type: ToastType }>
    ) => {
      state.toast.show = true;
      state.toast.message = action.payload.message;
      state.toast.type = action.payload.type;
    },
    hideToast: (state) => {
      state.toast.show = false;
      state.toast.message = "";
    },
  },
});

export const { showToast, hideToast } = uiSlice.actions;

// Selectors
export const selectToast = (state: RootState) => state.ui.toast;

export default uiSlice.reducer;
