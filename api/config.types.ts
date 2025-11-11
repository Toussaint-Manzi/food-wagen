export interface ApiErrorResponse {
  message: string;
  code?: string;
  status?: number;
}

export type ResponseErrors =
  | "CONFLICT_ERROR"
  | "VALIDATION_ERROR"
  | "BAD_REQUEST"
  | "SERVER_ERROR"
  | "AUTHENTICATION_ERROR"
  | "NOT_FOUND"
  | "FORBIDDEN";

export interface ApiResponse<T = unknown> {
  status: number;
  message: string;
  data: T;
  error?: ResponseErrors;
}

// Food API Types
export interface FoodApiResponse {
  createdAt: string;
  name: string;
  avatar: string;
  rating: string;
  open: boolean;
  logo: string;
  price?: string;
  Price?: string;
  id: string;
}

export interface CreateFoodPayload {
  name: string;
  avatar: string;
  rating: string;
  open: boolean;
  logo: string;
}

export interface UpdateFoodPayload extends CreateFoodPayload {
  id: string;
}
