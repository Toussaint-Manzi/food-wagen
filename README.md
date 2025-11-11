# Food Wagen

A modern food delivery application built with Next.js that allows users to browse, search, and manage meal listings.

**Live Demo:** [https://food-wagen-weld.vercel.app/](https://food-wagen-weld.vercel.app/)

## Tech Stack

- **Framework:** Next.js 16.0.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **State Management:** Redux Toolkit
- **Form Handling:** React Hook Form with Zod validation
- **HTTP Client:** Axios
- **API:** MockAPI

## Features

- Browse featured meals with pagination
- Search meals by name
- Create, update, and delete meal listings
- Toast notifications for user feedback
- Loading states with skeleton screens
- Empty state handling
- Responsive design across all devices

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository

```bash
git clone https://github.com/Toussaint-Manzi/food-wagen.git
cd food-wagen
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

```bash
cp .env.example .env
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## State Management

The application uses Redux Toolkit with two main slices:

- **food.slice** - Manages meal data, search, and pagination
- **ui.slice** - Handles UI state (toast notifications)

## API Integration

All CRUD operations are integrated with MockAPI:

- GET `/Food` - Fetch all meals
- POST `/Food` - Create new meal
- PUT `/Food/:id` - Update meal
- DELETE `/Food/:id` - Delete meal
- GET `/Food?search=` - Search meals by name

## Component Architecture

The project follows Atomic Design principles:

- **Atoms:** Button, Input, Label, Spinner, Toast, etc.
- **Molecules:** FoodCard, SearchBar, FoodFormFields
- **Organisms:** Header, Hero, FeaturedMeals, FoodModal
- **Templates:** FoodLayout

## Development Notes

- All types are organized in separate `.types.ts` files
- Form validation uses Zod schemas
- Application state is managed with Redux Toolkit using typed slices (food.slice, ui.slice), async thunks for API calls, and selectors for accessing state
- API responses are mapped to application format
- Error handling with try-catch and error states
- Loading states for better UX
