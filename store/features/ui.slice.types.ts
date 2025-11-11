export type ToastType = "success" | "error" | "info";

export interface ToastState {
  show: boolean;
  message: string;
  type: ToastType;
}

export interface UiState {
  toast: ToastState;
}
