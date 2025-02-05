import React from 'react';
import { cn } from "../../lib/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  required?: boolean;
  optional?: boolean;
  error?: boolean;
  helper?: string;
}

const Label: React.FC<LabelProps> = ({
  children,
  className,
  required = false,
  optional = false,
  error = false,
  helper,
  ...props
}) => {
  return (
    <div className="space-y-1">
      <label
        className={cn(
          "block text-sm font-medium leading-none",
          error ? "text-red-500" : "text-gray-700",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-1">
          {children}
          {required && (
            <span className="text-red-500" aria-hidden="true">
              *
            </span>
          )}
          {optional && (
            <span className="text-gray-400 text-xs font-normal">
              (Optional)
            </span>
          )}
        </span>
      </label>
      {helper && (
        <p 
          className={cn(
            "text-xs",
            error ? "text-red-500" : "text-gray-500"
          )}
        >
          {helper}
        </p>
      )}
    </div>
  );
};

// Example usage component
const LabelExample: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      {/* Standard Label */}
      <div>
        <Label htmlFor="name">Full Name</Label>
        <input
          id="name"
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      {/* Required Label */}
      <div>
        <Label htmlFor="email" required helper="We'll never share your email">
          Email Address
        </Label>
        <input
          id="email"
          type="email"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      {/* Optional Label */}
      <div>
        <Label htmlFor="phone" optional>
          Phone Number
        </Label>
        <input
          id="phone"
          type="tel"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      {/* Error Label */}
      <div>
        <Label 
          htmlFor="password" 
          required 
          error 
          helper="Password must be at least 8 characters long"
        >
          Password
        </Label>
        <input
          id="password"
          type="password"
          className="mt-1 block w-full rounded-md border border-red-300 px-3 py-2 text-red-900 placeholder-red-300"
        />
      </div>
    </div>
  );
};

export { Label, LabelExample };
export type { LabelProps };