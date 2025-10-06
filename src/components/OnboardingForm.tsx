import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StackLogo } from "./StackLogo";
import { StackCheckbox } from "./StackCheckbox";
import { cn } from "@/lib/utils";

interface OnboardingFormProps {
  className?: string;
}

export function OnboardingForm({ className }: OnboardingFormProps) {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState({
    bestDeals: true,
    creditCards: false,
    cashBack: false,
  });

  const handleGoalChange = (
    goal: keyof typeof selectedGoals,
    checked: boolean,
  ) => {
    setSelectedGoals((prev) => ({
      ...prev,
      [goal]: checked,
    }));
  };

  const handleBack = () => {
    // Could navigate back to landing page or previous step
    navigate("/");
  };

  const handleContinue = () => {
    // Navigate to the deals step
    console.log("Continue clicked", selectedGoals);
    navigate("/onboarding/deals");
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
        <div className="flex w-full flex-col items-center gap-8">
          {/* Title */}
          <h1 className="text-black font-sans text-2xl font-bold leading-[120%] tracking-[-0.48px] text-center">
            [TEST] What are your goals to get the most out of your money?
          </h1>

          {/* Goals Options */}
          <div className="flex flex-col items-start gap-4 w-full">
            <StackCheckbox
              id="best-deals"
              label="Learn how to get the best deals with all my savings"
              checked={selectedGoals.bestDeals}
              onChange={(checked) => handleGoalChange("bestDeals", checked)}
            />

            <StackCheckbox
              id="credit-cards"
              label="Compare different credit card options"
              checked={selectedGoals.creditCards}
              onChange={(checked) => handleGoalChange("creditCards", checked)}
            />

            <StackCheckbox
              id="cash-back"
              label="Learn about cash back deals and discounts"
              checked={selectedGoals.cashBack}
              onChange={(checked) => handleGoalChange("cashBack", checked)}
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
