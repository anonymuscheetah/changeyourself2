import * as React from "react";

interface TooltipProps {
  children: React.ReactNode;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="relative inline-block">
        {children}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";

export const TooltipTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ children, asChild, ...props }, ref) => {
  if (asChild) {
    return React.cloneElement(children as React.ReactElement, { ref, ...props });
  }
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
});

TooltipTrigger.displayName = "TooltipTrigger";

export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`absolute z-50 px-3 py-2 text-sm bg-black/90 text-white rounded-lg -translate-x-1/2 left-1/2 -top-2 -translate-y-full ${className}`}
      {...props}
    >
      {children}
      <div className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-black/90" />
    </div>
  );
});

TooltipContent.displayName = "TooltipContent";