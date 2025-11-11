export interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  foodName?: string;
  className?: string;
}
