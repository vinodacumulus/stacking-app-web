import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StackCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export function StackCheckbox({
  id,
  label,
  checked,
  onChange,
  className,
}: StackCheckboxProps) {
  return (
    <div
      className={cn(
        "flex p-4 flex-col items-start gap-2 w-full rounded-stack-md border border-stack-border-default bg-stack-bg-default",
        className,
      )}
    >
      <div className="flex items-center gap-2 w-full">
        <div className="flex-1 text-stack-text-default font-sans text-base font-bold leading-[140%]">
          {label}
        </div>
        <div className="flex flex-col items-start w-4 h-4">
          <div className="flex items-center gap-3 w-full">
            <button
              type="button"
              onClick={() => onChange(!checked)}
              className={cn(
                "flex w-4 h-4 justify-center items-center gap-2.5 rounded-stack-sm transition-colors",
                checked
                  ? "bg-stack-brand"
                  : "bg-stack-bg-default border border-stack-border-tertiary",
              )}
            >
              {checked && (
                <Check
                  className="w-4 h-4 text-stack-brand-foreground"
                  strokeWidth={1.6}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
