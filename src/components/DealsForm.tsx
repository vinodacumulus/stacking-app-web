import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StackLogo } from "./StackLogo";
import { StackCheckbox } from "./StackCheckbox";
import { cn } from "@/lib/utils";

interface DealsFormProps {
  className?: string;
}

export function DealsForm({ className }: DealsFormProps) {
  const navigate = useNavigate();
  const [selectedDeals, setSelectedDeals] = useState({
    travel: false,
    shopping: false,
    dining: false,
  });

  const handleDealChange = (
    deal: keyof typeof selectedDeals,
    checked: boolean,
  ) => {
    setSelectedDeals((prev) => ({
      ...prev,
      [deal]: checked,
    }));
  };

  const handleBack = () => {
    navigate("/onboarding");
  };

  const handleContinue = () => {
    console.log("Selected deals:", selectedDeals);
    navigate("/onboarding/cards");
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center flex-1 p-5",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-stack-xl flex-1 w-full max-w-[618px]">
        {/* Logo */}
        <div className="flex items-center gap-2.5 w-full">
          <StackLogo width={180} height={42} />
        </div>

        {/* Content */}
        <div className="flex w-full flex-col items-start gap-8">
          {/* Title */}
          <h1 className="text-black font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px]">
            What kind of deals are important to you?
          </h1>

          {/* Deals Options */}
          <div className="flex flex-col items-start gap-4 w-full">
            <StackCheckbox
              id="travel"
              label="Travel"
              checked={selectedDeals.travel}
              onChange={(checked) => handleDealChange("travel", checked)}
            />

            <StackCheckbox
              id="shopping"
              label="Shopping"
              checked={selectedDeals.shopping}
              onChange={(checked) => handleDealChange("shopping", checked)}
            />

            <StackCheckbox
              id="dining"
              label="Dining"
              checked={selectedDeals.dining}
              onChange={(checked) => handleDealChange("dining", checked)}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-start w-full max-w-[618px] mt-8">
        <div className="flex items-center">
          <button
            onClick={handleBack}
            className="flex px-3 py-3 justify-center items-center gap-2 rounded-stack-md text-stack-text-neutral font-sans text-base font-normal leading-[100%] hover:bg-gray-100 transition-colors"
          >
            Back
          </button>
        </div>

        <div className="flex items-center">
          <button
            onClick={handleContinue}
            className="flex px-3 py-3 justify-center items-center gap-2 rounded-stack-md border border-stack-brand bg-stack-brand text-stack-brand-foreground font-sans text-base font-normal leading-[100%] hover:bg-opacity-90 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
