import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  size?: "icon" | "default";
}

export const Button: React.FC<ButtonProps> = ({ className, variant = "default", size = "default", ...props }) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        variant === "ghost" && "hover:bg-gray-100",
        size === "icon" && "w-10 h-10 p-2",
        size === "default" && "px-4 py-2",
        className
      )}
      {...props}
    />
  );
};
