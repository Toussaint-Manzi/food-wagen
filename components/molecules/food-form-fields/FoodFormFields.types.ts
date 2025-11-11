import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FoodFormData } from "@/lib/validators";

export interface FoodFormFieldsProps {
  register: UseFormRegister<FoodFormData>;
  errors: FieldErrors<FoodFormData>;
  isEditMode?: boolean;
  className?: string;
}
