export type ButtonVariant = "green" | "black" | "transparent";
export type ButtonSize = "small" | "large";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  minWidth?: number;
  href?: string;
  onClick?: () => void;
};
