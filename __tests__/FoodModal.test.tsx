import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { FoodModal } from "@/components/organisms/food-modal/FoodModal";

/**
 * Test 2: User Interaction
 * Tests button click interactions in the FoodModal component
 */
describe("FoodModal Component - User Interaction", () => {
  const mockOnClose = jest.fn();
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call onClose when cancel button is clicked", async () => {
    const mockOnClose = jest.fn();
    const mockOnSubmit = jest.fn();
    const user = userEvent.setup();

    render(
      <FoodModal
        mode="add"
        isOpen={true}
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
      />
    );

    // Find cancel button by text
    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    await user.click(cancelButton);

    // Verify onClose was called
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
