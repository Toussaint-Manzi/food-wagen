/// <reference types="@testing-library/jest-dom" />

import "@testing-library/jest-dom";

// Mock API config
jest.mock("@/api/config", () => require("./__mocks__/api-config"));
