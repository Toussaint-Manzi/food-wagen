import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from "axios";

import type { ApiErrorResponse } from "./config.types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://6852821e0594059b23cdd834.mockapi.io";

export const createApiClient = (baseURL?: string): AxiosInstance => {
  const client = axios.create({
    baseURL: baseURL || API_BASE_URL,
    timeout: 15000, // 15 seconds timeout
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Request interceptor
  client.interceptors.request.use(
    async (config) => {
      // You can add authentication tokens here if needed in the future
      // const token = localStorage.getItem("ACCESS_TOKEN");
      // if (token) {
      //   config.headers["Authorization"] = `Bearer ${token}`;
      // }

      return config;
    },
    (error) => {
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );

  // Response interceptor
  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      // Handle network errors
      if (!error.response) {
        const mockResponse: AxiosResponse<ApiErrorResponse> = {
          data: {
            message: "Network error. Please check your internet connection.",
            status: 500,
          },
          status: 500,
          statusText: "Network Error",
          headers: {},
          config: error.config!,
        };
        error.response = mockResponse;
      }

      // Handle specific HTTP errors
      if (error.response) {
        const status = error.response.status;
        let message = "An unexpected error occurred";

        switch (status) {
          case 400:
            message = "Bad request. Please check your input.";
            break;
          case 404:
            message = "Resource not found.";
            break;
          case 500:
            message = "Server error. Please try again later.";
            break;
          case 503:
            message = "Service unavailable. Please try again later.";
            break;
        }

        console.error(`API Error (${status}):`, message, error.response.data);
      }

      return Promise.reject(error);
    }
  );

  return client;
};

export const ApiClient = createApiClient();

// Helper function to handle API errors consistently
export const handleApiError = (error: unknown): ApiErrorResponse => {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;

    return {
      message: `${message}`,
      code: error.code,
      status,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }

  return {
    message: "An unexpected error occurred",
  };
};

// API Hook parameters for consistent error/success handling
export interface APIHookParams<T = unknown> {
  onErrorHandler?: (err: ApiErrorResponse) => void;
  onSuccessHandler?: (response?: T) => void;
}
