export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | string;
  size?: "md" | string;
  className?: string;
  disabled?: boolean;
};
