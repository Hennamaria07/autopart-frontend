import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn("w-full rounded-md border p-2 text-sm focus:ring focus:ring-blue-200", className)}
      {...props}
    />
  );
};
