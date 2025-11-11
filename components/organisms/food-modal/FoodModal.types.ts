import { FoodFormData } from "@/lib/validators";

export interface FoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FoodFormData) => Promise<void>;
  mode: "add" | "edit";
  initialData?: FoodFormData;
  className?: string;
}
