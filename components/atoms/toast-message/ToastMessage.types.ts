export type ToastPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "center";

export type ToastType = "success" | "error" | "info";

export interface ToastMessageProps {
  message: string;
  messageType: ToastType;
  showToast: boolean;
  position?: ToastPosition;
  duration?: number;
  onClose?: () => void;
}
