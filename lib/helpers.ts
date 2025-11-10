// Helper utility functions
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
