import * as React from "react";
import { cn } from "../../lib/utils";

interface SheetProps {
  children: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({ children }) => {
  return <div className="fixed inset-0 z-50 flex">{children}</div>;
};

interface SheetContentProps {
  children: React.ReactNode;
  side?: "left" | "right";
}

export const SheetContent: React.FC<SheetContentProps> = ({ children, side = "left" }) => {
  return (
    <div
      className={cn(
        "fixed top-0 h-full w-64 bg-white shadow-md p-4 transition-transform",
        side === "left" ? "-translate-x-full" : "translate-x-full"
      )}
    >
      {children}
    </div>
  );
};

interface SheetTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export const SheetTrigger: React.FC<SheetTriggerProps> = ({ children }) => {
  return <div className="cursor-pointer">{children}</div>;
};

interface SheetHeaderProps {
  children: React.ReactNode;
}

export const SheetHeader: React.FC<SheetHeaderProps> = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

interface SheetTitleProps {
  children: React.ReactNode;
}

export const SheetTitle: React.FC<SheetTitleProps> = ({ children }) => {
  return <h2 className="text-lg font-semibold">{children}</h2>;
};
