import React from "react";
import { OnboardingForm } from "./OnboardingForm";
import { cn } from "@/lib/utils";

interface OnboardingLayoutProps {
  className?: string;
}

export function OnboardingLayout({ className }: OnboardingLayoutProps) {
  return (
    <div
      className={cn(
        "flex w-full min-h-screen flex-col lg:flex-row items-center bg-white",
        className,
      )}
    >
      {/* Left Side - Form */}
      <div className="flex w-full lg:w-1/2 min-h-screen lg:h-full flex-col justify-center items-center px-5 lg:px-10">
        <div style={{ color: "red", fontSize: "24px" }}>
          TEST ONBOARDING LAYOUT
        </div>
        <OnboardingForm />
      </div>

      {/* Right Side - Illustration */}
      <div className="flex w-full lg:w-1/2 min-h-[50vh] lg:h-full flex-col justify-center items-center gap-stack-xl px-10 bg-stack-brand-tertiary">
        {/* Illustration */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/cbe7ea8d301f1904bfb76ead845cfd3c272fd627?width=800"
          alt="Person shopping online with various shopping-related icons and graphics"
          className="w-full max-w-[400px] h-auto aspect-square object-contain"
        />

        {/* Description Text */}
        <div className="w-full max-w-[490px] text-center">
          <p className="text-black font-sans text-xl font-normal leading-[120%]">
            Folks who shop with apps like Rakuten earn an average of $XXX/year
          </p>
          <br />
          <p className="text-black font-sans text-xl font-normal leading-[120%]">
            With Stack, you can save XX% more by stacking your credit card,
            loyalty memberships
          </p>
        </div>
      </div>
    </div>
  );
}
